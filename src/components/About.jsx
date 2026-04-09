import styles from "./About.module.css";

const highlights = [
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Improved UI performance using code splitting, lazy loading, memoization, and efficient data fetching with TanStack Query.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Interfaces",
    desc: "Built chat-based UIs integrating React frontends with FastAPI services and LLM-driven responses.",
  },
  {
    icon: "♿",
    title: "Accessibility",
    desc: "Developed WCAG 2.1 compliant components with proper ARIA roles, keyboard navigation, and screen reader support.",
  },
  {
    icon: "🌐",
    title: "Real-Time Applications",
    desc: "Built WebSocket-based interfaces for live data updates, dashboards, and real-time user interactions.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="section-inner">
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-title">Crafting interfaces that scale</h2>
        <p className="section-sub">
          Frontend engineer focused on building scalable, high-performance
          applications with clean, maintainable code and intuitive user
          experiences.
        </p>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              I'm a Frontend Engineer with 3+ years of experience building
              scalable web and mobile applications. Currently working as a
              Consultant at NuSummit, contributing to Stagwell Marketing Cloud's
              enterprise platform.
            </p>
            <p>
              I specialize in building reusable component systems, optimizing UI
              performance, and developing real-time data-driven interfaces. I've
              worked on production features involving API integrations, caching
              strategies, and dynamic UI rendering.
            </p>
            <p>
              I'm particularly interested in building AI-powered interfaces and
              solving complex UI challenges. I enjoy improving development
              workflows and continuously learning better ways to build scalable
              frontend systems.
            </p>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location</span>
                <span>Bengaluru, India</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Experience</span>
                <span>3+ Years</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Education</span>
                <span>B.E. Mechanical, PES University</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Languages</span>
                <span>English · Hindi · Kannada</span>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            {highlights.map((h) => (
              <div key={h.title} className={styles.card}>
                <div className={styles.cardIcon}>{h.icon}</div>
                <div>
                  <div className={styles.cardTitle}>{h.title}</div>
                  <div className={styles.cardDesc}>{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
