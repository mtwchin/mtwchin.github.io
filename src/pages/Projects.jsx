import { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

const projects = [
	{
		name: "grafux",
		date: "March 2025",
		github: "https://github.com/balnc9/grafux",
		tech: "Go, HTML5 Canvas, d3-force, YAML",
		description:
			"A CLI tool that scans any directory on your filesystem and renders it as a real-time, interactive force-directed graph in the browser — essentially Obsidian's graph view, but for any codebase or folder.",
		highlights: [
			"Built a Go CLI tool that visualizes any filesystem as a real-time interactive force-directed graph, using go:embed to ship the entire frontend as a zero-dependency single binary.",
			"Implemented a d3-force physics simulation on HTML5 Canvas with cursor repulsion, hover highlighting, and configurable physics parameters — sustaining 60fps with thousands of nodes.",
			"Designed a layered configuration system (defaults → YAML file → CLI flags) with gzip-compressed JSON API responses and support for multiple graph layout algorithms.",
			"Achieved cross-platform auto-browser-launch and random port allocation with no external dependencies.",
		],
		demoVideo: "/demos/grafux-demo.mov",
	},
	{
		name: "Itinera",
		date: "November 2025",
		github: "https://github.com/balnc9/itinera",
		tech: "React, TypeScript, Python",
		description:
			"AI-powered travel itinerary generator combining TikTok trends, Google Maps geocoding, and GPT-4o-mini to ship optimized, multi-day plans in seconds.",
		highlights: [
			"Architected a REST API that blends GPT-4o-mini with Google Maps Geocoding to turn trending TikTok data and preferences into itineraries in under 5 seconds.",
			"Built a 3-layer data pipeline (TikTok Research, unofficial API, YouTube) with normalization to keep uptime high despite API failures or rate limits.",
			"Implemented geo-optimization by converting 10+ trending spots per city into coordinates, enabling cluster-based day grouping that minimizes travel time.",
			"Created an interactive React + TS frontend with Google Maps, Places Autocomplete, and export-to-Google-Maps flows for day-by-day itineraries.",
		],
	},
	{
		name: "Kubernetes/minikube",
		date: "December 2025",
		github: "https://github.com/kubernetes/minikube",
		tech: "Go, Linux, systemd, Docker",
		description:
			"Unified CRI-O service configuration across Minikube's ISO and KIC environments to keep local clusters consistent with production-grade runtimes.",
		highlights: [
			"Contributed to Minikube, the local Kubernetes toolkit for running single-node clusters without a full cloud setup.",
			"Aligned CRI-O systemd service definitions between ISO and container-based KIC builds to eliminate configuration drift and runtime bugs.",
			"Updated the kicbase image to ship a custom crio.service and sysconfig settings so CRI-O behaves consistently across Minikube environments.",
		],
		badge: "open source",
	},
	{
		name: "BobVision",
		date: "June 2026",
		tech: "Python, ffmpeg, OpenCV, Whisper, Granite Vision, Claude API",
		description:
			"Built during Bobathon, IBM's internal hackathon — a custom video-processing mode for IBM Bob (an agentic AI coding assistant) that converts screen recordings into timestamped multimodal context, letting Bob diagnose bugs directly against the real codebase.",
		highlights: [
			"Built a custom mode for IBM Bob enabling it to process video input by converting recordings into timestamped multimodal context (sampled frames, Whisper transcripts, OCR text), powering use cases like bug diagnosis from screen recordings.",
			"Reduced vision token costs by ~85% by implementing scene-change detection with perceptual hashing to deduplicate static frames, compressing 600+ frames per 10-minute video down to 60–80 keyframes.",
			"Captured silent UI interactions invisible to transcripts and OCR by running IBM Granite Vision over consecutive keyframe pairs, improving action-related question accuracy by ~40% on an internal test set.",
			"Automated bug localization by parsing file paths and stack traces from OCR output and injecting referenced source code into a single Claude API call, correctly identifying the faulty file and function in 8 of 10 benchmark recordings.",
		],
		badge: "internal",
	},
];

function GlassCard({ project, i }) {
	const ref = useRef(null);

	const lightX = useMotionValue(50);
	const lightY = useMotionValue(-20);

	const springLightX = useSpring(lightX, { stiffness: 140, damping: 24 });
	const springLightY = useSpring(lightY, { stiffness: 140, damping: 24 });

	const sheen = useMotionTemplate`radial-gradient(480px circle at ${springLightX}% ${springLightY}%, rgba(56, 189, 248, 0.12), transparent 65%)`;

	function handleMouseMove(e) {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		lightX.set(((e.clientX - rect.left) / rect.width) * 100);
		lightY.set(((e.clientY - rect.top) / rect.height) * 100);
	}

	function handleMouseLeave() {
		lightX.set(50);
		lightY.set(-20);
	}

	return (
		<motion.article
				ref={ref}
				className="glass project-card"
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
				animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.12 }}
			>
				{/* cursor-following specular light */}
				<motion.div
					style={{
						position: "absolute",
						inset: 0,
						borderRadius: "inherit",
						pointerEvents: "none",
						background: sheen,
					}}
				/>

				<div className="project-header">
					<div>
						<div style={{ display: "flex", alignItems: "center", gap: "0.7rem", flexWrap: "wrap" }}>
							<h2 className="project-title">{project.name}</h2>
							{project.badge && <span className="project-badge">{project.badge}</span>}
						</div>
						<div className="project-meta">{project.date}</div>
					</div>
					{project.github && (
						<a
							className="project-link"
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							github →
						</a>
					)}
				</div>

				{project.demoVideo && (
					<div className="project-demo">
						<video src={project.demoVideo} controls playsInline className="project-demo-video">
							Your browser does not support the video tag.
						</video>
					</div>
				)}

				<p className="project-description">{project.description}</p>
				<em className="project-tech">{project.tech}</em>

				<ul className="project-points">
					{project.highlights.map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</ul>
		</motion.article>
	);
}

export default function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.35, ease: "easeOut" }}
			className="page-container"
		>
			<div className="section-label" style={{ marginBottom: "0.9rem" }}>
				selected builds
			</div>
			<h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.4rem)", marginBottom: "0.8rem" }}>
				things i've <em className="serif-i glass-ink">made</em>
			</h1>
			<p style={{ marginBottom: "2.2rem" }}>
				links, context, and the stacks behind them
			</p>

			<div style={{ display: "grid", gap: "1.4rem" }}>
				{projects.map((project, i) => (
					<GlassCard key={project.name} project={project} i={i} />
				))}
			</div>
		</motion.div>
	);
}
