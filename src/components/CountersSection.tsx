import { useEffect, useRef, useState } from 'react';

const counters = [
  { target: 245000, label: 'Órdenes de servicio generadas' },
  { target: 135000, label: 'Vehículos atendidos' },
  { target: 892000, label: 'Repuestos vendidos' },
];

function fmt(n: number) {
  if (n >= 1000) return '+' + Math.round(n / 1000) + 'K';
  return '+' + n.toString();
}

const Counter = ({ target, label }: { target: number; label: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !animated.current) {
          animated.current = true;
          const dur = 2400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 4);
            setValue(Math.round(ease * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center py-6 px-4 border-b md:border-b-0 md:border-r border-border last:border-r-0 last:border-b-0">
      <div className="font-display text-[clamp(34px,3.5vw,50px)] font-black text-primary leading-none tracking-tight">{fmt(value)}</div>
      <div className="text-[12px] text-muted-foreground mt-1.5 font-semibold tracking-wide leading-snug">{label}</div>
    </div>
  );
};

const CountersSection = () => (
  <section className="bg-secondary py-14 px-5 md:px-[60px] border-b border-border">
    <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3">
      {counters.map((c) => (
        <Counter key={c.label} {...c} />
      ))}
    </div>
  </section>
);

export default CountersSection;
