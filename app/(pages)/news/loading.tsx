import { Container } from "@/components/index";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const NewsLoading = () => {
  return (
    <main>
      <Container className="py-12">
        <Skeleton className="mb-4 h-16 w-52"></Skeleton>
        <Skeleton className="mb-4 h-16"></Skeleton>
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index: number) => (
            <Skeleton
              className="mb-4 aspect-video max-h-60 "
              key={index}
            ></Skeleton>
          ))}
        </section>
      </Container>
    </main>
  );
};

export default NewsLoading;
