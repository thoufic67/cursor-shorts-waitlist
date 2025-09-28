"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Footer() {
  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="border-t backdrop-blur-sm">
      {/* <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <motion.div
          variants={itemVariants}
          className="flex flex-col space-y-4 md:order-1">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
              <span className="text-sm font-bold text-black">C</span>
            </div>
            <span className="text-xl font-semibold">Cursorshorts.com</span>
          </div>
          <p className="max-w-md text-sm text-gray-400">
            A collection of short tutorials and tips for Cursor AI editor.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover: text-gray-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover: text-gray-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover: text-gray-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 md:order-2 md:mt-0">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Tips & Tricks
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Community</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover: text-sm text-gray-400 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div> */}

      <div className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
            <p>
              &copy; 2025 <Link href="/">cursorshorts.com</Link>. All rights
              reserved.
            </p>
            <div className="mt-2 flex space-x-6 md:mt-0">
              <Link href="/terms" className="hover: transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/privacy" className="hover: transition-colors">
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto">
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="h-12 w-full sm:h-48">
            <TextHoverEffect text="cursorshorts.com" />
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
