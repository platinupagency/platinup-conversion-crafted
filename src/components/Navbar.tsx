import logo from "@/assets/platinup-logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
    <div className="container flex items-center justify-between h-16 max-w-6xl mx-auto px-6">
      <img src={logo} alt="PlatinUp" className="h-10 w-auto" />
      <Button variant="cta" size="sm">
        Domluvit hovor
      </Button>
    </div>
  </nav>
);

export default Navbar;
