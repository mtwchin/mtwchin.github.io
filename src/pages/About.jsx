import { motion } from "framer-motion";

const workEntries = [
	{
		company: "IBM",
		role: "Software Developer Intern — Infrastructure",
		year: "Summer 2026 – Present",
		href: "https://www.google.com/maps?q=IBM,+75+Binney+St,+Cambridge,+MA+02142",
		now: true,
		detail:
			"Observability on the SevOne Network Performance Management team at IBM Cambridge (75 Binney St).",
	},
	{
		company: "Handshake AI",
		role: "AI Research & CS Specialist (Remote)",
		year: "Mar 2026 – Present",
		href: "https://joinhandshake.com/ai",
		now: true,
		detail:
			"Trained confidential AI models in OpenAI's Feather, grading LLM output based on instruction rubrics, consistency and quality.",
	},
	{
		company: "Colexia",
		role: "Software Engineering Intern",
		year: "2025",
	},
	{
		company: "Digital Media Engagement Lab",
		role: "Undergraduate Research Assistant",
		year: "2024–2025",
		href: "https://www.digitalengagementlab.org/",
	},
];

const sectionVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 16, filter: "blur(5px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function About() {
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
				who am i
			</div>
			<h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.4rem)", marginBottom: "2rem" }}>
				about <em className="serif-i glass-ink">me</em>
			</h1>

			{/* Bio */}
			<motion.div
				variants={sectionVariants}
				initial="hidden"
				animate="show"
				className="glass"
				style={{ padding: "1.8rem 2rem", marginBottom: "1.4rem" }}
			>
				<motion.p variants={itemVariants} style={{ marginBottom: "0.8rem" }}>
					Junior at UMD studying Computer Science and Business. Eagerly building
					skills in general software engineering.
				</motion.p>
				<motion.p variants={itemVariants}>
					Currently based in the DMV Area, grew up between Northern New Jersey
					and the Boston area.
				</motion.p>
			</motion.div>

			{/* Work timeline */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
				className="glass"
				style={{ padding: "1.8rem 2rem", marginBottom: "1.4rem" }}
			>
				<div className="section-label" style={{ marginBottom: "1.2rem" }}>
					work
				</div>
				<motion.div
					className="timeline"
					variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
					initial="hidden"
					animate="show"
				>
					{workEntries.map(({ company, role, year, href, now, detail }) => (
						<motion.div key={company} className="timeline-entry" variants={itemVariants}>
							<span className={`timeline-dot ${now ? "now" : "past"}`} />
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
							{detail && <div className="timeline-detail">{detail}</div>}
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			{/* Outside of work — bento grid */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
			>
				<div className="section-label" style={{ margin: "0.4rem 0 1rem 0.4rem" }}>
					outside of work
				</div>
				<div className="bento">
					<div className="glass bento-card bento-span-2 bento-wash-sky">
						<div className="bento-title">sports</div>
						<div className="bento-body">
							volleyball, climbing, all-mountain skiing
						</div>
					</div>
					<div className="glass bento-card bento-span-4 bento-wash-violet">
						<div className="bento-title">music</div>
						<div className="bento-body">
							bass guitar + acoustic. favorites: Sade, Malcolm Todd,
							BROCKHAMPTON, Wisp
						</div>
					</div>
					<div className="glass bento-card bento-span-4 bento-wash-amber">
						<div className="bento-title">photography</div>
						<div className="bento-body">
							shooting on a{" "}
							<a
								href="https://www.sony.com/za/electronics/interchangeable-lens-cameras/ilce-6500-body-kit"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sony A6500
							</a>{" "}
							and{" "}
							<a
								href="https://uk.pcmag.com/cameras/3926/canon-powershot-elph-340-hs"
								target="_blank"
								rel="noopener noreferrer"
							>
								Canon Powershot ELPH340 HS
							</a>
						</div>
					</div>
					<div className="glass bento-card bento-span-2 bento-wash-sky">
						<div className="bento-title">based in</div>
						<div className="bento-body">
							washington dc metro area — open to opportunities
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
