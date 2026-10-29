"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./RotatingWord.module.css";

const words = ["Design", "Build", "Ship"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const leavingRef = useRef(false);
  const timeoutRef = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      if (leavingRef.current) return;

      leavingRef.current = true;
      setLeaving(true);
      timeoutRef.current = window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setLeaving(false);
        leavingRef.current = false;
      }, 420);
    }, 1600);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const word = words[index];

  return (
    <span className={styles.slot}>
      <span className={styles.border} aria-hidden="true" />
      <span className={styles.ripple} aria-hidden="true">
        <span />
      </span>
      <span className={styles.title}>
        <span className={leaving ? styles.leave : styles.enter} data-text={word}>
          {word}
        </span>
      </span>
    </span>
  );
}
