import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
	{ to: "/", label: "home" },
	{ to: "/about", label: "about" },
	{ to: "/skills", label: "skills" },
	{ to: "/projects", label: "projects" },
	{ to: "/contact", label: "contact" },
];

export default function Navigation() {
	const location = useLocation();

	return (
		<nav className="navbar">
			{links.map(({ to, label }) => {
				const isActive = location.pathname === to;
				return (
					<Link key={to} to={to} className={`nav-link${isActive ? " active" : ""}`}>
						{isActive && (
							<motion.span
								layoutId="nav-pill"
								className="nav-pill"
								transition={{ type: "spring", stiffness: 400, damping: 32 }}
							/>
						)}
						{label}
					</Link>
				);
			})}
		</nav>
	);
}
