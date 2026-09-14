import { useId } from 'react';

// An illustrated itinerary, with streets and building footprints for texture.
const blocks = Array.from({ length: 112 }, (_, index) => {
  const column = index % 14;
  const row = Math.floor(index / 14);
  return { x: 8 + column * 44, y: 12 + row * 49, width: 29 + (index % 3) * 2, height: 31 + (index % 4) * 2 };
});

export default function ItineraVisual() {
  const gridId = useId();
  return <div className="project-visual travel-visual" aria-hidden="true">
    <svg viewBox="0 0 600 400" fill="none">
      <defs>
        <pattern id={gridId} width="44" height="49" patternUnits="userSpaceOnUse">
          <path d="M0 0H44M0 0V49" stroke="#faf9f0" strokeWidth="5" />
          <path d="M0 0H44M0 0V49" stroke="#d2d6c7" strokeWidth=".6" />
        </pattern>
      </defs>
      <rect width="600" height="400" fill="#e9ebdf" />
      <g transform="rotate(-12 300 200)">
        {blocks.map((block, index) => <g key={index}>
          <rect {...block} rx="1.5" fill={index % 7 === 0 ? '#ccd5bd' : '#dde0d1'} stroke="#cdd2c2" strokeWidth=".6" />
          {index % 3 === 0 && <path d={`M${block.x + 5} ${block.y + 5}h${block.width - 10}v${block.height - 10}h-${block.width - 10}Z`} stroke="#cbd0bf" strokeWidth=".7" />}
        </g>)}
        <rect x="-80" y="-80" width="760" height="560" fill={`url(#${gridId})`} />
        <path d="M-60 157H660M229-70V470" stroke="#c8cdbd" strokeWidth="11" />
        <path d="M-60 157H660M229-70V470" stroke="#f8f6e9" strokeWidth="8" />
      </g>
      {/* Foothills, temple gardens, and the river break up the city grid. */}
      <path d="M504 0C480 56 535 86 508 130S560 184 541 230S584 300 600 297V0Z" fill="#cdd8be" />
      <path d="M526 0C502 50 554 88 528 132S580 187 563 231" stroke="#b8c7a6" strokeWidth="1" />
      <path d="M548 0C524 50 576 88 550 132S602 187 585 231" stroke="#b8c7a6" strokeWidth="1" />
      <path d="M334-25C310 38 339 73 317 127S307 196 331 237S321 335 288 425" stroke="#d2dcce" strokeWidth="35" />
      <path d="M334-25C310 38 339 73 317 127S307 196 331 237S321 335 288 425" stroke="#adc5c0" strokeWidth="23" />
      <path d="M333-25C310 38 339 73 317 127S307 196 331 237S321 335 288 425" stroke="#c4d7d0" strokeWidth="1.5" />
      <g stroke="#899789" strokeWidth="10"><path d="M294 124L339 134M308 239L351 231M288 349L324 360" /></g>
      <g stroke="#f4f1df" strokeWidth="6"><path d="M294 124L339 134M308 239L351 231M288 349L324 360" /></g>
      <rect x="400" y="170" width="65" height="49" rx="12" transform="rotate(-12 400 170)" fill="#c7d3b6" />
      <g fill="#a5b893" opacity=".7">{[0, 1, 2, 3, 4, 5].map(i => <circle key={i} cx={422 + (i % 3) * 13} cy={180 + Math.floor(i / 3) * 14} r="4" />)}</g>
      <g fill="#8d9984" fontSize="8" fontFamily="Arial, sans-serif" letterSpacing="1.5">
        <text x="120" y="118" transform="rotate(-12 120 118)">NAKAGYO</text>
        <text x="398" y="279" transform="rotate(-12 398 279)">HIGASHIYAMA</text>
        <text x="306" y="303" transform="rotate(-76 306 303)" fill="#718f89" letterSpacing="1">KAMO RIVER</text>
      </g>
      {/* A continuous walking route with three numbered stops. */}
      <path d="M235 225L244 188L311 202L343 193L377 203L389 147L434 137L447 89" stroke="#f5f4e8" strokeWidth="7" strokeLinejoin="round" />
      <path d="M235 225L244 188L311 202L343 193L377 203L389 147L434 137L447 89" stroke="#596f4e" strokeWidth="2.5" strokeDasharray="3 5" strokeLinecap="round" strokeLinejoin="round" />
      <g fill="#f8f8ef" stroke="#d3d8c8" strokeWidth=".7">
        <rect x="141" y="241" width="115" height="26" rx="4" />
        <rect x="362" y="225" width="55" height="26" rx="4" />
        <rect x="414" y="47" width="143" height="26" rx="4" />
      </g>
      <g fill="#42533b" fontFamily="Arial, sans-serif" fontSize="11">
        <text x="153" y="258">Nishiki Market</text><text x="377" y="242">Gion</text><text x="425" y="64">Philosopher’s Path</text>
      </g>
      {[{x:235,y:225}, {x:377,y:203}, {x:447,y:89}].map((point, index) => <g key={index}>
        <circle cx={point.x} cy={point.y} r="14" fill="#f5f5e9" />
        <circle cx={point.x} cy={point.y} r="10.5" fill="#566e49" />
        <text x={point.x} y={point.y + 3.7} textAnchor="middle" fill="#fffef3" fontFamily="Arial, sans-serif" fontSize="10">{index + 1}</text>
      </g>)}
      {/* Compact itinerary sheet, designed as part of the illustration. */}
      <rect x="22" y="281" width="190" height="88" rx="5" fill="#faf9f0" stroke="#d5dacb" />
      <text x="37" y="302" fill="#7e8974" fontFamily="monospace" fontSize="8" letterSpacing="1.2">YOUR DAY, MAPPED OUT</text>
      <path d="M41 316V351" stroke="#c6cfb8" />
      <g fill="#60784f"><circle cx="41" cy="316" r="2.5" /><circle cx="41" cy="333" r="2.5" /><circle cx="41" cy="351" r="2.5" /></g>
      <g fill="#53614a" fontFamily="Arial, sans-serif" fontSize="10"><text x="53" y="319">Taste your way through Nishiki</text><text x="53" y="336">Wander the streets of Gion</text><text x="53" y="354">Take the scenic way home</text></g>
      <g transform="translate(558 314)" stroke="#6e8061"><circle r="15" fill="#f4f5e9" stroke="#c3cdb7" /><path d="M0-10L4 6L0 3L-4 6Z" fill="#6e8061" stroke="none" /><text x="0" y="-21" fill="#6e8061" stroke="none" textAnchor="middle" fontSize="8" fontFamily="monospace">N</text></g>
    </svg>
    <div className="visual-topline"><span>Itinera</span><span>Kyoto, Japan / Day 01</span><span>↗</span></div>
    <div className="visual-bottomline"><span>3 saved places · One thoughtful route</span><span>Explore →</span></div>
  </div>;
}
