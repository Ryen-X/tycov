"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UpdateBlogPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 font-sans">
      <motion.article
        className="w-full max-w-4xl mx-auto bg-neutral-900 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 my-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <div className="relative w-full h-48 sm:h-64 md:h-80 mb-8">
          <Image
            src="/updatebanner.webp"
            alt="Website Update Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Exciting Updates to TYCOV: Enhancing Your Digital Authenticity Experience</h1>
        <p className="text-neutral-400 text-center text-sm mb-8">By Aaryan | September 10, 2024</p>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">A Fresh Look and Feel: UI Improvements</h2>
          <p className="text-lg leading-relaxed mb-4">
            We are thrilled to announce significant enhancements to TYCOV's user interface! We've been working endlessly to refine the visual aesthetics and overall user experience. You'll notice a cleaner, more intuitive design that makes navigating the platform smoother and more enjoyable. From improved responsiveness across devices to subtle animations that guide your interaction, every detail has been considered to provide a seamless and modern feel. We believe these UI upgrades will make your journey through TYCOV more efficient and visually appealing.
          </p>
          <p className="text-lg leading-relaxed">
            Our goal was to create an environment that not only functions flawlessly but also delights the eye, ensuring that your focus remains on the critical task of verifying digital image authenticity.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Expanding Our Database: More Images, More Variety</h2>
          <p className="text-lg leading-relaxed mb-4">
            Good news! We've expanded our image database. This update introduces a wider variety of images, enhancing the diversity of our dataset and improving the robustness of our authenticity verification processes. A richer database means more comprehensive comparisons and more accurate results, giving you greater confidence in the authenticity of the images you encounter.
          </p>
          <p className="text-lg leading-relaxed">
            This continuous expansion is part of our commitment to staying ahead in the evolving landscape of digital media, ensuring TYCOV remains a powerful tool against misinformation and manipulated content.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Transparency and Trust: Updates to Terms, Privacy, and Data Collection</h2>
          <p className="text-lg leading-relaxed mb-4">
            In our ongoing commitment to transparency and user trust, we have updated our Terms of Service, Privacy Policy, and Data Collection practices. These revisions reflect our dedication to protecting your data and clearly outlining how we operate. We encourage all users to review the updated policies to understand how your information is handled, your rights, and our responsibilities.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Key changes include clearer language regarding data anonymization, enhanced security measures, and more detailed explanations of how collected data contributes to improving TYCOV's core functionalities without compromising your privacy. Your trust is paramount, and these updates are designed to reinforce our commitment to a secure and transparent platform.
          </p>
          <p className="text-lg leading-relaxed">
            Changes will be effective starting October 1, 2024. We encourage you to review these updates to stay informed about your rights and our practices. 
          </p>
        </motion.section>

        <motion.section
          className="text-center mt-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-xl font-semibold mb-4">Thank you for being a part of the TYCOV community!</p>
          <Link href="/blogs" passHref>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Back to Blogs
            </button>
          </Link>
        </motion.section>
      </motion.article>
    </div>
  );
}
