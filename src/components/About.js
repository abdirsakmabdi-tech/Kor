import { engines } from "@/data/engines";
import { BlocksMark, CubesMark } from "./EngineMarks";
import styles from "./About.module.css";

const marks = {
  cubes: CubesMark,
  blocks: BlocksMark,
};

export default function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <h2 id="about-title" className={styles.srOnly}>
        About KOR Digital
      </h2>
      <div className={styles.essay}>
        <p className={styles.lead}>
          <span className={styles.drop}>A</span>t KOR Digital we run two engines. Through{" "}
          <em>Product Studio</em> we work with organizations to discover, shape, design and
          build digital products. Through <em>Venture Builder</em> we select high-potential
          startup ideas and help founders build, ship, and scale them—without burning
          capital.
        </p>
        <p className={styles.follow}>
          But the work doesn&apos;t end at launch. We stay with products and founders so
          what ships gets adopted—and what gets adopted can keep growing.
        </p>
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
