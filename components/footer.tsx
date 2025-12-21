"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Sun, Moon, Instagram, Twitter, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { seoPages } from "@/lib/seo-pages";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="border-t backdrop-blur-sm">
      <div className="mx-auto max-w-7xl w-full px-6 py-12 md:flex md:items-start md:justify-between lg:px-8">
        <motion.div
          variants={itemVariants}
          className="flex flex-col space-y-4 md:order-1">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
            <p>
              &copy; 2025 <Link href="/">cursorshorts.com</Link>. All rights
              reserved.
            </p>
            <div className="mt-2 flex items-center space-x-6 md:mt-0">


            </div>
          </motion.div>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/thouficexplains/" className="hover: text-gray-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/thouficexplains" className="hover: text-gray-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://x.com/CursorShorts" className="hover: text-gray-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 md:order-2 md:mt-0">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-gray-900 dark:hover:text-gray-100 text-sm text-gray-500 transition-colors">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/autoshorts"
                    className="hover:text-gray-900 dark:hover:text-gray-100 text-sm text-gray-500 transition-colors">
                    Autoshorts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="hover:text-gray-900 dark:hover:text-gray-100 text-sm text-gray-500 transition-colors">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Features</h3>
              <ul className="mt-4 space-y-2">
                {seoPages.features.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={page.path}
                      className="hover:text-gray-900 dark:hover:text-gray-100 text-sm text-gray-500 transition-colors">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Industries</h3>
              <ul className="mt-4 space-y-2">
                {seoPages.industries.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={page.path}
                      className="hover:text-gray-900 dark:hover:text-gray-100 text-sm text-gray-500 transition-colors">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Free Tools</h3>
              <ul className="mt-4 space-y-2">
                {seoPages.freeTools.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={page.path}
                      className="hover:text-gray-900 dark:hover:text-gray-100 text-sm text-gray-500 transition-colors">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                {seoPages.resources.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={page.path}
                      className="hover:text-gray-900 dark:hover:text-gray-100 text-sm text-gray-500 transition-colors">
                      {page.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/terms"
                    className="hover:text-gray-900 dark:hover:text-gray-100 text-sm text-gray-500 transition-colors">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy"
                    className="hover:text-gray-900 dark:hover:text-gray-100 text-sm text-gray-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* <div className="flex items-center justify-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div> */}
      </div>



      <div className="mx-auto">
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="h-12 w-full sm:h-96 drop-shadow">
            <TextHoverEffect text="cursorshorts" />
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
