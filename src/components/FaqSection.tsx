import { useState } from "react";

const faqs = [
  {
    q: "¿TuulApp está hecha para todo tipo de taller?",
    a: "Sí. TuulApp está diseñada para talleres de carros, motocicletas, bicimotos, maquinaria pesada, vehículos livianos, camionetas, latonería y pintura, autolavados, talleres multimarca, especializados y flotas. En general para todo tipo de taller mecánico.",
  },
  {
    q: "¿Necesito saber de tecnología para usar TuulApp?",
    a: "No. Si sabes usar WhatsApp, sabes usar TuulApp. Fue diseñada pensando en dueños de taller, no en técnicos de sistemas. Y si tienes dudas, tu Gerente de Éxito las resuelve contigo.",
  },
  {
    q: "¿Qué tipos de planes manejan?",
    a: "TuulApp tiene planes que se ajustan al tamaño y tipo de tu taller. Los detalles y precios exactos los defines directamente con tu especialista en la demo personalizada, así te aseguramos que pagas exactamente por lo que necesitas, sin excesos.",
  },
  {
    q: "¿Qué es PITZON y cómo me beneficia?",
    a: "PITZON es la app exclusiva para los clientes de tu taller. Con ella, tus clientes agendan citas, ven el historial completo de su vehículo y reciben recordatorios de mantenimiento. El resultado: más recurrencia, más fidelización y menos tiempo respondiendo llamadas. No existe en ningún otro software del mercado y va incluida gratis con tu plan.",
  },
  {
    q: "¿Los $750 USD en bonos son reales?",
    a: "Sí. La Certificación de Métricas ($250), la Certificación de Ventas ($250) y el acceso al Bootcamp Internacional ($250) son programas reales con valor comprobable. Están disponibles para nuevos clientes que confirmen su plan durante el período de oferta vigente.",
  },
  {
    q: "¿Puedo usar TuulApp desde mi celular?",
    a: "Sí. TuulApp funciona en cualquier dispositivo con internet celular, tablet o computador. Tú y tu equipo pueden acceder desde cualquier parte del mundo.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-secondary border-t border-border py-10 px-5 md:px-[60px] overflow-hidden">
      <div className="max-w-[780px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-[26px] font-black uppercase text-primary mb-3 block italic">
            Preguntas frecuentes
          </span>
        </div>

        {faqs.map((f, i) => (
          <div
            key={i}
            className="border border-border rounded-[10px] mb-2.5 bg-card overflow-hidden"
          >
            <div
              onClick={() => setOpen(open === i ? null : i)}
              className="p-4 md:p-[18px_22px] text-[15px] font-semibold text-white cursor-pointer flex justify-between items-center select-none hover:text-primary transition-colors"
            >
              {f.q}
              <span
                className={`text-[22px] text-primary shrink-0 ml-3 transition-transform ${open === i ? "rotate-45" : ""}`}
              >
                +
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-[300px]" : "max-h-0"}`}
            >
              <div className="px-5 pb-4 text-sm text-white leading-relaxed font-extralight">
                {f.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
