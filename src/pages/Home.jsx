import { Link } from 'react-router-dom';
import PointSculpture from '../components/PointSculpture';
import ProjectVisual from '../components/ProjectVisual';
import Reveal from '../components/Reveal';
import TextReveal from '../components/TextReveal';
import InteractivePreview from '../components/InteractivePreview';

export default function Home() {
  function scrollToWork() {
    document.getElementById('selected-work').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-stage">
        <PointSculpture />
        <div className="hero-content wrap">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer & undergrad</p>
            <h1 id="hero-title">Matthew<br />Chin<span className="name-period">.</span></h1>
            <p className="hero-description">Exploring how things work.<br />Building what comes next.</p>
            <button className="text-link hero-cta" onClick={scrollToWork}>Explore my work <span aria-hidden="true">↓</span></button>
          </div>
        </div>
        <span className="sculpture-caption" aria-hidden="true">FIG. 01 — A WORK IN PROGRESS</span>
      </div>
    </section>
    <Reveal as="section" className="currently wrap" aria-labelledby="currently-title">
      <h2 className="eyebrow" id="currently-title">00 / Currently</h2>
      <dl className="currently-grid">
        <div className="currently-item">
          <dt><i aria-hidden="true" />Working</dt>
          <dd><strong>Software Developer Intern</strong><span>IBM</span></dd>
        </div>
        <div className="currently-item">
          <dt>Studying</dt>
          <dd><strong>CS + Business</strong><span>University of Maryland</span></dd>
        </div>
      </dl>
    </Reveal>
    <section className="selected-work wrap" id="selected-work" aria-labelledby="work-title">
      <div className="section-heading"><div><span className="eyebrow">01 / Selected work</span><TextReveal id="work-title" text="Projects" /></div><Link className="text-link" to="/projects">All projects <span aria-hidden="true">↗</span></Link></div>
      <div className="featured-grid">
        <Reveal><Link className="work-card" to="/projects#grafux"><InteractivePreview><ProjectVisual kind="grafux" /></InteractivePreview><div className="work-card-heading"><h3>grafux</h3><span aria-hidden="true">↗</span></div><p>A different way to see your filesystem.</p><span className="project-category">Developer tools · Go / Canvas / d3-force</span></Link></Reveal>
        <Reveal delay={0.12}><Link className="work-card" to="/projects#itinera"><InteractivePreview><ProjectVisual kind="itinera" /></InteractivePreview><div className="work-card-heading"><h3>Itinera</h3><span aria-hidden="true">↗</span></div><p>Turn the places you save into a trip you can take.</p><span className="project-category">Travel planning · React / TypeScript / Python</span></Link></Reveal>
      </div>
    </section>
    <Reveal as="section" className="intro-section wrap" aria-labelledby="intro-title"><div className="eyebrow">02 / A little about me</div><div><h2 id="intro-title">Interested in the details.<br /><span className="muted">And the bigger picture.</span></h2><p>I’m studying computer science and business at the University of Maryland. My work spans infrastructure, developer tools, and the interfaces that make software useful.</p><p>Away from the screen: climbing, volleyball, playing bass, or taking a camera somewhere new.</p><Link className="text-link" to="/about">More about me <span aria-hidden="true">↗</span></Link></div></Reveal>
    <section className="contact-invitation wrap"><span className="eyebrow">Have something in mind?</span><Link to="/contact"><TextReveal as="span" text="Let’s talk." /><span className="invitation-arrow" aria-hidden="true">↗</span></Link></section>
  </>;
}
