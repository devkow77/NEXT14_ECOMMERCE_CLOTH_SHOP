import { Container, ProductsFilter } from "@/components/index";
import React from "react";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/interface";

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string,
);

const GenderProducts = async ({ params }: { params: any }) => {
  const { products }: { products: any } = await hygraph.request(`
	query MyQuery {
        products(
            orderBy: ${params.price ? params.price : "publishedAt_DESC"},
            where: {
                productType: {_search: "${params.type ? params.type : ""}"},
                productGender: {_search: "${params.slug}"}
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
        }
    }
  `);

  return (
    <main>
      <Container className="py-12">
        <h2 className="mb-4 text-2xl font-black lg:text-3xl">
          {params.slug.toUpperCase()} <br />{" "}
          <span className="text-red-600">PRODUCTS</span>
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

export default GenderProducts;
