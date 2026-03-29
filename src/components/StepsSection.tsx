interface StepsProps {
  onOpenModal: () => void;
}

const steps = [
  { n: 1, title: 'Agendas tu Demo', desc: 'Un especialista analiza tu taller, identifica tus dolores específicos y te muestra en vivo cómo TuulApp los resuelve. Saldrás con el plan perfecto para ti y el precio exacto.' },
  { n: 2, title: 'Confirmas tu Plan', desc: 'Eliges el plan que se ajusta al tamaño de tu taller y recibes de inmediato los $750 USD en beneficios: certificaciones, Bootcamp, PITZON y acompañamiento completo.' },
  { n: 3, title: 'Transformas tu Taller', desc: 'Tu Gerente de Éxito implementa TuulApp contigo en días. En semanas tendrás control real, clientes más fieles y tiempo para vivir tu negocio — en lugar de sobrevivir en él.' },
];

const StepsSection = ({ onOpenModal }: StepsProps) => (
  <section className="bg-secondary border-b border-border py-20 px-5 md:px-[60px]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-center mb-12">
        <span className="text-[11px] font-bold tracking-[3px] uppercase text-primary mb-3 block">El proceso es simple</span>
        <h2 className="font-display text-[clamp(28px,4vw,50px)] font-black uppercase text-white leading-[1.05] tracking-tight">
          ¿Qué pasa después<br />de <span className="text-primary">agendar tu demo?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 relative max-w-[900px] mx-auto mb-12">
        <div className="hidden md:block absolute top-[37px] left-[16%] right-[16%] h-0.5 z-0" style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), rgba(93,187,60,.3), hsl(var(--primary)))' }} />
        {steps.map((s) => (
          <div key={s.n} className="text-center px-6 z-[1] relative mb-8 md:mb-0">
            <div className="w-[74px] h-[74px] bg-card border-2 border-primary rounded-full flex items-center justify-center font-display text-[30px] font-black text-primary mx-auto mb-5 relative z-[1]" style={{ boxShadow: '0 0 30px rgba(93,187,60,.2)' }}>
              {s.n}
            </div>
            <h4 className="font-display text-xl font-extrabold uppercase text-white mb-2.5 tracking-wide">{s.title}</h4>
            <p className="text-sm text-[#ccdacc] leading-relaxed bg-white/[.04] rounded-[10px] p-3.5">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button onClick={onOpenModal} className="animate-pulse-glow bg-primary text-primary-foreground font-display font-extrabold text-[22px] tracking-wide uppercase px-14 py-5 rounded-lg hover:bg-primary-dark hover:-translate-y-0.5 transition-all">
          👇 Quiero Agendar mi Demo Ahora
        </button>
        <p className="text-[13px] text-primary font-semibold mt-2.5">Recibes $750 USD en beneficios al confirmar tu plan</p>
      </div>
    </div>
  </section>
);

export default StepsSection;
