import React from "react";
import {
  Container,
  NotFoundProducts,
  ProductCard,
  ProductsFilter,
} from "@/components/index";
import { Product } from "@/lib/interface";
import { GraphQLClient } from "graphql-request";

type Props = {
  searchParams: {
    gender: string;
    type: string;
    price: string;
  };
};

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string,
);

function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const Products = async ({ searchParams }: Props) => {
  const query = `
    query MyQuery {
      products(
        first: 500,
        orderBy: ${searchParams.price ? searchParams.price : "publishedAt_DESC"},
        where: {
          productType: {_search: "${searchParams.type ? searchParams.type : ""}"},
          ${searchParams.gender ? `productGender: { name: "${capitalizeFirstLetter(searchParams.gender)}" }` : ""}
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
  `;
  const { products }: { products: Product[] } = await hygraph.request(query);

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
          {products.length ? (
            products.map((product: Product, index: number) => (
              <ProductCard product={product} key={index} />
            ))
          ) : (
            <NotFoundProducts />
          )}
        </section>
      </Container>
    </main>
  );
};

export default Products;
