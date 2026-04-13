import { useState } from "react";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

const DemoModal = ({ open, onClose }: DemoModalProps) => {
  const [code, setCode] = useState("🇨🇴 +57");
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!tel || !name) {
      alert("Por favor completa tu nombre y número de WhatsApp.");
      return;
    }
    if (!c1) {
      alert("Por favor acepta los términos y la política de privacidad.");
      return;
    }

    setIsLoading(true);
    try {
      // Usamos mode: 'no-cors' para evitar errores de CORS con Google Scripts
      // Nota: Con no-cors no podremos leer la respuesta 'ok', pero los datos llegarán a la hoja.
      await fetch(
        "https://script.google.com/macros/s/AKfycbzhEr3kHggOiCY11SlYeZe_8I6u_hku9MPqMPyE1Ayf0jzZ5rNAA4RLhSbxJnccfzHWog/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            Pais: code,
            Movil: tel,
            Nombre: name,
            Email: email,
          }),
        }
      );
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    } finally {
      setIsLoading(false);
    }

    const messageLines = [
      `Hola ${name} 👋, ¡Bienvenido(a) a TuulApp 🚗!`,
      "",
      "Para agendar tu demo lo más pronto posible, respóndenos con lo siguiente:",
      "",
      "🔧 Tipo de taller:",
      "🚙 ¿Cuántos vehículos atiendes en promedio al mes?:",
      "👨‍🔧 ¿Eres el dueño de taller?:",
    ];

    const msg = encodeURIComponent(messageLines.join("\n")).replace(
      /%0A/g,
      "%0A",
    );
    window.open(`whatsapp://send?phone=573102014814&text=${msg}`);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center p-5 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      style={{ background: "rgba(0,0,0,.8)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`bg-[hsl(120,18%,7.5%)] border border-border-green rounded-[18px] p-8 md:p-11 max-w-[480px] w-full relative transition-transform duration-300 ${open ? "translate-y-0" : "translate-y-5"}`}
        style={{
          boxShadow:
            "0 0 80px rgba(93,187,60,.15), 0 40px 100px rgba(0,0,0,.7)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 bg-transparent border-none text-muted-foreground text-2xl cursor-pointer hover:text-white transition-colors"
        >
          ✕
        </button>

        <h3 className="font-display text-[28px] font-black uppercase text-primary mb-1.5 tracking-wide">
          Agenda tu Demo Gratuita
        </h3>

        <div className="mb-4">
          <label className="block text-[11px] font-bold text-muted-foreground mb-1.5 tracking-wide uppercase">
            País y Móvil
          </label>
          <div className="grid grid-cols-[130px_1fr] gap-2">
            <select
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              <option>🇨🇴 +57</option>
              <option>🇲🇽 +52</option>
              <option>🇵🇪 +51</option>
              <option>🇦🇷 +54</option>
              <option>🇨🇱 +56</option>
              <option>🇪🇨 +593</option>
              <option>🇻🇪 +58</option>
              <option>🇺🇸 +1</option>
            </select>
            <input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              type="tel"
              placeholder="Tu número"
              className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[11px] font-bold text-muted-foreground mb-1.5 tracking-wide uppercase">
            Tu Nombre
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Tu nombre completo"
            className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="mb-4">
          <label className="block text-[11px] font-bold text-muted-foreground mb-1.5 tracking-wide uppercase">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="tucorreo@ejemplo.com"
            className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="flex items-start gap-2.5 mb-2.5">
          <input
            type="checkbox"
            checked={c1}
            onChange={(e) => setC1(e.target.checked)}
            className="w-4 h-4 mt-0.5 shrink-0 accent-primary cursor-pointer"
          />
          <label
            className="text-[11px] text-muted-foreground leading-relaxed cursor-pointer"
            onClick={() => setC1(!c1)}
          >
            Autorizo a TuulApp a tratar mis datos según la{" "}
            <a
              href="https://legal.tuulapp.com/document?type=privacy_policy&taget=erp&locale=es-CO"
              className="text-primary no-underline"
            >
              Política de Privacidad
            </a>{" "}
            y el{" "}
            <a
              href="https://legal.tuulapp.com/document?type=data_authorization&taget=erp&locale=es-CO"
              className="text-primary no-underline"
            >
              Tratamiento de Datos Personales
            </a>
          </label>
        </div>

        <div className="text-center animate-fade-up">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`animate-pulse-glow inline-flex items-center gap-3 bg-[#6bb51a] text-white font-display font-extrabold text-[14px] tracking-wider uppercase px-4 py-5 rounded-xl border-none transition-all duration-300 shadow-[0_15px_35px_rgba(107,181,26,0.3)] ${isLoading ? "opacity-75 cursor-not-allowed" : "hover:bg-[#5a9c15] hover:-translate-y-1 glow-pulse cursor-pointer"}`}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {isLoading ? "Enviando..." : "Agendar mi Demo Gratis"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
