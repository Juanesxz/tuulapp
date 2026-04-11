import { Check } from "lucide-react";

interface BonosProps {
  onOpenModal: () => void;
}

const bonos = [
  {
    title: "Certificación de Métricas para Talleres",
    price: "$250 USD | HOY GRATIS",
  },
  {
    title: "Certificación de Ventas para Talleres",
    price: "$250 USD | HOY GRATIS",
  },
  {
    title: "Bootcamp Internacional — Gerentes de Taller",
    price: "$250 USD | HOY GRATIS",
  },
  { title: "PITZON — App para tus clientes", price: "HOY GRATIS" },
  { title: "Soporte 100% en Español", price: "HOY GRATIS" },
  { title: "Capacitación de Implementación", price: "HOY GRATIS" },
];

interface BonosProps {
  onOpenModal: () => void;
}

const BonosSection = ({ onOpenModal }: BonosProps) => (
  <section
    className="relative overflow-hidden border-b border-white/5 py-24 px-5 md:px-[60px]"
    style={{
      background:
        "radial-gradient(circle at 50% 100%, rgba(128, 237, 33, 0.08) 0%, #121f32 100%)",
    }}
  >
    <div className="max-w-[900px] mx-auto relative z-10">
      <div className="text-center mb-6">
        <h2 className="font-display text-[clamp(28px,4vw,50px)] font-black uppercase text-white leading-[1.05] tracking-tight italic">
          AL INGRESAR TE REGALARÉ
        </h2>
        <h2 className="font-display text-[clamp(28px,4vw,50px)] text-primary drop-shadow-[0_0_10px_rgba(128,237,33,0.4)] font-bold italic">
          <span className="text-red-500">$750 USD</span> en beneficios
        </h2>
      </div>

      {/* Nueva Imagen de Beneficios */}
      <div className="mt-2 mb-8 rounded-[28px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-primary/30">
        <img
          src="https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/gemini_image.webp"
          alt="Beneficios TuulApp"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="bg-gradient-to-b from-[#121f32] to-[#162742] backdrop-blur-md border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
        {/* Lista de Bonos */}
        <div className="p-2">
          {bonos.map((b, i) => (
            <div
              key={b.title}
              className={`flex items-center px-7 py-5 ${i !== bonos.length - 1 ? "border-b border-white/5" : ""} hover:bg-primary/5 transition-all duration-300 group relative overflow-hidden rounded-xl`}
            >
              {/* Destello interno al hover */}
              <div className="absolute inset-y-0 left-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />

              <div className="flex items-start gap-4 relative z-10 w-full">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(128,237,33,0.2)] mt-0.5">
                  <Check className="text-primary w-4 h-4" strokeWidth={3} />
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-white font-bold text-[16px] tracking-wide">
                    {b.title}
                  </span>

                  <div className="font-display font-black shrink-0 flex items-center gap-2">
                    {b.price.includes("|") ? (
                      <>
                        <span className="text-red-500/60 line-through text-[15px]">
                          {b.price.split("|")[0].trim()}
                        </span>
                        <span className="text-white/20 font-light">|</span>
                        <span className="text-primary text-[13px] drop-shadow-[0_0_8px_rgba(128,237,33,0.4)] animate-pulse uppercase tracking-wider">
                          HOY GRATIS
                        </span>
                      </>
                    ) : (
                      <span className="text-primary text-[15px] drop-shadow-[0_0_8px_rgba(128,237,33,0.4)] uppercase tracking-wider">
                        HOY GRATIS
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen de Total Unificado */}
        <div className="p-10 md:p-14 relative overflow-hidden text-center">
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-[20px] md:text-[16px] text-white/70 mb-10 max-w-[600px] font-medium leading-relaxed">
              Todo esto está valorado <br /> por{" "}
              <span className="text-primary font-bold  italic">
                más de <span className="text-red-500">$750 USD</span>
              </span>
            </p>
            <h4 className="font-display text-[22px] md:text-[32px] font-black text-white uppercase italic tracking-tighter mb-3">
              POR LA COMPRA DE TUULAPP TE LLEVAS TODO ESTO
            </h4>

            <div className="font-display text-[80px] md:text-[100px] font-black text-primary leading-none drop-shadow-[0_0_30px_rgba(128,237,33,0.6)] flex items-center gap-3 mb-6">
              GRATIS
            </div>

            <div className="text-center animate-fade-up">
              <button
                onClick={onOpenModal}
                className="animate-pulse-glow inline-flex items-center gap-3 bg-[#6bb51a] text-white font-display font-extrabold text-[14px] tracking-wider uppercase px-4 py-5 rounded-xl border-none hover:bg-[#5a9c15] hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_35px_rgba(107,181,26,0.3)] glow-pulse cursor-pointer"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar mi Demo Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BonosSection;
