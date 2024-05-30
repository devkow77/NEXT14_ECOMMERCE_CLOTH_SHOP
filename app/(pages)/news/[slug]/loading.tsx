import { Container } from "@/components/index";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const UniqueNewsLoading = () => {
  return (
    <main>
      <Container className="py-12">
        <Skeleton className="mb-2 h-20 w-96"></Skeleton>
        <Skeleton className="mb-4 h-6 w-44"></Skeleton>
        <Skeleton className="mb-8 aspect-video max-h-[400px]"></Skeleton>
        <Skeleton className="mb-12 h-[500px]"></Skeleton>
        <Skeleton className="mb-4 h-6 w-40"></Skeleton>
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index: number) => (
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

export default UniqueNewsLoading;
