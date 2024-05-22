import { Container, FadeIn } from "@/components/index";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import Image from "next/image";

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string,
);

const Premieres = async () => {
  const { products }: any = await hygraph.request(`
		query MyQuery {
			products(orderBy: publishedAt_ASC, first: 6) {
				id
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
    <article className="relative z-20 h-[110vh] bg-zinc-950">
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
            <div className="grid h-[500px] grid-cols-2 gap-4 md:grid-cols-4">
              {products.map(({ id, name, images, price, slug }: any) => (
                <div key={id} className="relative rounded-xl bg-white/5">
                  <Image
                    src={images[0].url}
                    alt={name}
                    width={500}
                    height={500}
                    className="absolute h-full w-full rounded-xl object-cover object-center"
                  />
                  <Link
                    href={`/products/${slug}`}
                    className="absolute flex h-full w-full items-end rounded-xl bg-black/70 px-4 pb-2 duration-500 hover:opacity-0"
                  >
                    <div className="text-xs lg:text-base">
                      <h3 className="font-semibold">{name}</h3>
                      <p className="opacity-80">Price: ${price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </FadeIn>
    </article>
  );
};

export default Premieres;
