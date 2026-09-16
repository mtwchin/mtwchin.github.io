import Reveal from '../components/Reveal';
import TextReveal from '../components/TextReveal';

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


function ToolGroup({ label, items }) {
  return <Reveal as="section" className="tool-group"><h2>{label}</h2><div>{items.map(item => <span className="skill-tag" key={item}>{item}</span>)}</div></Reveal>;
}
export default function Skills() {
  return <div className="page-container toolkit-page"><span className="eyebrow">03 / Toolkit</span><TextReveal as="h1" text="What I work with." /><p className="projects-intro">The languages, tools, and foundations I bring to a project.</p>
    <ToolGroup label="Languages" items={languages} />
    <ToolGroup label="Tools & platforms" items={tools} />
    <ToolGroup label="Databases" items={databases} />
    <section className="tool-group coursework"><h2>Coursework</h2><ul>{coursework.map(({code, name}) => <li key={code + name}><span>{code}</span><span>{name}</span></li>)}</ul></section>
  </div>;
}
