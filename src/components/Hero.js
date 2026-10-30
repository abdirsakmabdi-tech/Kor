import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <video
        className={styles.video}
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className={styles.panel}>
        <h1 className={styles.headline} id="hero-title">
          <span className={styles.revealBlock}>
            <span className={styles.riseBlock}>
              At KOR Digital we combine{" "}
              <span className={styles.emphasis}>business and technology</span>, we{" "}
              <span className={styles.marked}>
                <svg viewBox="0 0 300 28" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 18C28 10 46 22 78 14C108 7 132 20 168 13C198 7 228 18 262 12C278 9 290 14 296 11" />
                </svg>
                design, build and ship
              </span>{" "}
              digital products, and we{" "}
              <span className={styles.emphasis}>teach founders how to run startups</span>.
            </span>
          </span>
        </h1>
        <a className={styles.cta} href="#about">
          See what we do
        </a>
      </div>
    </section>
  );
}
