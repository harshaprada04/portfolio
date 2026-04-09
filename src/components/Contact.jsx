import { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "harshapradaadiga@gmail.com",
    href: "mailto:harshapradaadiga@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 96631 69152",
    href: "tel:+919663169152",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    href: null,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/harshaprada-adiga",
    href: "https://www.linkedin.com/in/harshaprada-adiga",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "github.com/harshaprada04",
    href: "https://github.com/harshaprada04",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    emailjs
      .send(
        "service_b56743j",
        "template_k0uffym",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "bTkVSuCQDbl9hnWL8",
      )
      .then(
        () => {
          setSent(true);
          setTimeout(() => setSent(false), 3000);
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Email failed:", error);
        },
      );
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="section-inner">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Let's work together</h2>
        <p className="section-sub">
          Open to full-time frontend roles, consulting, and interesting
          collaborations.
        </p>
        <div className={styles.grid}>
          <div className={styles.info}>
            {contactInfo.map((c) => (
              <div key={c.label} className={styles.infoItem}>
                <div className={styles.infoIcon}>{c.icon}</div>
                <div>
                  <div className={styles.infoLabel}>{c.label}</div>
                  {c.href ? (
                    <a
                      href={c.href}
                      className={styles.infoValue}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className={styles.infoValue}>{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.form}>
            <div className={styles.row}>
              <input
                className={styles.input}
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className={styles.input}
                name="email"
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <input
              className={styles.input}
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
            />
            <button
              className={`${styles.btn} ${sent ? styles.sent : ""}`}
              onClick={handleSubmit}
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
