interface BonosProps {
  onOpenModal: () => void;
}

const bonos = [
  { title: 'Certificación de Métricas para Talleres', price: '$250 USD' },
  { title: 'Certificación de Ventas para Talleres', price: '$250 USD' },
  { title: 'Bootcamp Internacional — Gerentes de Taller', price: '$250 USD' },
  { title: 'PITZON — App para tus clientes', price: 'GRATIS' },
  { title: 'Soporte 100% en Español', price: 'GRATIS' },
  { title: 'Capacitación de Implementación', price: 'GRATIS' },
];

const BonosSection = ({ onOpenModal: _onOpenModal }: BonosProps) => (
  <section className="bg-background border-b border-border py-20 px-5 md:px-[60px]">
    <div className="max-w-[900px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-[clamp(28px,4vw,50px)] font-black uppercase text-white leading-[1.05] tracking-tight">
          AL INGRESAR TE <span className="text-primary">REGALARÉ</span>
        </h2>
      </div>

      <div className="border border-border rounded-[14px] overflow-hidden mb-7">
        {bonos.map((b, i) => (
          <div key={b.title} className={`flex items-center justify-between px-6 py-4 ${i !== bonos.length - 1 ? 'border-b border-border' : ''} hover:bg-card-hover transition-colors`}>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-foreground font-semibold text-[15px]">{b.title}</span>
            </div>
            <span className={`font-display font-black text-sm shrink-0 ${b.price === 'GRATIS' ? 'text-primary' : 'text-destructive line-through'}`}>
              {b.price}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between rounded-[14px] p-7 md:p-9 border-2 border-border-green gap-3.5" style={{ background: 'linear-gradient(135deg, rgba(93,187,60,.1), rgba(93,187,60,.03))' }}>
        <div>
          <h4 className="font-display text-[22px] font-black text-white uppercase">🎁 Total en beneficios reales que recibes</h4>
          <p className="text-[13px] text-muted-foreground mt-0.5">Cert. Métricas + Cert. Ventas + Bootcamp Internacional + PITZON + Soporte + Implementación</p>
        </div>
        <div className="font-display text-[50px] font-black text-primary leading-none">
          <small className="text-[22px]">$</small>750<small className="text-2xl"> USD</small>
        </div>
      </div>
    </div>
  </section>
);

export default BonosSection;
