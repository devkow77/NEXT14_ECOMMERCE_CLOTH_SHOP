"use client";

import {
  Introduction,
  Opening,
  Cards,
  Premieres,
} from "@/components/sections/index";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.5]);

  return (
    <main>
      <header className="relative h-[250vh] w-full bg-black" ref={headerRef}>
        <motion.video
          autoPlay
          muted
          loop
          className="fixed left-0 top-0 z-0 h-screen w-full object-cover"
          style={{ opacity }}
        >
          <source src="/background3.mp4" type="video/mp4" />
        </motion.video>
        <Opening />
        <Introduction />
      </header>
      <Cards />
      <article className="relative z-50 h-[100vh] w-full bg-zinc-950"></article>
    </main>
  );
}
