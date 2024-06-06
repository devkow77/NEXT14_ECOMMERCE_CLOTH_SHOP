import { Container, FadeIn, ProductCard } from "@/components/index";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { Product } from "@/lib/interface";

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string,
);

const Premieres = async () => {
  const { products }: { products: Product[] } = await hygraph.request(`
		query MyQuery {
			products(first: 6) {
				images {
				  url
				}
        slug
        name
				price
			}
		}
	`);

  return (
    <article className="relative z-20 h-[140vh] bg-zinc-950">
      <FadeIn className="absolute top-1/2 w-full -translate-y-1/2">
        <Container className="space-y-12">
          <section>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="mb-2 text-xl font-bold lg:text-2xl">
                  The Coolest Premieres
                </h2>
                <p className="max-w-3xl text-sm opacity-80 lg:text-base">
                  Below is a list of the last 6 premieres by date in our shop,
                  featuring the latest and most popular products available.
                </p>
              </div>
              <Link
                href="/products"
                className="text-xs hover:underline md:text-sm"
              >
                View all products
              </Link>
            </div>
            <div className="grid h-[700px] grid-cols-2 gap-4 md:grid-cols-4">
              {products.map((product: Product) => (
                <ProductCard product={product} />
              ))}
            </div>
          </section>
        </Container>
      </FadeIn>
    </article>
  );
};

export default Premieres;
