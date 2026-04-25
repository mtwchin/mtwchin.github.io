import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Home() {
        const { displayed } = useTypewriter("matthew chin", 95);

        return (
                <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ position: "relative" }}
                >
                        <ParticlesBackground id="tsparticles" />
                        <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minHeight: "100vh",
                                position: "relative",
                                zIndex: 5,
                        }}>
                                <motion.div
                                        id="repulse-content"
                                        initial={{ opacity: 0, y: 28, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                        style={{
                                                background: "var(--bg1)",
                                                border: "1px solid var(--bg2)",
                                                borderRadius: "6px",
                                                overflow: "hidden",
                                                minWidth: "340px",
                                                maxWidth: "380px",
                                                boxShadow: "0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(235,219,178,0.04)",
                                        }}
                                >
                                        {/* Terminal header */}
                                        <div style={{
                                                background: "var(--bg2)",
                                                padding: "0.6rem 1rem",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.45rem",
                                                borderBottom: "1px solid var(--bg3)",
                                                userSelect: "none",
                                        }}>
                                                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "var(--red)", display: "inline-block", opacity: 0.85 }} />
                                                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "var(--yellow)", display: "inline-block", opacity: 0.85 }} />
                                                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "var(--green)", display: "inline-block", opacity: 0.85 }} />
                                                <span style={{
                                                        marginLeft: "auto",
                                                        color: "var(--fg3)",
                                                        fontSize: "0.72rem",
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        letterSpacing: "0.03em",
                                                }}>
                                                        matthew@portfolio: ~
                                                </span>
                                        </div>

                                        {/* Content */}
                                        <div style={{ padding: "1.1rem 1.75rem 1.25rem" }}>
                                                {/* Name */}
                                                <div style={{ marginBottom: "0.85rem" }}>
                                                        <div style={{
                                                                display: "flex",
                                                                alignItems: "baseline",
                                                                gap: "0.6rem",
                                                                marginBottom: "0.3rem",
                                                        }}>
                                                                <span style={{
                                                                        color: "var(--yellow)",
                                                                        fontSize: "1.55rem",
                                                                        fontWeight: 700,
                                                                        lineHeight: 1,
                                                                        fontFamily: "'JetBrains Mono', monospace",
                                                                }}>~</span>
                                                                <span style={{
                                                                        fontSize: "1.55rem",
                                                                        fontWeight: 300,
                                                                        color: "var(--fg)",
                                                                        fontFamily: "'JetBrains Mono', monospace",
                                                                        letterSpacing: "-0.02em",
                                                                        minHeight: "1.55rem",
                                                                }}>
                                                                        {displayed}
                                                                        <span style={{
                                                                                color: "var(--yellow)",
                                                                                animation: "blink 1s step-end infinite",
                                                                                marginLeft: "1px",
                                                                        }}>_</span>
                                                                </span>
                                                        </div>
                                                        <div style={{
                                                                fontSize: "0.82rem",
                                                                color: "var(--fg3)",
                                                                fontFamily: "'JetBrains Mono', monospace",
                                                                fontStyle: "italic",
                                                        }}>
                                                                umd.edu
                                                        </div>
                                                </div>

                                                {/* About */}
                                                <div style={{ marginBottom: "0.8rem" }}>
                                                        <div className="section-label">about</div>
                                                        <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.7 }}>
                                                                junior at the university of maryland studying
                                                                computer science, currently interning at IBM.
                                                        </p>
                                                </div>

                                                {/* Links */}
                                                <div>
                                                        <div className="section-label">links</div>
                                                        <div style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: "0.45rem",
                                                        }}>
                                                                {[
                                                                        { href: "https://github.com/mtwchin", label: "github" },
                                                                        { href: "https://linkedin.com/in/matthewleechin", label: "linkedin" },
                                                                        { href: "mailto:mtwchin@gmail.com", label: "email" },
                                                                ].map(({ href, label }) => (
                                                                        <a
                                                                                key={label}
                                                                                href={href}
                                                                                target={href.startsWith("mailto") ? undefined : "_blank"}
                                                                                rel="noopener noreferrer"
                                                                                style={{
                                                                                        color: "var(--blue)",
                                                                                        fontSize: "0.88rem",
                                                                                        fontFamily: "'JetBrains Mono', monospace",
                                                                                        display: "inline-flex",
                                                                                        alignItems: "center",
                                                                                        gap: "0.4rem",
                                                                                        transition: "color 0.18s ease",
                                                                                }}
                                                                                onMouseEnter={e => e.currentTarget.style.color = "var(--yellow)"}
                                                                                onMouseLeave={e => e.currentTarget.style.color = "var(--blue)"}
                                                                        >
                                                                                <span style={{ color: "var(--fg3)" }}>→</span>
                                                                                {label}
                                                                        </a>
                                                                ))}
                                                        </div>
                                                </div>
                                        </div>
                                </motion.div>
                        </div>
                </motion.div>
        );
}
