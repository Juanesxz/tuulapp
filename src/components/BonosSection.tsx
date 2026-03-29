interface BonosProps {
  onOpenModal: () => void;
}

const mainBonos = [
  { title: 'Certificación de Métricas para Talleres', desc: 'Mide, analiza y optimiza el desempeño de tu taller para hacerlo más rentable y competitivo.', icon: '📊', bg: 'linear-gradient(135deg, #1a2a1a, #0f1a0f)' },
  { title: 'Certificación de Ventas para Talleres', desc: 'Las técnicas de venta específicas para talleres mecánicos que más ingresos generan.', icon: '💼', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
  { title: 'Bootcamp Internacional — Gerentes de Taller', desc: 'El evento de formación más completo para dueños de taller en Latinoamérica. Virtual. Mayo.', icon: '🏆', bg: 'linear-gradient(135deg, #0a1628, #1a2a4a)', sub: 'VIRTUAL · MAYO · CUPOS LIMITADOS' },
];

const extraBonos = [
  { icon: '📱', title: 'PITZON — App para tus clientes', desc: 'La app que ningún otro software incluye. Tus clientes agendan solos y vuelven solos.' },
  { icon: '🎧', title: 'Soporte 100% en Español', desc: 'Nada de correos en inglés. Un equipo real que te responde cuando lo necesitas.' },
  { icon: '🚀', title: 'Capacitación de Implementación', desc: 'Tu Gerente de Éxito te acompaña desde el día uno hasta que tu taller esté operando.' },
];

const BonosSection = ({ onOpenModal: _onOpenModal }: BonosProps) => (
  <section className="bg-background border-b border-border py-20 px-5 md:px-[60px]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-center mb-12">
        <span className="text-[11px] font-bold tracking-[3px] uppercase text-primary mb-3 block">Al iniciar con tu plan de TuulApp</span>
        <h2 className="font-display text-[clamp(28px,4vw,50px)] font-black uppercase text-white leading-[1.05] tracking-tight">
          Te <span className="text-primary">regalo</span> esto:
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        {mainBonos.map((b) => (
          <div key={b.title} className="rounded-[14px] overflow-hidden border border-border bg-card relative hover:-translate-y-1 hover:border-border-green transition-all">
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[11px] font-black tracking-[1.5px] px-3 py-1 rounded-full uppercase z-10">GRATIS</div>
            <div className="aspect-[4/3] flex items-center justify-center flex-col gap-2.5 p-5" style={{ background: b.bg }}>
              <span className="text-[40px]">{b.icon}</span>
              <span className="font-display text-xl font-black text-white uppercase text-center tracking-wide">{b.title.split('—')[0]}</span>
              {b.sub && <span className="text-[11px] text-muted-foreground font-semibold tracking-wider">{b.sub}</span>}
            </div>
            <div className="p-5">
              <h4 className="font-display text-[17px] font-black text-white uppercase tracking-wide mb-1">{b.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              <span className="inline-block bg-destructive/10 border border-destructive/25 text-destructive text-[11px] font-bold px-2.5 py-0.5 rounded line-through mt-1.5">$250 USD</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 mb-7">
        {extraBonos.map((b) => (
          <div key={b.title} className="bg-card border border-border rounded-xl px-5 py-5 flex items-center gap-4 hover:border-border-green transition-colors">
            <span className="text-[26px] shrink-0">{b.icon}</span>
            <div>
              <h4 className="text-sm font-semibold text-white mb-0.5">{b.title}</h4>
              <p className="text-xs text-muted-foreground leading-snug">{b.desc}</p>
            </div>
            <span className="ml-auto font-display text-lg font-black text-primary shrink-0">GRATIS</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between rounded-[14px] p-7 md:p-9 border-2 border-border-green gap-3.5" style={{ background: 'linear-gradient(135deg, rgba(93,187,60,.1), rgba(93,187,60,.03))' }}>
        <div>
          <h4 className="font-display text-[22px] font-black text-white uppercase">🎁 Total en beneficios reales que recibes</h4>
          <p className="text-[13px] text-muted-foreground mt-0.5">Cert. Métricas + Cert. Ventas + Bootcamp Internacional + PITZON + Soporte + Implementación</p>
        </div>
        <div className="font-display text-[50px] font-black text-primary leading-none">
          <small className="text-[22px]">$</small>750<small className="text-2xl"> USD</small>
        </div>
      </div>
    </div>
  </section>
);

export default BonosSection;
