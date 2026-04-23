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
                <nav className="navbar" id="repulse-navbar">
                        {links.map(({ to, label }) => {
                                const isActive = location.pathname === to;
                                return (
                                        <Link
                                                key={to}
                                                to={to}
                                                className={`nav-link${isActive ? " active" : ""}`}
                                                style={{ position: "relative" }}
                                        >
                                                {label}
                                                {isActive && (
                                                        <motion.span
                                                                layoutId="nav-indicator"
                                                                style={{
                                                                        position: "absolute",
                                                                        bottom: 0,
                                                                        left: "0.55rem",
                                                                        right: "0.55rem",
                                                                        height: "1px",
                                                                        background: "var(--yellow)",
                                                                        borderRadius: "2px",
                                                                }}
                                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                        />
                                                )}
                                        </Link>
                                );
                        })}
                </nav>
        );
}
