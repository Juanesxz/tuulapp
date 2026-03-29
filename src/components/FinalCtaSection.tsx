interface FinalCtaProps {
  onOpenModal: () => void;
}

const FinalCtaSection = ({ onOpenModal }: FinalCtaProps) => (
  <section className="py-24 px-5 md:px-[60px] text-center" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(93,187,60,.09) 0%, transparent 70%), hsl(120,18%,4.3%)' }}>
    <h2 className="font-display text-[clamp(34px,5.5vw,64px)] font-black uppercase tracking-tight text-white leading-none mb-3.5">
      Tu taller puede funcionar<br /><span className="text-primary">sin que estés ahí.</span>
    </h2>
    <p className="text-lg text-muted-foreground mb-9 font-light">
      Más de 1.000 dueños en 29 países ya lo comprobaron.<br />Hoy es tu turno. ⚠️ Cupos del Bootcamp limitados.
    </p>
    <button onClick={onOpenModal} className="animate-pulse-glow bg-primary text-primary-foreground font-display font-extrabold text-[22px] tracking-wide uppercase px-14 py-5 rounded-lg hover:bg-primary-dark hover:-translate-y-0.5 transition-all">
      🚀 Agendar mi Demo Gratuita
    </button>
    <p className="text-[13px] text-primary font-semibold mt-3">Recibes $750 USD en beneficios al confirmar tu plan</p>
  </section>
);

export default FinalCtaSection;
