import { Container } from "@/components/index";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const FaqLoading = () => {
  return (
    <main>
      <Container className="py-12">
        <Skeleton className="mb-8 h-32 w-72"></Skeleton>
        <div className="mb-8 space-y-6">
          {Array.from({ length: 8 }).map((_, index: number) => (
            <Skeleton className="h-12" key={index}></Skeleton>
          ))}
        </div>
        <Skeleton className="mb-4 h-16"></Skeleton>
        <Skeleton className="h-12 w-40"></Skeleton>
      </Container>
    </main>
  );
};

export default FaqLoading;
