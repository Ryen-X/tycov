"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Blog {
  id: string;
  title: string;
  content: string;
  image_url?: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error: _error } = await supabase.from("blogs").select("*");
      if (data) {
        setBlogs(data);
      }
    };
    fetchBlogs();
  }, []);

  const truncateContent = (content: string, maxLength: number) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, content.lastIndexOf(' ', maxLength)) + '...';
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 font-sans">
      <h1 className="text-4xl sm:text-5xl font-bold my-8 mt-16 sm:mt-20">Blogs</h1>
      <motion.div
        className="w-full max-w-4xl mx-auto"
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
        <Link href="/blogs/notice" passHref>
          <motion.div
            className="mb-8 p-6 bg-neutral-900 rounded-lg shadow-lg cursor-pointer hover:bg-neutral-800 transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4">
              <Image
                src="/fraudnotice.webp"
                alt="Security Banner"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Important Security Notice: Beware of Fraudulent Websites and Impersonations</h2>
            <p className="text-neutral-400 text-sm mb-4">By Aaryan | January 8, 2025</p>
            <p className="text-lg">
              In the digital age, vigilance is key. We want to bring to your attention an important security notice regarding fraudulent websites and entities that may attempt to impersonate TYCOV...
            </p>
          </motion.div>
        </Link>
        <Link href="/blogs/update" passHref>
          <motion.div
            className="mb-8 p-6 bg-neutral-900 rounded-lg shadow-lg cursor-pointer hover:bg-neutral-800 transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4">
              <Image
                src="/updatebanner.webp"
                alt="Website Update Banner"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Exciting Updates to TYCOV: Enhancing Your Digital Authenticity Experience</h2>
            <p className="text-neutral-400 text-sm mb-4">By Aaryan | September 10, 2024</p>
            <p className="text-lg">
              We are thrilled to announce significant enhancements to TYCOV's user interface! Our team has been working diligently to refine the visual aesthetics and overall user experience...
            </p>
          </motion.div>
        </Link>
        <Link href="/blogs/intro" passHref>
          <motion.div
            className="mb-8 p-6 bg-neutral-900 rounded-lg shadow-lg cursor-pointer hover:bg-neutral-800 transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4">
              <Image
                src="/introbanner.webp"
                alt="Intro Banner"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Introducing TYCOV: A Platform for Digital Image Authenticity Verification</h2>
            <p className="text-neutral-400 text-sm mb-4">By Aaryan | July 6, 2024</p>
            <p className="text-lg">
              Welcome to TYCOV, a dedicated platform designed to address the growing challenge of digital image authenticity. In an era where advanced image generating models are increasingly accessible...
            </p>
          </motion.div>
        </Link>
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
            <motion.div
              className="mb-8 p-6 bg-neutral-800 rounded-lg shadow-lg cursor-pointer hover:bg-neutral-700 transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {blog.image_url && (
                <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4">
                  <Image
                    src={blog.image_url}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{blog.title}</h2>
              <p className="text-neutral-400 text-sm mb-4">By Admin |</p>
              <p className="text-lg">{truncateContent(blog.content, 200)}</p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
