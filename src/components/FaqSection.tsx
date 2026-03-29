import { useState } from 'react';

const faqs = [
  { q: '¿TuulApp está hecha para todo tipo de taller?', a: 'TuulApp está diseñada para talleres mecánicos, de motos, multimarca, especializados y flotas — desde talleres con 1 técnico hasta operaciones con más de 20. En tu demo te mostramos exactamente cómo se adapta al tipo y tamaño de tu negocio.' },
  { q: '¿Necesito saber de tecnología para usar TuulApp?', a: 'No. Si sabes usar WhatsApp, sabes usar TuulApp. Fue diseñada pensando en dueños de taller, no en técnicos de sistemas. Y si tienes dudas, tu Gerente de Éxito las resuelve desde el día uno.' },
  { q: '¿Qué tipos de planes manejan?', a: 'TuulApp tiene planes que se ajustan al tamaño y tipo de tu taller. Los detalles y precios exactos los defines directamente con tu especialista en la demo personalizada — así te aseguramos que pagas exactamente por lo que necesitas, sin excesos.' },
  { q: '¿Cuánto tiempo tarda la implementación?', a: 'La mayoría de talleres están operando con TuulApp en menos de 48 horas. Tu Gerente de Éxito te acompaña paso a paso para que la transición sea rápida y sin interrupciones en tu operación diaria.' },
  { q: '¿Qué es PITZON y cómo me beneficia?', a: 'PITZON es la app exclusiva para los clientes de tu taller. Con ella, tus clientes agendan citas, ven el historial completo de su vehículo y reciben recordatorios de mantenimiento. El resultado: más recurrencia, más fidelización y menos tiempo respondiendo llamadas. No existe en ningún otro software del mercado — y va incluida gratis con tu plan.' },
  { q: '¿Los $750 USD en bonos son reales?', a: 'Sí. La Certificación de Métricas ($250), la Certificación de Ventas ($250) y el acceso al Bootcamp Internacional ($250) son programas reales con valor comprobable. Están disponibles para nuevos clientes que confirmen su plan durante el período de oferta vigente.' },
  { q: '¿Puedo usar TuulApp desde mi celular?', a: 'Sí. TuulApp funciona en cualquier dispositivo con internet — celular, tablet o computador. Tú y tu equipo pueden acceder desde donde estén, sin instalar nada en la versión web.' },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-secondary border-t border-border py-20 px-5 md:px-[60px]">
      <div className="max-w-[780px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-primary mb-3 block">Preguntas frecuentes</span>
          <h2 className="font-display text-[clamp(28px,4vw,50px)] font-black uppercase text-white leading-[1.05] tracking-tight">
            Todo lo que necesitas saber<br /><span className="text-primary">antes de empezar</span>
          </h2>
        </div>

        {faqs.map((f, i) => (
          <div key={i} className="border border-border rounded-[10px] mb-2.5 bg-card overflow-hidden">
            <div
              onClick={() => setOpen(open === i ? null : i)}
              className="p-4 md:p-[18px_22px] text-[15px] font-semibold text-white cursor-pointer flex justify-between items-center select-none hover:text-primary transition-colors"
            >
              {f.q}
              <span className={`text-[22px] text-primary shrink-0 ml-3 transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-[300px]' : 'max-h-0'}`}>
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
