import styles from "./SiteFooter.module.css";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Our Services" },
  { href: "/product-studio", label: "Product Studio" },
  { href: "/venture-builder", label: "Venture Builder" },
  { href: "/work", label: "Our Work" },
  { href: "/#news", label: "News" },
  { href: "/contact", label: "Contact Us" },
  { href: "/contact#find", label: "Locations" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <a className={styles.brand} href="/">
        <img src="/Logos/Untitled.svg" alt="" />
        <span>KOR Digital</span>
      </a>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <p className={styles.copy}>© 2026 KOR Digital. All rights reserved.</p>
    </footer>
  );
}
