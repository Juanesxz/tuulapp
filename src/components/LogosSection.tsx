const logos = [
  {
    src: "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/eurotaller-logo.webp",
    alt: "EuroTaller",
  },
  {
    src: "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/avantaller-logo.webp",
    alt: "AvanTaller",
  },
  {
    src: "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/logo_ruta_4.webp",
    alt: "Ruta 4",
  },
  {
    src: "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/logo18sinfondo.webp",
    alt: "Ruta 18",
  },
];

const LogosSection = () => (
  <section className="bg-gradient-to-r from-[#5aab17] via-[#6ed81a] to-[#5aab17] overflow-hidden relative shadow-[0_0_30px_rgba(128,237,33,0.1)] border-y border-white/5">
    {/* Efecto de brillo/acento superior suavizado */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    {/* Máscaras de desvanecimiento laterales estrechas y con el nuevo tono base */}
    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#5aab17] to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#5aab17] to-transparent z-10 pointer-events-none" />

    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap items-center py-2 w-max shadow-sm">
        {/* Usamos 4 grupos para asegurar que el 50% del ancho sea un múltiplo exacto de los 4 logos */}
        {[...logos, ...logos, ...logos, ...logos].map((l, i) => (
          <div key={i} className="flex-shrink-0 px-12">
            <img
              src={l.src}
              alt={l.alt}
              className={`w-auto object-contain transition-all duration-700 filter drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:scale-110 ${l.alt === "Ruta 18" ? "h-[86px] mix-blend-screen brightness-110 contrast-125" : "h-[64px]"}`}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogosSection;
