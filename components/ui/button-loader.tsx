"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ButtonLoader() {
  const circleVariants = {
    start: {
      rotate: 0,
    },
    end: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="w-6 h-6 border-2 border-t-2 border-gray-200 border-solid rounded-full border-t-blue-500"
      variants={circleVariants}
      initial="start"
      animate="end"
    />
  );
}
