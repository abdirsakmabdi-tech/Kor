import styles from "./WorkIntro.module.css";

const projects = [
  {
    id: "alliance",
    name: "Global Health Alliance",
    description: "A site where the alliance can explain its purpose and how people take part.",
    image: "/work/global-health-alliance.png?v=2",
    imageAlt: "Global Health Alliance website on a phone",
    tone: "blue",
  },
  {
    id: "puntland",
    name: "Puntland Development and Investment Bank",
    description: "A public website for the bank.",
    image: "/work/puntland.png?v=1",
    imageAlt: "Puntland Development and Investment Bank website on a phone",
    tone: "light",
  },
];

export default function WorkIntro() {
  return (
    <section className={styles.section} id="work" aria-labelledby="work-title">
      <h2 id="work-title" className={styles.heading}>
        Explore some of our work
      </h2>
      <div className={styles.row}>
        {projects.map((project) => (
          <article key={project.id} className={styles.card}>
            <div className={`${styles.media} ${styles[project.tone]}`}>
              <img src={project.image} alt={project.imageAlt} />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
