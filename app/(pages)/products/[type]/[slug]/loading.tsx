import { Container } from "@/components/index";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const UniqueProductLoading = () => {
  return (
    <main>
      <Container className="space-y-6 py-12">
        <section className="max-w-sm">
          <Skeleton className="mb-3 aspect-square"></Skeleton>
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, index: number) => (
              <Skeleton
                className="relative aspect-square"
                key={index}
              ></Skeleton>
            ))}
          </div>
        </section>
        <section>
          <Skeleton className="h-6 w-24"></Skeleton>
          <Skeleton className="my-2 h-12 w-96"></Skeleton>
          <Skeleton className="mb-4 h-6 w-24"></Skeleton>
          <Skeleton className="mb-4 h-32 w-full"></Skeleton>
        </section>
        <section>
          <Skeleton className="mb-2 h-6 w-24"></Skeleton>
          <Skeleton className="h-16 w-40"></Skeleton>
        </section>
        <section>
          <Skeleton className="mb-2 h-6 w-24"></Skeleton>
          <Skeleton className="h-16 w-40"></Skeleton>
        </section>
        <section>
          <Skeleton className="mb-2 h-6 w-44"></Skeleton>
          <Skeleton className="h-60 w-40"></Skeleton>
        </section>
        <section>
          <Skeleton className="mb-2 h-6 w-24"></Skeleton>
          <Skeleton className="mb-4 h-40 w-full"></Skeleton>
        </section>
        <section className="flex items-center gap-4">
          <Skeleton className="h-12 w-24"></Skeleton>
          <Skeleton className="h-12 w-32"></Skeleton>
        </section>
        <section>
          <Skeleton className="mb-2 h-6 w-24"></Skeleton>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index: number) => (
              <Skeleton key={index} className="aspect-square"></Skeleton>
            ))}
          </div>
        </section>
        <section>
          <Skeleton className="h-24 w-full"></Skeleton>
        </section>
      </Container>
    </main>
  );
};

export default UniqueProductLoading;
