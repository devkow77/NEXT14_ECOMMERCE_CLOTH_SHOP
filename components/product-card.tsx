import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Product } from "@/lib/interface";

const ProductCard = ({
  product: { slug, images, name, price },
}: {
  product: Product;
}) => {
  return (
    <div>
      <Link
        href={`/products/${slug}`}
        className="relative mb-4 block aspect-square rounded-xl bg-white/5"
      >
        <Image
          src={images[0].url}
          alt={name}
          width={400}
          height={400}
          className="absolute h-full w-full rounded-xl object-cover object-center"
        />
        <div className="absolute h-full w-full rounded-xl bg-black/20 duration-300 hover:bg-black/0 dark:bg-black/40 dark:hover:bg-black/0" />
      </Link>
      <div className="text-xs leading-5 md:text-sm">
        <h3 className="font-semibold">{name}</h3>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
