import { Link } from "react-router-dom";
import logo from "@/assets/platinup-logo.png";

const Footer = () => (
  <footer className="py-16 px-6 border-t border-border">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
      <img src={logo} alt="PlatinUp" className="h-20 md:h-28 w-auto" />

      <div className="text-xs text-muted-foreground font-body leading-relaxed space-y-1">
        <p>
          PlatinUp je značkou společnosti BullWebs s.r.o.
        </p>
        <p>
          se sídlem na adrese Za Horou 478, 664 82 Říčany
        </p>
        <p>IČO: 22531301</p>
      </div>

      <Link
        to="/obchodni-podminky"
        className="text-sm text-muted-foreground hover:text-gold transition-colors underline underline-offset-4 font-body"
      >
        Obchodní podmínky
      </Link>

      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} PlatinUp. Všechna práva vyhrazena.
      </p>
    </div>
  </footer>
);

export default Footer;
