import logo from "@/assets/platinup-logo.png";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="PlatinUp" className="h-8 w-auto" />
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} PlatinUp. Všechna práva vyhrazena.
      </p>
    </div>
  </footer>
);

export default Footer;
