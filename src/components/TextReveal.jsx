import { motion, useReducedMotion } from 'framer-motion';

const elements = { h1: motion.h1, h2: motion.h2, span: motion.span };

export default function TextReveal({ as = 'h2', text, ...props }) {
  const reduced = useReducedMotion();
  const Element = elements[as];
  return <Element {...props} aria-label={text} initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : 0.07 } } }}>
    {text.split(' ').map((word, index) => <span key={`${word}-${index}`} aria-hidden="true"><span className="word-window"><motion.span className="revealed-word" variants={{ hidden: { y: '110%' }, visible: { y: 0 } }} transition={{ duration: reduced ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}>{word}</motion.span></span>{' '}</span>)}
  </Element>;
}
