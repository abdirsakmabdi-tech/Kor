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

export default function About() {
  const sectionRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [activeId, setActiveId] = useState(engines[0].id);

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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let frame = 0;

    const update = () => {
      const marker = window.innerHeight * 0.38;
      let current = engines[0].id;
      section.querySelectorAll("[data-engine]").forEach((panel) => {
        if (panel.getBoundingClientRect().top <= marker) {
          current = panel.dataset.engine;
        }
      });
      setActiveId(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function showEngine(id) {
    const panel = document.getElementById(`about-panel-${id}`);
    if (!panel) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    panel.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

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
        </div>
        <div className={styles.explorer}>
          <div className={styles.tabs} role="tablist" aria-label="How we work">
            {engines.map((engine) => {
              const selected = engine.id === activeId;
              return (
                <button
                  key={engine.id}
                  className={selected ? `${styles.tab} ${styles.tabActive}` : styles.tab}
                  type="button"
                  role="tab"
                  id={`about-tab-${engine.id}`}
                  aria-selected={selected}
                  aria-controls={`about-panel-${engine.id}`}
                  onClick={() => showEngine(engine.id)}
                >
                  <span>{engine.title}</span>
                  {selected ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  ) : (
                    <span className={styles.tabSpacer} aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
          <div className={styles.panels}>
            {engines.map((engine) => (
              <article
                className={styles.detail}
                id={`about-panel-${engine.id}`}
                key={engine.id}
                data-engine={engine.id}
                aria-labelledby={`about-tab-${engine.id}`}
              >
                <h3>{engine.title}</h3>
                <p className={styles.lead}>{engine.lead}</p>
                <ul className={styles.points}>
                  {engine.points.map(([name]) => (
                    <li key={name}>
                      <span>{name}</span>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
