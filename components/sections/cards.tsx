"use client";

import { useRef } from "react";
import { Container } from "@/components/index";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Card {
  name: string;
  image: string;
  href: string;
}

const cards: Card[] = [
  {
    name: "MEN",
    image: "/men.jpg",
    href: "/products/men",
  },
  {
    name: "WOMEN",
    image: "/women.jpg",
    href: "/products/women",
  },
  {
    name: "KIDS",
    image: "/kids.jpg",
    href: "/products/kids",
  },
];

const Cards = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], [0, 1, 0, 0]);

  return (
    <motion.article
      className="relative z-50 flex h-[150vh] flex-col items-center justify-center"
      ref={cardsRef}
      style={{ opacity }}
    >
      <Container>
        <h1 className="mb-6 max-w-xl text-3xl font-black md:text-5xl">
          CHOOSE YOUR <span className="text-slate-400">GENDER</span>
        </h1>
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cards.map(({ name, image, href }: Card) => (
            <Link
              href={href}
              className="relative h-[200px] rounded-xl sm:h-[300px] md:h-[400px]"
            >
              <Image
                src={image}
                alt={name}
                width={400}
                height={400}
                className="absolute h-full w-full rounded-xl object-cover"
              />
              <motion.div
                className="absolute z-10 flex h-full w-full items-center justify-center rounded-xl bg-black/40 text-xl font-extrabold sm:text-3xl md:text-4xl"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
              >
                {name}
              </motion.div>
            </Link>
          ))}
        </section>
      </Container>
    </motion.article>
  );
};

export default Cards;
