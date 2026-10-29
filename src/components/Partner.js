import styles from "./Partner.module.css";

export default function Partner() {
  return (
    <section className={styles.section} aria-labelledby="partner-name">
      <img
        className={styles.portrait}
        src="/team/abdirsak.jpg?v=2"
        alt="Abdirsak M. Abdi, CEO of Kor"
      />
      <div className={styles.copy}>
        <p className={styles.statement}>
          Making a great product requires a balanced user interface, engineering
          you can trust, and an iterative way of working.{" "}
          <span className={styles.brand}>KOR Digital</span> is your
          partner to reach your destination.
        </p>
        <p className={styles.person} id="partner-name">
          Abdirsak M. Abdi
        </p>
        <p className={styles.role}>CEO of Kor</p>
      </div>
    </section>
  );
}
