import React from "react";

export default function AboutSection() {
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white">About TYCOV</h2>
        <p className="mt-4 text-xl text-gray-300">
          TYCOV (Test Your Cognitive Vision) is a free, open, and community-driven initiative designed to challenge the way we see. Through a simple yet powerful experience, users train themselves to distinguish between real and artificially generated images. This isn't just entertainment, every interaction strengthens awareness of visual misinformation and contributes to a broader understanding of AI and media literacy. TYCOV is, and always will be, an open contribution to knowledge.
        </p>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-300">
          Our platform presents you with a series of images, and your task is simple: decide whether each image is a real photograph or a creation of artificial intelligence. Every choice you make contributes to a growing body of data that helps us understand the nuances of human visual perception in the digital age.
        </p>
      </div>
    </section>
  );
}
