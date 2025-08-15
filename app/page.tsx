"use client"
import React, { useEffect } from "react";
import GridBackgroundDemo from "@/components/grid-background-demo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AboutSection from "@/components/about-section";
import WhySection from "@/components/why-section";
import MissionSection from "@/components/mission-section";
import StatisticsSection from "@/components/statistics-section";
import CtaSection from "@/components/cta-section";
import TextType from "@/components/texttypingeffect";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <FlickeringGrid className="h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <TextType
          className="text-3xl md:text-5xl font-bold text-center"
          text={["Real eyes, realize real lies...", "Belief is the easiest thing to fabricate...", "They are no longer science fiction..."]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          />
          <br />
          <motion.p
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 2.5 }}
            className="mt-7 max-w-2xl text-center"
          >
            <span className="text-base md:text-xl text-gray-200">We come across thousands of images online every single day. But have you ever wondered how many of them are actually real?</span>
            <br />
            <br />
            This is not just a game. It's a test. It's a challenge to your perception and understanding of the digital world.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 3 }}
            className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-sm md:max-w-none relative z-10 justify-center"
          >
            <Link href="/play" className="w-full md:w-auto">
              <Button variant="secondary" className="w-full bg-white text-black hover:bg-gray-200 hover:cursor-pointer">TEST NOW</Button>
            </Link>
            <Link href="https://github.com/ryen-x/tycov" className="w-full md:w-auto">
              <Button variant="outline" className="w-full bg-neutral-900 text-white hover:bg-neutral-800 border-neutral-600 hover:cursor-pointer hover:text-white">GITHUB REPO</Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-75 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <motion.div id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="px-4 md:px-0">
        <AboutSection />
      </motion.div>
      <motion.div id="why" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <WhySection />
      </motion.div>
      <motion.div id="mission" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <MissionSection />
      </motion.div>
      <motion.div id="statistics" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <StatisticsSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <CtaSection />
      </motion.div>
    </>
  );
}
