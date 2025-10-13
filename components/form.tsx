import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface FormProps {
  handleRedirect: () => void;
}

export default function Form({ handleRedirect }: FormProps) {
  return (
    <motion.div
      className="mt-6 flex w-full max-w-[24rem] flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <EnhancedButton
          size="lg"
          variant="expandIcon"
          Icon={FaArrowRightLong}
          onClick={handleRedirect}
          iconPlacement="right"
          className="mt-2 w-full text-lg">
          Start creating viral videos
        </EnhancedButton>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mt-4 flex w-full items-center justify-center gap-1 text-muted-foreground">
        <p>For any queries, reach out at </p>
        <Link
          href="https://x.com/thoufic67"
          rel="noopener noreferrer"
          target="_blank">
          <FaXTwitter className="hover:text-primary-200 h-4 w-4 transition-all duration-200 ease-linear" />
        </Link>
        or
        <Link
          href="https://github.com/thoufic67"
          rel="noopener noreferrer"
          target="_blank">
          <FaGithub className="hover:text-primary-200 ml-0.5 h-5 w-5 transition-all duration-200 ease-linear" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
