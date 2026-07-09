import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TechMarquee from "../components/TechMarquee";

const featuredWork = [
	{
		name: "grafux",
		desc: "CLI filesystem visualizer as a real-time force-directed graph",
		href: "https://github.com/balnc9/grafux",
	},
	{
		name: "Itinera",
		desc: "AI travel itinerary generator powered by TikTok trends and Maps",
		href: "https://github.com/balnc9/itinera",
	},
	{
		name: "minikube",
		desc: "Open source: unified CRI-O service config across Kubernetes environments",
		href: "https://github.com/kubernetes/minikube",
	},
];

const socialLinks = [
	{ href: "https://github.com/mtwchin", label: "github" },
	{ href: "https://linkedin.com/in/matthewleechin", label: "linkedin" },
	{ href: "mailto:mtwchin@gmail.com", label: "email" },
];

const containerVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="page-container"
			style={{ display: "flex", alignItems: "center" }}
		>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="show"
				style={{ width: "100%" }}
			>
				{/* Name */}
				<motion.div variants={itemVariants} style={{ marginBottom: "2rem" }}>
					<div className="section-label" style={{ marginBottom: "1.2rem" }}>
						portfolio — est. college park, md
					</div>
					<h1 style={{ fontSize: "clamp(3.2rem, 7.5vw, 5.6rem)" }}>
						matthew{" "}
						<em className="serif-i glass-ink" style={{ fontStyle: "italic" }}>
							chin
						</em>
					</h1>
				</motion.div>

				{/* Status chips */}
				<motion.div
					variants={itemVariants}
					style={{
						display: "flex",
						gap: "0.6rem",
						flexWrap: "wrap",
						marginBottom: "2.5rem",
					}}
				>
					<span className="glass-chip">cs + business @ umd</span>
					<span className="glass-chip">
						<span
							style={{
								width: "6px",
								height: "6px",
								borderRadius: "50%",
								background: "var(--cyan)",
								boxShadow: "0 0 8px rgba(125,220,255,0.8)",
								flexShrink: 0,
							}}
						/>
						swe intern @ ibm
					</span>
				</motion.div>

				{/* Bio */}
				<motion.div variants={itemVariants} style={{ marginBottom: "3rem" }}>
					<p style={{ maxWidth: "520px" }}>
						junior at the university of maryland studying computer science and
						minoring in business.{" "}
						<span className="serif-i" style={{ color: "var(--fg1)", fontSize: "1.08em" }}>
							building and learning
						</span>{" "}
						about all types of software.
					</p>
				</motion.div>

				{/* Tech ticker */}
				<motion.div variants={itemVariants} style={{ marginBottom: "3rem" }}>
					<TechMarquee />
				</motion.div>

				{/* Selected work */}
				<motion.div variants={itemVariants} style={{ marginBottom: "2.75rem" }}>
					<div className="section-label" style={{ marginBottom: "1rem" }}>
						selected work
					</div>
					<div className="glass glass-rows">
						{featuredWork.map(({ name, desc, href }) => (
							<a
								key={name}
								className="glass-row"
								href={href}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="row-name">{name}</span>
								<span className="row-desc">{desc}</span>
								<span className="row-arrow">→</span>
							</a>
						))}
					</div>
					<div style={{ marginTop: "1.1rem" }}>
						<Link
							to="/projects"
							style={{
								fontSize: "0.8rem",
								color: "var(--fg3)",
								letterSpacing: "0.04em",
							}}
							onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
							onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg3)")}
						>
							view all projects →
						</Link>
					</div>
				</motion.div>

				{/* Social links */}
				<motion.div
					variants={itemVariants}
					style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}
				>
					{socialLinks.map(({ href, label }) => (
						<a
							key={label}
							className="glass-chip"
							href={href}
							target={href.startsWith("mailto") ? undefined : "_blank"}
							rel="noopener noreferrer"
						>
							{label}
						</a>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
