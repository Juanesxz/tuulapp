interface HeroProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroProps) => (
  <section className="px-5 md:px-[60px] pt-[50px] md:pt-20 pb-10 md:pb-14 text-center" style={{ background: 'radial-gradient(ellipse 75% 55% at 50% 0%, rgba(93,187,60,.09) 0%, transparent 68%)' }}>
    <div className="animate-fade-up inline-flex items-center gap-2 bg-[rgba(93,187,60,.08)] border border-border-green rounded-full px-[18px] py-1.5 text-[11px] font-bold tracking-[2.5px] uppercase text-primary mb-7">
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-blink" />
      El software #1 para talleres mecánicos en Latinoamérica
    </div>

    <h1 className="animate-fade-up font-display font-black text-[clamp(32px,5.8vw,70px)] leading-[1.02] text-white max-w-[920px] mx-auto mb-2.5 uppercase tracking-tight">
      <span className="block text-primary text-[.72em] tracking-normal normal-case italic mb-1">Finalmente, la respuesta para los</span>
      <span>dueños de taller que<br />no aguantan un <em className="text-primary not-italic underline decoration-primary/40">día más</em> así.</span>
    </h1>

    <p className="animate-fade-up-1 text-[clamp(16px,2vw,20px)] text-muted-foreground max-w-[640px] mx-auto mt-5 mb-1.5 font-light leading-relaxed">
      Descubre cómo talleres como el tuyo aumentan su productividad hasta un <strong className="text-foreground font-semibold">40%</strong> y ahorran hasta <strong className="text-foreground font-semibold">90 minutos por vehículo atendido</strong> con un sistema de gestión.
    </p>
    <p className="animate-fade-up-2 text-[clamp(15px,1.8vw,18px)] text-foreground font-medium mb-9">Dale clic abajo y mira el video completo. ⬇</p>

    <div className="animate-fade-up-3 max-w-[880px] mx-auto mb-8 px-0 md:px-[60px]">
      <div className="bg-card border border-border-green rounded-[14px] overflow-hidden aspect-video flex items-center justify-center" style={{ boxShadow: '0 0 80px rgba(93,187,60,.12), 0 40px 100px rgba(0,0,0,.6)' }}>
        <div className="flex flex-col items-center gap-3.5">
          <div className="w-[86px] h-[86px] bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all" style={{ boxShadow: '0 0 50px rgba(93,187,60,.5)' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#000" className="ml-1.5"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <span className="text-[13px] text-muted-foreground italic">▶ Da play — este video puede cambiar tu taller para siempre</span>
        </div>
      </div>
    </div>

    <div className="text-center mb-1">
      <button onClick={onOpenModal} className="animate-pulse-glow inline-block bg-primary text-primary-foreground font-display font-extrabold text-[22px] tracking-wide uppercase px-14 py-5 rounded-lg border-none cursor-pointer hover:bg-primary-dark hover:-translate-y-0.5 transition-all">
        👇 Agendar mi Demo Gratuita
      </button>
      <p className="text-[13px] text-primary font-semibold mt-2.5">Recibes $750 USD en beneficios al confirmar tu plan</p>
    </div>
  </section>
);

export default HeroSection;
