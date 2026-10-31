"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";

const services = [
  {
    id: "design",
    title: "UI UX & Product Design",
    wash: "#0249d9",
    ink: "light",
    summary:
      "Interfaces people understand on the first try. Journeys, screens, and design systems a team can keep shipping.",
    icon: "design",
  },
  {
    id: "strategy",
    title: "Product Strategy & Discovery",
    wash: "#faf3aa",
    ink: "dark",
    summary:
      "Find the right problem before the build. Research, validation, and a roadmap for what to make, for whom, and why it wins.",
    icon: "strategy",
  },
  {
    id: "software",
    title: "Software Development",
    wash: "#0249d9",
    ink: "light",
    summary:
      "Web and mobile products that stay reliable as they change. Engineering works with design from the first release.",
    icon: "software",
  },
  {
    id: "platform",
    title: "Cloud Solutions",
    wash: "#faf3aa",
    ink: "dark",
    summary:
      "Cloud foundations a product can launch and grow on. Hosting, integrations, and guardrails that keep it secure and ready to scale.",
    icon: "platform",
  },
  {
    id: "consultancy",
    title: "Product Management Consultancy",
    wash: "#0249d9",
    ink: "light",
    summary:
      "Priorities, roadmaps, and delivery practices so teams build the right product—and keep shipping with clarity.",
    icon: "consultancy",
  },
  {
    id: "ai",
    title: "AI Applications",
    wash: "#faf3aa",
    ink: "dark",
    summary:
      "Find and ship AI that fits real workflows—from use-case choice and pilots to features people actually adopt.",
    icon: "ai",
  },
];

function ServiceIcon({ name }) {
  if (name === "design") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16H5.5A1.5 1.5 0 0 1 4 14.5v-9Zm1.5.5v8h13v-8h-13ZM8 18.25h8v1.5H8v-1.5Z"
        />
      </svg>
    );
  }

  if (name === "strategy") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5 19.5V11h3.2v8.5H5Zm5.4 0V7.2h3.2v12.3h-3.2Zm5.4 0V4h3.2v15.5h-3.2Z"
        />
      </svg>
    );
  }

  if (name === "software") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M9.2 7.1 4.3 12l4.9 4.9-1.4 1.4L1.5 12l6.3-6.3 1.4 1.4Zm5.6 0 1.4-1.4L22.5 12l-6.3 6.3-1.4-1.4 4.9-4.9-4.9-4.9Z"
        />
      </svg>
    );
  }

  if (name === "consultancy") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 4h10a2 2 0 0 1 2 2v14l-7-3.2L5 20V6a2 2 0 0 1 2-2Zm0 1.5A.5.5 0 0 0 6.5 6v11.2l5.5-2.5 5.5 2.5V6a.5.5 0 0 0-.5-.5H7Zm2 3.25h6v1.5H9v-1.5Zm0 3.5h6v1.5H9v-1.5Z"
        />
      </svg>
    );
  }

  if (name === "ai") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.8 13.2 8l5 1.2-5 1.2L12 15.6l-1.2-5.2-5-1.2 5-1.2L12 2.8Zm6.5 10.4 1.1 3.3 3.3 1.1-3.3 1.1-1.1 3.3-1.1-3.3-3.3-1.1 3.3-1.1 1.1-3.3ZM4.8 13.2l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3.2 20.5 8 12 12.8 3.5 8 12 3.2Zm0 11.1 7.2-4.1 1.3.8L12 16.2 3.5 11l1.3-.8 7.2 4.1Zm0 4.1 7.2-4.1 1.3.8L12 20.3 3.5 15.1l1.3-.8 7.2 4.1Z"
      />
    </svg>
  );
}

const cardDelays = [styles.d2, styles.d3, styles.d4, styles.d5, styles.d6, styles.d7];

export default function Services() {
  const sectionRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPlay(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPlay(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={play ? `${styles.section} ${styles.play}` : styles.section}
      id="services"
      aria-labelledby="services-title"
      ref={sectionRef}
    >
      <h2 id="services-title" className={styles.heading}>
        <span className={styles.mask}>
          <span className={styles.word}>Our</span>
        </span>{" "}
        <span className={styles.mask}>
          <span className={`${styles.word} ${styles.d1}`}>Services</span>
        </span>
      </h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div className={styles.cardMask} key={service.id}>
          <a
            className={`${styles.card} ${styles.cardLift} ${cardDelays[index]}`}
            href="/contact"
            data-ink={service.ink}
            style={{ "--wash": service.wash }}
          >
            <span className={styles.wash} aria-hidden="true" />
            <div className={styles.top}>
              <span className={styles.icon}>
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className={styles.title}>{service.title}</h3>
            </div>
            <div className={styles.bottom}>
              <p className={styles.summary}>{service.summary}</p>
              <span className={styles.cta}>
                <span className={styles.sheen} aria-hidden="true" />
                <span className={styles.ctaLabel}>Learn more</span>
              </span>
            </div>
          </a>
          </div>
        ))}
      </div>
    </section>
  );
}
