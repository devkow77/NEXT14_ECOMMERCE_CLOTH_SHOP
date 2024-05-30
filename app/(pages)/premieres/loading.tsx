import { Container } from "@/components/index";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PremieresLoading = () => {
  return (
    <main>
      <Container className="py-12">
        <Skeleton className="mb-4 h-16 w-52"></Skeleton>
        <Skeleton className="mb-4 h-16"></Skeleton>
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index: number) => (
            <div>
              <Skeleton className="mb-4 aspect-square" key={index}></Skeleton>
              <Skeleton className="mb-2 h-6 w-40" key={index}></Skeleton>
              <Skeleton className="h-6 w-24" key={index}></Skeleton>
            </div>
          ))}
        </section>
      </Container>
    </main>
  );
};

export default PremieresLoading;
