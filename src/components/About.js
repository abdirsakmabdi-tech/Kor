"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

const titleWords = [
  "We",
  "are",
  "a",
  "Design-led",
  "Company",
  "&",
  "Our",
  "Purpose",
  "is",
];

const engines = [
  {
    id: "studio",
    label: "Engine A",
    title: "Product Studio",
    note: "Client services",
    lead: "We work with organizations to discover, shape, design and build digital products.",
    points: [
      [
        "Product Discovery",
        "user research, problem validation, opportunity mapping, prototypes and tests before anyone builds.",
      ],
      [
        "Product Strategy",
        "vision, roadmap, prioritization, positioning, metrics, business model.",
      ],
      [
        "UX and Product Design",
        "simple, clear, accessible interfaces; design systems; usability testing.",
      ],
      [
        "AI Adoption for Organizations",
        "finding the right AI use cases, designing human-friendly AI workflows, pilots, training teams, governance and responsible-use guidelines.",
      ],
      [
        "Software Development",
        "web and mobile apps, internal tools, integrations, AI-powered features.",
      ],
    ],
  },
  {
    id: "venture",
    label: "Engine B",
    title: "Venture Builder",
    note: "Our own products",
    lead: "We build, run and distribute our own apps as independent businesses.",
    points: [
      ["Generate ideas", "from problems we see in client work and in the market."],
      ["Validate fast", "with our own discovery method before writing much code."],
      ["Build an MVP", "launch, measure, then scale or stop."],
      ["Operate the winners", "support, growth, distribution and monetization."],
    ],
  },
];

function EngineIcon({ id }) {
  if (id === "studio") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7.5 12 4l8 3.5-8 3.5L4 7.5Z" />
        <path d="M4 12l8 3.5L20 12" />
        <path d="M4 16.5 12 20l8-3.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

export default function About() {
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
      { threshold: 0.15 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={play ? `${styles.section} ${styles.play}` : styles.section}
      id="about"
      aria-labelledby="about-title"
      ref={sectionRef}
    >
      <div className={styles.layout}>
        <div className={styles.copy}>
          <h2 id="about-title" className={styles.title}>
            {titleWords.map((word, index) => (
              <span className={styles.mask} key={word}>
                <span className={styles.word} style={{ animationDelay: `${index * 0.12}s` }}>
                  {word}
                </span>
              </span>
            ))}
          </h2>
          <p className={styles.description}>
            <span className={styles.maskBlock}>
              <span
                className={styles.line}
                style={{ animationDelay: `${titleWords.length * 0.12}s` }}
              >
                Make digital products easy to use, and help organizations and founders
                turn ideas into products people actually adopt.
              </span>
            </span>
          </p>
        </div>
        <div className={styles.stack}>
          {engines.map((engine, index) => (
            <div className={styles.cardMask} key={engine.id}>
            <article
              className={`${styles.card} ${styles[engine.id]} ${styles.cardRise}`}
              style={{ animationDelay: `${1.2 + index * 0.22}s` }}
            >
              <div className={styles.cardHead}>
                <span className={styles.icon}>
                  <EngineIcon id={engine.id} />
                </span>
                <div>
                  <p className={styles.engineLabel}>{engine.label}</p>
                  <h3>{engine.title}</h3>
                  <p className={styles.note}>{engine.note}</p>
                </div>
              </div>
              <p className={styles.lead}>{engine.lead}</p>
              <ul className={styles.points}>
                {engine.points.map(([name, detail]) => (
                  <li key={name}>
                    <strong>{name}:</strong> {detail}
                  </li>
                ))}
              </ul>
            </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
