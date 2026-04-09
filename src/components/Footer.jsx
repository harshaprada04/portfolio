import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>HA</div>
        <p className={styles.text}>
          Designed & built by <span>Harshaprada Adiga</span> · Frontend Engineer · React.js · TypeScript
        </p>
        <p className={styles.copy}>© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
