import { Container } from "@/components/index";
import React from "react";
import { GraphQLClient } from "graphql-request";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

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

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string,
);

const UniqueNews = async ({ params: { slug } }: Props) => {
  const { news, newsAll }: { news: News; newsAll: News[] } =
    await hygraph.request(`
       query MyQuery {
            news(where: {slug: "${slug}"}) {
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
            newsAll(
                where: {slug_not: "${slug}"}
            ) {
                slug
                image {
                url
                }
                title
                date
            }
        }
    `);

  return (
    <main>
      <Container className="space-y-12 py-12">
        <section>
          <h1 className="mb-1 max-w-lg text-2xl font-black lg:mb-2 lg:text-3xl">
            {news.title}
          </h1>
          <p className="mb-4 text-sm font-semibold lg:text-base">
            Created at: {new Date(news.date).toLocaleDateString()} 📅
          </p>
          <div className="relative mb-8 aspect-video max-h-[400px] rounded-xl bg-white/5">
            <Image
              src={news.image.url}
              alt={news.title}
              width={800}
              height={400}
              className="absolute h-full w-full rounded-xl object-cover object-center"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: news.content.html }}
            className="text-sm leading-6 lg:text-base lg:leading-8"
          />
        </section>
        <section>
          <h3 className="mb-4 font-bold lg:text-lg">Similiar News</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
                  <div className="absolute h-full w-full rounded-xl bg-black/70 duration-300 hover:opacity-0">
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
          </div>
        </section>
      </Container>
    </main>
  );
};

export default UniqueNews;
