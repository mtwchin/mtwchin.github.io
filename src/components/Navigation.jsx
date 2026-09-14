import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  return <header className="site-header">
    <div className="nav-inner wrap">
      <Link className="wordmark" to="/" aria-label="Matthew Chin, home">mc<span className="wordmark-star" aria-hidden="true">✳</span></Link>
      <nav aria-label="Main navigation">
        <NavLink to="/projects">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Toolkit</NavLink>
        <NavLink to="/contact">Contact <span aria-hidden="true">↗</span></NavLink>
      </nav>
    </div>
  </header>;
}
