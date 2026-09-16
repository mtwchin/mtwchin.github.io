import ProjectVisual from '../components/ProjectVisual';
import Reveal from '../components/Reveal';
import TextReveal from '../components/TextReveal';
import InteractivePreview from '../components/InteractivePreview';

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


const projectIds = ['grafux', 'itinera', 'bobvision'];

function ProjectCard({ project, index }) {
  const id = projectIds[index];
  return <Reveal as="article" className="project-article" id={id}>
    <div>
      <InteractivePreview><ProjectVisual kind={id} /></InteractivePreview>
    </div>
    <div>
      <div className="project-header"><div><h2 className="project-title">{project.name}</h2><div className="project-meta">{project.date}</div></div>{project.badge && <span className="project-badge">{project.badge}</span>}</div>
      <p className="project-description">{project.description}</p>
      <span className="project-tech">{project.tech}</span>
      {project.github && <a className="project-link" href={project.github} target="_blank" rel="noreferrer">View on GitHub ↗</a>}
      <details className="project-details"><summary>Behind the build</summary><ul className="project-points">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></details>
    </div>
  </Reveal>;
}

export default function Projects() {
  return <div className="page-container">
    <span className="eyebrow">01 / Selected work</span>
    <TextReveal as="h1" text="Things I’ve built." />
    <p className="projects-intro">Tools, experiments, and contributions. A closer look at the problems I’ve worked on and the thinking behind them.</p>
    <div className="project-list">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
  </div>;
}
