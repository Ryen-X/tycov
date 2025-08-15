"use client"

import React from "react";
import { motion } from "framer-motion";

export default function TermsPage() {
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
        <h1 className="text-5xl font-bold mb-12 text-center">Terms of Service</h1>
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
            <h2 className="text-2xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
            <p>
              By using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Use of the Service</h2>
            <p>
              TYCOV is provided for your personal, non-commercial use. You agree not to use the service for any illegal or unauthorized purpose. You are responsible for your conduct and any data you submit while using the service. This includes any attempts to disrupt or harm the service, which may result in the collection of data for security purposes as outlined in our Privacy Policy.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of TYCOV or its content suppliers and is protected by international copyright laws. The data you contribute is used for research purposes as outlined in our Privacy Policy.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Disclaimers</h2>
            <p>
              The service is provided on an "as is" and "as available" basis. We do not warrant that the service will be uninterrupted, timely, secure, or error-free.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
            <p>
              In no event shall TYCOV, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is based, without regard to its conflict of law provisions.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Changes to These Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at contact@tycov.app.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
