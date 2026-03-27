import { Link } from "react-router-dom";
import CTAButton from "@/components/CTAButton";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
    <div className="flex items-center justify-between h-16 max-w-4xl mx-auto px-6">
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-extrabold font-display tracking-tight text-foreground hover:opacity-80 transition-opacity">
        Platin<span className="text-gold">Up</span>
      </Link>
      <CTAButton size="sm" className="text-sm px-5">
        Domluvit hovor
      </CTAButton>
    </div>
  </nav>
);

export default Navbar;
