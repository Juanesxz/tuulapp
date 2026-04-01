interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar = ({ onOpenModal }: NavbarProps) => (
  <nav className="flex items-center justify-between px-5 md:px-[60px] py-4 bg-background/[.93] border-b border-border sticky top-0 z-50 backdrop-blur-[14px]">
    <div className="font-display text-[30px] font-black tracking-wider text-primary">
      Tuul<span className="text-white">App</span>
    </div>
    <button
      onClick={onOpenModal}
      className="bg-primary text-primary-foreground font-display font-extrabold text-[15px] tracking-wide px-6 py-2.5 rounded-md uppercase hover:bg-primary-dark hover:-translate-y-px transition-all"
    >
      Agendar mi Demo Gratis
    </button>
  </nav>
);

export default Navbar;
