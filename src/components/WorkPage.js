import styles from "./WorkPage.module.css";

const projects = [
  {
    id: "alliance",
    name: "Global Health Alliance",
    description: "A site where the alliance can explain its purpose and how people take part.",
    image: "/work/global-health-alliance.png?v=2",
    imageAlt: "Global Health Alliance website on a phone",
  },
  {
    id: "puntland",
    name: "Puntland Development and Investment Bank",
    description: "A public website for the bank.",
    image: "/work/puntland.png?v=1",
    imageAlt: "Puntland Development and Investment Bank website on a phone",
  },
];

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="work-page-title">
        <h1 id="work-page-title">Our work</h1>
        <p className={styles.description}>
          We design and build digital products with organizations and founders,
          from the first idea to something people actually use.
        </p>
        <div className={styles.row}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={`${styles.media} ${project.id === "alliance" ? styles.blue : styles.light}`}>
                <img src={project.image} alt={project.imageAlt} />
              </div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
