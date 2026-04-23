import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function CursorGlow() {
        const mouseX = useMotionValue(-400);
        const mouseY = useMotionValue(-400);

        const springX = useSpring(mouseX, { stiffness: 100, damping: 25 });
        const springY = useSpring(mouseY, { stiffness: 100, damping: 25 });

        const background = useMotionTemplate`radial-gradient(500px circle at ${springX}px ${springY}px, rgba(250,189,47,0.07), transparent)`;

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
