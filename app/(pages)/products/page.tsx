import React from "react";
import { Container, ProductsFilter } from "@/components/index";
import Link from "next/link";
import { Product } from "@/lib/interface";
import Image from "next/image";
import { GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string,
);

const Products = async ({ searchParams }: { searchParams: any }) => {
  const { products }: { products: Product[] } = await hygraph.request(`
	query MyQuery {
    products(
      orderBy: ${searchParams.price ? searchParams.price : "publishedAt_DESC"},
      where: {
        productType: {_search: "${searchParams.type ? searchParams.type : ""}"},
        productGender: {_search: "${searchParams.gender ? searchParams.gender : ""}"}
      }
    )
    {
      id
      slug
      name
      price
      images {
        url
      }
      productGender {
        name
        value
      }
      productType {
        name
        value
      }
    }
  }
	`);

  return (
    <main>
      <Container className="py-12">
        <h2 className="mb-4 text-2xl font-black lg:text-3xl">
          ALL <br /> <span className="text-red-600">PRODUCTS</span>
        </h2>
        <p className="mb-4 text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
          Check out our latest releases in the Premieres section, featuring
          exclusive first looks at upcoming hits. Be the first to experience the
          newest movies and shows before anyone else.
        </p>
        <ProductsFilter />
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {products.map(
            ({ slug, images, name, price }: Product, index: number) => (
              <div key={index}>
                <Link
                  href={`/products/${slug}`}
                  className="relative mb-4 block aspect-square rounded-xl bg-white/5"
                >
                  <Image
                    src={images[0].url}
                    alt={name}
                    width={400}
                    height={400}
                    className="absolute h-full w-full rounded-xl object-cover object-center"
                  />
                  <div className="absolute h-full w-full rounded-xl bg-black/40 duration-300 hover:bg-black/0" />
                </Link>
                <div className="text-xs leading-5 md:text-sm">
                  <h3 className="font-semibold">{name}</h3>
                  <p>Price: ${price}</p>
                </div>
              </div>
            ),
          )}
        </section>
      </Container>
    </main>
  );
};

export default Products;
