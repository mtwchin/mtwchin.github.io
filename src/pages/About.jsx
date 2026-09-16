import Reveal from '../components/Reveal';
import TextReveal from '../components/TextReveal';

const workEntries = [
	{
		company: "IBM",
		role: "Software Developer Intern — Infrastructure",
		year: "Summer 2026 – Present",
		now: true,
		detail:
			"Observability on the SevOne Network Performance Management team at IBM.",
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


export default function About() {
  return <div className="page-container about-page">
    <span className="eyebrow">02 / About me</span>
    <TextReveal as="h1" text="About me" />
    <div className="about-lead"><p>I’m Matthew, a junior at the University of Maryland studying computer science and minoring in business.</p><p>I like understanding how software works, from the infrastructure underneath it to the experience of using it. Currently based in the DMV area, I grew up between Northern New Jersey and Boston.</p></div>
    <section className="about-section" aria-labelledby="experience-title">
      <h2 id="experience-title" className="eyebrow">Experience</h2>
      <div className="timeline">{workEntries.map(({ company, role, year, href, now, detail }, index) => <Reveal as="article" key={company} className="timeline-entry" delay={index * 0.06}>
        <div className="experience-heading"><h3 className="timeline-company">{href ? <a href={href} target="_blank" rel="noreferrer">{company} ↗</a> : company}</h3>{now && <span className="project-badge">Current</span>}</div>
        <p className="timeline-role">{role}</p><div className="timeline-year">{year}</div>{detail && <p className="timeline-detail">{detail}</p>}
      </Reveal>)}</div>
    </section>
    <section className="about-section" aria-labelledby="outside-title"><h2 id="outside-title" className="eyebrow">Outside of work</h2><div className="interest-grid">
      <div className="interest"><h3>Sports</h3><p>Volleyball, climbing, and all-mountain skiing.</p></div>
      <div className="interest"><h3>Music</h3><p>Bass guitar and acoustic. Usually listening to Sade, Malcolm Todd, BROCKHAMPTON, or Wisp.</p></div>
      <div className="interest"><h3>Photography</h3><p>Photography on a Sony A6500 and a Canon Powershot ELPH340 HS.</p></div>
      <div className="interest"><h3>Location</h3><p>The Washington DC metro area. Open to opportunities and new places.</p></div>
    </div></section>
  </div>;
}
