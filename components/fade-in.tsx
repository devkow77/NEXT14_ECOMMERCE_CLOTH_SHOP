"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FadeIn = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, marginTop: 50 }}
      whileInView={{ opacity: 1, marginTop: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
