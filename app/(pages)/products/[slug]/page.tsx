import React from "react";
import {
  Container,
  NotFoundProducts,
  PremieresCarousel,
  ProductCard,
  ProductCheckout,
  ProductGuarantees,
  ProductQuantity,
  ProductSize,
} from "@/components/index";
import Image from "next/image";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string,
);

const createTitle = (title: string) => {
  return title.split("-").join(" ").toUpperCase();
};

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const UniqueProduct = async ({ params: { slug } }: any) => {
  const query = `
   query MyQuery
   {
      product(
        where: {
          slug: "${slug}"
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
        description
        productGender {
          name
        }
        productType{
          name
        }
      }
      products(
        where: {
          slug_not: "${slug}",
          AND: {
            productType: {
              _search: "hoodie"
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

  return (
    <main>
      <Container className="space-y-6 py-12">
        {/* Image Gallery */}
        <section className="max-w-sm">
          <div className="relative mb-3 aspect-square scale-95 rounded-xl bg-white/5">
            <Image
              src={product.images[0].url}
              alt={product.name}
              width={350}
              height={350}
              className="absolute h-full w-full rounded-xl object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="relative aspect-square rounded-xl bg-white/10 ">
              <Image
                src={product.images[0].url}
                alt={product.name}
                width={100}
                height={100}
                className="absolute h-full w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="relative aspect-square rounded-xl bg-white/10 ">
              <Image
                src={product.images[1].url}
                alt={product.name}
                width={100}
                height={100}
                className="absolute h-full w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="relative aspect-square rounded-xl bg-white/10 ">
              <Image
                src={product.images[2].url}
                alt={product.name}
                width={100}
                height={100}
                className="absolute h-full w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="relative aspect-square rounded-xl bg-white/10 ">
              <Image
                src={product.images[3].url}
                alt={product.name}
                width={100}
                height={100}
                className="absolute h-full w-full rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </section>
        {/* Product Informations */}
        <section>
          <h3 className="text-sm">#Hoodie #Men</h3>
          <h2 className="my-1 text-2xl font-black lg:text-3xl">
            {createTitle(slug)}
          </h2>
          <h3 className="mb-4">Price: $39.99</h3>
          <p className="mb-4 text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis quae illum sit quibusdam inventore. Quisquam!
          </p>
        </section>
        {/* Size */}
        <section>
          <h3 className="mb-2 text-sm font-semibold">Size of product</h3>
          <ProductSize sizes={sizes} />
        </section>
        {/* Quantity */}
        <section>
          <h3 className="mb-2 text-sm font-semibold">Quantity of product</h3>
          <ProductQuantity />
        </section>
        {/* Guarantess */}
        <section>
          <h3 className="mb-2 text-sm font-semibold">
            Guarantees for our clients
          </h3>
          <ProductGuarantees />
        </section>
        {/* Description Long Version */}
        <section>
          <h3 className="mb-2 text-sm font-semibold">Product description</h3>
          <p className="mb-4 text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            perspiciatis odio consequuntur cum atque iste asperiores illo
            ratione, cumque ad temporibus corporis animi minus similique culpa
            neque numquam sunt harum nemo necessitatibus? Nemo reiciendis,
            doloribus accusamus nostrum assumenda fuga error sequi? Eos corrupti
            architecto maxime consequuntur enim quo aliquid? Exercitationem
            repellendus dolorem dolor et ab dolores ea! Voluptates, eaque.
            Repellendus.
          </p>
        </section>
        {/* Buy and Add to cart */}
        <ProductCheckout />
        {/* Similiar Product By Category */}
        <section>
          <h3 className="mb-4 text-sm font-semibold">Similiar products</h3>
          <PremieresCarousel />
        </section>
        {/* Help and support */}
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
