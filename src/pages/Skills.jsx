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
	{ code: "CMSC436", name: "Programming Handheld Devices (Android)" },
	{ code: "CMSC456", name: "Cryptography" },
	{ code: "CMSC471", name: "Data Visualization" },
];

const tagVariants = {
	hidden: { opacity: 0, scale: 0.85, filter: "blur(4px)" },
	show: {
		opacity: 1,
		scale: 1,
		filter: "blur(0px)",
		transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
	},
};

function TagGroup({ label, items, type }) {
	return (
		<div style={{ marginBottom: "1.5rem" }}>
			<div className="section-label" style={{ marginBottom: "0.7rem" }}>{label}</div>
			<motion.div
				variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
				initial="hidden"
				animate="show"
				style={{ margin: "-0.22rem" }}
			>
				{items.map((item) => (
					<motion.span key={item} className={`skill-tag ${type}`} variants={tagVariants}>
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
			style={{ maxWidth: "760px" }}
		>
			<div className="section-label" style={{ marginBottom: "0.9rem" }}>
				technical skills
			</div>
			<h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.4rem)", marginBottom: "2rem" }}>
				what i <em className="serif-i glass-ink">work with</em>
			</h1>

			<div className="glass" style={{ padding: "1.8rem 2rem", marginBottom: "1.4rem" }}>
				<TagGroup label="languages" items={languages} type="lang" />
				<TagGroup label="tools, frameworks & platforms" items={tools} type="tool" />
				<div style={{ marginBottom: "-1.5rem" }}>
					<TagGroup label="databases" items={databases} type="db" />
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
				className="glass"
				style={{ padding: "1.8rem 2rem" }}
			>
				<div className="section-label" style={{ marginBottom: "1.1rem" }}>
					coursework
				</div>
				<ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
					{coursework.map(({ code, name }) => (
						<li
							key={`${code}-${name}`}
							style={{ display: "flex", gap: "0.9rem", alignItems: "baseline" }}
						>
							<span
								style={{
									color: "var(--cyan)",
									opacity: 0.8,
									fontSize: "0.72rem",
									fontFamily: "var(--font-mono)",
									letterSpacing: "0.06em",
									minWidth: "6.2rem",
									flexShrink: 0,
								}}
							>
								{code}
							</span>
							<span style={{ color: "var(--fg2)", fontSize: "0.88rem", fontWeight: 350 }}>
								{name}
							</span>
						</li>
					))}
				</ul>
			</motion.div>
		</motion.div>
	);
}
