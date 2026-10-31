"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactPage.module.css";

const paths = [
  {
    id: "ask",
    title: "Ask us",
    text: "For a product, a partnership, or a question, send a note and we will reply.",
    href: "#message",
    label: "Contact us",
    icon: "ask",
  },
  {
    id: "join",
    title: "Join us",
    text: "Bring ideas, craft, and care. Tell us what you want to build with the team.",
    href: "#message",
    label: "Explore roles",
    icon: "join",
  },
  {
    id: "find",
    title: "Find us",
    text: "We work with organizations and founders wherever the product needs to be.",
    href: "#find",
    label: "How we work",
    icon: "find",
  },
];

function PathIcon({ name }) {
  if (name === "ask") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 22c0-6 5-11 14-11s14 5 14 11-5 11-14 11h-2l-8 6v-6c-2.4-1.6-4-4.1-4-11Z" />
        <path d="M20 22h.01M24 22h.01M28 22h.01" />
      </svg>
    );
  }

  if (name === "join") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="16" r="6" />
        <path d="M12 36c1.6-6 6.2-9 12-9s10.4 3 12 9" />
        <path d="M34 16h8M38 12v8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 42s12-11 12-20a12 12 0 1 0-24 0c0 9 12 20 12 20Z" />
      <circle cx="24" cy="22" r="4" />
    </svg>
  );
}

const leaders = [
  {
    name: "Abdirsak M. Abdi",
    role: "CEO",
    image: "/team/abdirsak.jpg?v=2",
  },
  {
    name: "Ahmed Khalid",
    role: "Co-founder",
  },
  {
    name: "Sead Salam",
    role: "Contributor",
  },
  {
    name: "Ahmed Jama",
    role: "Contributor",
  },
  {
    name: "Abdirshid Isse",
    role: "Contributor",
  },
];

const inbox = "Abdirsak.m.abdi@gmail.com";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const filmRef = useRef(null);

  useEffect(() => {
    const film = filmRef.current;
    if (!film) return undefined;

    const keepPlaying = () => {
      if (document.hidden || !film.paused) return;
      film.play().catch(() => {});
    };

    film.loop = true;
    keepPlaying();
    film.addEventListener("ended", keepPlaying);
    document.addEventListener("visibilitychange", keepPlaying);

    return () => {
      film.removeEventListener("ended", keepPlaying);
      document.removeEventListener("visibilitychange", keepPlaying);
    };
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (String(data.get("_honey") || "").trim()) {
      setSent(true);
      return;
    }

    const subject = encodeURIComponent(`KOR Digital message from ${firstName} ${lastName}`);
    const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`);
    const compose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(inbox)}&su=${subject}&body=${body}`;
    const opened = window.open(compose, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = compose;
    }
    setSent(true);
  }

  return (
    <div className={styles.page}>
      <section className={styles.welcome} aria-labelledby="contact-welcome">
        <h1 id="contact-welcome">
          Welcome to where things get interesting.
          <br />
          One global team. Where conversations become collaborations.
          <br />
          And together, we shape what’s next.
        </h1>
        <div className={styles.location}>
          <h2>Our Location</h2>
          <p>Garowe, Puntland Somalia</p>
        </div>
      </section>

      <div className={styles.film}>
        <video ref={filmRef} autoPlay muted loop playsInline preload="auto" aria-label="Buundo Garoowe">
          <source src="/video/contact.mp4" type="video/mp4" />
        </video>
      </div>

      <section className={styles.intro} aria-labelledby="contact-title">
        <h2 id="contact-title">Get in touch</h2>
        <div className={styles.paths}>
          {paths.map((path) => (
            <article key={path.id} id={path.id === "find" ? undefined : path.id}>
              <span className={styles.icon}>
                <PathIcon name={path.icon} />
              </span>
              <h2>{path.title}</h2>
              <p>{path.text}</p>
              <a className={styles.pathLink} href={path.href}>
                {path.label}
                <span aria-hidden="true">›</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.quote} aria-label="From the CEO">
        <img src="/team/abdirsak.jpg?v=2" alt="Abdirsak M. Abdi, CEO" />
        <div className={styles.quoteCopy}>
          <p>
            Making a great product requires a balanced user interface, engineering
            you can trust, and an iterative way of working. KOR Digital is your
            partner to reach your destination.
          </p>
          <p className={styles.byline}>Abdirsak M. Abdi / CEO</p>
        </div>
      </section>

      <section className={styles.leaders} aria-labelledby="leaders-title">
        <h2 id="leaders-title">Our leaders</h2>
        <div className={styles.leaderList}>
          {leaders.map((leader) => (
            <article className={styles.leader} key={leader.name}>
              {leader.image ? (
                <img src={leader.image} alt="" />
              ) : (
                <span className={styles.emptyPhoto} aria-hidden="true" />
              )}
              <div>
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.message} id="message" aria-labelledby="message-title">
        <h2 id="message-title">Send a message</h2>
        {sent ? (
          <p className={styles.thanks} role="status">
            Gmail is opening with this note addressed to us. Send it there and we will reply.
          </p>
        ) : (
          <form className={styles.form} onSubmit={onSubmit}>
            <input
              className={styles.honey}
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <label>
              First name
              <input name="firstName" type="text" autoComplete="given-name" required />
            </label>
            <label>
              Last name
              <input name="lastName" type="text" autoComplete="family-name" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className={styles.wide}>
              How can we help you?
              <textarea name="message" rows={5} required />
            </label>
            <button className={styles.submit} type="submit">
              Submit
            </button>
          </form>
        )}
      </section>

      <section className={styles.find} id="find" aria-labelledby="find-title">
        <h2 id="find-title">Where we work</h2>
        <p>
          KOR Digital partners with teams remotely and on site. Start with a
          message and we will take it from there.
        </p>
      </section>
    </div>
  );
}
