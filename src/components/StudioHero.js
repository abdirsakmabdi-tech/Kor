"use client";

import { useEffect, useRef } from "react";
import { BlocksMark, CubesMark } from "./EngineMarks";
import styles from "./StudioHero.module.css";

const marks = {
  cubes: CubesMark,
  blocks: BlocksMark,
};

export default function StudioHero({ title, typed, lead, mark }) {
  const runwayRef = useRef(null);
  const writerRef = useRef(null);
  const revealRef = useRef(null);
  const Mark = marks[mark];

  useEffect(() => {
    const runway = runwayRef.current;
    const writer = writerRef.current;
    const reveal = revealRef.current;
    if (!runway || !writer || !reveal) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      writer.textContent = typed.replaceAll("\n", " ");
      reveal.style.opacity = "1";
      return undefined;
    }

    let frame = 0;

    const paint = () => {
      const total = runway.offsetHeight - window.innerHeight;
      const traveled = Math.min(Math.max(-runway.getBoundingClientRect().top, 0), total);
      const progress = total > 0 ? traveled / total : 1;
      const eased = 1 - (1 - progress) ** 2;
      const count = Math.round(eased * typed.length);
      writer.innerHTML = typed.slice(0, count).replaceAll("\n", "<br />");
      reveal.style.opacity = String(Math.min(Math.max((progress - 0.72) / 0.28, 0), 1));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [typed]);

  return (
    <section className={styles.runway} ref={runwayRef} aria-labelledby="engine-title">
      <div className={styles.sticky}>
        <div className={styles.copy}>
          <div className={styles.stack}>
            <Mark className={styles.mark} />
            <h1 id="engine-title" aria-label={`${title}. ${lead}`}>
              {title}
              <span ref={writerRef} />
              <span className={styles.caret} aria-hidden="true">
                _
              </span>
            </h1>
          </div>
          <div className={styles.reveal} ref={revealRef}>
            <p>{lead}</p>
            <a className={styles.cta} href="/contact">
              Get in touch
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
