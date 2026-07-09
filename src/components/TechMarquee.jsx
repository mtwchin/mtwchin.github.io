const items = [
	"Java", "Python", "C", "Go", "React", "Next.js", "TypeScript",
	"Spring Boot", "Docker", "Kubernetes", "PostgreSQL", "Linux",
];

/* Infinite scrolling ticker — the track holds two copies of the list
   and translates -50%, so the loop is seamless. Pauses on hover. */
export default function TechMarquee() {
	return (
		<div className="marquee" aria-label="technologies I work with">
			<div className="marquee-track">
				{[0, 1].map((copy) => (
					<span
						key={copy}
						className="marquee-item"
						aria-hidden={copy === 1 ? "true" : undefined}
					>
						{items.map((item) => (
							<span key={item} className="marquee-item">
								{item}
								<span className="marquee-dot" />
							</span>
						))}
					</span>
				))}
			</div>
		</div>
	);
}
