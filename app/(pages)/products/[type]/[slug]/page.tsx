import React from "react";
import {
  Container,
  SimiliarProductsCarousel,
  ProductCheckout,
  ProductGallery,
  ProductGuarantees,
  ProductQuantity,
  ProductSize,
} from "@/components/index";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string,
);

const createTitle = (title: string) => {
  return title.split("-").join(" ").toUpperCase();
};

const UniqueProduct = async ({ params: { type, slug } }: any) => {
  const query = `
   query MyQuery
   {
      product(
        where: {
          slug: "${type}/${slug}"
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
        introduction
        productGender {
          name
        }
        productType{
          name
        }
        productSizes{
          name
          stripeApi
        }
      }
      products(
        where: {
          slug_not: "${slug}",
          AND: {
            productType: {
              _search: "${type}"
            }
          }
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
  `;

  const { product, products: similiarProducts }: any =
    await hygraph.request(query);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main>
      <Container className="space-y-6 py-12">
        <ProductGallery images={product.images} name={product.name} />
        <section>
          <h3 className="text-sm">
            #{String(type).toUpperCase()} #
            {product.productGender.name.toUpperCase()}
          </h3>
          <h2 className="my-1 text-2xl font-black lg:text-3xl">
            {createTitle(slug)}
          </h2>
          <h3 className="mb-4">Price: ${product.price}</h3>
          <p className="mb-4 text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
            {product.introduction}
          </p>
        </section>
        <section>
          <h3 className="mb-2 text-sm font-semibold lg:text-base">
            Size of product
          </h3>
          <ProductSize sizes={product.productSizes} />
        </section>
        <section>
          <h3 className="mb-2 text-sm font-semibold lg:text-base">
            Quantity of product
          </h3>
          <ProductQuantity />
        </section>
        <section>
          <h3 className="mb-2 text-sm font-semibold">
            Guarantees for our clients
          </h3>
          <ProductGuarantees />
        </section>
        <section>
          <h3 className="mb-2 text-sm font-semibold lg:text-base">
            How to care
          </h3>
          <p className="mb-4 text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
            {product.introduction}
          </p>
        </section>
        <ProductCheckout product={product} />
        <section>
          <h3 className="mb-4 text-sm font-semibold lg:text-base">
            Similiar products
          </h3>
          <SimiliarProductsCarousel products={similiarProducts} />
        </section>
        <section>
          <p className="text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
            If ordered products doesnt meet your expectations please contact
            with support by email below. Moreover if you are not something sure
            check our faq with the most popular questions or contact form <br />
            <Link
              href="/contact"
              className="font-semibold duration-200 hover:text-red-500"
            >
              Contact with me
            </Link>{" "}
            or{" "}
            <Link
              href="/faq"
              className="font-semibold duration-200 hover:text-red-500"
            >
              Faq
            </Link>
          </p>
        </section>
      </Container>
    </main>
  );
};

export default UniqueProduct;
