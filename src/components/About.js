import { engines, purpose } from "@/data/engines";
import { BlocksMark, CubesMark } from "./EngineMarks";
import styles from "./About.module.css";

const marks = {
  cubes: CubesMark,
  blocks: BlocksMark,
};

export default function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.intro}>
        <h2 id="about-title" className={styles.title}>
          We are a Design-led Company
          <span> &amp; Our Purpose is</span>
        </h2>
        <p>{purpose}</p>
      </div>
      <div className={styles.cards}>
        {engines.map((engine) => {
          const Mark = marks[engine.mark];
          return (
            <a className={styles.card} href={engine.href} key={engine.id}>
              <div>
                <h3>
                  {engine.title}
                  <span className={styles.arrow} aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </h3>
                <p>{engine.lead}</p>
              </div>
              <Mark className={styles.mark} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
