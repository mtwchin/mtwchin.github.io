import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

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
];

function TiltCard({ project, i }) {
        const ref = useRef(null);

        const rotateX = useMotionValue(0);
        const rotateY = useMotionValue(0);

        const springRotX = useSpring(rotateX, { stiffness: 200, damping: 20 });
        const springRotY = useSpring(rotateY, { stiffness: 200, damping: 20 });

        const shadowX = useTransform(springRotY, [-8, 8], ["-8px", "8px"]);
        const shadowY = useTransform(springRotX, [-8, 8], ["8px", "-8px"]);
        const boxShadow = useMotionTemplate`${shadowX} ${shadowY} 24px rgba(0,0,0,0.45), 0 0 0 1px rgba(250,189,47,0.06)`;

        function handleMouseMove(e) {
                if (!ref.current) return;
                const rect = ref.current.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = (e.clientX - cx) / (rect.width / 2);
                const dy = (e.clientY - cy) / (rect.height / 2);
                rotateY.set(dx * 8);
                rotateX.set(-dy * 8);
        }

        function handleMouseLeave() {
                rotateX.set(0);
                rotateY.set(0);
        }

        return (
                <div style={{ perspective: "800px" }}>
                        <motion.article
                                ref={ref}
                                className="project-card"
                                style={{ rotateX: springRotX, rotateY: springRotY, boxShadow }}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.07 }}
                        >
                                <div className="project-header">
                                        <div>
                                                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                                        <h2 className="project-title">{project.name}</h2>
                                                        {project.badge && (
                                                                <span style={{
                                                                        fontSize: "0.68rem",
                                                                        color: "var(--aqua)",
                                                                        border: "1px solid rgba(142,192,124,0.35)",
                                                                        padding: "0.1rem 0.4rem",
                                                                        borderRadius: "2px",
                                                                        letterSpacing: "0.05em",
                                                                        whiteSpace: "nowrap",
                                                                        flexShrink: 0,
                                                                }}>
                                                                        {project.badge}
                                                                </span>
                                                        )}
                                                </div>
                                                <div className="project-meta">{project.date}</div>
                                        </div>
                                        <a
                                                className="project-link"
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                        >
                                                github →
                                        </a>
                                </div>

                                {project.demoVideo && (
                                        <div className="project-demo">
                                                <video
                                                        src={project.demoVideo}
                                                        controls
                                                        playsInline
                                                        className="project-demo-video"
                                                >
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
                </div>
        );
}

export default function Projects() {
        return (
                <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="page-container projects-page"
                >
                        <div className="section-label" style={{ marginBottom: "0.4rem" }}>selected builds</div>
                        <h1 style={{ color: "var(--yellow)", marginBottom: "0.4rem" }}>projects</h1>
                        <p style={{ marginBottom: "2rem" }}>
                                links, context, and the stacks behind them
                        </p>

                        <div className="projects-grid">
                                {projects.map((project, i) => (
                                        <TiltCard key={project.name} project={project} i={i} />
                                ))}
                        </div>
                </motion.div>
        );
}
