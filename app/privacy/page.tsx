"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="bg-black text-white min-h-screen"
    >
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center">Privacy Policy</h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-4xl mx-auto space-y-8 text-gray-300"
        >
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
            <p>
              Welcome to TYCOV ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Data Collection</h2>
            <p>
              We are committed to your privacy. We do not require you to create an account or sign in. The only data we collect is your accuracy in identifying images. When you choose whether an image is "Real" or "AI," we record this choice along with an anonymous identifier for the image. This data is not linked to any personally identifiable information.
            </p>
            <p className="mt-4">
              We use browser cookies to keep track of the images you've seen in a session to avoid repetition. You can clear your cookies at any time to reset this.
            </p>
            <p className="mt-4">
              In the event of malicious or suspicious activity that could harm our website, we may collect limited data, such as IP addresses, for security purposes. This data is used strictly to investigate and mitigate threats.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Use of Your Information</h2>
            <p>
              We use the information we collect to conduct academic research on human perception of AI-generated content. The data is aggregated and anonymized for analysis. We may also use the information to improve our website and services.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We may share anonymized and aggregated data with research partners for academic purposes.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at contact@tycov.app.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
