import styles from "./NewsStory.module.css";

const sections = [
  {
    index: "01",
    title: "The session",
    paragraphs: [
      "KOR sat with a group of finance students from East Africa University, Garowe, and trained them on how to use AI in the work they are learning to do.",
      "It was a working room, not a stage. A trainer stood with the group, students took notes, and the time was spent trying the tools on problems a finance student already recognizes: a budget, a short case, a set of figures that has to be explained.",
    ],
  },
  {
    index: "02",
    title: "Why finance students",
    paragraphs: [
      "Finance is a discipline of documents, numbers, and decisions that someone has to stand behind. AI is fast at the first reading, the first draft, and the first comparison. It is not the person who signs the conclusion.",
      "Students who learn that difference early leave university with a skill their offices will actually use. They can move through a pile of material without handing the judgment to a model. That is the habit we came to teach.",
    ],
  },
  {
    index: "03",
    title: "What we walked through",
    paragraphs: [
      "We started with the question, not the tool. A useful prompt names the task, the period, the source, and the decision the answer has to support. “Summarize this” is too thin. “Explain what changed in cash over this period, using only these figures, and flag anything you cannot see” is a question a finance student can check.",
      "From there we used AI to turn a longer note into a short brief: what the document says, what it does not say, and what a reader would still need to ask. Students compared that brief with the original. Wherever the model smoothed over a number or invented a cause, we marked it and rewrote the line.",
      "We also practiced the check. Every figure in a draft has to be traceable to the source in front of the student. If it cannot be traced, it does not stay. A confident sentence is not evidence. The source is.",
      "The last part was care with data. Coursework can be practiced in the open. Client records, unpublished accounts, and personal information do not belong in a public tool. We talked through what can be shared, what should be removed, and why a finance office has to decide that before anyone pastes a file.",
    ],
  },
  {
    index: "04",
    title: "How the room worked",
    paragraphs: [
      "Each pass followed the same loop. Frame the task in plain language. Let AI make a first version. Read that version against the source. Correct it. Then write the conclusion in the student’s own words.",
      "Students tried this on examples they could already reason about: explaining a ratio, comparing two options in a short case, and preparing the questions they would ask before trusting a draft. The point was repetition. One good answer in the room matters less than a way of working they can repeat on the next assignment.",
    ],
  },
  {
    index: "05",
    title: "What they leave with",
    paragraphs: [
      "A student who can brief a document, draft an analysis, and refuse a number they cannot trace is ready for more than a classroom demo. The same loop holds in a bank, a finance office, a nonprofit, or a young company: use the tool for speed, keep the judgment with the person.",
      "They also leave knowing the limit. AI can propose a structure and surface a mismatch. It cannot know the local context, the missing footnote, or the consequence of being wrong. That part stays with them.",
    ],
  },
  {
    index: "06",
    title: "Why KOR is in the room",
    paragraphs: [
      "KOR designs and builds digital products with organizations and founders, including the AI that belongs inside those products. A product only works when the people closest to the work know how to use it with care.",
      "Training the finance students at EAU-Garowe is part of that. We want the next people who will read the numbers, ship the product, and explain the decision to be comfortable with the tool and unwilling to outsource the conclusion.",
    ],
  },
];

export default function NewsStory() {
  return (
    <article className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.kicker}>News</p>
        <h1>Training finance students how to use AI</h1>
        <p className={styles.lead}>
          We at KOR trained a group of finance students from EAU-Garowe on how
          to use AI: how to ask, how to check, and how to keep the decision
          with the person doing the work.
        </p>
      </header>

      <figure className={styles.figure}>
        <img
          src="/news/eau-garowe-ai.jpg"
          alt="A KOR trainer speaking with finance students seated in a classroom at EAU-Garowe"
        />
      </figure>

      <div className={styles.story}>
        {sections.map((section) => (
          <section key={section.index} className={styles.block}>
            <p className={styles.index}>{section.index}</p>
            <div>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className={styles.back}>
        <a href="/#news">Back to news</a>
      </p>
    </article>
  );
}
