"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NoticeBlogPage() {
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
            src="/fraudnotice.webp"
            alt="Security Notice Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Important Security Notice: Beware of Fraudulent Websites and Impersonations</h1>
        <p className="text-neutral-400 text-center text-sm mb-8">By Aaryan | January 8, 2025</p>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Protecting Yourself from Online Fraud</h2>
          <p className="text-lg leading-relaxed mb-4">
            In the digital age, vigilance is key. We want to bring to your attention an important security notice regarding fraudulent websites and entities that may attempt to impersonate TYCOV. As a platform dedicated to digital image authenticity, we are committed to your safety and the integrity of our service. It has come to our attention that there may be websites or organizations falsely claiming an association with TYCOV, or attempting to solicit funds or personal information under our name.
          </p>
          <p className="text-lg leading-relaxed">
            Please be extremely cautious and verify the authenticity of any website or communication claiming to be from or affiliated with TYCOV. Always check the URL to ensure you are on our official domain.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">TYCOV: A Non-Commercial, 100% Free Initiative</h2>
          <p className="text-lg leading-relaxed mb-4">
            We'd like to inform that TYCOV is a non-commercial, 100% free website. Our mission is to provide a public service for digital image authenticity verification and education, without any financial gain.
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-4 pl-5">
            <li className="mb-2"><strong>No Commercial Association:</strong> TYCOV does not associate itself with any commercial organization, company, or paid service. We do not endorse, promote, or partner with any third-party entities for commercial purposes.</li>
            <li className="mb-2"><strong>No Solicitation of Funds:</strong> We will never ask for donations, payments, or any form of financial contribution from our users. If you encounter any request for money claiming to be from TYCOV, it is a scam.</li>
            <li className="mb-2"><strong>No Personal Data Collection for Profit:</strong> While we may collect anonymized data to improve our service (as outlined in our Privacy Policy), we will never sell your data or use it for commercial profiling.</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">What to Do If You Encounter Fraud</h2>
          <p className="text-lg leading-relaxed mb-4">
            If you come across any suspicious website, email, or social media account claiming to be TYCOV or affiliated with us, please:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-4 pl-5">
            <li className="mb-2"><strong>Do Not Interact:</strong> Do not click on any links, download any attachments, or provide any personal information.</li>
            <li className="mb-2"><strong>Report It:</strong> Please report the incident to us immediately through our official contact channels (if available, or through the platform you encountered the fraud).</li>
            <li className="mb-2"><strong>Verify the Source:</strong> Always ensure you are on the official TYCOV website.</li>
          </ul>
          <p className="text-lg leading-relaxed">
            Your vigilance helps us maintain a safe and trustworthy environment for everyone. We are dedicated to providing a free and unbiased resource for digital authenticity.
          </p>
        </motion.section>

        <motion.section
          className="text-center mt-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-xl font-semibold mb-4">Stay safe and informed!</p>
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
