const badItems = [
  {
    icon: "📓",
    text: "Cuadernos, WhatsApp y memoria para manejar tu operación",
  },
  {
    icon: "😤",
    text: 'Discutiendo con clientes porque "eso no se habló" — sin fotos, sin registro, sin respaldo',
  },
  {
    icon: "💸",
    text: "Perdiendo dinero en repuestos que desaparecen y servicios que nadie cobra completos",
  },
  {
    icon: "🔥",
    text: "Apagando incendios todo el día, sin tiempo para crecer ni para tu familia",
  },
  { icon: "📅", text: "En 12 meses exactamente en el mismo lugar — o peor" },
];

const goodItems = [
  {
    icon: "📱",
    text: "Órdenes digitales con fotos — todo documentado, nada perdido, cero riesgo legal",
  },
  {
    icon: "🗂️",
    text: "Historial completo de cada vehículo y cliente. Profesionalismo que genera confianza real",
  },
  {
    icon: "📦",
    text: "Inventario en tiempo real. Sabes exactamente qué tienes, qué necesitas y cuánto ganas",
  },
  {
    icon: "🌎",
    text: "Controlas tu taller desde cualquier parte. El negocio funciona aunque no estés ahí",
  },
  {
    icon: "💚",
    text: "Cuando tu taller tiene orden, tú llegas diferente a casa. Tu familia también lo siente",
  },
  {
    icon: "🏆",
    text: "Te unes a la red de talleres más grande de Latinoamérica",
  },
];

const OptionsSection = () => (
  <section className="bg-background border-b border-border py-20 px-5 md:px-[60px] overflow-hidden">
    <div className="max-w-[1060px] mx-auto">
      <div className="text-center mb-12">
        <span className="text-[11px] font-bold tracking-[3px] uppercase text-primary mb-3 block">
          Tu decisión
        </span>
        <h2 className="font-display text-[clamp(28px,4vw,50px)] font-black uppercase text-white leading-[1.05] tracking-tight italic">
          Hoy tienes
          <br />
          <span className="text-primary">dos opciones</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] rounded-2xl overflow-hidden border border-border">
        <div className="p-8 md:p-9 bg-destructive/[.05] border-b md:border-b-0 md:border-r border-destructive/10">
          <div className="font-display text-[15px] font-extrabold tracking-[2px] uppercase pb-3.5 border-b border-destructive/[.18] mb-5 text-destructive">
            ❌ Opción 1 — Seguir como estás
          </div>
          {badItems.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 items-start mb-3.5 text-sm text-foreground leading-relaxed"
            >
              <span className="shrink-0 mt-px">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        <div
          className="hidden md:flex bg-card items-center justify-center px-5 font-display text-xl text-muted-foreground tracking-[3px] border-l border-r border-border"
          style={{ writingMode: "vertical-rl" }}
        >
          VS
        </div>

        <div className="p-8 md:p-9 bg-primary/[.05]">
          <div className="font-display text-[15px] font-extrabold tracking-[2px] uppercase pb-3.5 border-b border-primary/20 mb-5 text-primary">
            ✅ Opción 2 — Con TuulApp + $750 USD en beneficios
          </div>
          {goodItems.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 items-start mb-3.5 text-sm text-foreground leading-relaxed"
            >
              <span className="shrink-0 mt-px">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OptionsSection;
