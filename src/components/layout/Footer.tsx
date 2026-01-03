import { Link } from "react-router-dom";
import { MapPin, Phone, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="KB Social Workers" className="h-20 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering individuals, families, and organizations through expert clinical social work and transformative wellness consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Home</Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">About</Link>
              <Link to="/services" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Services</Link>
              <Link to="/impact" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Impact</Link>
              <Link to="/contact" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  259 Barkly Road, Homestead,<br />Kimberley, 8301
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:0795871204" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  079 587 1204
                </a>
              </div>
            </div>
          </div>

          {/* Social & Registration */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://instagram.com/kgomotsobessie88"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/kgomotso-bessie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/50">
              Reg: K2024800742<br />
              (Incorporated December 2024)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50 text-center md:text-left">
              © {new Date().getFullYear()} Kgomotso Bessie Social Workers and Consulting Inc. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50 text-center md:text-right max-w-lg">
              Disclaimer: This service provides professional psychosocial support and is not intended for emergency or crisis situations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
