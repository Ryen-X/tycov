import React from "react";

export default function MissionSection() {
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white">Our Mission</h2>
        <p className="mt-4 text-xl text-gray-300">
          Our mission at TYCOV is twofold. First, we aim to create an engaging and educational experience that raises awareness about the capabilities and limitations of generative AI. We want to empower users to become more critical consumers of digital media.
        </p>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-300">
          Second, we are committed to advancing academic research in the field of human-computer interaction and cognitive science. The data collected through TYCOV will be used to publish research papers, develop new AI detection models, and contribute to a deeper understanding of how humans perceive and interpret visual information. We are passionate about fostering a collaborative research community and making our findings accessible to the public.
        </p>
      </div>
    </section>
  );
}
