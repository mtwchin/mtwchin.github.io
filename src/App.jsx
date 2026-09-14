import { useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function PageRoutes() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    const titles = { '/': 'Software engineer', '/about': 'About', '/skills': 'Toolkit', '/projects': 'Selected work', '/contact': 'Contact' };
    document.title = `Matthew Chin — ${titles[pathname] || 'Portfolio'}`;
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
    if (previousPath.current !== pathname) {
      document.getElementById('main-content')?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname, hash]);
  return <>
    <Navigation />
    <main id="main-content" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div className="page-container"><h1>Nothing here, yet.</h1><Link className="text-link" to="/">Back to the homepage ↗</Link></div>} />
      </Routes>
    </main>
    <footer className="site-footer wrap">
      <Link to="/" className="footer-signature">Matthew Chin<span>© {new Date().getFullYear()}</span></Link>
      <div><a href="https://github.com/mtwchin" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/matthewleechin" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:mtwchin@gmail.com">Email ↗</a></div>
    </footer>
  </>;
}

export default function App() {
  return <HashRouter><a className="skip-link" href="#main-content" onClick={(event) => { event.preventDefault(); document.getElementById('main-content')?.focus(); }}>Skip to content</a><PageRoutes /></HashRouter>;
}
