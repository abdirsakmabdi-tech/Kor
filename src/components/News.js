import styles from "./News.module.css";

export default function News() {
  return (
    <section className={styles.section} id="news" aria-labelledby="news-title">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <h2 id="news-title" className={styles.heading}>
            News
          </h2>
          <p>Learn more about our events and news.</p>
        </div>
        <a className={styles.feature} href="/news/training-finance-students">
          <img
            src="/news/eau-garowe-ai.jpg"
            alt="A KOR trainer speaking with finance students from EAU-Garowe"
          />
          <h3>Training finance students how to use AI</h3>
        </a>
      </div>
    </section>
  );
}
