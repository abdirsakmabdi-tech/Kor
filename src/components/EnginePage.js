import StudioHero from "./StudioHero";
import styles from "./EnginePage.module.css";

export default function EnginePage({ engine }) {
  const processTitle =
    engine.processTitle ||
    (engine.id === "studio" ? "How the Product Studio works" : "How the Venture Builder works");
  const hasNested = engine.points.some((point) => point.items?.length);

  return (
    <div className={engine.tone === "blue" ? styles.blue : styles.dark}>
      <StudioHero title={engine.title} overview={engine.overview} />

      <section className={styles.work} aria-labelledby="engine-work">
        <h2 id="engine-work">{processTitle}</h2>
        <ol
          className={
            hasNested ? styles.steps : engine.points.length > 4 ? styles.grid : styles.columns
          }
        >
          {engine.points.map((point, index) => {
            const number = String(index + 1).padStart(2, "0");

            if (hasNested) {
              return (
                <li key={point.name}>
                  <div className={styles.stepIndex}>
                    <span className={styles.stepNumber}>{number}</span>
                    {point.note ? <span className={styles.stepNote}>{point.note}</span> : null}
                  </div>
                  <div className={styles.stepBody}>
                    <h3>{point.name}</h3>
                    <p className={styles.stepLead}>{point.detail}</p>
                    {point.items?.length ? (
                      <ul className={styles.items}>
                        {point.items.map((item) => (
                          <li key={item.name}>
                            <strong>{item.name}</strong>
                            <p>{item.detail}</p>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              );
            }

            return (
              <li key={point.name}>
                <span>{number}</span>
                <h3>{point.name}</h3>
                <p>{point.detail}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className={styles.close} aria-labelledby="engine-close">
        <h2 id="engine-close">Start with a message and we will take it from there.</h2>
        <a className={styles.cta} href="/contact">
          Get in touch
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  );
}
