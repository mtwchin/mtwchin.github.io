import { Link, NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const links = [{ to: '/projects', label: 'Work' }, { to: '/about', label: 'About' }, { to: '/skills', label: 'Toolkit' }, { to: '/contact', label: 'Contact' }];

export default function Navigation() {
  const reduced = useReducedMotion();
  return <header className="site-header">
    <div className="nav-inner wrap">
      <Link className="wordmark" to="/" aria-label="Matthew Chin, home">mc<span className="wordmark-star" aria-hidden="true">✳</span></Link>
      <nav aria-label="Main navigation">
        {links.map(({ to, label }) => <NavLink key={to} to={to}>{({ isActive }) => <>{label}{to === '/contact' && <span className="nav-arrow" aria-hidden="true"> ↗</span>}{isActive && <motion.span className="nav-indicator" aria-hidden="true" layoutId={reduced ? undefined : 'nav-indicator'} transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}</>}</NavLink>)}
      </nav>
    </div>
  </header>;
}
