import styles from "./Partner.module.css";

export default function Partner() {
  return (
    <section className={styles.section} aria-labelledby="partner-title">
      <img
        className={styles.portrait}
        src="/team/abdirsak.jpg?v=2"
        alt="Abdirsak M. Abdi, CEO of Kor"
      />
      <div className={styles.copy}>
        <img className={styles.mark} src="/Logos/Untitled.svg" alt="" />
        <h2 id="partner-title" className={styles.title}>
          Your partner to reach your destination
        </h2>
        <p className={styles.who} id="partner-name">
          Abdirsak M. Abdi, CEO of Kor
        </p>
        <p className={styles.statement}>
          Making a great product requires a balanced user interface, engineering
          you can trust, and an iterative way of working.{" "}
          <span className={styles.brand}>KOR Digital</span> is your partner to
          reach your destination.
        </p>
      </div>
    </section>
  );
}
