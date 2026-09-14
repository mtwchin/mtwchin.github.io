import { useState, useRef, useEffect } from 'react';

const contacts = [
  { label: 'Email', value: 'mtwchin@gmail.com', href: 'mailto:mtwchin@gmail.com' },
  { label: 'LinkedIn', value: 'matthewleechin', href: 'https://linkedin.com/in/matthewleechin' },
  { label: 'GitHub', value: 'mtwchin', href: 'https://github.com/mtwchin' },
  { label: 'Résumé', value: 'View résumé (PDF)', href: '/resume.pdf' },
];

export default function Contact() {
  const [message, setMessage] = useState('Copy email');
  const timeout = useRef(null);
  useEffect(() => () => clearTimeout(timeout.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('mtwchin@gmail.com');
      setMessage('Email copied ✓');
    } catch {
      setMessage('Select the email above to copy it.');
    }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setMessage('Copy email'), 3500);
  }
  return <div className="page-container contact-page">
    <span className="eyebrow">04 / Get in touch</span><h1>A good place to start.</h1>
    <p className="contact-intro">Have a project, an opportunity, or something interesting to share? I’d love to hear about it.</p>
    <div className="contact-links">{contacts.map(({label, value, href}) => <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" className="contact-link"><span className="eyebrow">{label}</span><span>{value}</span><span aria-hidden="true">↗</span></a>)}</div>
    <button className="text-link copy-email" onClick={copyEmail}><span aria-live="polite">{message}</span></button>
    <p className="contact-location"><span className="status-line"><i aria-hidden="true" />Washington DC Metro Area</span><span>Open to opportunities.</span></p>
  </div>;
}
