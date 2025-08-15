import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 w-full">
      <div className="container mx-auto px-4 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold">TYCOV</h3>
            <p className="text-gray-400 mt-1 text-sm">Test Your Cognitive Vision (TYCOV) is not just a game or a test, it is a movement. An open contribution to knowledge and information.</p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
              <div>
                <h4 className="font-bold mb-1">Navigate</h4>
                <ul className="text-sm">
                  <li><Link href="/play" className="text-gray-400 hover:text-white">Play</Link></li>
                  <li><Link href="/blogs" className="text-gray-400 hover:text-white">Blogs</Link></li>
                  <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-1">About</h4>
                <ul className="text-sm">
                  <li><Link href="/#about" className="text-gray-400 hover:text-white">About TYCOV</Link></li>
                  <li><Link href="/#why" className="text-gray-400 hover:text-white">Why?</Link></li>
                  <li><Link href="/#mission" className="text-gray-400 hover:text-white">Our Mission</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-1">Legal</h4>
                <ul className="text-sm">
                  <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6 text-sm">
          <p>© 2024&ndash;2025 TYCOV. "We" refers to the TYCOV project as an entity. Developed by Aaryan Singh.</p>
        </div>
      </div>
    </footer>
  );
}
