import { motion } from "framer-motion";

const workEntries = [
        {
                company: "MIT-IBM Watson AI Lab",
                role: "Incoming Software Developer Intern",
                year: "Summer 2026",
                href: "https://mitibmwatsonailab.mit.edu/",
                dot: "var(--blue)",
        },
        {
                company: "Colexia",
                role: "Software Engineering Intern",
                year: "2025",
                dot: "var(--purple)",
        },
        {
                company: "Digital Media Engagement Lab",
                role: "Undergraduate Research Assistant",
                year: "2024–2025",
                href: "https://www.digitalengagementlab.org/",
                dot: "var(--green)",
        },
];

const sectionVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const workItemVariants = {
        hidden: { opacity: 0, x: -16 },
        show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function About() {
        return (
                <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="page-container"
                        style={{ padding: "7rem 4rem 3rem 4rem", maxWidth: "780px" }}
                >
                        <div className="section-label" style={{ marginBottom: "0.4rem" }}>who am i</div>
                        <h1 style={{ color: "var(--yellow)", marginBottom: "1.5rem" }}>matthew chin</h1>

                        {/* Bio */}
                        <motion.div
                                variants={sectionVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-60px" }}
                        >
                                <motion.p variants={itemVariants}>
                                        Junior at UMD studying Computer Science and Business.
                                        Eagerly building skills in general software engineering.
                                </motion.p>
                                <motion.p variants={itemVariants}>
                                        Currently based in the DMV Area, grew up between Northern New Jersey and the Boston area.
                                </motion.p>
                        </motion.div>

                        <hr className="grv-divider" />

                        {/* Work timeline */}
                        <div style={{ marginBottom: "1.5rem" }}>
                                <div className="section-label" style={{ marginBottom: "0.75rem" }}>work</div>
                                <motion.div
                                        className="timeline"
                                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, margin: "-60px" }}
                                >
                                        {workEntries.map(({ company, role, year, href, dot }) => (
                                                <motion.div
                                                        key={company}
                                                        className="timeline-entry"
                                                        variants={workItemVariants}
                                                >
                                                        <span className="timeline-dot" style={{ background: dot }} />
                                                        <div className="timeline-company">
                                                                {href ? (
                                                                        <a href={href} target="_blank" rel="noopener noreferrer">
                                                                                {company}
                                                                        </a>
                                                                ) : (
                                                                        company
                                                                )}
                                                        </div>
                                                        <div className="timeline-role">{role}</div>
                                                        <div className="timeline-year">{year}</div>
                                                </motion.div>
                                        ))}
                                </motion.div>
                        </div>

                        <hr className="grv-divider" />

                        {/* Hobbies */}
                        <motion.div
                                variants={sectionVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-60px" }}
                        >
                                <div className="section-label" style={{ marginBottom: "0.75rem" }}>outside of work</div>
                                <ul className="about-list">
                                        <motion.li variants={itemVariants}>
                                                <span style={{ color: "var(--fg1)", fontWeight: 500 }}>sports</span>
                                                {" "}— volleyball, climbing, all-mountain skiing
                                        </motion.li>
                                        <motion.li variants={itemVariants}>
                                                <span style={{ color: "var(--fg1)", fontWeight: 500 }}>music</span>
                                                {" "}— bass guitar + acoustic. favorites: Sade, Malcolm Todd, BROCKHAMPTON, Wisp
                                        </motion.li>
                                        <motion.li variants={itemVariants}>
                                                <span style={{ color: "var(--fg1)", fontWeight: 500 }}>photography</span>
                                                {" "}— shooting on a{" "}
                                                <a href="https://www.sony.com/za/electronics/interchangeable-lens-cameras/ilce-6500-body-kit" target="_blank" rel="noopener noreferrer">Sony A6500</a>
                                                {" "}and{" "}
                                                <a href="https://uk.pcmag.com/cameras/3926/canon-powershot-elph-340-hs" target="_blank" rel="noopener noreferrer">Canon Powershot ELPH340 HS</a>
                                        </motion.li>
                                </ul>
                        </motion.div>
                </motion.div>
        );
}
