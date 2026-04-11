import {
  Cog,
  Users2,
  Package,
  LayoutDashboard,
  CircleDollarSign,
  Camera,
} from "lucide-react";

const features = [
  {
    icon: Cog,
    desc: "Órdenes de servicio digitales con fotos y aprobación del cliente. Todo registrado, nada perdido.",
  },
  {
    icon: Users2,
    desc: "Historial completo de cada cliente y cada vehículo desde el primer contacto. Tu taller más profesional.",
  },
  {
    icon: Package,
    desc: "Controla tu inventario en tiempo real y elimina las fugas de dinero silenciosas que le roban utilidad a tu taller.",
  },
  {
    icon: LayoutDashboard,
    desc: "Visualiza las métricas de tu taller desde cualquier parte del mundo sin tener que estar físicamente ahí.",
  },
  {
    icon: CircleDollarSign,
    desc: "Calcula automáticamente el pago de cada técnico según lo que realmente produce.",
  },
  {
    icon: Camera,
    desc: "Recepciona cada vehículo con evidencia fotográfica y garantiza transparencia para tu cliente y tu taller.",
  },
];

interface FeaturesProps {
  onOpenModal: () => void;
}

const FeaturesSection = ({ onOpenModal }: FeaturesProps) => (
  <section
    className="relative overflow-hidden border-b border-white/5 py-24 px-5 md:px-[60px]"
    style={{ background: "#121f32" }}
  >
    {/* Luces de fondo decorativas - Reubicadas al centro/laterales para evitar cortes bruscos */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[60%] h-[50%] bg-[#80ed21]/15 blur-[120px] rounded-full animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[50%] h-[40%] bg-[#80ed21]/10 blur-[100px] rounded-full animate-pulse"
        style={{ animationDuration: "12s", animationDelay: "3s" }}
      />
    </div>

    <div className="max-w-[1150px] mx-auto relative z-10">
      <h2 className="font-display text-[clamp(24px,4.5vw,54px)] font-black uppercase text-white leading-[1.05] mb-16 tracking-tight text-center italic">
        Toda la gestión de tu taller
        <br />
        en un{" "}
        <span className="text-primary drop-shadow-[0_0_20px_rgba(128,237,33,0.6)]">
          solo lugar
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {features.map((f, i) => (
          <div
            key={i}
            className="group relative overflow-hidden bg-gradient-to-br from-[#1b4311] via-[#121f32] to-[#121f32] border border-[#80ed21]/40 rounded-[32px] p-10 flex flex-col items-center text-center transition-all duration-700 hover:-translate-y-4 hover:border-[#80ed21] shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
          >
            {/* Destello central potente para dar color al fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#80ed21]/15 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            {/* Cuadro del Icono - Estética Clean & Strong */}
            <div className="relative w-24 h-24 rounded-[28px] bg-gradient-to-br from-[#121f32] to-[#1a2e4d] border-2 border-[#80ed21]/50 flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-110 group-hover:border-[#80ed21] shadow-[0_0_30px_rgba(128,237,33,0.2)]">
              {/* Glow interno verde para el cuadro */}
              <div className="absolute inset-0 bg-[#80ed21]/20 rounded-[28px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <f.icon className="w-10 h-10 relative z-10 text-white drop-shadow-[0_0_15px_rgba(128,237,33,0.3)] stroke-[2.5px]" />
            </div>

            <div className="relative z-10">
              <p className="text-[17px] text-white font-medium leading-[1.7] tracking-tight group-hover:scale-[1.01] transition-transform duration-500">
                {f.desc}
              </p>
            </div>

            {/* Borde de luz dinámico en la parte superior */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#80ed21]/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      <div className="text-center animate-fade-up">
        <button
          onClick={onOpenModal}
          className="animate-pulse-glow inline-flex items-center gap-3 bg-[#6bb51a] text-white font-display font-extrabold text-[18px] tracking-wider uppercase px-8 py-5 rounded-xl border-none hover:bg-[#5a9c15] hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_35px_rgba(107,181,26,0.3)] glow-pulse cursor-pointer"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Agendar mi Demo Gratis
        </button>
        <p className="text-[13px] text-primary/80 font-semibold mt-6">
          Recibes <span className="text-red-500">$750 USD</span> en beneficios
          al confirmar tu plan
        </p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
