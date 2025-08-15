"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPostPage() {
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
            src="/introbanner.webp"
            alt="Welcome Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Introducing TYCOV: A Platform for Digital Image Authenticity Verification</h1>
        <p className="text-neutral-400 text-center text-sm mb-8">By Aaryan | July 6, 2024</p>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">The Challenge of Synthetic Media</h2>
          <p className="text-lg leading-relaxed mb-4">
            The rapid increase of advanced image generation techniques, including those powered by Generative Adversarial Networks (GANs) and other AI models, has blurred the lines of visual truth. Our objective is to equip users with the ability to critically evaluate digital images, fostering a more informed interaction with online media. This platform serves as an educational and analytical resource for understanding the nuances of digital manipulation.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Key Features and Analytical Tools</h2>
          <p className="text-lg leading-relaxed mb-4">
            TYCOV offers a multi-faceted approach to digital image authenticity:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-4 pl-5">
            <li className="mb-2"><strong>Interactive Verification Modules:</strong> Engage with curated sets of images to test and refine your ability to identify synthetic content. These modules are designed to highlight common artifacts and indicators of manipulation.</li>
            <li className="mb-2"><strong>Data-Driven Insights:</strong> Access anonymized data on user perception and image characteristics. This section provides statistical insights into the prevalence and types of manipulated images encountered, contributing to a broader understanding of the digital landscape.</li>
            <li className="mb-2"><strong>Technical Blog Series:</strong> Our blog will feature in-depth articles on the technical aspects of image synthesis, detection methodologies, and the societal implications of deepfakes and other forms of digital manipulation.</li>
            <li className="mb-2"><strong>Resource Repository:</strong> A curated collection of academic papers, industry reports, and open-source tools related to digital forensics and media authenticity.</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Commitment to Digital Literacy</h2>
          <p className="text-lg leading-relaxed mb-4">
            TYCOV is committed to promoting digital literacy and critical media consumption. By providing a robust platform for analysis and education, we aim to empower individuals to navigate the complexities of the digital visual environment with greater confidence and accuracy. We invite researchers, students, and the general public to utilize our resources and contribute to the ongoing discourse on digital authenticity.
          </p>
          <p className="text-lg leading-relaxed">
            Thank you for engaging with TYCOV. Together, we can enhance collective understanding and resilience against digital deception.
          </p>
        </motion.section>

        <motion.section
          className="text-center mt-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-xl font-semibold mb-4">The TYCOV Team</p>
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
