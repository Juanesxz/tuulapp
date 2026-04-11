const PitzonSection = () => (
  <section
    className="relative overflow-hidden border-b border-white/5 px-5 md:px-[60px] py-16"
    style={{
      background:
        "radial-gradient(circle at 100% 50%, rgba(255, 90, 0, 0.08) 0%, #121f32 100%)",
    }}
  >
    {/* Glow decorativo lateral */}
    <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-[#ff5a00]/10 blur-[120px] rounded-full pointer-events-none" />

    <div className="max-w-[1100px] mx-auto relative z-10">
      <div className="text-center mb-10 flex flex-col items-center">
        {/* Nueva etiqueta "No verás nada igual" */}
        <div className="inline-flex items-center px-6 py-2 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm mb-6 animate-fade-up">
          <span className="text-white/80 font-display font-bold text-[13px] tracking-[2px] uppercase">
            No verás nada igual...
          </span>
        </div>

        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-black uppercase text-white leading-[1.05] tracking-tight italic">
          <span className="text-[#ff5a00]">¡PITZON!</span> Lo que ningún otro
          software del mercado tiene
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-white/70 mb-8 text-[16px] mx-6 text-center font-light leading-relaxed">
            Al adquirir TuulApp, te regalaré{" "}
            <strong className="font-bold">PITZON</strong>, la app para tus
            clientes. Con <strong className="font-bold">PITZON</strong> tus
            clientes podrán <strong className="font-bold">AGENDAR CITAS</strong>{" "}
            en tu taller.
          </p>

          <div className="flex justify-center relative mb-6">
            <div className="absolute inset-0 bg-[#ff5a00]/15 blur-[80px] rounded-full scale-75 animate-pulse" />
            <img
              src="https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/3_post_en_Instagram.webp"
              alt="PITZON App"
              className="relative z-10 max-w-full w-[480px] rounded-3xl"
              style={{
                filter: "drop-shadow(0 20px 80px rgba(255, 90, 0, 0.25))",
              }}
            />
          </div>

          <div className="space-y-4">
            {[
              { icon: "⭐", text: "Conecta mejor con tus clientes" },
              { icon: "🛡️", text: "Genera más confianza en cada servicio" },
              { icon: "📈", text: "Aumenta tu flujo de nuevos clientes" },
              {
                icon: "⚙️",
                text: "Haz parte de la red más grande de talleres",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="group flex items-center gap-4 bg-gradient-to-r from-[#121f32] to-[#1a2e4d] backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 hover:border-[#ff5a00]/30 transition-all duration-500 hover:translate-x-3 overflow-hidden relative"
              >
                {/* Iluminación interna de color */}
                <div className="absolute inset-y-0 left-0 w-1 bg-[#ff5a00] opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff5a00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="relative z-10 text-2xl drop-shadow-[0_0_12px_rgba(255,90,0,0.5)] group-hover:scale-125 transition-transform duration-500">
                  {item.icon}
                </span>
                <span className="relative z-10 text-white font-bold text-[16px] tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 inline-block bg-[#ff5a00] text-white font-display text-[14px] font-black tracking-[3px] uppercase py-3.5 px-7 rounded-full shadow-[0_0_30px_rgba(255,90,0,0.4)]">
            INCLUIDO 100% GRATIS
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PitzonSection;
