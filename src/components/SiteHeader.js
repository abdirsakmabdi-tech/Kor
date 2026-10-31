"use client";

import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";

const pageLinks = [
  { href: "/#home", label: "Home" },
  { href: "/work", label: "Our Work" },
  { href: "/#news", label: "News" },
  { href: "/#services", label: "Our Services" },
  { href: "/contact", label: "Contact" },
];

const primaryItems = [
  {
    label: "Services",
    children: ["Design & Digital Products", "Marketing", "Commerce"],
  },
  { label: "Products", href: "/#work" },
  { label: "Insights", href: "/#work" },
  {
    label: "About Us",
    children: ["Our Story", "Our Work"],
  },
  {
    label: "Careers",
    children: ["Open Roles", "Life at KOR"],
  },
];

const secondaryItems = [
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/contact#join" },
  { label: "Locations", href: "/contact#find" },
];

export default function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const [openSection, setOpenSection] = useState("");

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    setOpenSection("");
  }

  return (
    <header className={styles.header}>
      <div className={styles.subnav}>
        <div className={styles.subnavBar}>
          <a className={styles.brand} href="/" aria-label="KOR Digital home">
            <img
              className={styles.logo}
              src="/Logos/Untitled.svg"
              alt=""
            />
            <span className={styles.menuLabel}>KOR Digital</span>
          </a>
          <div className={styles.subnavEnd}>
            <nav className={styles.links} aria-label="Page">
              {pageLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  <span className={styles.menuLabel}>{link.label}</span>
                </a>
              ))}
            </nav>
            <form
              className={styles.search}
              role="search"
              onSubmit={(event) => event.preventDefault()}
            >
              {searchOpen ? (
                <input
                  className={styles.searchInput}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  autoFocus
                />
              ) : null}
              <button
                className={styles.searchButton}
                type="button"
                aria-label={searchOpen ? "Close search" : "Search"}
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen((open) => !open)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="10.5" cy="10.5" r="6.25" />
                  <path d="M15.2 15.2 20 20" />
                </svg>
              </button>
            </form>
            <button
              className={styles.subnavToggle}
              type="button"
              aria-label={pageOpen ? "Collapse navigation" : "Expand navigation"}
              aria-expanded={pageOpen}
              onClick={() => setPageOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9.5 12 15.5 18 9.5" />
              </svg>
            </button>
          </div>
        </div>
        {pageOpen ? (
          <nav className={styles.pageMenu} aria-label="Page">
            {pageLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setPageOpen(false)}>
                <span className={styles.menuLabel}>{link.label}</span>
              </a>
            ))}
          </nav>
        ) : null}
      </div>
      {menuOpen ? (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Menu">
          <div className={styles.overlayTop}>
            <button className={styles.closeButton} type="button" aria-label="Close" onClick={closeMenu}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6 18 18M18 6 6 18" />
              </svg>
            </button>
            <button className={styles.globeButton} type="button" aria-label="Language, English">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="8" />
                <path d="M4 12h16M12 4c2.2 2.4 3.3 5.1 3.3 8S14.2 17.6 12 20c-2.2-2.4-3.3-5.1-3.3-8S9.8 6.4 12 4Z" />
              </svg>
            </button>
          </div>
          <nav className={styles.menuList} aria-label="Primary">
            {primaryItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className={styles.menuRow}
                    type="button"
                    aria-expanded={openSection === item.label}
                    onClick={() =>
                      setOpenSection((current) => (current === item.label ? "" : item.label))
                    }
                  >
                    <span className={styles.menuLabel}>{item.label}</span>
                    <svg
                      className={openSection === item.label ? styles.chevronOpen : styles.chevron}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 6.5 15.5 12 9 17.5" />
                    </svg>
                  </button>
                  {openSection === item.label ? (
                    <div className={styles.subList}>
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href={child === "Our Work" ? "/work" : "/#services"}
                          onClick={closeMenu}
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <a key={item.label} className={styles.menuRow} href={item.href} onClick={closeMenu}>
                  <span className={styles.menuLabel}>{item.label}</span>
                </a>
              ),
            )}
          </nav>
          <nav className={`${styles.menuList} ${styles.secondaryList}`} aria-label="More">
            {secondaryItems.map((item) => (
              <a key={item.label} className={styles.menuRow} href={item.href} onClick={closeMenu}>
                <span className={styles.menuLabel}>{item.label}</span>
              </a>
            ))}
          </nav>
          <div className={styles.social}>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 9.5V18M6.5 6.5h.01M10.5 18v-5.2a2.2 2.2 0 0 1 4.4 0V18M14.9 12.8V18" />
              </svg>
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.2l.8-3H13V9c0-.6.4-1 1-1Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="5" width="14" height="14" rx="4" />
                <circle cx="12" cy="12" r="3.2" />
                <circle cx="16.4" cy="7.6" r="0.7" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
