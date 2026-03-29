const Footer = () => (
  <footer className="bg-background border-t border-border py-6 px-5 md:px-[60px] flex flex-col md:flex-row items-center justify-between gap-3.5 text-center md:text-left">
    <div className="font-display text-2xl font-black tracking-wider text-primary">
      Tuul<span className="text-white">App</span>
    </div>
    <p className="text-xs text-muted-foreground">© 2025 TuulApp · Software de Gestión para Talleres Mecánicos · +1.000 talleres en 29 países</p>
    <p className="text-xs text-muted-foreground">Términos & Condiciones · Política de Privacidad · Soporte</p>
  </footer>
);

export default Footer;
