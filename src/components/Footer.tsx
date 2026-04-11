const Footer = () => (
  <footer className="bg-background border-t border-border py-8 px-5 md:px-[60px] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left overflow-hidden">
    <img
      src="https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/logo_tuulapp_white_green.webp"
      alt="TuulApp Logo"
      className="h-56 w-auto object-contain -my-24"
    />
    <p className="text-xs text-muted-foreground">
      © 2026 TuulApp · Todos los derechos reservados
    </p>
  </footer>
);

export default Footer;
