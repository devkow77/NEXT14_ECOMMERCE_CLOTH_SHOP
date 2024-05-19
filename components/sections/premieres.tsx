"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/index";

const Premieres = () => {
  const premieresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: premieresRef,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <motion.article
      className="relative z-50 h-[100vh] w-full bg-black"
      ref={premieresRef}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900"
        style={{ scale }}
      ></motion.div>
    </motion.article>
  );
};

export default Premieres;
