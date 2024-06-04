"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Image {
  url: string;
}

type Props = {
  images: Image[];
  name: string;
};

const ProductGallery = ({ images, name }: Props) => {
  const [activeImage, setActiveImage] = useState<string>(images[0].url);

  return (
    <section className="max-w-sm">
      <div className="relative mb-3 aspect-square rounded-xl bg-white/5">
        <Image
          src={activeImage}
          alt={name}
          width={500}
          height={500}
          className="absolute h-full w-full rounded-xl object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image: Image, index: number) => (
          <div
            onClick={() => setActiveImage(image.url)}
            className="relative aspect-square cursor-pointer rounded-xl bg-white/10"
            key={index}
          >
            <Image
              src={image.url}
              alt={name}
              width={100}
              height={100}
              className="absolute h-full w-full rounded-xl object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
