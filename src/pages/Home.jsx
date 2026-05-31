import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTypewriter } from "../hooks/useTypewriter";

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
	show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Home() {
	const { displayed } = useTypewriter("matthew chin", 85);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			style={{ position: "relative" }}
		>
			<ParticlesBackground id="tsparticles" />

			<div
				id="repulse-content"
				style={{
					position: "relative",
					zIndex: 5,
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					padding: "6rem 3.5rem 3rem",
					maxWidth: "860px",
					margin: "0 auto",
				}}
			>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="show"
					style={{ width: "100%" }}
				>
					{/* Name */}
					<motion.div variants={itemVariants} style={{ marginBottom: "1.75rem" }}>
						<div className="section-label" style={{ marginBottom: "0.85rem" }}>
							portfolio
						</div>
						<h1
							style={{
								fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
								fontWeight: 300,
								letterSpacing: "-0.03em",
								lineHeight: 1.05,
								color: "var(--fg)",
								marginBottom: 0,
							}}
						>
							{displayed}
							<span
								style={{
									color: "var(--accent)",
									animation: "blink 1s step-end infinite",
									marginLeft: "2px",
								}}
							>
								_
							</span>
						</h1>
					</motion.div>

					{/* Status row */}
					<motion.div
						variants={itemVariants}
						style={{
							display: "flex",
							alignItems: "center",
							gap: "1.25rem",
							flexWrap: "wrap",
							marginBottom: "2.25rem",
							paddingBottom: "2.25rem",
							borderBottom: "1px solid var(--bg2)",
						}}
					>
						<span style={{ color: "var(--fg3)", fontSize: "0.82rem" }}>
							cs + business @ umd
						</span>
						<span
							style={{
								width: "1px",
								height: "10px",
								background: "var(--bg3)",
								flexShrink: 0,
							}}
						/>
						<span style={{ color: "var(--fg2)", fontSize: "0.82rem" }}>
							incoming swe intern @{" "}
							<span style={{ color: "var(--accent)" }}>mit-ibm watson ai lab</span>
						</span>
					</motion.div>

					{/* Bio */}
					<motion.div variants={itemVariants} style={{ marginBottom: "3rem" }}>
						<p
							style={{
								fontSize: "0.95rem",
								lineHeight: 1.85,
								color: "var(--fg2)",
								margin: 0,
								maxWidth: "540px",
							}}
						>
							junior at the university of maryland studying computer science and
							business. building software that's fast, functional, and occasionally
							interesting.
						</p>
					</motion.div>

					{/* Selected work */}
					<motion.div variants={itemVariants} style={{ marginBottom: "3rem" }}>
						<div className="section-label" style={{ marginBottom: "1rem" }}>
							selected work
						</div>
						<div>
							{featuredWork.map(({ name, desc, href }) => (
								<WorkRow key={name} name={name} desc={desc} href={href} />
							))}
						</div>
						<div style={{ marginTop: "1rem" }}>
							<Link
								to="/projects"
								style={{
									fontSize: "0.78rem",
									color: "var(--fg3)",
									textDecoration: "none",
									letterSpacing: "0.06em",
									transition: "color 0.18s ease",
								}}
								onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
								onMouseLeave={e => (e.currentTarget.style.color = "var(--fg3)")}
							>
								view all projects →
							</Link>
						</div>
					</motion.div>

					{/* Social links */}
					<motion.div
						variants={itemVariants}
						style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
					>
						{socialLinks.map(({ href, label }) => (
							<a
								key={label}
								href={href}
								target={href.startsWith("mailto") ? undefined : "_blank"}
								rel="noopener noreferrer"
								style={{
									color: "var(--fg3)",
									fontSize: "0.8rem",
									textDecoration: "none",
									letterSpacing: "0.06em",
									transition: "color 0.18s ease",
								}}
								onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
								onMouseLeave={e => (e.currentTarget.style.color = "var(--fg3)")}
							>
								{label}
							</a>
						))}
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
}

function WorkRow({ name, desc, href }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			style={{
				display: "grid",
				gridTemplateColumns: "130px 1fr 20px",
				alignItems: "center",
				gap: "1.5rem",
				padding: "0.7rem 0",
				borderBottom: "1px solid var(--bg2)",
				textDecoration: "none",
				color: "inherit",
				transition: "background 0.15s ease",
			}}
			onMouseEnter={e => {
				e.currentTarget.querySelector(".wrow-name").style.color = "var(--accent)";
				e.currentTarget.querySelector(".wrow-arrow").style.color = "var(--accent)";
				e.currentTarget.querySelector(".wrow-arrow").style.opacity = "1";
			}}
			onMouseLeave={e => {
				e.currentTarget.querySelector(".wrow-name").style.color = "var(--fg1)";
				e.currentTarget.querySelector(".wrow-arrow").style.color = "var(--fg3)";
				e.currentTarget.querySelector(".wrow-arrow").style.opacity = "0.5";
			}}
		>
			<span
				className="wrow-name"
				style={{
					fontWeight: 500,
					fontSize: "0.88rem",
					color: "var(--fg1)",
					transition: "color 0.18s ease",
					fontFamily: "'JetBrains Mono', monospace",
				}}
			>
				{name}
			</span>
			<span style={{ color: "var(--fg3)", fontSize: "0.8rem" }}>{desc}</span>
			<span
				className="wrow-arrow"
				style={{
					color: "var(--fg3)",
					fontSize: "0.8rem",
					opacity: 0.5,
					transition: "color 0.18s ease, opacity 0.18s ease",
				}}
			>
				→
			</span>
		</a>
	);
}
