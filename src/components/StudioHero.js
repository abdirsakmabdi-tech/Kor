import styles from "./StudioHero.module.css";

export default function StudioHero({ title, overview }) {
  if (!overview) return null;

  const lineOne = overview.lineOne || "turns";
  const lineTwo = overview.lineTwo || "ideas into shipped products";
  const headline = `${title} ${lineOne} ${lineTwo}`;

  return (
    <section className={styles.manifesto} aria-labelledby="engine-title">
      <div className={styles.manifestoInner}>
        <h1 id="engine-title" className={styles.manifestoTitle}>
          <span className={styles.line}>
            {title} {lineOne}
          </span>
          <span className={styles.lineItalic}>{lineTwo}</span>
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
