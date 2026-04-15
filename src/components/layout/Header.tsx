import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const navLinks = [{
  href: "/",
  label: "Home"
}, {
  href: "/about",
  label: "About"
}, {
  href: "/services",
  label: "Services"
}, {
  href: "/services/disaster-training",
  label: "Disaster Training"
}, {
  href: "/healthy-entrepreneur-wellness",
  label: "HEW"
}, {
  href: "/gallery",
  label: "Gallery"
}, {
  href: "/impact",
  label: "Impact"
}, {
  href: "/contact",
  label: "Contact"
}];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-sm border-b border-border/50" : ""}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-28 md:h-36">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Kgomotso Bessie Social Workers and Consulting Inc" className="h-20 md:h-28 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <p className="font-heading text-sm font-semibold text-foreground leading-tight">
                Kgomotso Bessie
              </p>
              <p className="text-xs text-muted-foreground">
                Social Workers & Consulting Inc
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-accent ${location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"}`}>
                {link.label}
                {location.pathname === link.href && <motion.div layoutId="activeNav" className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />}
              </Link>)}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:0713787172" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              
              
            </a>
            <Button asChild size="default">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-background border-t border-border shadow-lg">
            <nav className="container-custom px-4 py-6 flex flex-col gap-2">
              {navLinks.map(link => <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className={`text-base font-medium transition-colors py-3 px-4 rounded-lg ${location.pathname === link.href ? "text-primary bg-accent" : "text-foreground hover:bg-accent hover:text-primary"}`}>
                  {link.label}
                </Link>)}
              <div className="pt-4 mt-2 border-t border-border space-y-3">
                <a href="tel:0713787172" className="flex items-center gap-2 text-sm text-muted-foreground py-2 px-4">
                  <Phone className="h-4 w-4" />
                  <span>071 378 7172</span>
                </a>
                <Button asChild className="w-full" size="lg">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Book a Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Header;