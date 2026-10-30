import StudioHero from "./StudioHero";
import styles from "./EnginePage.module.css";

const typedLines = {
  studio: "\nto discover, shape\nand build",
  venture: "\nto build, run\nand distribute",
};

export default function EnginePage({ engine }) {
  return (
    <div className={engine.tone === "blue" ? styles.blue : styles.dark}>
      <StudioHero
        title={engine.title}
        typed={typedLines[engine.id]}
        lead={engine.lead}
        mark={engine.mark}
      />

      <section className={styles.work} aria-labelledby="engine-work">
        <h2 id="engine-work">
          {engine.id === "studio" ? "How the Product Studio works" : "How the Venture Builder works"}
        </h2>
        <ol className={engine.points.length > 4 ? styles.grid : styles.columns}>
          {engine.points.map((point, index) => (
            <li key={point.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{point.name}</h3>
              <p>{point.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.close} aria-labelledby="engine-close">
        <h2 id="engine-close">Start with a message and we will take it from there.</h2>
        <a className={styles.cta} href="/contact">
          Get in touch
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  );
}
