"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DataPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="bg-black text-white min-h-screen"
    >
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center">Data & Research</h1>
        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
          <motion.div variants={sectionVariants} transition={{ delay: 0.2 }} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Research</h2>
            <p>
              The primary purpose of TYCOV is to conduct academic research on the ability of humans to distinguish between real and AI-generated images. This research is crucial in an age where AI is becoming increasingly capable of creating realistic media. Our goal is to publish our findings in academic journals and contribute to the public's understanding of AI.
            </p>
          </motion.div>
          <motion.div variants={sectionVariants} transition={{ delay: 0.4 }} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Anonymous Data Collection</h2>
            <p>
              We are committed to your privacy. We do not require you to create an account or sign in to use our service. The only data we collect is your accuracy in identifying images. Specifically, when you choose whether an image is "Real" or "AI," we record this choice along with an anonymous identifier for the image. This process is similar to a general survey.
            </p>
            <p className="mt-4">
              Your responses are completely anonymous and are not linked to any personally identifiable information. We use browser cookies to keep track of the images you've seen in a session to avoid repetition, but you can clear your cookies at any time to reset this.
            </p>
          </motion.div>
          <motion.div variants={sectionVariants} transition={{ delay: 0.6 }} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Data Usage</h2>
            <p>
              The data we collect is aggregated and used for statistical analysis. We look for patterns and trends in how people perceive AI-generated content. This information helps us understand the strengths and weaknesses of both human perception and AI generation technologies.
            </p>
          </motion.div>
          <motion.div variants={sectionVariants} transition={{ delay: 0.8 }} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Security and Malicious Activity</h2>
            <p>
              While we are committed to anonymity, we take the security of our platform very seriously. In the event of malicious or suspicious activity that could harm our website or its users, we may need to collect limited data, such as IP addresses, to investigate and mitigate the threat. This data is used strictly for security purposes and is not shared or used for any other reason.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
