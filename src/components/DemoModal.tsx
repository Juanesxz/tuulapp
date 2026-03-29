import { useState } from 'react';

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

const DemoModal = ({ open, onClose }: DemoModalProps) => {
  const [code, setCode] = useState('🇨🇴 +57');
  const [tel, setTel] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);

  const handleSubmit = () => {
    if (!tel || !name) { alert('Por favor completa tu nombre y número de WhatsApp.'); return; }
    if (!c1 || !c2) { alert('Por favor acepta los términos y la política de privacidad.'); return; }
    const msg = encodeURIComponent(`Hola, soy ${name}. Quiero agendar una demo de TuulApp. Mi número es ${tel}.`);
    window.open(`https://wa.me/573000000000?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center p-5 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      style={{ background: 'rgba(0,0,0,.8)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={`bg-[hsl(120,18%,7.5%)] border border-border-green rounded-[18px] p-8 md:p-11 max-w-[480px] w-full relative transition-transform duration-300 ${open ? 'translate-y-0' : 'translate-y-5'}`} style={{ boxShadow: '0 0 80px rgba(93,187,60,.15), 0 40px 100px rgba(0,0,0,.7)' }}>
        <button onClick={onClose} className="absolute top-4 right-5 bg-transparent border-none text-muted-foreground text-2xl cursor-pointer hover:text-white transition-colors">✕</button>

        <h3 className="font-display text-[28px] font-black uppercase text-white mb-1.5 tracking-wide">
          Agenda tu <span className="text-primary">Demo Gratuita</span>
        </h3>
        <p className="text-[13px] text-muted-foreground mb-6 leading-relaxed">Un especialista analizará tu taller y te mostrará en vivo cómo TuulApp lo transforma. Saldrás con un plan claro y $750 USD en beneficios.</p>

        <div className="mb-4">
          <label className="block text-[11px] font-bold text-muted-foreground mb-1.5 tracking-wide uppercase">País y Móvil</label>
          <div className="grid grid-cols-[130px_1fr] gap-2">
            <select value={code} onChange={(e) => setCode(e.target.value)} className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
              <option>🇨🇴 +57</option>
              <option>🇲🇽 +52</option>
              <option>🇵🇪 +51</option>
              <option>🇦🇷 +54</option>
              <option>🇨🇱 +56</option>
              <option>🇪🇨 +593</option>
              <option>🇻🇪 +58</option>
              <option>🇺🇸 +1</option>
            </select>
            <input value={tel} onChange={(e) => setTel(e.target.value)} type="tel" placeholder="Tu número sin indicativo" className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-primary transition-colors" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[11px] font-bold text-muted-foreground mb-1.5 tracking-wide uppercase">Tu Nombre</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Tu nombre completo" className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-primary transition-colors" />
        </div>

        <div className="mb-4">
          <label className="block text-[11px] font-bold text-muted-foreground mb-1.5 tracking-wide uppercase">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tucorreo@ejemplo.com" className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-primary transition-colors" />
        </div>

        <div className="flex items-start gap-2.5 mb-2.5">
          <input type="checkbox" checked={c1} onChange={(e) => setC1(e.target.checked)} className="w-4 h-4 mt-0.5 shrink-0 accent-primary cursor-pointer" />
          <label className="text-[11px] text-muted-foreground leading-relaxed cursor-pointer" onClick={() => setC1(!c1)}>
            Autorizo a TuulApp a tratar mis datos según la <a href="#" className="text-primary no-underline">Política de Privacidad</a> y el <a href="#" className="text-primary no-underline">Tratamiento de Datos Personales</a>
          </label>
        </div>
        <div className="flex items-start gap-2.5 mb-2.5">
          <input type="checkbox" checked={c2} onChange={(e) => setC2(e.target.checked)} className="w-4 h-4 mt-0.5 shrink-0 accent-primary cursor-pointer" />
          <label className="text-[11px] text-muted-foreground leading-relaxed cursor-pointer" onClick={() => setC2(!c2)}>
            Declaro que he leído y acepto los <a href="#" className="text-primary no-underline">Términos y Condiciones</a>
          </label>
        </div>

        <button onClick={handleSubmit} className="w-full bg-primary text-primary-foreground font-display font-black text-lg tracking-wide uppercase py-4 rounded-lg mt-2 flex items-center justify-center gap-2.5 hover:bg-primary-dark hover:-translate-y-px transition-all">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#000"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          Agendar mi Demo por WhatsApp
        </button>

        <p className="text-center text-[11px] text-muted-foreground mt-3.5">
          ¿Ya tienes cuenta? <a href="#" className="text-primary no-underline font-semibold">Iniciar Sesión</a> · Copyright © 2026 TuulApp
        </p>
      </div>
    </div>
  );
};

export default DemoModal;
