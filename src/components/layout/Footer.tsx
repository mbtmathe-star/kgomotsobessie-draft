import { Link } from "react-router-dom";
import { MapPin, Phone, Instagram, ArrowRight, Calendar, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="bg-foreground text-primary-foreground">
      {/* Pre-Footer CTA */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
                Ready to take the next step?
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Book a consultation or reach out — we're here to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Consultation
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <a href="tel:0795871204">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img alt="KB Social Workers" className="h-20 w-auto mb-4" src={logo} />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Black woman-owned, Level 1 BBBEE social work practice delivering expert 
              clinical, organisational, and community services.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=100064121128498" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/kgomotsobessie" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[{
              to: "/",
              label: "Home"
            }, {
              to: "/about",
              label: "About"
            }, {
              to: "/services",
              label: "Services"
            }, {
              to: "/impact",
              label: "Impact"
            }, {
              to: "/contact",
              label: "Contact"
            }].map(link => <Link key={link.to} to={link.to} className="text-primary-foreground/70 hover:text-primary transition-colors text-sm inline-flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {link.label}
                </Link>)}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <nav className="flex flex-col gap-2">
              {["Individual Counselling", "Family & Couples Therapy", "Employee Wellness", "Crisis Intervention", "Workshops & Training"].map(service => <Link key={service} to="/services" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  {service}
                </Link>)}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  Medicare, 259 Barkly Road,<br />Homestead, Kimberley 8301
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:0795871204" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  079 587 1204
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:kgomotsobessie88@gmail.com" className="text-primary-foreground/70 hover:text-primary transition-colors text-xs">
                  kgomotsobessie88@gmail.com
                </a>
              </div>
              <div className="mt-2 pt-2 border-t border-primary-foreground/10">
                <p className="text-xs text-primary-foreground/50 space-y-1">
                  <span className="block">Company Reg: 2024/800742/21</span>
                  <span className="block">SACSSP Reg: 1033-819</span>
                  <span className="block">BHF: 9990890001145061</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50 text-center md:text-left">
              © {new Date().getFullYear()} Kgomotso Bessie Social Workers and Consulting Inc. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50 text-center md:text-right max-w-lg">
              Registered & licensed social work practice. This service provides professional psychosocial support.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;