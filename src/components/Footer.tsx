import logo from "@/assets/platinup-logo.png";

const Footer = () => (
  <footer className="py-16 px-6 border-t border-border">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
      <img src={logo} alt="PlatinUp" className="h-20 md:h-28 w-auto" />
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} PlatinUp. Všechna práva vyhrazena.
      </p>
    </div>
  </footer>
);

export default Footer;
