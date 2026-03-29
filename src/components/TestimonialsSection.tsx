const videos = [
  { name: 'Carlos M. · Bogotá 🇨🇴' },
  { name: 'Andrés L. · México 🇲🇽' },
  { name: 'Roberto V. · Lima 🇵🇪' },
];

const reviews = [
  { src: 'Google Reviews', dot: 'bg-[#4285F4]', text: '"Antes no sabía si ganaba o perdía cada mes. Con TuulApp descubrí fugas de dinero que no sabía que tenía. Subí mi utilidad más del 30% sin contratar a nadie más."', name: 'Carlos M.', city: 'Taller Carlos Motors · Bogotá 🇨🇴' },
  { src: 'Play Store', dot: 'bg-[#00B4D8]', text: '"Lo tenía todo en papel y en mi cabeza. Hoy tengo todo en TuulApp. Mis técnicos son más productivos, mis clientes más satisfechos, y yo por fin puedo salir a tiempo."', name: 'Andrés L.', city: 'Taller AutoPro · Ciudad de México 🇲🇽' },
  { src: 'WhatsApp', dot: 'bg-[#25D366]', text: '"Pensé que era solo para talleres grandes. Lo usé con 3 técnicos y en dos meses ya sé exactamente cuánto genera cada uno. Eso lo cambió todo. Jamás vuelvo al papel."', name: 'Roberto V.', city: 'TurboLima · Lima 🇵🇪' },
  { src: 'Google Reviews', dot: 'bg-[#4285F4]', text: '"Tuve un cliente que casi nos demanda. Desde que uso TuulApp, cada trabajo queda registrado con fotos. Nunca más voy a estar en esa situación."', name: 'Mauricio T.', city: 'Taller El Turbo · Cali 🇨🇴' },
  { src: 'WhatsApp', dot: 'bg-[#25D366]', text: '"Yo administraba el taller de mi esposo con cuadernos y WhatsApp. Era un caos. Con TuulApp tenemos el control total. Hasta la relación mejoró — ya no hay peleas 😅"', name: 'Marcela R.', city: 'Automotriz Herrera · Medellín 🇨🇴' },
  { src: 'Play Store', dot: 'bg-[#00B4D8]', text: '"Con PITZON mis clientes agendan solos. No pierdo tiempo en llamadas y ellos vuelven por los recordatorios automáticos. Eso vale más de lo que cuesta TuulApp."', name: 'Diego F.', city: 'MotoFix · Quito 🇪🇨' },
];

const TestimonialsSection = () => (
  <section className="bg-secondary border-t border-b border-border py-20 px-5 md:px-[60px]">
    <div className="max-w-[1140px] mx-auto">
      <div className="text-center mb-12">
        <span className="text-[11px] font-bold tracking-[3px] uppercase text-primary mb-3 block">Casos reales</span>
        <h2 className="font-display text-[clamp(28px,4vw,50px)] font-black uppercase text-white leading-[1.05] tracking-tight">
          Esto dicen los dueños de taller<br />que ya <span className="text-primary">dieron el salto</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-3.5">
        {videos.map((v) => (
          <div key={v.name} className="bg-card border border-border rounded-xl aspect-[9/16] max-h-[300px] flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-border-green hover:-translate-y-1 transition-all">
            <div className="w-[50px] h-[50px] bg-white/10 rounded-full flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" className="ml-0.5"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <span className="text-xs text-muted-foreground">{v.name}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3 text-[11px] text-muted-foreground font-bold tracking-wide uppercase">
              <span className={`w-2 h-2 rounded-full shrink-0 ${r.dot}`} />
              {r.src}
            </div>
            <div className="text-gold text-xs mb-2 tracking-wider">★★★★★</div>
            <p className="text-[13px] text-foreground leading-relaxed mb-3">{r.text}</p>
            <div className="text-xs text-muted-foreground font-bold">{r.name}</div>
            <div className="text-[11px] text-muted-foreground/60">{r.city}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
