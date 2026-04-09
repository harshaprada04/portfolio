import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Consultant – Frontend Engineer",
    company: "NuSummit · Stagwell Marketing Cloud",
    date: "Aug 2025 – Present · Bengaluru",
    badge: "Current",
    color: "blue",
    points: [
      "Developed scalable frontend features for a marketing intelligence platform aggregating social media and news data across multiple sources.",
      "Built an AI-powered chat interface integrating React with FastAPI and LLM-based services, enabling real-time user interaction with dynamic responses.",
      "Optimized data fetching using TanStack Query, reducing redundant API calls and improving UI responsiveness across data-heavy views.",
      "Designed and developed feed monitoring dashboards handling large datasets with infinite scroll, pagination, debounced search, and localization support.",
      "Implemented dynamic theming using CSS variables to support multi-tenant white-label applications with runtime configuration.",
      "Architected reusable component patterns and custom hooks to separate business logic from UI, improving code maintainability and scalability.",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "SCSS",
      "WebSocket",
      "Jest",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "CognitiveClouds",
    date: "Jul 2022 – Nov 2024 · Bengaluru",
    badge: "2 yrs 5 mo",
    color: "green",
    points: [
      "Developed XtraPlayer, a real-time cricket scoring platform with WebSocket-based live updates and analytics dashboards.",
      "Built HomeTown Maps, a location-based platform with role-based authentication and map-based UI features.",
      "Improved application performance by ~10% using code splitting, lazy loading, and memoization techniques.",
      "Achieved 85%+ unit test coverage and reduced code duplication through reusable components and custom hooks.",
      "Refactored legacy modules and consolidated feature code into reusable components, improving maintainability and reducing duplication.",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "React Native",
      "Redux",
      "WebSocket",
      "Tailwind CSS",
    ],
  },
  {
    role: "Design Engineer",
    company: "Ashwamedha Energy and Infratech Pvt Ltd",
    date: "Mar 2019 – Dec 2020 · Siddapura",
    badge: "1 yr 10 mo",
    color: "orange",
    points: [
      "Improved solar plant efficiency by ~15% through simulation-based optimization using SAM software.",
      "Achieved ~10% cost savings by optimizing procurement and negotiating with vendors.",
      "Contributed to the design and execution of a 2MW solar plant in collaboration with L&T.",
      "Collaborated with cross-functional teams to resolve design challenges and improve project delivery timelines.",
    ],
    tech: [
      "SAM Software",
      "Solar Design",
      "Procurement",
      "Engineering Analysis",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="section-inner">
        <span className="section-eyebrow">Work Experience</span>
        <h2 className="section-title">Where I've worked</h2>
        <p className="section-sub">
          My professional journey building real-world products.
        </p>
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.role} className={styles.item}>
              <div className={`${styles.dot} ${styles[exp.color]}`} />
              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <div className={styles.role}>{exp.role}</div>
                    <div
                      className={`${styles.company} ${styles[exp.color + "Text"]}`}
                    >
                      {exp.company}
                    </div>
                    <div className={styles.date}>{exp.date}</div>
                  </div>
                  <span
                    className={`${styles.badge} ${styles[exp.color + "Badge"]}`}
                  >
                    {exp.badge}
                  </span>
                </div>
                <ul className={styles.points}>
                  {exp.points.map((p) => (
                    <li key={p}>
                      <span className={styles.bullet}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className={styles.tech}>
                  {exp.tech.map((t) => (
                    <span key={t} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
