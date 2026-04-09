import styles from "./Navbar.module.css";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar({ scrolled }) {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span className={styles.logoDot}>HA</span>
        <span className={styles.logoText}>Harshaprada</span>
      </div>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <button className={styles.link} onClick={() => scrollTo(l)}>
              {l}
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.cta} onClick={() => scrollTo("Contact")}>
        Hire Me
      </button>
    </nav>
  );
}
