import { useEffect, useRef, useState } from 'react';

function randomGenerator() {
  let seed = 92;
  return () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
}

export default function PointSculpture() {
  const canvasRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const controls = useRef({ paused: false, redraw: null });

  useEffect(() => {
    controls.current.paused = paused;
    controls.current.redraw?.();
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const control = controls.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, frame = 0, visible = true, lastTime = 0, time = 0;
    let progress = 0, angle = -0.28, tilt = 0;
    const pointer = { x: 0, y: 0 };
    const mask = document.createElement('canvas');
    mask.width = 700; mask.height = 400;
    const maskContext = mask.getContext('2d');
    if (!maskContext) return;
    maskContext.fillStyle = '#fff';
    maskContext.font = 'bold 330px Arial';
    maskContext.textAlign = 'center';
    maskContext.textBaseline = 'middle';
    maskContext.fillText('MC', 350, 221);
    const pixels = maskContext.getImageData(0, 0, 700, 400).data;
    const random = randomGenerator();
    const points = [];
    for (let y = 40; y < 360; y += 5) {
      for (let x = 35; x < 665; x += 5) {
        if (pixels[(y * 700 + x) * 4 + 3] > 128) {
          points.push({ x: (x - 350) / 700, y: (y - 200) / 700, z: (random() - 0.5) * 0.17, scatterX: (random() - 0.5) * 2.3, scatterY: (random() - 0.5) * 1.6, size: 0.5 + random() * 0.75, opacity: 0.3 + random() * 0.7, phase: random() * Math.PI * 2 });
        }
      }
    }

    function draw(timestamp) {
      frame = 0;
      if (!visible || document.hidden) return;
      const still = control.paused || reducedMotion.matches;
      if (!still && lastTime) time += Math.min(timestamp - lastTime, 50) * 0.001;
      lastTime = timestamp;
      context.clearRect(0, 0, width, height);
      const rect = canvas.closest('.hero').getBoundingClientRect();
      const stageTop = canvas.parentElement.getBoundingClientRect().top;
      const target = Math.max(0, Math.min(1, (stageTop - rect.top) / Math.max(1, rect.height - height)));
      if (reducedMotion.matches) progress = 0;
      else if (!still) progress += (target - progress) * 0.08;
      const mobile = width < 700;
      const scale = Math.min(width * (mobile ? 1.18 : 0.73), height * 1.65);
      const centerX = width * (mobile ? 0.5 : 0.70);
      const centerY = height * (mobile ? 0.29 : 0.46);
      if (!still) {
        angle = -0.28 + Math.sin(time * 0.17) * 0.055 + pointer.x * 0.07 + progress * 1.6;
        tilt = pointer.y;
      }
      if (reducedMotion.matches) { angle = -0.28; tilt = 0; }
      const cos = Math.cos(angle), sin = Math.sin(angle);
      for (const point of points) {
        const x = point.x + point.scatterX * progress;
        const y = point.y + point.scatterY * progress;
        const rotatedX = x * cos + point.z * sin;
        const depth = Math.max(0.4, 1 + (-x * sin + point.z * cos) * 0.45);
        const px = centerX + rotatedX * scale / depth;
        const py = centerY + (y + tilt * point.z * 0.18) * scale / depth;
        const opacity = point.opacity * (0.78 + Math.sin(time * 0.35 + point.phase) * 0.12);
        context.fillStyle = `rgba(221,225,221,${opacity})`;
        const size = point.size / depth;
        context.fillRect(px, py, size, size);
      }
      if (!still) frame = requestAnimationFrame(draw);
    }
    function requestDraw() { if (!frame) frame = requestAnimationFrame(draw); }
    control.redraw = () => { lastTime = 0; requestDraw(); };
    function resize() {
      width = canvas.clientWidth; height = canvas.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio; canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      requestDraw();
    }
    function move(event) { pointer.x = event.clientX / width - 0.5; pointer.y = event.clientY / height - 0.5; }
    function visibilityChange() { lastTime = 0; if (!document.hidden) requestDraw(); }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; lastTime = 0; if (visible) requestDraw(); }, { threshold: 0 });
    observer.observe(canvas);
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('visibilitychange', visibilityChange);
    reducedMotion.addEventListener('change', visibilityChange);
    resize();
    return () => {
      cancelAnimationFrame(frame); resizeObserver.disconnect(); observer.disconnect();
      window.removeEventListener('pointermove', move);
      document.removeEventListener('visibilitychange', visibilityChange);
      reducedMotion.removeEventListener('change', visibilityChange);
      control.redraw = null;
    };
  }, []);

  return <><canvas ref={canvasRef} className="point-sculpture" aria-hidden="true" /><button className="motion-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? 'Resume animation' : 'Pause animation'}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span><span>{paused ? 'Resume motion' : 'Pause motion'}</span></button></>;
}
