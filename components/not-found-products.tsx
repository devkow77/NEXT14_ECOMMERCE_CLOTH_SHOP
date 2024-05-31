import { Shirt } from "lucide-react";
import React from "react";

const NotFoundProducts = () => {
  return (
    <div className="col-span-2 my-4 flex w-full items-center justify-center sm:col-span-3 md:col-span-4 lg:my-12">
      <div className="flex flex-col items-center gap-2 text-center text-sm lg:text-base">
        <Shirt size={60} className="lg:size-24" />
        <h3 className="font-bold">Not found products!</h3>
        <p className="opacity-80">
          Looks like there are no products in this category yet or try to change
          filters.
        </p>
      </div>
    </div>
  );
};

export default NotFoundProducts;
