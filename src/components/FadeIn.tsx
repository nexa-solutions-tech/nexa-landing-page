import { motion, useInView } from "framer-motion";
import { useRef } from "react";
type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  padding?: boolean;
};
export const FadeIn = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  fullWidth = false,
  padding = false,
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const getInitialProps = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 };
      case "down":
        return { opacity: 0, y: -40 };
      case "left":
        return { opacity: 0, x: 40 };
      case "right":
        return { opacity: 0, x: -40 };
      case "none":
      default:
        return { opacity: 0 };
    }
  };
  return (
    <motion.div
      ref={ref}
      initial={getInitialProps()}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : getInitialProps()}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`${fullWidth ? "w-full" : ""} ${padding ? "p-4" : ""} ${className}`}
    >
      {" "}
      {children}{" "}
    </motion.div>
  );
};
