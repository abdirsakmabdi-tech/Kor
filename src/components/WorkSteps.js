import styles from "./WorkSteps.module.css";

const steps = [
  {
    title: "Design",
    text: "We find the right problem first, then shape a product people can understand.",
    points: ["Product discovery", "Product strategy", "UX and product design"],
  },
  {
    title: "Build",
    text: "We turn that shape into software a team can keep shipping, including the AI that belongs in it.",
    points: ["Web and mobile apps", "Internal tools and integrations", "AI-powered features"],
  },
  {
    title: "Ship",
    text: "We launch something people can adopt, from a first version to a product that is ready to run.",
    points: ["MVP launch", "Design systems", "Cloud foundations"],
  },
  {
    title: "Iterate",
    text: "We measure what is live, then improve it, scale it, or stop.",
    points: ["Roadmaps and metrics", "Growth and distribution", "Support and monetization"],
  },
  {
    title: "Talk to users",
    text: "We stay with the people who use the product, before the build and after it ships.",
    points: ["User research", "Prototypes and tests", "Usability testing"],
  },
];

export default function WorkSteps() {
  return (
    <section className={styles.section} aria-labelledby="work-steps-title">
      <h2 id="work-steps-title" className={styles.heading}>
        How we ship products
      </h2>
      <p className={styles.intro}>
        We make digital products easy to use, and help organizations and founders
        turn ideas into products people actually adopt.
      </p>
      <ol className={styles.list}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <div className={styles.body}>
              <p>{step.text}</p>
              <ul>
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
