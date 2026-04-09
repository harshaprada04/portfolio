import styles from "./Projects.module.css";

const projects = [
  {
    icon: "🛠️",
    title: "App Builder – Configurable Application Platform",
    desc: "Built a configurable platform enabling users to create custom application instances by selecting data sources, features, and branding elements. Designed modular UI architecture with dynamic configuration and theme management for multi-tenant applications.",
    tags: [
      "React.js",
      "TypeScript",
      "Tanstack Query",
      "Preact Signal",
      "SCSS",
      "Jest",
    ],
    color: "purple",
  },
  {
    icon: "📊",
    title: "App Instance – Marketing Intelligence Dashboard",
    desc: "Built a customizable marketing intelligence dashboard dynamically configured from App Builder (theme, branding, navigation, and features). Implemented an AI-powered chat interface for LLM-based search and developed feed management handling 60k+ records with pagination, filtering, and periodic data refetching for real-time insights.",
    tags: [
      "React.js",
      "TanStack Query",
      "TypeScript",
      "Custom Hooks",
      "i18n",
      "Zustand",
      "Zod",
    ],
    color: "blue",
  },
  {
    icon: "🏏",
    title: "XtraPlayer – Real-Time Cricket Scoring Platform",
    desc: "Built a cross-platform real-time cricket scoring application with live match updates using WebSocket integration. Implemented features like match setup, toss workflows, and post-match analytics with interactive visualizations. Integrated OTP-based authentication, push notifications, and in-app purchase modules, ensuring seamless state synchronization across devices using Redux.",
    tags: [
      "React.js",
      "Redux",
      "WebSocket",
      "REST APIs",
      "Chart.js",
      "Stripes",
    ],
    color: "green",
  },
  {
    icon: "🗺️",
    title: "HomeTown Maps – Location-Based Business Platform",
    desc: "Built a location-based mobile application for discovering businesses with role-based access for users and business owners. Implemented authentication flows, dynamic UI rendering, and interactive map views with city-based filtering and business onboarding workflows. Managed global state using Redux and ensured smooth navigation and user experience across the app.",
    tags: [
      "React Native",
      "TypeScript",
      "React.js",
      "Redux",
      "Google Maps API",
      "Jest",
    ],
    color: "teal",
  },
  {
    icon: "👕",
    title: "Digital Wardrobe Platform",
    desc: "Developed a platform for managing and organizing personal apparel collections. Built a recommendation system for outfit suggestions based on user preferences, style history, and weather data. Implemented real-time chat for stylist interaction and developed a color detection system with tagging features to improve search accuracy and user experience.",
    tags: [
      "React Native",
      "JavaScript",
      "Context API",
      "MirrorFly Sdk",
      "WeatherKit",
    ],
    color: "purple",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-inner">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-sub">
          A selection of production projects and personal work.
        </p>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className={`${styles.card} ${styles[p.color]}`}>
              <div className={`${styles.icon} ${styles[p.color + "Icon"]}`}>
                {p.icon}
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
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
