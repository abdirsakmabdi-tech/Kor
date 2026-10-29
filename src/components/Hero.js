"use client";

import { useEffect, useState } from "react";
import RotatingWord from "./RotatingWord";
import styles from "./Hero.module.css";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setReady(true);
      return;
    }

    const timer = window.setTimeout(() => setReady(true), 4200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.stage}>
        <h1
          className={ready ? `${styles.headline} ${styles.headlineReady}` : styles.headline}
          id="hero-title"
        >
          <span className={styles.line}>
            <span className={styles.reveal}>
              <span className={styles.rise}>We</span>
            </span>{" "}
            <span className={styles.reveal}>
              <span className={`${styles.rise} ${styles.riseLate}`}>
                <RotatingWord />
              </span>
            </span>
          </span>
          <span className={styles.line}>
            <span className={styles.reveal}>
              <span className={`${styles.rise} ${styles.riseLater}`}>Digital</span>
            </span>{" "}
            <span className={styles.reveal}>
              <span className={`${styles.rise} ${styles.riseLast}`}>Products</span>
            </span>
          </span>
        </h1>
        <div className={styles.aside}>
          <span className={styles.reveal}>
            <span className={`${styles.rise} ${styles.asideRule}`}>
              <span className={styles.rule} aria-hidden="true" />
            </span>
          </span>
          <h2>
            <span className={styles.reveal}>
              <span className={`${styles.rise} ${styles.asideTitle}`}>Shaping</span>
            </span>{" "}
            <span className={styles.reveal}>
              <span className={`${styles.rise} ${styles.asideTitleNext}`}>tomorrow,</span>
            </span>{" "}
            <span className={styles.reveal}>
              <span className={`${styles.rise} ${styles.asideTitleLast}`}>today</span>
            </span>
          </h2>
          <p className={styles.revealBlock}>
            <span className={`${styles.riseBlock} ${styles.asideCopy}`}>
              In a world of constant change, reinvention is a continuous
              strategy. That&apos;s why we work with organizations to rewrite the
              rules of growth, innovation and resilience.
            </span>
          </p>
          <span className={styles.reveal}>
            <a className={`${styles.cta} ${styles.rise} ${styles.asideCta}`} href="#services">
              See what we do
              <span className={styles.ctaIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5.5 16 12 8 18.5 11.2 12Z" />
                </svg>
              </span>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
