import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Phone, Calendar, CheckCircle, Award, FileCheck, UserCheck, Sparkles, Baby, Briefcase, Check, Play, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import heroOffice from "@/assets/hero-office.png";
import founderPortrait from "@/assets/founder-portrait.jpg";
import breakfastWorkshop from "@/assets/breakfast-workshop.png";
import healthyEntrepreneur from "@/assets/healthy-entrepreneur-wellness.png";
import workshopParenting from "@/assets/workshop-parenting.jpg";
import breakfastGallery1 from "@/assets/workshop-breakfast-1.jpg";
import breakfastGallery4 from "@/assets/breakfast-gallery-4.jpg";
import breakfastGallery6 from "@/assets/breakfast-gallery-6.jpg";
import breakfastEventVideo from "@/assets/breakfast-event-video.mp4";
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
        }} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[{
            image: breakfastWorkshop,
            title: "Breakfast with my Teenager",
            description: "Interactive parent-teen workshops",
            link: "/services"
          }, {
            image: healthyEntrepreneur,
            title: "Healthy Entrepreneur Wellness",
            description: "Leadership mental health & resilience",
            link: "/services"
          }, {
            image: workshopParenting,
            title: "Parenting in the 21st Century",
            description: "Modern parenting strategies",
            link: "/services"
          }, {
            image: founderPortrait,
            title: "#MatricUngazibulali",
            description: "Supporting matric students' mental health",
            link: "/impact"
          }].map((card, index) => <motion.div key={index} variants={fadeUp}>
                <Link to={card.link} className="block group bg-white border border-border rounded overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
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
                <img alt="Kgomotso Bessie - Founder" className="w-full h-full object-cover" src="/lovable-uploads/d5724d65-408f-47cd-a10d-b013ca1ae53b.jpg" />
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
      <section className="section-py bg-section-teal">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center max-w-2xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-overline mb-4">
              What We Offer
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-headline text-foreground mb-4">
              Comprehensive Social Work Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body">
              Expert support for individuals, families, organisations, and communities.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            icon: Heart,
            title: "Individual & Family Services",
            description: "Individual counselling, family & couples therapy, child & adolescent support, grief and bereavement counselling.",
            features: ["Individual Counselling", "Family Therapy", "Grief Support"]
          }, {
            icon: Users,
            title: "Employee Health & Wellness",
            description: "Workplace wellness programmes, trauma debriefing within 72 hours, group and individual interventions.",
            features: ["Workplace Wellness", "Trauma Debriefing", "Group Interventions"]
          }, {
            icon: Shield,
            title: "Crisis & Trauma Support",
            description: "Immediate and long-term trauma support, crisis intervention, disaster-related psychosocial services.",
            features: ["Crisis Intervention", "Trauma Support", "Disaster Response"]
          }].map((service, index) => <motion.div key={index} variants={fadeUp} className="bg-white p-6 rounded border border-border hover:shadow-card-hover transition-shadow">
                <div className="icon-box mb-4">
                  <service.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>)}
                </ul>
              </motion.div>)}
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-center mt-10">
            <Button asChild size="lg" className="btn-primary-gradient btn-glow">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

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
      <section className="section-py bg-section-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                <span>Annual Events & Workshops</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-headline text-foreground mb-4">
                Workshops & Community Initiatives
              </motion.h2>
              <motion.p variants={fadeUp} className="text-body mb-8">
                Interactive programmes designed to build skills, strengthen relationships, 
                and promote mental wellness across communities and organisations.
              </motion.p>

              {/* Workshop List */}
              <motion.div variants={fadeUp} className="space-y-4">
                {[{
                title: "Breakfast with my Teenager",
                desc: "Parent-teen bonding workshops"
              }, {
                title: "Parenting in the 21st Century",
                desc: "Modern parenting strategies"
              }, {
                title: "Healthy Entrepreneur Wellness",
                desc: "Leadership mental health"
              }].map((workshop, index) => <div key={index} className="flex items-start gap-3 p-3 bg-white rounded border border-border">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{workshop.title}</h4>
                      <p className="text-xs text-muted-foreground">{workshop.desc}</p>
                    </div>
                  </div>)}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8">
                <Button asChild size="lg" className="btn-primary-gradient btn-glow">
                  <Link to="/services">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Gallery Grid */}
            
          </div>
        </div>
      </section>

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