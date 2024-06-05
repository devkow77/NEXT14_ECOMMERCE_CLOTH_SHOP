import { Container } from "@/components/index";
import React from "react";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import Image from "next/image";

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string,
);

interface News {
  slug: string;
  image: {
    url: string;
  };
  title: string;
  content: {
    html: any;
  };
  date: string;
}

const News = async () => {
  const query = `
    query MyQuery {
			newsAll {
				slug
				image {
				  url
				}
				title
				content {
					html
				}
				date
			}
		}
  `;

  const { newsAll }: { newsAll: News[] } = await hygraph.request(query);

  return (
    <main>
      <Container className="py-12">
        <h2 className="mb-4 text-2xl font-black lg:text-3xl">
          FENDIE <br /> SHOP <span className="text-red-600"> NEWS</span>
        </h2>
        <p className="mb-4 text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
          Explore the latest trends and arrivals in our fashion-forward news
          section for our online clothing store. Stay informed about exclusive
          releases, style tips, and exciting promotions as we curate a dynamic
          shopping experience tailored just for you.
        </p>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {newsAll.map((news: News, index: number) => (
            <Link href={`/news/${news.slug}`} key={index}>
              <div className="relative aspect-video max-h-60 rounded-xl bg-white/5">
                <Image
                  src={news.image.url}
                  alt={news.title}
                  className="absolute h-full w-full rounded-xl object-cover object-center"
                  width={400}
                  height={400}
                />
                <div className="absolute h-full w-full rounded-xl bg-black/50 duration-300 hover:opacity-0 ">
                  <div className="absolute bottom-3 left-4 text-xs lg:text-sm">
                    <h3 className="font-semibold">{news.title}</h3>
                    <p className="opacity-80">
                      {new Date(news.date).toDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </Container>
    </main>
  );
};

export default News;
