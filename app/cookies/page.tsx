"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CookiesPage() {
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
        <h1 className="text-5xl font-bold mb-12 mt-5 text-center">Cookies Policy</h1>
        <div className="text-center text-yellow-300 text-sm mb-4 p-2 rounded-md bg-yellow-950 border border-yellow-700 mt-1 max-w-fit mx-auto">
            ⓘ Clearing cookies will only reset your session data. Records already stored in our database will not be affected.
          </div>
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
            <h2 className="text-2xl font-bold mb-4 text-white">What are Cookies?</h2>
            <p>
              Cookies are small text files that websites store on your device (computer, tablet, or mobile phone) when you visit them. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
            </p>
            <p className="mt-4">
              Think of a cookie as a tiny memory for the website. It helps the website remember you and your preferences, like what items you've added to a shopping cart, your login details, or your language settings. This makes your next visit smoother and more personalized.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">How We Use Cookies</h2>
            <p>
              At TYCOV, we use browser cookies primarily to keep track of the images you've seen during a session. This helps us avoid showing you the same images repeatedly, ensuring a fresh experience each time you interact with our content. These cookies do not store any personally identifiable information.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">How to Clear Cookies from Your Browser</h2>
            <p>
              Clearing cookies can help reset your browsing experience, enhance privacy, or resolve issues with websites. Here's how to do it on common devices and browsers:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-white">On PC (Google Chrome)</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open Google Chrome.</li>
              <li>Click the three vertical dots (More) in the top-right corner.</li>
              <li>Go to "More tools" {">"} "Clear browsing data...".</li>
              <li>Select a time range (e.g., "All time").</li>
              <li>Check "Cookies and other site data" and "Cached images and files".</li>
              <li>Click "Clear data".</li>
            </ol>
            <div className="mt-4 flex items-center justify-center">
            <Image src="/pcchrome.webp" alt="Clearing Cookies on PC - Google Chrome" width={800} height={600} className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            <h3 className="text-xl font-bold mt-6 mb-2 text-white">On Android (Google Chrome)</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the Chrome app on your Android phone or tablet.</li>
              <li>Tap More (three vertical dots) at the top right.</li>
              <li>Tap "History" {">"} "Clear browsing data...".</li>
              <li>From the "Time range" drop-down menu, select how much history you want to delete.</li>
              <li>Check "Cookies and site data" and "Cached images and files".</li>
              <li>Tap "Clear data".</li>
            </ol>
            <div className="mt-4 flex items-center justify-center">
            <Image src="/androidchrome.webp" alt="Clearing Cookies on Android - Google Chrome" width={800} height={600} className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            <h3 className="text-xl font-bold mt-6 mb-2 text-white">On iOS (Safari)</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go to "Settings" on your iPhone or iPad.</li>
              <li>Scroll down and tap "Safari".</li>
              <li>Scroll down and tap "Clear History and Website Data".</li>
              <li>Confirm by tapping "Clear History and Data" in the pop-up.</li>
            </ol>
            <div className="mt-4 flex items-center justify-center">
            <Image src="/iossafari.webp" alt="Clearing Cookies on iOS - Safari" width={800} height={600} className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            <h3 className="text-xl font-bold mt-6 mb-2 text-white">On iOS (Google Chrome)</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the Chrome app on your iPhone or iPad.</li>
              <li>Tap the three horizontal dots (More) (three horizontal dots) at the bottom right.</li>
              <li>Tap "History" {">"} "Clear Browsing Data...".</li>
              <li>Make sure "Cookies, Site Data" and "Cached Images and Files" are checked.</li>
              <li>Tap "Clear Browsing Data" at the bottom, then confirm.</li>
            </ol>
            <div className="mt-4 flex items-center justify-center">
            <Image src="/ioschrome.webp" alt="Clearing Cookies on iOS - Google Chrome" width={800} height={600} className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">More Information</h2>
            <p>
              For more detailed instructions or information on other browsers (like Firefox, Edge, etc.), please refer to your browser's official support documentation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
