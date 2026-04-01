import logoEurotaller from '@/assets/logo-eurotaller.png';
import logoAvantaller from '@/assets/logo-avantaller.png';
import logoRuta4 from '@/assets/logo-ruta4.png';
import logoRuta18 from '@/assets/logo-ruta18.jpg';

const logos = [
  { src: logoEurotaller, alt: 'EuroTaller' },
  { src: logoAvantaller, alt: 'AvanTaller' },
  { src: logoRuta4, alt: 'Ruta 4' },
  { src: logoRuta18, alt: 'Ruta 18' },
];

const LogosSection = () => (
  <section className="bg-primary/90 border-t border-b border-primary/50 py-4 overflow-hidden">
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {[...logos, ...logos, ...logos, ...logos].map((l, i) => (
          <img key={i} src={l.src} alt={l.alt} className="mx-10 h-[45px] w-auto object-contain brightness-0 invert opacity-90" />
        ))}
      </div>
    </div>
  </section>
);

export default LogosSection;
