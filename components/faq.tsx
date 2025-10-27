"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! Create an account and get started with your first video for free—no credit card needed. Test out all the features before committing.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancel anytime with a single click from your billing dashboard. We believe in making it easy to leave—no hidden fees, no retention games, no hassle.",
  },
  {
    question: "How do the membership tiers work?",
    answer:
      "We offer multiple subscription levels beyond our free plan. Paid memberships unlock watermark-free videos and higher posting limits to help you scale your content creation.",
  },
  {
    question: "Are refunds available?",
    answer:
      "Refunds aren't offered due to the high computational costs of AI video generation. Our infrastructure providers charge us for GPU usage the moment your content is created, making refunds unsustainable. You acknowledge this policy during signup. However, you can cancel anytime and your subscription will simply end at the current period.",
  },
  {
    question: "Can I change my subscription plan?",
    answer:
      "Absolutely. Switch between plans anytime from your billing settings. Choose the tier that fits your needs—upgrading or downgrading takes effect immediately. If downgrading reduces your series limit, excess series will be automatically paused.",
  },
  {
    question: "Can one account have multiple subscription types?",
    answer:
      "Each account can only maintain one plan tier at a time. All your projects must be on the same subscription level. If you need different plan types running simultaneously, you'll need to create separate accounts for each.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative z-20 mx-auto max-w-4xl px-8 py-20 lg:py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        <h2 className="mb-4 text-4xl font-medium tracking-tight text-black dark:text-white lg:text-5xl">
          FAQ
        </h2>
        <div className="mb-8 h-1 w-24 bg-violet-600" />
      </motion.div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQAccordion
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

interface FAQAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQAccordion({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: FAQAccordionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white lg:text-xl">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 shrink-0">
          <svg
            className="h-6 w-6 text-neutral-600 dark:text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <div className="border-t border-neutral-200 p-6 dark:border-neutral-800">
              {answer.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className={cn(
                    "text-neutral-600 dark:text-neutral-300",
                    i > 0 && "mt-4",
                  )}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
