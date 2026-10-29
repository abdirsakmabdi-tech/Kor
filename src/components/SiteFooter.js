import styles from "./SiteFooter.module.css";

const primaryLinks = [
  { href: "/contact#join", label: "Careers" },
  { href: "/#home", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/contact#find", label: "Locations" },
  { href: "/work", label: "Our Work" },
  { href: "/#news", label: "News" },
  { href: "/#services", label: "Our Services" },
  { href: "/contact", label: "Privacy Statement" },
  { href: "/contact", label: "Terms & Conditions" },
];

const secondaryLinks = [
  { href: "/contact", label: "Cookie Policy" },
  { href: "/contact", label: "Accessibility Statement" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <a className={styles.brand} href="/">
        <img src="/Logos/Untitled.svg" alt="" />
        <span>KOR Digital</span>
      </a>
      <ul className={styles.links}>
        {primaryLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <ul className={styles.links}>
        {secondaryLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <p className={styles.copy}>© 2026 KOR Digital. All rights reserved.</p>
    </footer>
  );
}
