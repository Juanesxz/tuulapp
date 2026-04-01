const featureNames = [
  'Órdenes de Servicio Digitales',
  'Gestión de Clientes y Vehículos',
  'Control de Inventario',
  'Tablero de Control en Tiempo Real',
  'Liquidación de Técnicos',
  'App para tus Clientes — PITZON',
];

const FeaturesMarquee = () => (
  <div className="bg-primary/90 border-t border-b border-primary/50 py-3 overflow-hidden">
    <div className="relative">
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {[...featureNames, ...featureNames, ...featureNames, ...featureNames].map((f, i) => (
          <span key={i} className="mx-8 font-display text-[15px] font-bold tracking-wider text-white uppercase inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/80 inline-block" /> {f}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default FeaturesMarquee;
