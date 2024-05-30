import { Container } from "@/components/index";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SizesLoading = () => {
  return (
    <main>
      <Container className="py-12">
        <Skeleton className="mb-4 h-24 w-56"></Skeleton>
        <Skeleton className="mb-8 h-16 max-w-2xl"></Skeleton>
        <div className="space-y-10">
          {Array.from({ length: 3 }).map((_, index: number) => (
            <div>
              <Skeleton className="mb-4 h-8 w-48"></Skeleton>
              <Skeleton className="mb-4 h-80"></Skeleton>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default SizesLoading;
