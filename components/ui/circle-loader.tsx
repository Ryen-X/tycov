"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CircleLoader() {
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
    <div className="flex items-center justify-center h-full w-full">
      <motion.div
        className="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full border-t-blue-500"
        variants={circleVariants}
        initial="start"
        animate="end"
      />
    </div>
  );
}
