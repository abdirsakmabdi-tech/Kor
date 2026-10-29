/* Saved snapshot of the services section.
   Equal-width cards, fixed height. Title and image at rest.
   On hover the image hides and the description is centered, left-aligned.
   Card width and height do not change.
   Live files: src/components/Services.js and Services.module.css.
   Restore by copying these two files back over those. */

import styles from "./Services.module.css";

const services = [
  {
    id: "design",
    title: "Product Design",
    tone: "studio",
    summary:
      "Shape products people understand on the first try. We design the journeys, interfaces, and systems a team can keep shipping.",
    lead: "People expect products that feel personal, clear, and quick to learn. We design the product itself: the flows, the interface, and the system that keeps every release consistent. Design sits with engineering, so what is drawn is what gets built.",
    work: [
      {
        title: "Journeys",
        text: "Map the moments that matter and remove the steps that get in the way.",
      },
      {
        title: "Interface",
        text: "Screens, states, and motion that make a complex product feel simple.",
      },
      {
        title: "Design systems",
        text: "Components, tokens, and rules every squad can reuse.",
      },
      {
        title: "Evidence",
        text: "Test with real use, including accessibility, before the build locks in.",
      },
    ],
    changes: [
      "A product people can finish without a guide",
      "One design language across every surface",
      "A system that grows with the product, instead of a redesign every year",
    ],
  },
  {
    id: "strategy",
    title: "Product Strategy",
    tone: "paper",
    summary:
      "Decide what to build, who it is for, and why it wins. Vision, bets, and an operating model the company can fund.",
    lead: "Strategy is a set of choices: which problems to own, which to leave, and how the organization will deliver. We connect customer need, commercial goals, and technical reality into a vision, a roadmap, and the operating model that keeps those choices alive.",
    work: [
      {
        title: "Vision",
        text: "Where the product should stand in market, and the bets that get it there.",
      },
      {
        title: "Roadmap",
        text: "Priorities tied to outcomes, with the tradeoffs written down.",
      },
      {
        title: "Operating model",
        text: "Teams, decision rights, and the cadence that turns a plan into a practice.",
      },
      {
        title: "Where AI belongs",
        text: "The places intelligence changes the offer, the workflow, or the cost to serve.",
      },
    ],
    changes: [
      "Leaders aligned on what not to build",
      "A roadmap design, engineering, and the business can run together",
      "Faster decisions, because ownership is named",
    ],
  },
  {
    id: "software",
    title: "Software Development",
    tone: "signal",
    summary:
      "Build the product in software that is reliable and ready to change. Engineering works with design from the first release.",
    lead: "The product is the software. We design, build, and run the systems behind it: interfaces, services, data, and a release practice that lets a team ship every week. Quality is part of the way of working, not a gate at the end.",
    work: [
      {
        title: "Product engineering",
        text: "Web and application development, with the design system as the source of truth.",
      },
      {
        title: "Services and data",
        text: "APIs and connections into the systems the business already runs.",
      },
      {
        title: "Release",
        text: "Testing, performance, and a path to production the team trusts.",
      },
      {
        title: "Assisted delivery",
        text: "AI used on the work that repeats, reviewed by the people who own the product.",
      },
    ],
    changes: [
      "A steady release cadence",
      "Software the next team can extend",
      "Systems you can see, so incidents are rare and short",
    ],
  },
  {
    id: "platform",
    title: "Platform Engineering",
    tone: "field",
    summary:
      "A shared platform product teams launch on. Composable services and guardrails that turn a one-off build into something reusable.",
    lead: "Growing on products takes a platform, not a pile of projects. We engineer composable platforms: the services, pipelines, and developer experience that let teams ship in weeks. The platform is itself a product, with users, a roadmap, and a standard of reliability.",
    work: [
      {
        title: "Architecture",
        text: "Composable services shaped around the products you intend to launch.",
      },
      {
        title: "Developer experience",
        text: "Environments and self-service, so squads are not waiting on a central queue.",
      },
      {
        title: "Guardrails",
        text: "Identity, data, and uptime built into the path to production.",
      },
      {
        title: "Room to extend",
        text: "Partners, data, and new capabilities without a rewrite.",
      },
    ],
    changes: [
      "New features in market in weeks",
      "Shared capability instead of another one-off build",
      "A base the business can add products to",
    ],
  },
];

