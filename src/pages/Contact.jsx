import { motion } from "framer-motion";

const contacts = [
        { label: "email", value: "mtwchin@gmail.com", href: "mailto:mtwchin@gmail.com" },
        { label: "linkedin", value: "linkedin.com/in/matthewleechin", href: "https://linkedin.com/in/matthewleechin" },
        { label: "github", value: "github.com/mtwchin", href: "https://github.com/mtwchin" },
];

export default function Contact() {
        return (
                <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="page-container"
                        style={{ padding: "7rem 4rem 3rem 4rem", maxWidth: "680px" }}
                >
                        <div className="section-label" style={{ marginBottom: "0.4rem" }}>get in touch</div>
                        <h1 style={{ color: "var(--yellow)", marginBottom: "0.75rem" }}>contact</h1>

                        <p style={{ marginBottom: "2.5rem" }}>
                                open to opportunities, collaborations, or just chatting about tech.
                        </p>

                        <div style={{ display: "grid", gap: "1.25rem" }}>
                                {contacts.map(({ label, value, href }) => (
                                        <motion.a
                                                key={label}
                                                href={href}
                                                target={href.startsWith("mailto") ? undefined : "_blank"}
                                                rel="noopener noreferrer"
                                                className="contact-card"
                                                whileHover={{ x: 4 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "1rem",
                                                        padding: "1rem 1.25rem",
                                                        background: "var(--bg1)",
                                                        border: "1px solid var(--bg2)",
                                                        borderLeft: "3px solid var(--bg3)",
                                                        borderRadius: "3px",
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                }}
                                        >
                                                <span style={{
                                                        color: "var(--fg3)",
                                                        fontSize: "0.75rem",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase",
                                                        minWidth: "5.5rem",
                                                        flexShrink: 0,
                                                }}>
                                                        {label}
                                                </span>
                                                <span style={{
                                                        color: "var(--blue)",
                                                        fontSize: "0.88rem",
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                }}>
                                                        {value}
                                                </span>
                                                <span style={{ marginLeft: "auto", color: "var(--fg3)", fontSize: "0.9rem" }}>→</span>
                                        </motion.a>
                                ))}
                        </div>

                        <div style={{
                                marginTop: "2.5rem",
                                paddingTop: "1.5rem",
                                borderTop: "1px solid var(--bg2)",
                                color: "var(--fg3)",
                                fontSize: "0.8rem",
                        }}>
                                Washington DC Metro Area · open to opportunities
                        </div>
                </motion.div>
        );
}
