"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container, PremieresCarousel } from "@/components/index";
import { useRef } from "react";
import Link from "next/link";

const Premieres = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const containerOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 1],
  );

  const itemCount = 6; // Liczba elementów w siatce
  const itemsOpacity = Array.from({ length: itemCount }).map((_, index) =>
    useTransform(scrollYProgress, [0, 1 / (index + 2), 1], [0, 0, 1]),
  );

  return (
    <motion.article
      className="relative z-20 h-[200vh] bg-black"
      ref={containerRef}
    >
      {/* <motion.div
        className="fixed top-1/2 w-full -translate-y-1/2"
        style={{ opacity: containerOpacity }}
      >
        <Container className="space-y-12">
          <section>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="mb-2 text-xl font-bold lg:text-2xl">
                  The Coolest Premieres
                </h2>
                <p className="text-sm opacity-80 lg:text-base">
                  Below is a list of the best premieres in our shop.
                </p>
              </div>
              <Link href="/products" className="text-xs md:text-sm">
                View all products
              </Link>
            </div>
            <div className="grid h-[500px] grid-cols-2 gap-4 md:grid-cols-4">
              {Array.from({ length: itemCount }).map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl bg-white/5"
                  style={{ opacity: itemsOpacity[index] }}
                />
              ))}
            </div>
          </section>
        </Container>
      </motion.div> */}
    </motion.article>
  );
};

export default Premieres;
