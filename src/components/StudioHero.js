import styles from "./StudioHero.module.css";

export default function StudioHero({ title, overview }) {
  if (!overview) return null;

  const bridge = overview.bridge || "turns ideas into";
  const emphasisWord = overview.emphasisWord || "shipped";
  const closer = overview.closer || "products";
  const headline = `${title} ${bridge} ${emphasisWord} ${closer}`;

  return (
    <section className={styles.manifesto} aria-labelledby="engine-title">
      <div className={styles.manifestoInner}>
        <h1 id="engine-title" className={styles.manifestoTitle}>
          {title} {bridge} <span className={styles.emphasis}>{emphasisWord}</span>{" "}
          {closer}
        </h1>
        <p className={styles.support}>{overview.body}</p>
        <a className={styles.cta} href="/contact">
          Get in touch
          <span aria-hidden="true">→</span>
        </a>
        <span className={styles.srOnly}>
          {headline}. {overview.summary}
        </span>
      </div>
    </section>
  );
}
