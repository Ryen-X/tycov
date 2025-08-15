import React from "react";

export default function WhySection() {
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Why TYCOV?
        </h2>
        <p className="mt-4 text-xl text-gray-300">
          In a world saturated with digital content, discerning truth from fabrication has become increasingly challenging.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-800/30 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white">Educate and Empower</h3>
            <p className="mt-4 text-gray-300">
              TYCOV aims to educate users about the prevalence and sophistication of AI-generated images. By engaging with our platform, you'll develop a keen eye for identifying subtle cues that distinguish real images from AI fakes.
            </p>
          </div>
          <div className="bg-neutral-800/30 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white">Enhance Critical Thinking</h3>
            <p className="mt-4 text-gray-300">
              Our interactive game challenges your perception, encouraging you to think critically about the visual information you consume daily. This skill is crucial in an era where misinformation can spread rapidly through manipulated media.
            </p>
          </div>
          <div className="bg-neutral-800/30 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white">Promote Digital Literacy</h3>
            <p className="mt-4 text-gray-300">
              TYCOV contributes to fostering a more digitally literate society. We believe that by understanding the nuances of AI-generated content, individuals can make more informed decisions and contribute to a safer online environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
