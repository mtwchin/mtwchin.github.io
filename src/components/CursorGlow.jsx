import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

/* A soft light source that follows the cursor and catches the glass. */
export default function CursorGlow() {
	const mouseX = useMotionValue(-600);
	const mouseY = useMotionValue(-600);

	const springX = useSpring(mouseX, { stiffness: 90, damping: 24 });
	const springY = useSpring(mouseY, { stiffness: 90, damping: 24 });

	const background = useMotionTemplate`radial-gradient(620px circle at ${springX}px ${springY}px, rgba(56, 189, 248, 0.09), transparent 70%)`;

	useEffect(() => {
		const handleMouseMove = (e) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mouseX, mouseY]);

	return (
		<motion.div
			style={{
				position: "fixed",
				inset: 0,
				pointerEvents: "none",
				zIndex: 9999,
				background,
			}}
		/>
	);
}
