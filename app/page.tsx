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
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.57, 0.9, 1],
    [0, 1, 0, 0],
  );

  return (
    <main>
      <header
        className="relative h-[350vh] w-full bg-gradient-to-tr from-black to-slate-800"
        ref={headerRef}
      >
        <motion.video
          autoPlay
          muted
          loop
          className="fixed left-0 top-0 z-0 h-screen w-full object-cover"
          style={{ opacity }}
        >
          <source src="/background.mp4" type="video/mp4" />
        </motion.video>
        <Opening />
        <Introduction />
        <Cards />
      </header>
      {/* <Premieres /> */}
    </main>
  );
}
