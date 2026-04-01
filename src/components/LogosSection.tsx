const brands = ['EUROTALLER', 'AVANTALLER', 'RUTA 4', 'MOTOFIX', 'RUTA 18'];

const LogosSection = () => (
  <section className="bg-primary/90 border-t border-b border-primary/50 py-3 overflow-hidden">
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
          <span key={i} className="mx-8 font-display text-[17px] font-extrabold tracking-wider text-white uppercase inline-flex items-center gap-2">
            ⭐ {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default LogosSection;
