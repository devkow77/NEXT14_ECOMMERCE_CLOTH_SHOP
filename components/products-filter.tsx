"use client";

import React, { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Filter } from "@/lib/interface";

interface SelectedFilters {
  gender?: string;
  type?: string;
  price?: string;
}

const gender: Filter[] = [
  {
    name: "All",
    value: "",
  },
  {
    name: "Men",
    value: "men",
  },
  {
    name: "Women",
    value: "women",
  },
  {
    name: "Kids",
    value: "kids",
  },
  {
    name: "Unisex",
    value: "unisex",
  },
];

const products: Filter[] = [
  {
    name: "All",
    value: "",
  },
  {
    name: "Hoodie",
    value: "hoodie",
  },
  {
    name: "T-Shirt",
    value: "t-shirt",
  },
  {
    name: "Jacket",
    value: "jacket",
  },
  {
    name: "Pants",
    value: "pants",
  },
  {
    name: "Shoes",
    value: "shoes",
  },
];

const price: Filter[] = [
  {
    name: "Low - High",
    value: "price_ASC",
  },
  {
    name: "High - Low",
    value: "price_DESC",
  },
];

const ProductsFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    gender: query.get("gender") || "",
    type: query.get("type") || "",
    price: query.get("price") || "",
  });

  const updateFilter = (key: any, value: any) => {
    const newFilters = { ...selectedFilters, [key]: value };
    setSelectedFilters(newFilters);
    router.push(`${pathname}?${new URLSearchParams(newFilters).toString()}`);
  };

  return (
    <section className="mb-12 space-y-6 text-sm md:flex md:items-end md:gap-8 lg:text-base">
      <div>
        <h3 className="mb-2 font-semibold">Gender</h3>
        <div className="flex flex-wrap items-center gap-2">
          {gender.map(({ name, value }, index: number) => (
            <div
              onClick={() => updateFilter("gender", value)}
              key={index}
              className={`${selectedFilters.gender === value && "font-semibold text-red-600"} cursor-pointer`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Products</h3>
        <div className="flex flex-wrap items-center gap-2">
          {products.map(({ name, value }, index: number) => (
            <div
              onClick={() => updateFilter("type", value)}
              key={index}
              className={`${selectedFilters.type === value && "font-semibold text-red-600"} cursor-pointer`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Price</h3>
        <div className="flex flex-wrap items-center gap-2">
          {price.map(({ name, value }, index: number) => (
            <div
              onClick={() => updateFilter("price", value)}
              key={index}
              className={`${selectedFilters.price === value && "font-semibold text-red-600"} cursor-pointer`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsFilter;
