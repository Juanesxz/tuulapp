import pitzonHero from '@/assets/pitzon-hero.png';

const PitzonSection = () => (
  <section className="bg-background border-b border-border px-5 md:px-[60px] py-20">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-[clamp(28px,4vw,50px)] font-black uppercase text-white leading-[1.05] tracking-tight">
          🚀 <span className="text-primary">PITZON</span> — Lo que ningún otro<br />software del mercado tiene
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
            Al adquirir TuulApp, tus clientes reciben su propia aplicación. Con <strong className="text-foreground">PITZON</strong> pueden agendar citas, ver el historial completo de su vehículo y recibir recordatorios de mantenimiento. Tus clientes vuelven solos. La recurrencia aumenta. Y eso se siente en tus ingresos desde el primer mes.
          </p>
          <p className="font-display font-black text-primary text-lg uppercase mb-8">
            Dos aplicaciones por el precio de una — y no existe en ningún otro software del mercado.
          </p>

          <div className="space-y-4">
            {[
              { icon: '⭐', text: 'Conecta mejor con tus clientes' },
              { icon: '🛡️', text: 'Genera más confianza en cada servicio' },
              { icon: '📈', text: 'Aumenta tu flujo de nuevos clientes' },
              { icon: '⚙️', text: 'Haz parte de la red más grande de talleres' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3.5 hover:border-border-green transition-colors">
                <span className="text-xl">{item.icon}</span>
                <span className="text-foreground font-semibold text-[15px]">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 inline-block bg-primary text-primary-foreground font-display text-[13px] font-black tracking-[2px] uppercase py-3 px-5 rounded-lg">
            INCLUIDO 100% GRATIS
          </div>
        </div>

        <div className="flex justify-center">
          <img src={pitzonHero} alt="PITZON App" className="max-w-full w-[480px] rounded-2xl" style={{ filter: 'drop-shadow(0 20px 60px rgba(93,187,60,.2))' }} />
        </div>
      </div>
    </div>
  </section>
);

export default PitzonSection;
