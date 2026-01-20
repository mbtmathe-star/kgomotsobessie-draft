import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Phone, Calendar, CheckCircle, Award, FileCheck, UserCheck, Sparkles, Baby, Briefcase, Check, Play, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import heroOffice from "@/assets/hero-office.png";
import founderPortrait from "@/assets/founder-portrait.jpg";
import breakfastWorkshop from "@/assets/breakfast-workshop.png";
import healthyEntrepreneur from "@/assets/healthy-entrepreneur-wellness.png";
import parenting21stCentury from "@/assets/parenting-21st-century.jpg";
import breakfastGallery1 from "@/assets/workshop-breakfast-1.jpg";
import breakfastGallery4 from "@/assets/breakfast-gallery-4.jpg";
import breakfastGallery6 from "@/assets/breakfast-gallery-6.jpg";
import breakfastEventVideo from "@/assets/breakfast-event-video.mp4";
import breakfastRecapVideo from "@/assets/breakfast-recap-video.mp4";
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
              through expert clinical social work and transformative wellness consulting.
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
        }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[{
            image: breakfastWorkshop,
            title: "Breakfast with my Teenager",
            description: "Parenting in the 21st Century",
            link: "/services#breakfast-with-my-teenager"
          }, {
            image: healthyEntrepreneur,
            title: "Healthy Entrepreneur Wellness",
            description: "Healthy Entrepreneur Wellness",
            link: "/services#healthy-entrepreneur-wellness"
          }, {
            image: parenting21stCentury,
            title: "Parenting in the 21st Century",
            description: "Breakfast with my Teenager",
            link: "/services#parenting-in-the-21st-century"
          }].map((card, index) => <motion.div key={index} variants={fadeUp}>
                <Link to={card.link} className="block group bg-white border border-border rounded overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    
                    <p className="text-xs md:text-sm text-muted-foreground">
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

      {/* Highlights Grid - Resource Links */}
      <section className="bg-section-light py-10 border-b border-border">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[{
            icon: Heart,
            label: "Counselling",
            link: "/services"
          }, {
            icon: Users,
            label: "Family Therapy",
            link: "/services"
          }, {
            icon: Shield,
            label: "Trauma Support",
            link: "/services"
          }, {
            icon: Briefcase,
            label: "EAP Services",
            link: "/services"
          }, {
            icon: Baby,
            label: "Child & Adolescent",
            link: "/services"
          }, {
            icon: Sparkles,
            label: "Workshops",
            link: "/services"
          }].map((item, index) => <motion.div key={index} variants={fadeUp}>
                <Link to={item.link} className="flex flex-col items-center gap-2 p-4 rounded bg-white border border-border hover:border-primary hover:shadow-card transition-all text-center group">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </Link>
              </motion.div>)}
          </motion.div>
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
      

      {/* Why Choose Us - Icon Grid */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[{
            icon: FileCheck,
            title: "SACSSP Registered",
            description: "Practice Reg. 1033-819"
          }, {
            icon: Award,
            title: "Licensed Professionals",
            description: "Registered practitioners"
          }, {
            icon: CheckCircle,
            title: "Evidence-Based",
            description: "Proven methodologies"
          }, {
            icon: UserCheck,
            title: "Personalised",
            description: "Tailored delivery"
          }, {
            icon: Users,
            title: "Multiple Modalities",
            description: "In-person & virtual"
          }, {
            icon: Shield,
            title: "Confidential",
            description: "Safe environment"
          }].map((item, index) => <motion.div key={index} variants={fadeUp} className="text-center">
                <div className="icon-box mx-auto mb-3">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>)}
          </motion.div>
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