function DesignArt() {
  return (
    <svg className={styles.artSvg} viewBox="0 0 360 280" aria-hidden="true">
      <rect x="28" y="8" width="196" height="230" rx="6" fill="#ffffff" />
      <rect x="28" y="8" width="196" height="28" fill="#111111" />
      <rect x="44" y="56" width="108" height="8" fill="#111111" />
      <rect x="44" y="74" width="72" height="6" fill="#c9c4ba" />
      <rect x="44" y="98" width="164" height="72" fill="#0249d9" />
      <rect x="44" y="184" width="76" height="28" fill="#feed2b" />
      <rect x="168" y="48" width="164" height="188" rx="6" fill="#ffffff" />
      <rect x="184" y="68" width="96" height="8" fill="#111111" />
      <rect x="184" y="88" width="132" height="6" fill="#d5d0c6" />
      <rect x="184" y="102" width="110" height="6" fill="#d5d0c6" />
      <circle cx="196" cy="150" r="18" fill="#0249d9" />
      <rect x="224" y="140" width="88" height="8" fill="#111111" />
      <rect x="224" y="156" width="64" height="6" fill="#d5d0c6" />
      <rect x="184" y="186" width="132" height="28" fill="#111111" />
    </svg>
  );
}

function StrategyArt() {
  return (
    <svg className={styles.artSvg} viewBox="0 0 360 280" aria-hidden="true">
      <rect width="360" height="280" fill="#111111" />
      <rect x="48" y="168" width="52" height="72" fill="#3a3a3a" />
      <rect x="116" y="124" width="52" height="116" fill="#0249d9" />
      <rect x="184" y="78" width="52" height="162" fill="#feed2b" />
      <rect x="252" y="36" width="52" height="204" fill="#ffffff" />
      <path
        d="M40 248h280"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        opacity="0.35"
      />
    </svg>
  );
}

function SoftwareArt() {
  return (
    <svg className={styles.artSvg} viewBox="0 0 360 640" aria-hidden="true">
      <defs>
        <linearGradient id="kor-signal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14082a" />
          <stop offset="0.45" stopColor="#24125a" />
          <stop offset="1" stopColor="#06245f" />
        </linearGradient>
      </defs>
      <rect width="360" height="640" fill="url(#kor-signal)" />
      <path
        d="M-20 430 C 40 390, 80 470, 140 430 S 240 360, 320 410 400 470, 420 420"
        fill="none"
        stroke="#7af0ff"
        strokeWidth="3"
      />
      <path
        d="M-20 470 C 50 430, 90 520, 160 470 S 260 400, 340 450 410 510, 430 460"
        fill="none"
        stroke="#0249d9"
        strokeWidth="8"
        opacity="0.9"
      />
      <path
        d="M-10 510 C 60 470, 110 560, 180 510 S 270 450, 350 500 420 560, 440 500"
        fill="none"
        stroke="#d7b4ff"
        strokeWidth="3"
      />
      <path
        d="M-20 390 C 70 350, 120 430, 190 390 S 280 330, 360 380"
        fill="none"
        stroke="#feed2b"
        strokeWidth="2"
        opacity="0.85"
      />
    </svg>
  );
}

function PlatformArt() {
  return (
    <svg className={styles.artSvg} viewBox="0 0 360 280" aria-hidden="true">
      <path d="M20 70h320" stroke="#cfc9bf" strokeWidth="10" />
      <path d="M20 150h320" stroke="#cfc9bf" strokeWidth="10" />
      <path d="M20 230h320" stroke="#cfc9bf" strokeWidth="10" />
      <circle cx="78" cy="70" r="22" fill="#ffffff" />
      <circle cx="168" cy="70" r="22" fill="#0249d9" />
      <circle cx="250" cy="150" r="26" fill="#feed2b" />
      <circle cx="112" cy="150" r="18" fill="#ffffff" />
      <circle cx="70" cy="230" r="20" fill="#d7d2ea" />
      <circle cx="196" cy="230" r="24" fill="#ffffff" />
      <circle cx="286" cy="230" r="16" fill="#0249d9" />
    </svg>
  );
}

const artFor = {
  design: DesignArt,
  strategy: StrategyArt,
  software: SoftwareArt,
  platform: PlatformArt,
};

export default function Services() {
  return (
    <section className={styles.section} id="services" aria-labelledby="services-title">
      <div className={styles.header}>
        <h2 id="services-title">Our Services</h2>
        <a className={styles.viewAll} href="#services">
          View all
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M8 5.5 16 12 8 18.5 11.2 12Z" />
            </svg>
          </span>
        </a>
      </div>
      <div className={styles.row}>
        {services.map((service) => {
          const Art = artFor[service.id];

          return (
            <article
              key={service.id}
              className={`${styles.card} ${styles[service.tone]}`}
              tabIndex={0}
            >
              <div className={styles.art}>
                <Art />
              </div>
              <div className={styles.copy}>
                <p className={styles.kicker}>Our service</p>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.summary}>{service.summary}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
