"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./RotatingWord.module.css";

const words = ["Design", "Build", "Ship"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const leavingRef = useRef(false);
  const intervalRef = useRef(0);
  const timeoutRef = useRef(0);

  useEffect(() => {
    return () => {
      window.clearInterval(intervalRef.current);
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function step() {
    if (leavingRef.current) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setIndex((current) => (current + 1) % words.length);
      return;
    }

    leavingRef.current = true;
    setLeaving(true);
    timeoutRef.current = window.setTimeout(() => {
      setIndex((current) => (current + 1) % words.length);
      setLeaving(false);
      leavingRef.current = false;
    }, 420);
  }

  function start() {
    window.clearInterval(intervalRef.current);
    step();
    intervalRef.current = window.setInterval(step, 1600);
  }

  function stop() {
    window.clearInterval(intervalRef.current);
  }

  const word = words[index];

  return (
    <button
      type="button"
      className={styles.slot}
      onMouseEnter={start}
      onMouseLeave={stop}
      onClick={step}
      aria-label={`${word}. Hover to change the word.`}
    >
      <span className={styles.border} aria-hidden="true" />
      <span className={styles.ripple} aria-hidden="true">
        <span />
      </span>
      <span className={styles.title}>
        <span
          className={leaving ? styles.leave : styles.enter}
          data-text={word}
        >
          {word}
        </span>
      </span>
    </button>
  );
}
