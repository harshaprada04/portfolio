import styles from "./Skills.module.css";

const skillGroups = [
  {
    title: "Languages",
    color: "blue",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    color: "green",
    items: ["React.js", "Next.js", "React Native", "Node.js"],
  },
  {
    title: "State Management",
    color: "purple",
    items: [
      "TanStack Query",
      "Redux",
      "Zustand",
      "Context API",
      "Preact Signals",
    ],
  },
  {
    title: "Styling",
    color: "pink",
    items: ["Tailwind CSS", "SCSS/SASS", "CSS-in-JS", "CSS Modules"],
  },
  {
    title: "Backend & APIs",
    color: "orange",
    items: ["REST APIs", "GraphQL", "WebSockets", "Express.js", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    color: "teal",
    items: ["Git", "GitHub Actions", "Vite", "Webpack", "Docker", "GCP"],
  },
  {
    title: "Testing",
    color: "red",
    items: [
      "Jest",
      "React Testing Library",
      "Unit Testing",
      "Integration Testing",
    ],
  },
  {
    title: "AI & Productivity",
    color: "yellow",
    items: ["GitHub Copilot", "GPT / Claude LLMs", "AI-Assisted PR Reviews"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="section-inner">
        <span className="section-eyebrow">Technical Skills</span>
        <h2 className="section-title">My tech stack</h2>
        <p className="section-sub">
          Technologies I use to build production-ready applications.
        </p>
        <div className={styles.grid}>
          {skillGroups.map((g) => (
            <div key={g.title} className={`${styles.card} ${styles[g.color]}`}>
              <div className={styles.cardHeader}>
                <div className={styles.dot} />
                <span className={styles.cardTitle}>{g.title}</span>
              </div>
              <div className={styles.tags}>
                {g.items.map((item) => (
                  <span key={item} className={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
