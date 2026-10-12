"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait after entering the viewport, for staggering siblings. */
  delay?: number;
};

/**
 * Fades its children up once, the first time they scroll into view. The
 * transition itself lives in globals.css (.reveal), which also switches it off
 * for prefers-reduced-motion.
 */
const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay * 1000}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default Reveal;
