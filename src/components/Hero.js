import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <h1 className={styles.headline} id="hero-title">
          KOR Digital turns ideas into{" "}
          <span className={styles.emphasis}>shipped</span> products
        </h1>
        <p className={styles.support}>
          We combine business and technology to design, build and ship digital
          products, and we teach founders how to run startups.
        </p>
        <a
          className={styles.cta}
          href="https://wa.me/252907625513"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reach to us
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
