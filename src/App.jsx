import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";

import Navigation from "./components/Navigation";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
        const location = useLocation();
        return (
                <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/skills" element={<Skills />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/contact" element={<Contact />} />
                        </Routes>
                </AnimatePresence>
        );
}

export default function App() {
        return (
                <Router>
                        <CursorGlow />
                        <ScrollProgress />
                        <Navigation />
                        <AnimatedRoutes />
                </Router>
        );
}
