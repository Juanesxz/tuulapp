interface HeroProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroProps) => (
  <section className="px-5 md:px-[60px] pt-[50px] md:pt-20 pb-10 md:pb-14 text-center" style={{ background: 'radial-gradient(ellipse 75% 55% at 50% 0%, rgba(93,187,60,.09) 0%, transparent 68%)' }}>
    <div className="animate-fade-up inline-flex items-center gap-2 bg-[rgba(93,187,60,.08)] border border-border-green rounded-full px-[18px] py-1.5 text-[11px] font-bold tracking-[2.5px] uppercase text-primary mb-7">
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-blink" />
      Este video se elimina pronto
    </div>

    <h1 className="animate-fade-up font-display font-black text-[clamp(32px,5.8vw,70px)] leading-[1.02] text-white max-w-[920px] mx-auto mb-2.5 uppercase tracking-tight">
      <span className="block text-primary text-[.72em] tracking-normal normal-case italic mb-1">Finalmente, la respuesta para los dueños</span>
      <span>que no aguantan un <em className="text-primary not-italic underline decoration-primary/40">día más</em> así.</span>
    </h1>

    <p className="animate-fade-up-1 text-[clamp(17px,2.2vw,22px)] text-muted-foreground max-w-[680px] mx-auto mt-5 mb-1.5 font-light leading-relaxed">
      Descubre cómo talleres como el tuyo aumentan su productividad hasta un <strong className="text-foreground font-semibold">40%</strong> y ahorran hasta <strong className="text-foreground font-semibold">90 minutos por vehículo atendido</strong> con un <strong className="font-semibold" style={{ color: '#7ed957' }}>sistema de gestión.</strong>
    </p>
    <p className="animate-fade-up-2 text-[clamp(15px,1.8vw,18px)] text-foreground font-medium mb-2">Dale clic abajo y mira el video completo.</p>
    <div className="animate-fade-up-2 text-[32px] mb-4 animate-bounce">⬇️</div>

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
      <button onClick={onOpenModal} className="animate-pulse-glow inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-extrabold text-[22px] tracking-wide uppercase px-14 py-5 rounded-lg border-none cursor-pointer hover:bg-primary-dark hover:-translate-y-0.5 transition-all">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Agendar mi Demo Gratuita
      </button>
      <p className="text-[13px] text-primary font-semibold mt-2.5">Recibes $750 USD en beneficios al confirmar tu plan</p>
    </div>
  </section>
);

export default HeroSection;
