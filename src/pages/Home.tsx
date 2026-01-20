import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, Award, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import heroOffice from "@/assets/hero-office.png";
import breakfastTeenagerWorkshop from "@/assets/breakfast-teenager-workshop.png";
import healthyEntrepreneur from "@/assets/healthy-entrepreneur-wellness.png";
import parenting21stFamily from "@/assets/parenting-21st-family.png";
const Home = () => {
  return <>
      {/* Hero Banner - Full Width with Large Image */}
      <section className="relative min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroOffice} alt="Professional social work office" className="w-full h-full object-cover" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
        </div>
        
        {/* Content */}
        <div className="container-wide relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl py-12 lg:py-0">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              <span>Black Woman-Owned • Level 1 BBBEE • SACSSP Registered</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Resilience in Action. Care in Practice.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
              Empowering individuals, families, and organizations across the Northern Cape 
              through professional social work services and transformative wellness consulting.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button asChild size="lg" className="btn-primary-gradient btn-glow">
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nav Card Grid - NASW Style */}
      <section className="bg-white py-10 border-b border-border">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[{
            image: breakfastTeenagerWorkshop,
            title: "Breakfast with my Teenager",
            description: "Breakfast with my Teenager",
            link: "/services#breakfast-with-my-teenager"
          }, {
            image: healthyEntrepreneur,
            title: "Healthy Entrepreneur Wellness",
            description: "Healthy Entrepreneur Wellness",
            link: "/services#healthy-entrepreneur-wellness"
          }, {
            image: parenting21stFamily,
            title: "Parenting in the 21st Century",
            description: "Parenting in the 21st Century",
            link: "/services#parenting-in-the-21st-century"
          }].map((card, index) => <motion.div key={index} variants={fadeUp}>
                <Link to={card.link} className="block group bg-white border border-border rounded overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    
                    <p className="text-xs md:text-sm text-muted-foreground font-bold">
                      {card.description}
                    </p>
                  </div>
                </Link>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Action Row - Quick Links */}
      <section className="bg-primary py-6">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <a href="tel:0713787172">
                <Phone className="mr-2 h-4 w-4" />
                Call: 071 378 7172
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <a href="https://wa.me/27713787172" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview - Simple Text Section */}
      <section className="bg-section-light py-12 border-b border-border">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-none">
            We provide a range of professional social work services including individual and family counselling, 
            trauma support, employee wellness programmes, and community workshops. Our approach is grounded in 
            ethical practice, compassion, and a commitment to empowering those we serve.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-4 py-2 bg-white border border-border rounded-full text-foreground">Individual Counselling</span>
            <span className="px-4 py-2 bg-white border border-border rounded-full text-foreground">Family Support</span>
            <span className="px-4 py-2 bg-white border border-border rounded-full text-foreground">Trauma & Crisis Support</span>
            <span className="px-4 py-2 bg-white border border-border rounded-full text-foreground">Employee Wellness</span>
            <span className="px-4 py-2 bg-white border border-border rounded-full text-foreground">Workshops & Training</span>
          </div>
        </div>
      </section>

      {/* Split Screen - About Section */}
      <section className="section-py bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="relative">
              <div className="aspect-[4/5] rounded overflow-hidden">
                <img alt="Kgomotso Bessie - Founder" className="w-full h-full object-cover" src="/lovable-uploads/d04bdbcd-a47f-4346-946d-4fdbb7dd35b7.jpg" />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-white p-5 md:p-6 rounded">
                <p className="text-2xl md:text-3xl font-bold">13+</p>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-overline mb-4">
                About Our Practice
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-headline text-foreground mb-6">
                A Trusted, Registered Social Work Practice
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-body">
                <p>
                  Kgomotso Bessie Social Workers and Consulting Inc. is a Black woman-owned, 
                  Level 1 BBBEE social work practice based in Kimberley, Northern Cape.
                </p>
                <p>
                  Founded by Kgomotso Bessie — a qualified social worker with a Master's in 
                  Disaster Management and over 13 years of experience — we deliver personalised, 
                  ethical, and evidence-based services to individuals, families, organisations, 
                  and communities.
                </p>
              </motion.div>
              
              {/* Quick Stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 mt-8 py-6 border-t border-b border-border">
                {[{
                value: "2012",
                label: "In Practice Since"
              }, {
                value: "Level 1",
                label: "BBBEE"
              }, {
                value: "SACSSP",
                label: "Registered"
              }].map((stat, index) => <div key={index} className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>)}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8">
                <Button asChild size="lg" variant="outline">
                  <Link to="/about">
                    Meet the Founder
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Dense Layout */}
      

      {/* Why Choose Us - Simple Text */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">SACSSP Registered Practice</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are a registered social work practice (Reg. 1033-819) operating in full compliance with the South African Council for Social Service Professions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Evidence-Based Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our interventions are grounded in proven methodologies and best practices in social work.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Personalised Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every client receives tailored support that addresses their unique circumstances and needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Flexible Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                We offer both in-person and virtual sessions to accommodate your schedule and preferences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Confidential & Safe</h3>
              <p className="text-muted-foreground leading-relaxed">
                We maintain strict confidentiality and provide a safe, non-judgmental environment for all clients.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Community-Rooted</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 13 years of experience serving the Northern Cape, we understand the unique needs of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Screen - Community Section */}
      

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-primary to-[hsl(174_55%_28%)] py-12">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/80">
                Take the first step towards healing, growth, and resilience.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <a href="tel:0713787172">
                  <Phone className="mr-2 h-5 w-5" />
                  071 378 7172
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Home;