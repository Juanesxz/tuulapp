const features = [
  { icon: '📋', title: 'Órdenes de Servicio Digitales', desc: 'Crea, asigna y da seguimiento a cada trabajo con fotos, observaciones y firma del cliente. Todo registrado. Nada perdido.' },
  { icon: '👥', title: 'Gestión de Clientes y Vehículos', desc: 'Historial completo de cada cliente y cada vehículo. Profesionalismo visible desde el primer contacto.' },
  { icon: '📦', title: 'Control de Inventario', desc: 'Sabe en tiempo real qué tienes, qué se acaba y cuánto cuesta. Elimina las fugas de dinero silenciosas.' },
  { icon: '📊', title: 'Tablero de Control en Tiempo Real', desc: 'Ve el estado de cada vehículo y cada técnico. Dirige tu negocio sin tener que estar ahí.' },
  { icon: '💰', title: 'Liquidación de Técnicos', desc: 'Mide productividad real, liquida de forma justa y toma decisiones con datos — no con suposiciones.' },
  { icon: '📸', title: 'Registro Fotográfico', desc: 'Documenta cada servicio con fotos reales. Tus clientes ven el antes y el después — y confían más en ti que en cualquier otro taller.' },
  { icon: '📱', title: 'App para tus Clientes — PITZON', desc: 'Tus clientes agendan, hacen seguimiento y ven su historial. Ellos vuelven solos. La recurrencia se dispara.' },
];

const FeaturesSection = () => (
  <section className="bg-background border-b border-border py-20 px-5 md:px-[60px]">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="font-display text-[clamp(28px,4vw,50px)] font-black uppercase text-white leading-[1.05] mb-11 tracking-tight text-center">
        Toda la gestión de tu taller<br />en un <span className="text-primary">solo lugar</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 border border-border rounded-[14px] overflow-hidden">
        {features.map((f) => (
          <div key={f.title} className="bg-card hover:bg-card-hover transition-colors p-7 md:p-9 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-[18px] flex items-center justify-center text-[34px] mb-4" style={{ background: 'linear-gradient(135deg, #1a2a1a, #0f1a0f)', boxShadow: '0 4px 20px rgba(0,0,0,.4)' }}>
              {f.icon}
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              <strong className="block font-display text-[17px] font-extrabold text-white tracking-wide mb-1.5 uppercase">{f.title}</strong>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
