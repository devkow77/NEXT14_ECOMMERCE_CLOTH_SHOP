import { Container, NotFoundProducts, ProductCard } from "@/components/index";
import React from "react";
import { GraphQLClient } from "graphql-request";
import { Product } from "@/lib/interface";

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string,
);

const Premieres = async () => {
  const query = `
    query MyQuery {
			products(
        orderBy: publishedAt_ASC
      )
      {
				id
				images {
					url
				}
				price
				slug
				name
        productType {
          name
        }
			}
		}
  `;
  const { products }: { products: Product[] } = await hygraph.request(query);

  return (
    <main>
      <Container className="py-12">
        <h2 className="mb-4 text-2xl font-black lg:text-3xl">
          PREMIERES <br /> <span className="text-red-600">PRODUCTS</span>
        </h2>
        <p className="mb-4 text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
          Check out our latest releases in the Premieres section, featuring
          exclusive first looks at upcoming hits. Be the first to experience the
          newest movies and shows before anyone else.
        </p>
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

export default Premieres;
