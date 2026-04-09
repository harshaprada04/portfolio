import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>
      <div className={`section-inner ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.badge}>⚡ Available for Opportunities</span>
          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.name}>Harshaprada</span>
            <br />
            <span className={styles.role}>
              Frontend Engineer | React.js | TypeScript
            </span>
          </h1>
          <p className={styles.sub}>
            Frontend Engineer with 3+ years of experience building scalable,
            high-performance applications using React.js and TypeScript.
            Experienced in real-time systems, optimizing UI performance, and
            developing AI-driven user interfaces.
          </p>
          <div className={styles.btns}>
            <button
              className={styles.btnPrimary}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch →
            </button>
            <button
              className={styles.btnOutline}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </button>
            <a
              href="/Harshaprada_Adiga_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              Download Resume ↓
            </a>
          </div>
          <div className={styles.stats}>
            {[
              { num: "3+", label: "Years Experience" },
              { num: "5+", label: "Projects Shipped" },
              { num: "30+", label: "Real-time Features Built" },
              { num: "High", label: "Stakeholder Satisfaction" },
            ].map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.avatar}>
            <span>HA</span>
            <div className={styles.avatarRing} />
          </div>
          <div className={styles.floatCard1}>
            <span>⚛️</span> React.js Expert
          </div>
          <div className={styles.floatCard2}>
            <span>🤖</span> AI Interfaces
          </div>
        </div>
      </div>
    </section>
  );
}
