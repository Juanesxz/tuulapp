const PitzonSection = () => (
  <section className="bg-background border-b border-border px-5 md:px-[60px] pb-[70px]">
    <div className="max-w-[1000px] mx-auto rounded-[18px] p-8 md:p-11 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center border border-border-green" style={{ background: 'linear-gradient(135deg, rgba(93,187,60,.09), rgba(93,187,60,.03))' }}>
      <div>
        <h3 className="font-display text-[clamp(22px,3vw,34px)] font-black uppercase text-white mb-2.5 tracking-tight">
          🚀 <span className="text-primary">PITZON</span> — Lo que ningún otro software del mercado tiene
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[520px]">
          Al adquirir TuulApp, tus clientes reciben su propia aplicación. Con <strong className="text-foreground">PITZON</strong> pueden agendar citas, ver el historial completo de su vehículo y recibir recordatorios de mantenimiento. Tus clientes vuelven solos. La recurrencia aumenta. Y eso se siente en tus ingresos desde el primer mes. <strong className="text-primary">Dos aplicaciones por el precio de una — y no existe en ningún otro software del mercado.</strong>
        </p>
      </div>
      <div className="bg-primary text-primary-foreground font-display text-[13px] font-black tracking-[2px] uppercase py-3 px-5 rounded-lg text-center whitespace-nowrap leading-relaxed">
        INCLUIDO<br />100% GRATIS
      </div>
    </div>
  </section>
);

export default PitzonSection;
