import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white">Ready to test your instincts?</h2>
        <p className="text-xl text-gray-300 mt-4">
          Join the challenge and see how well you can distinguish between real and AI-generated images.
        </p>
        <Link href="/play">
          <Button variant="secondary" className="bg-white text-black hover:bg-gray-200 mt-8">
            PLAY NOW
          </Button>
        </Link>
      </div>
    </section>
  );
}
