import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

const CTAButton = ({ children, className = "", size = "lg" }: CTAButtonProps) => (
  <Button variant="cta" size={size} className={`cta-btn ${className}`}>
    {children}
    <ArrowUpRight className="arrow-icon !size-5" strokeWidth={2} />
  </Button>
);

export default CTAButton;
