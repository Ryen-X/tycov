"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is TYCOV?",
    answer: "TYCOV (Test Your Cognitive Vision) is a game that challenges you to distinguish between real and AI-generated images. It's also a research project to study human perception of AI media.",
  },
  {
    question: "How do you use my data?",
    answer: "We collect your anonymous responses to help our research in understanding how people perceive AI-generated images. All data is anonymized and averaged for academic research purposes. So, you're good to go!",
  },
  {
    question: "How are the AI images generated?",
    answer: "Currently, we use a combination of RealVisXL (SDXL) and Flux .1 Schnell (sometimes Flux .1 Dev) to generate the AI images. These models are trained on a diverse set of images to create realistic outputs.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Yes, we do not collect any personally identifiable information. Your session is tracked using anonymous browser cookies.",
  },
  {
    question: "Can I contribute to the project?",
    answer: "Yes! We are always looking for contributors. Give us a GitHub star, supporting our research or something as simple as just playing the game helps us a lot.",
  },
  {
    question: "How often are new images added?",
    answer: "We add new batches of images on a weekly/monthly basis to keep the game fresh and challenging.",
  },
  {
    question: "What is the goal of the research?",
    answer: "Our primary goal is to understand the boundaries of human visual perception in the age of generative media. The findings will be used to publish academic papers and potentially develop tools to combat misinformation.",
  },
  {
    question: "Is clearing cookies necessary?",
    answer: "We don't require you to clear cookies. But if you want to, we already have a dedicated page in our website. Check out the Cookies page on our website. We also posted tutorials with screenshots on how you can do it on your device.",
  },
  {
    question: "Is this game suitable for all ages?",
    answer: "Yes, the game is designed to be family-friendly. The images are curated to be appropriate for a general audience.",
  },
  {
    question: "Where can I see the results of the research?",
    answer: "We plan to publish our findings in academic journals and on our website. Stay tuned for updates on our blogs page.",
  },
  {
    question: "Is this a commercial project?",
    answer: "No, TYCOV is a non-commercial, open-source project. Our primary goal is to contribute to academic research and public knowledge. We do not generate any revenue from this platform.",
  },
  {
    question: "Are we doomed?",
    answer: "Not at all! While AI-generated content poses challenges, it also offers opportunities for innovation and creativity. By participating in TYCOV, you're helping us understand these challenges better and find ways to address them.",
  },
];

export default function FaqPage() {
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
        <h1 className="text-5xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h1>
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
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="bg-neutral-900 border border-neutral-800 rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-neutral-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.div>
  );
}
