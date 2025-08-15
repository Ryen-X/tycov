"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 px-4 md:px-0"
    >
      <div className="bg-neutral-800/30 backdrop-blur-lg rounded-full border border-white/10 p-2 flex items-center justify-between relative">
        <Link href="/" className="text-white text-lg font-bold pl-4">
          TYCOV
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 pr-4">
          <Link href="/blogs" className="text-gray-300 hover:text-white">
            BLOGS
          </Link>
          <Link href="/data" className="text-gray-300 hover:text-white">
            DATA
          </Link>
          <Link href="/faq" className="text-gray-300 hover:text-white">
            FAQ
          </Link>
          <Link href="/play" className="text-gray-300 hover:text-white">
            PLAY
          </Link>
          <Link href="/cookies" className="text-gray-300 hover:text-white">
            COOKIES
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden pr-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-neutral-800/70 backdrop-blur-lg rounded-lg border border-white/10 mt-2 mx-4 p-4 flex flex-col items-center space-y-4"
        >
          <Link href="/blogs" className="text-gray-300 hover:text-white" onClick={toggleMenu}>
            BLOGS
          </Link>
          <Link href="/data" className="text-gray-300 hover:text-white" onClick={toggleMenu}>
            DATA
          </Link>
          <Link href="/faq" className="text-gray-300 hover:text-white" onClick={toggleMenu}>
            FAQ
          </Link>
          <Link href="/play" className="text-gray-300 hover:text-white" onClick={toggleMenu}>
            PLAY
          </Link>
          <Link href="/cookies" className="text-gray-300 hover:text-white" onClick={toggleMenu}>
            COOKIES
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
