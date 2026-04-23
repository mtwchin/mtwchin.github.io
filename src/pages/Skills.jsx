import { motion } from "framer-motion";

const languages = ["Java", "Python", "C"];

const tools = [
        "Git", "Spring Boot", "Docker", "Maven", "BeautifulSoup4",
        "Claude API", "Vercel", "React", "Next.js", "Tailwind", "Chart.js", "Linux",
];

const databases = ["MySQL", "Oracle LiveSQL", "PostgreSQL"];

const coursework = [
        { code: "CMSC131", name: "Object-Oriented Programming I" },
        { code: "CMSC132", name: "Object-Oriented Programming II" },
        { code: "CMSC216", name: "Introduction to Computer Systems" },
        { code: "CMSC250", name: "Discrete Structures" },
        { code: "CMSC330", name: "Organization of Programming Languages" },
        { code: "CMSC351", name: "Algorithms" },
        { code: "CMSC320", name: "Database Design" },
        { code: "CMSC4XX", name: "Databases and Data Modeling" },
        { code: "CMSC434", name: "Human-Computer Interaction" },
        { code: "CMSC456", name: "Cryptography" },
];

const tagVariants = {
        hidden: { opacity: 0, scale: 0.88 },
        show: { opacity: 1, scale: 1 },
};

const glowRGB = {
        lang: "184,187,38",
        tool: "131,165,152",
        db:   "211,134,155",
};

function TagGroup({ label, items, type }) {
        return (
                <div style={{ marginBottom: "1.4rem" }}>
                        <div className="section-label" style={{ marginBottom: "0.5rem" }}>{label}</div>
                        <motion.div
                                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
                                initial="hidden"
                                animate="show"
                        >
                                {items.map((item) => (
                                        <motion.span
                                                key={item}
                                                className={`skill-tag ${type}`}
                                                variants={tagVariants}
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                                whileHover={{
                                                        scale: 1.08,
                                                        boxShadow: `0 0 10px rgba(${glowRGB[type]}, 0.4)`,
                                                }}
                                        >
                                                {item}
                                        </motion.span>
                                ))}
                        </motion.div>
                </div>
        );
}

export default function Skills() {
        return (
                <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="page-container"
                        style={{ padding: "7rem 4rem 3rem 4rem", maxWidth: "780px" }}
                >
                        <div className="section-label" style={{ marginBottom: "0.4rem" }}>technical skills</div>
                        <h1 style={{ color: "var(--yellow)", marginBottom: "1.75rem" }}>skills</h1>

                        <TagGroup label="languages" items={languages} type="lang" />
                        <TagGroup label="tools, frameworks & platforms" items={tools} type="tool" />
                        <TagGroup label="databases" items={databases} type="db" />

                        <hr className="grv-divider" />

                        <div>
                                <div className="section-label" style={{ marginBottom: "0.75rem" }}>coursework</div>
                                <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.4rem" }}>
                                        {coursework.map(({ code, name }) => (
                                                <li key={code} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                                                        <span style={{
                                                                color: "var(--orange)",
                                                                fontSize: "0.76rem",
                                                                fontFamily: "'JetBrains Mono', monospace",
                                                                minWidth: "6.5rem",
                                                                flexShrink: 0,
                                                        }}>
                                                                {code}
                                                        </span>
                                                        <span style={{
                                                                color: "var(--fg2)",
                                                                fontSize: "0.88rem",
                                                                fontWeight: 300,
                                                        }}>
                                                                {name}
                                                        </span>
                                                </li>
                                        ))}
                                </ul>
                        </div>
                </motion.div>
        );
}
