import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export default function InteractivePreview({ children }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 150, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 150, damping: 24 });
  function move(event) {
    if (reduced || event.pointerType !== 'mouse') return;
    const box = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientY - box.top) / box.height - 0.5) * -6);
    y.set(((event.clientX - box.left) / box.width - 0.5) * 6);
  }
  function reset() { x.set(0); y.set(0); }
  return <div className="preview-hit-area" onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
    <motion.div className="interactive-preview" style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY, transformPerspective: 1000 }}>{children}</motion.div>
  </div>;
}
