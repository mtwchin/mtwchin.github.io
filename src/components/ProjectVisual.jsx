import ItineraVisual from './ItineraVisual';

export default function ProjectVisual({ kind }) {
  if (kind === 'grafux') return <div className="project-visual demo-visual"><video className="project-preview-video" src="/demos/grafux-demo.mov" autoPlay muted loop playsInline preload="metadata" aria-label="grafux demo video" /></div>;
  if (kind === 'itinera') return <ItineraVisual />;
  return <div className="project-visual vision-visual" aria-hidden="true"><div className="visual-topline"><span>BobVision</span><span>IBM Bobathon</span></div><div className="symbol-visual"><span>▶</span><div className="waveform">{Array.from({ length: 32 }, (_, i) => <i key={i} style={{ height: `${12 + ((i * 37) % 65)}px` }} />)}</div></div><div className="visual-bottomline"><span>From recording to understanding.</span></div></div>;
}
