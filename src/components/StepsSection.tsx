interface StepsProps {
  onOpenModal: () => void;
}

const steps = [
  {
    n: 1,
    title: "Agendas tu Demostración en Vivo",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/log-ods.webp",
  },
  {
    n: 2,
    title: "Elige el Plan que se ajusta al tamaño de tu taller",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/foto_software.webp",
  },
  {
    n: 3,
    title: "Recibes $750 USD en beneficios y comienzas a transformar tu taller",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/panel-tuulapp.webp",
  },
];

const StepsSection = ({ onOpenModal }: StepsProps) => (
  <section
    className="relative overflow-hidden border-b border-white/5 py-10 px-5 md:px-[60px]"
    style={{
      background:
        "radial-gradient(circle at 50% 100%, rgba(121, 245, 12, 0.05) 0%, #121f32 100%)",
    }}
  >
    <div className="max-w-[1000px] mx-auto relative z-10">
      <div className="text-center mb-10">
        <h2 className="font-display text-[clamp(28px,4vw,54px)] font-black uppercase text-white leading-[1.05] tracking-tighter italic">
          ¿Qué pasa después <br /> del registro?
        </h2>
      </div>

      <div className="flex flex-col gap-14 max-w-[750px] mx-auto mb-16">
        {steps.map((s) => (
          <div
            key={s.n}
            className="group relative overflow-hidden bg-gradient-to-br from-[#1b4311] via-[#121f32] to-[#121f32] border border-[#80ed21]/40 rounded-[32px] transition-all duration-700 hover:-translate-y-2 hover:border-[#80ed21] shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
          >
            {/* Destello central potente para dar color al fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#80ed21]/15 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            {/* Contenedor de Imagen */}
            <div className="p-4 md:p-3 pb-0 relative z-10">
              <div className="rounded-2xl overflow-hidden border border-[#80ed21]/20 shadow-inner bg-[#121f32]/60">
                <img
                  src={s.image}
                  alt={`Paso ${s.n}`}
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Contenido de Texto */}
            <div className="p-4 md:p-6 text-center px-8 relative z-10">
              <h6 className="font-display text-[20px] md:text-[28px] uppercase tracking-tight leading-tight font-black italic">
                <span className="text-primary mr-2 drop-shadow-[0_0_10px_rgba(128,237,33,0.4)]">
                  PASO #{s.n}:
                </span>
                <span className="text-white">{s.title}</span>
              </h6>
            </div>

            {/* Borde de luz dinámico en la parte superior */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#80ed21]/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      <div className="text-center animate-fade-up">
        <button
          onClick={onOpenModal}
          className="animate-pulse-glow inline-flex items-center gap-3 bg-[#6bb51a] text-white font-display font-extrabold text-[18px] tracking-wider uppercase px-6 py-6 rounded-xl border-none hover:bg-[#5a9c15] hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_35px_rgba(107,181,26,0.3)] glow-pulse cursor-pointer"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Agendar mi Demo Gratis
        </button>
      </div>
    </div>
  </section>
);

export default StepsSection;
