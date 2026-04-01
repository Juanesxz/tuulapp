interface StepsProps {
  onOpenModal: () => void;
}

const steps = [
  { n: 1, title: 'Agendas tu Demostración en Vivo', desc: 'Un especialista analiza tu taller, identifica tus dolores específicos y te muestra en vivo cómo TuulApp los resuelve. Saldrás con el plan perfecto para ti y el precio exacto.' },
  { n: 2, title: 'Elige tu Plan', desc: 'Elige el plan que se ajusta al tamaño de tu taller y recibe de inmediato los $750 USD en beneficios: certificaciones, Bootcamp, PITZON y acompañamiento completo.' },
  { n: 3, title: 'Transformas tu Taller', desc: 'Tu Gerente de Éxito implementa TuulApp contigo en días. En semanas tendrás control real, clientes más fieles y tiempo para vivir tu negocio — en lugar de sobrevivir en él.' },
];

const StepsSection = ({ onOpenModal }: StepsProps) => (
  <section className="bg-secondary border-b border-border py-20 px-5 md:px-[60px]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-[clamp(28px,4vw,50px)] font-black uppercase text-white leading-[1.05] tracking-tight">
          ¿Qué pasa después<br />de <span className="text-primary">el registro?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1000px] mx-auto mb-12">
        {steps.map((s) => (
          <div key={s.n} className="bg-card border border-border rounded-[18px] p-7 hover:border-border-green hover:-translate-y-1 transition-all flex flex-col" style={{ boxShadow: '0 4px 30px rgba(0,0,0,.3)' }}>
            <div className="w-[60px] h-[60px] bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center font-display text-[26px] font-black text-primary mb-5" style={{ boxShadow: '0 0 20px rgba(93,187,60,.15)' }}>
              {s.n}
            </div>
            <h4 className="font-display text-lg font-extrabold uppercase text-white mb-3 tracking-wide">{s.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button onClick={onOpenModal} className="animate-pulse-glow bg-primary text-primary-foreground font-display font-extrabold text-[22px] tracking-wide uppercase px-14 py-5 rounded-lg hover:bg-primary-dark hover:-translate-y-0.5 transition-all inline-flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Quiero Agendar mi Demo Ahora
        </button>
        <p className="text-[13px] text-primary font-semibold mt-2.5">Recibes $750 USD en beneficios al confirmar tu plan</p>
      </div>
    </div>
  </section>
);

export default StepsSection;
