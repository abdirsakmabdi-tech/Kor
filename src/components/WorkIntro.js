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
    name: "Bank website",
    tone: "blue",
    confidential: true,
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
              {project.confidential ? (
                <p className={styles.confidential}>Confidential</p>
              ) : (
                <img src={project.image} alt={project.imageAlt} />
              )}
            </div>
            <h3>{project.name}</h3>
            {project.description ? <p>{project.description}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
