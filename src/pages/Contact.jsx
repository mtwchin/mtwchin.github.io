import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contacts = [
	{ label: "email", value: "mtwchin@gmail.com", href: "mailto:mtwchin@gmail.com" },
	{ label: "linkedin", value: "linkedin.com/in/matthewleechin", href: "https://linkedin.com/in/matthewleechin" },
	{ label: "github", value: "github.com/mtwchin", href: "https://github.com/mtwchin" },
	{ label: "resume", value: "view / download PDF", href: "/resume.pdf" },
];

function CopyEmailChip() {
	const [copied, setCopied] = useState(false);
	const timeoutRef = useRef(null);

	useEffect(() => () => clearTimeout(timeoutRef.current), []);

	async function handleCopy() {
		const email = "mtwchin@gmail.com";
		let ok = false;
		try {
			await navigator.clipboard.writeText(email);
			ok = true;
		} catch {
			// clipboard API unavailable (insecure context, embeds) — legacy path
			const ta = document.createElement("textarea");
			ta.value = email;
			ta.style.position = "fixed";
			ta.style.opacity = "0";
			document.body.appendChild(ta);
			ta.select();
			try {
				ok = document.execCommand("copy");
			} catch {
				ok = false;
			}
			ta.remove();
		}

		if (ok) {
			setCopied(true);
			clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => setCopied(false), 2000);
		} else {
			window.location.href = "mailto:mtwchin@gmail.com";
		}
	}

	return (
		<button className="glass-chip" onClick={handleCopy} aria-live="polite">
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={copied ? "copied" : "copy"}
					initial={{ opacity: 0, y: 6 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -6 }}
					transition={{ duration: 0.18, ease: "easeOut" }}
					style={{
						display: "inline-flex",
						alignItems: "center",
						gap: "0.45rem",
						color: copied ? "var(--cyan)" : undefined,
					}}
				>
					{copied ? "✓ copied to clipboard" : "copy email"}
				</motion.span>
			</AnimatePresence>
		</button>
	);
}

export default function Contact() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.35, ease: "easeOut" }}
			className="page-container"
			style={{ maxWidth: "680px" }}
		>
			<div className="section-label" style={{ marginBottom: "0.9rem" }}>
				get in touch
			</div>
			<h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.4rem)", marginBottom: "1rem" }}>
				say <em className="serif-i glass-ink">hello</em>
			</h1>

			<p style={{ marginBottom: "2.5rem" }}>
				open to opportunities, collaborations, or just chatting about tech.
			</p>

			<motion.div
				className="glass glass-rows"
				initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
				animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
			>
				{contacts.map(({ label, value, href }) => (
					<a
						key={label}
						className="glass-row contact-row"
						href={href}
						target={href.startsWith("mailto") ? undefined : "_blank"}
						rel="noopener noreferrer"
					>
						<span className="section-label" style={{ letterSpacing: "0.16em" }}>
							{label}
						</span>
						<span
							className="row-name"
							style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 400 }}
						>
							{value}
						</span>
						<span className="row-arrow">→</span>
					</a>
				))}
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
				style={{ marginTop: "1.4rem" }}
			>
				<CopyEmailChip />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.5 }}
				style={{
					marginTop: "2.5rem",
					paddingTop: "1.5rem",
					borderTop: "1px solid rgba(22,32,47,0.08)",
					color: "var(--fg3)",
					fontSize: "0.82rem",
					fontWeight: 380,
				}}
			>
				Washington DC Metro Area ·{" "}
				<span className="serif-i" style={{ color: "var(--fg2)", fontSize: "1.06em" }}>
					open to opportunities
				</span>
			</motion.div>
		</motion.div>
	);
}
