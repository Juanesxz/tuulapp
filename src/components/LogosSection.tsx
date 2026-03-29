const brands = ['EUROTALLER', 'AVANTALLER', 'RUTA 4', 'MOTOFIX', 'RUTA 18'];

const LogosSection = () => (
  <section className="bg-secondary border-t border-b border-border py-[38px] px-5 md:px-[60px] text-center">
    <p className="text-[11px] tracking-[3px] uppercase text-muted-foreground mb-6 font-semibold">Ellos ya confían en TuulApp</p>
    <div className="flex items-center justify-center gap-3.5 flex-wrap">
      {brands.map((b) => (
        <div key={b} className="bg-card border border-border rounded-lg px-5 py-2.5 font-display text-[17px] font-extrabold tracking-wider text-muted-foreground hover:text-white hover:border-border-green transition-all">
          ⭐ {b}
        </div>
      ))}
    </div>
  </section>
);

export default LogosSection;
