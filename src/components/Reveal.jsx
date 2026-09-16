import { motion, useReducedMotion } from 'framer-motion';

const elements = { div: motion.div, section: motion.section, article: motion.article };

export default function Reveal({ as = 'div', children, delay = 0, ...props }) {
  const reduced = useReducedMotion();
  const Element = elements[as];
  return <Element
    {...props}
    initial={reduced ? false : { opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    className={`reveal ${props.className || ''}`}
  >{children}</Element>;
}
