import { motion } from "framer-motion";

export default function About() {
        return (
                <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="page-container"
                        style={{ padding: "7rem 4rem 3rem 4rem", maxWidth: "780px" }}
                >
                        <div className="section-label" style={{ marginBottom: "0.4rem" }}>who am i</div>
                        <h1 style={{ color: "var(--yellow)", marginBottom: "1.5rem" }}>matthew chin</h1>

                        <p>
                                Junior at UMD studying Computer Science and Business, currently studying abroad in Madrid.
                                Building skills in web development and general software engineering.
                        </p>
                        <p>
                                Based in the DC Metro Area, grew up between Northern New Jersey and the Boston area.
                        </p>

                        <hr className="grv-divider" />

                        <div style={{ marginBottom: "1.5rem" }}>
                                <div className="section-label" style={{ marginBottom: "0.5rem" }}>work</div>
                                <p style={{ marginBottom: "0.4rem" }}>
                                        Incoming Software Developer Intern at the{" "}
                                        <a
                                                href="https://mitibmwatsonailab.mit.edu/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                        >
                                                MIT-IBM Watson AI Lab
                                        </a>
                                        {" "}— Cambridge, MA.
                                </p>
                                <p style={{ marginBottom: "0.4rem" }}>
                                        Software Engineering Intern at{" "}
                                        <span style={{ color: "var(--fg1)" }}>Colexia</span>
                                        {" "}— a fashion-tech startup.
                                </p>
                                <p style={{ margin: 0 }}>
                                        Undergraduate Research Assistant at the{" "}
                                        <a
                                                href="https://www.digitalengagementlab.org/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                        >
                                                Digital Media Engagement Lab
                                        </a>
                                        {" "}at UMD.
                                </p>
                        </div>

                        <hr className="grv-divider" />

                        <div>
                                <div className="section-label" style={{ marginBottom: "0.75rem" }}>outside of work</div>
                                <ul className="about-list">
                                        <li>
                                                <span style={{ color: "var(--fg1)", fontWeight: 500 }}>sports</span>
                                                {" "}— volleyball, climbing, all-mountain skiing
                                        </li>
                                        <li>
                                                <span style={{ color: "var(--fg1)", fontWeight: 500 }}>music</span>
                                                {" "}— bass guitar + acoustic. favorites: Sade, Malcolm Todd, BROCKHAMPTON, Wisp
                                        </li>
                                        <li>
                                                <span style={{ color: "var(--fg1)", fontWeight: 500 }}>photography</span>
                                                {" "}— shooting on a{" "}
                                                <a href="https://www.sony.com/za/electronics/interchangeable-lens-cameras/ilce-6500-body-kit" target="_blank" rel="noopener noreferrer">Sony A6500</a>
                                                {" "}and{" "}
                                                <a href="https://uk.pcmag.com/cameras/3926/canon-powershot-elph-340-hs" target="_blank" rel="noopener noreferrer">Canon Powershot ELPH340 HS</a>
                                        </li>
                                </ul>
                        </div>
                </motion.div>
        );
}
