import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export const useCountUp = (target: number, duration = 2) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => {
        setDisplay(Math.floor(value).toLocaleString("pt-BR"));
      },
    });

    return () => controls.stop();
  }, [isInView, target, duration]);

  return { ref, display };
};
