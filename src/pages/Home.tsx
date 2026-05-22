import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, Award, Mail, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { fadeUp, stagger } from "@/lib/animations";
import heroOffice from "@/assets/hero-office.png";
import breakfastTeenagerWorkshop from "@/assets/breakfast-teenager-workshop.png";
import healthyEntrepreneur from "@/assets/healthy-entrepreneur-wellness.png";
import parenting21stFamily from "@/assets/parenting-21st-family.png";
import hewKgomotso from "@/assets/hew-kgomotso-bessie.png";
import hewPastor from "@/assets/hew-pastor-thapelo.png";
import hewCharlene from "@/assets/hew-charlene-laufs.png";
import hewSanlam from "@/assets/hew-sanlam-advisor.png";
import hewJenique from "@/assets/hew-jenique-emslie.png";
import hewCallie from "@/assets/hew-callie-hendricks.png";
const hewVideo = "/videos/hew-event-video.mp4";

const hewSpeakers = [
  {
    name: "Kgomotso Bessie",
    role: "Owner & Event Organiser",
    topic: "Healthy Entrepreneur Wellness",
    image: hewKgomotso,
  },
  {
    name: "Pastor Thapelo Mohitlhi",
    role: "Speaker & Founder of Financial Wealth Creation Industries",
    topic: "Spiritual Wellness",
    image: hewPastor,
  },
  {
    name: "Charlene Laufs",
    role: "Psychologist",
    topic: "Mental Wellness",
    image: hewCharlene,
  },
  {
    name: "Sanlam Financial Advisor",
    role: "Financial Advisor — Sanlam",
    topic: "Financial Wellness & Security",
    image: hewSanlam,
  },
  {
    name: "Jenique Emslie",
    role: "Dietician",
    topic: "Nutrition & Healthy Living",
    image: hewJenique,
  },
  {
    name: "Callie Hendricks",
    role: "Master of Ceremony",
    topic: "MC",
    image: hewCallie,
  },
];

const Home = () => {
  const [speakerCarouselApi, setSpeakerCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!speakerCarouselApi) return;

    const interval = window.setInterval(() => {
      if (speakerCarouselApi.canScrollNext()) {
        speakerCarouselApi.scrollNext();
      } else {
        speakerCarouselApi.scrollTo(0);
      }
    }, 3500);

    return () => window.clearInterval(interval);
  }, [speakerCarouselApi]);

  return <>
      {/* Hero Banner - Full Width with Large Image */}
      <section className="relative min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroOffice} alt="Professional social work office" className="w-full h-full object-cover" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
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
      <section className="bg-white py-6 md:py-10 border-b border-border">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[{
            image: breakfastTeenagerWorkshop,
            title: "Breakfast with my Teenager",
            description: "Breakfast with my Teenager",
            link: "/services#breakfast-with-my-teenager"
          }, {
            image: healthyEntrepreneur,
            title: "Healthy Entrepreneur Wellness",
            description: "Healthy Entrepreneur Wellness",
            link: "/healthy-entrepreneur-wellness"
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
                    
                    <p className="text-xs md:text-sm text-foreground font-bold">
                      {card.description}
                    </p>
                  </div>
                </Link>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Action Row - Quick Links */}
      <section className="bg-primary py-4 md:py-6">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <a href="tel:0713787172">
                <Phone className="mr-2 h-4 w-4" />
                071 378 7172
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <a href="tel:0795871204">
                <Phone className="mr-2 h-4 w-4" />
                079 587 1204
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

      {/* 2026 HEW Inaugural Event */}
      <section className="bg-white py-8 md:py-12 border-b border-border overflow-hidden">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
              <Mic className="h-4 w-4" />
              <span>2026 HEW Inaugural Event</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Meet the Speakers
            </motion.h2>
              <motion.p variants={fadeUp} className="text-sm md:text-base text-muted-foreground max-w-3xl mb-6">
              Highlights from the inaugural 2026 Healthy Entrepreneur Wellness event in Kimberley, featuring the speakers and organisers who shaped the conversation.
            </motion.p>

            <motion.div variants={fadeUp} className="px-1 md:px-4">
              <Carousel setApi={setSpeakerCarouselApi} opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                  {hewSpeakers.map((speaker) => (
                    <CarouselItem key={speaker.name} className="sm:basis-1/2 lg:basis-1/3">
                      <Link to="/healthy-entrepreneur-wellness" className="block h-full group">
                        <div className="h-full rounded border border-border bg-background overflow-hidden transition-shadow duration-300 hover:shadow-card-hover">
                          <div className="aspect-[4/3] overflow-hidden bg-muted">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-4 md:p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{speaker.topic}</p>
                            <h3 className="text-base md:text-lg font-bold text-foreground">{speaker.name}</h3>
                            <p className="text-sm text-muted-foreground">{speaker.role}</p>
                          </div>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HEW 2026 Event Video */}
      <section className="bg-white py-8 md:py-12 border-b border-border">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <video
              src={hewVideo}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded border border-border shadow-card"
            />
          </div>
        </div>
      </section>

      <section className="bg-section-light py-8 md:py-12 border-b border-border">
        <div className="container-wide">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">Our Services</h2>
          <p className="text-sm md:text-base text-foreground leading-relaxed mb-6">
            We provide a range of professional social work services including individual and family counselling, 
            trauma support, employee wellness programmes, and community workshops. Our approach is grounded in 
            ethical practice, compassion, and a commitment to empowering those we serve.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-border rounded-full text-foreground">Individual Counselling</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-border rounded-full text-foreground">Family Support</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-border rounded-full text-foreground">Trauma & Crisis Support</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-border rounded-full text-foreground">Employee Wellness</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-border rounded-full text-foreground">Workshops & Training</span>
          </div>
        </div>
      </section>

      {/* Split Screen - About Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                    <p className="text-xs text-foreground">{stat.label}</p>
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
      <section className="py-8 md:py-12 bg-white border-b border-border">
        <div className="container-wide">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 md:mb-8">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">SACSSP Registered Practice</h3>
              <p className="text-foreground leading-relaxed">
                We are a registered social work practice (Reg. 1033-819) operating in full compliance with the South African Council for Social Service Professions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Evidence-Based Approach</h3>
              <p className="text-foreground leading-relaxed">
                Our interventions are grounded in proven methodologies and best practices in social work.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Personalised Service</h3>
              <p className="text-foreground leading-relaxed">
                Every client receives tailored support that addresses their unique circumstances and needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Flexible Delivery</h3>
              <p className="text-foreground leading-relaxed">
                We offer both in-person and virtual sessions to accommodate your schedule and preferences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Confidential & Safe</h3>
              <p className="text-foreground leading-relaxed">
                We maintain strict confidentiality and provide a safe, non-judgmental environment for all clients.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Community-Rooted</h3>
              <p className="text-foreground leading-relaxed">
                With over 13 years of experience serving the Northern Cape, we understand the unique needs of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Screen - Community Section */}
      

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-primary to-[hsl(174_55%_28%)] py-8 md:py-12">
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
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <a href="tel:0795871204">
                  <Phone className="mr-2 h-5 w-5" />
                  079 587 1204
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Home;