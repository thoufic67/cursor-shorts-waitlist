import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Script from "next/script";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col items-center justify-center gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming soon!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/logo.png"
        alt="logo"
        className="mx-auto h-24 w-24"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="Create AI shorts easily in minutes, not in Days"
        />
      </motion.div>
      {/* <blockquote
        className="twitter-tweet flex w-full justify-center"
        data-media-max-width="560">
        <p lang="en" dir="ltr">
          cursor for shorts to create viral shorts in minutes
          <a href="https://t.co/GJr3cubsx1">pic.twitter.com/GJr3cubsx1</a>
        </p>
        &mdash; Thoufic (@thoufic67){" "}
        <a href="https://twitter.com/thoufic67/status/1962572310726221929?ref_src=twsrc%5Etfw">
          September 1, 2025
        </a>
      </blockquote>
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"></Script> */}

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="Join the waitlist to get early access of the product and recieve updates on the progress!"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
