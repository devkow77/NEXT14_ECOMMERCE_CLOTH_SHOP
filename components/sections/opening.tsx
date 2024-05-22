"use client";

import { useRef } from "react";
import { Container } from "@/components/index";
import { motion, useScroll, useTransform } from "framer-motion";

const Opening = () => {
  const openingRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: openingRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [1, 0.2, 0.1, 0],
  );

  return (
    <motion.article
      className="relative z-50 flex h-[100vh] flex-col items-start justify-center"
      ref={openingRef}
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="absolute left-0 top-0  w-full bg-red-500 p-3 text-center text-sm">
        Unlock savings now! Enter code{" "}
        <span className="font-semibold">CODE10</span> at checkout before
        01.12.2024 to enjoy an exclusive 10% discount on your purchase. Don't
        miss out on this limited-time offer!
      </div>
      <Container className="w-full">
        <div className="space-y-4">
          <h1 className="text-4xl font-black md:text-7xl">
            STEP <span className="text-red-500">UP</span>
            <br /> YOUR STYLE
          </h1>
          <h2 className="max-w-xl text-sm leading-6 opacity-80 md:text-base">
            Discover the latest trends and timeless classics for every occasion.
            Shop now and transform your wardrobe with our high-quality, stylish
            pieces!
          </h2>
          <div className="text-sm font-semibold md:text-base">
            Scroll website to discover more!
          </div>
        </div>
      </Container>
    </motion.article>
  );
};

export default Opening;
