import { Container } from "@/components/index";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ContactLoading = () => {
  return (
    <main>
      <Container className="py-12">
        <Skeleton className="mb-4 h-14 w-36 md:h-20"></Skeleton>
        <Skeleton className="mb-6 h-20 md:h-8"></Skeleton>
        <div className="mb-6 md:flex md:flex-row md:items-center md:gap-6">
          <Skeleton className="mb-4 aspect-video max-h-72 w-full min-w-80 md:mb-0"></Skeleton>
          <div className="w-full space-y-6">
            <div>
              <Skeleton className="mb-2 h-6 w-16"></Skeleton>
              <Skeleton className="h-12"></Skeleton>
            </div>
            <div>
              <Skeleton className="mb-2 h-6 w-16"></Skeleton>
              <Skeleton className="h-40"></Skeleton>
            </div>
            <Skeleton className="h-12"></Skeleton>
          </div>
        </div>
        <Skeleton className="mb-4 h-8 max-w-xl"></Skeleton>
        <Skeleton className="h-12 w-32"></Skeleton>
      </Container>
    </main>
  );
};

export default ContactLoading;
