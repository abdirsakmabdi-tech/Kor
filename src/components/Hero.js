import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <h1 className={styles.headline} id="hero-title">
          <span className={styles.line}>KOR Digital turns</span>
          <span className={styles.lineItalic}>ideas into shipped products</span>
        </h1>
        <p className={styles.support}>
          We combine business and technology to design, build and ship digital
          products, and we help founders how to turn their tech ideas into
          startups.
        </p>
        <a className={styles.cta} href="/contact">
          Reach to us
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
