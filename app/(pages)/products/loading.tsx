import { Container } from "@/components/index";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductsLoading = () => {
  return (
    <main>
      <Container className="py-12">
        <Skeleton className="mb-4 h-16 w-52"></Skeleton>
        <Skeleton className="mb-4 h-16"></Skeleton>
        <section className="mb-12 space-y-6 md:flex md:items-end md:gap-8">
          <div>
            <Skeleton className="mb-2 h-6 w-16"></Skeleton>
            <div className="flex flex-wrap items-center gap-2">
              {Array.from({ length: 4 }).map(() => (
                <Skeleton className="h-4 w-12"></Skeleton>
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="mb-2 h-6 w-16"></Skeleton>
            <div className="flex flex-wrap items-center gap-2">
              {Array.from({ length: 6 }).map(() => (
                <Skeleton className="h-4 w-12"></Skeleton>
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="mb-2 h-6 w-16"></Skeleton>
            <div className="flex h-4 flex-wrap items-center gap-2">
              {Array.from({ length: 2 }).map(() => (
                <Skeleton className="h-4 w-12"></Skeleton>
              ))}
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map(() => (
            <div>
              <Skeleton className="mb-4 aspect-square"></Skeleton>
              <Skeleton className="mb-2 h-6 w-40"></Skeleton>
              <Skeleton className="h-6 w-24"></Skeleton>
            </div>
          ))}
        </section>
      </Container>
    </main>
  );
};

export default ProductsLoading;
