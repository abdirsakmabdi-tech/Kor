"use client";

import { useEffect, useRef } from "react";
import styles from "./News.module.css";

const cards = [
  {
    id: "training",
    kind: "photo",
    href: "/news/training-finance-students",
    title: "Training finance students how to use AI",
    image: "/news/eau-garowe-ai.jpg",
    imageAlt: "A KOR trainer speaking with finance students from EAU-Garowe",
  },
  {
    id: "product",
    kind: "title",
    title: "AI in Product Development",
  },
  {
    id: "adapt",
    kind: "title",
    title: "How to adapt AI in your organization",
  },
];

export default function News() {
  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const travelRef = useRef(0);

  const measure = () => {
    const track = trackRef.current;
    const frame = frameRef.current;
    if (!track || !frame) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 16;
    let width = 0;
    for (const card of track.children) {
      width += card.getBoundingClientRect().width;
    }
    width += gap * Math.max(track.children.length - 1, 0);
    travelRef.current = Math.max(width - frame.clientWidth, 0);
  };

  const place = (value) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = (Number(value) / 100) * travelRef.current;
    track.style.transform = `translate3d(${-amount}px, 0, 0)`;
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className={styles.section} id="news" aria-labelledby="news-title">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <h2 id="news-title" className={styles.heading}>
            News
          </h2>
          <p>Learn more about our events and news.</p>
        </div>
        <div className={styles.stories}>
          <div className={styles.window} ref={frameRef}>
            <div className={styles.track} ref={trackRef}>
              {cards.map((card) =>
                card.kind === "photo" ? (
                  <a key={card.id} className={styles.feature} href={card.href}>
                    <img src={card.image} alt={card.imageAlt} />
                    <h3>{card.title}</h3>
                  </a>
                ) : (
                  <article key={card.id} className={styles.textCard}>
                    <h3>{card.title}</h3>
                  </article>
                ),
              )}
            </div>
          </div>
          <input
            className={styles.slider}
            type="range"
            min="0"
            max="100"
            step="0.1"
            defaultValue="0"
            aria-label="Slide through news stories"
            onInput={(event) => {
              measure();
              place(event.target.value);
            }}
          />
        </div>
      </div>
    </section>
  );
}
