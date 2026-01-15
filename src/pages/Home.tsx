import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Phone, Calendar, CheckCircle, Award, FileCheck, UserCheck, Sparkles, Baby, Briefcase, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import heroImage from "@/assets/hero-support.jpg";
import breakfastGallery1 from "@/assets/workshop-breakfast-1.jpg";
import breakfastGallery4 from "@/assets/breakfast-gallery-4.jpg";
import breakfastGallery6 from "@/assets/breakfast-gallery-6.jpg";
import breakfastEventVideo from "@/assets/breakfast-event-video.mp4";

const Home = () => {
  return (
    <>
      {/* Hero Section - Full Width Split Layout */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex items-center bg-foreground relative z-10">
          <div className="w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-0">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full mb-8 text-sm border border-white/10">
                <Award className="h-4 w-4" />
                <span>Black Woman-Owned • Level 1 BBBEE • SACSSP Registered</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-display text-white mb-6">
                Expert Social Work Services
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg">
                Delivering evidence-based clinical, organisational, and community social work 
                services that promote healing, resilience, and empowerment.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-glow">
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  <Link to="/services">
                    View Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block lg:w-1/2 absolute lg:relative inset-0">
          <img src={heroImage} alt="Supportive care" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/50 to-transparent lg:hidden" />
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-primary">
        <div className="container-wide py-6 md:py-8">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            {[
              { value: "2013", label: "In Practice Since" },
              { value: "11+", label: "Years Experience" },
              { value: "Level 1", label: "BBBEE Contributor" }
            ].map((stat, index) => (
              <div key={index} className="text-center px-4">
                <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-white">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-py bg-section-white">
        <div className="container-wide">
          <div className="layout-split">
            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
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
                  Disaster Management and over 11 years of experience — we deliver personalised, 
                  ethical, and evidence-based services to individuals, families, organisations, 
                  and communities.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" variant="outline">
                  <Link to="/about">
                    Meet the Founder
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/lovable-uploads/0b397c3b-cb56-4e2c-95fd-b1f3789667bd.png"
                  alt="Kgomotso Bessie - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-primary text-white p-5 md:p-6 rounded-xl shadow-lg">
                <p className="font-heading text-2xl md:text-3xl">2013</p>
                <p className="text-sm text-white/80">In Practice Since</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-py bg-section-light">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
          >
            <div className="max-w-2xl">
              <motion.p variants={fadeUp} className="text-overline mb-4">
                What We Offer
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-headline text-foreground mb-4">
                Comprehensive Social Work Services
              </motion.h2>
              <motion.p variants={fadeUp} className="text-body">
                Expert support for individuals, families, organisations, and communities — 
                delivered with compassion, integrity, and clinical excellence.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid-3"
          >
            {[
              {
                icon: Heart,
                title: "Individual & Family Services",
                description: "Individual counselling, family & couples therapy, child & adolescent support, grief and bereavement counselling.",
                features: ["Individual Counselling", "Family Therapy", "Grief Support"],
              },
              {
                icon: Users,
                title: "Employee Health & Wellness",
                description: "Workplace wellness programmes, trauma debriefing within 72 hours, group and individual interventions for organisations.",
                features: ["Workplace Wellness", "Trauma Debriefing", "Group Interventions"],
              },
              {
                icon: Shield,
                title: "Crisis & Trauma Support",
                description: "Immediate and long-term trauma support, crisis intervention, disaster-related psychosocial services.",
                features: ["Crisis Intervention", "Trauma Support", "Disaster Response"],
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="card-feature"
              >
                <div className="icon-box-lg mb-6">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-title text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary font-medium text-sm hover:underline group"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary">
        <div className="container-wide py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-2xl md:text-3xl text-white mb-2">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/80 text-lg">
                Take the first step towards healing, growth, and resilience.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <a href="tel:0795871204">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-py bg-section-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mb-12"
          >
            <motion.p variants={fadeUp} className="text-overline mb-4">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-headline text-foreground">
              Trusted, Professional, Results-Driven
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid-3"
          >
            {[
              { icon: FileCheck, title: "SACSSP Registered", description: "Practice Registration 1033-819" },
              { icon: Award, title: "Licensed Professionals", description: "Registered & certified practitioners" },
              { icon: CheckCircle, title: "Evidence-Based Care", description: "Ethical, proven methodologies" },
              { icon: UserCheck, title: "Personalised Service", description: "Flexible, tailored delivery" },
              { icon: Users, title: "Multiple Modalities", description: "In-person, virtual & community options" },
              { icon: Shield, title: "Safe & Confidential", description: "Supportive environment guaranteed" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-xl bg-section-light border border-border/50"
              >
                <div className="icon-box shrink-0">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="section-py bg-section-cream">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 text-sm border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">Annual Events & Workshops</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-headline text-foreground mb-4">
              Workshops & Community Initiatives
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body">
              Interactive programmes designed to build skills, strengthen relationships, 
              and promote mental wellness across communities and organisations.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid-3 mb-14"
          >
            {[
              {
                icon: Users,
                title: "Breakfast with my Teenager",
                description: "An interactive workshop designed to bring parents and teenagers closer together through meaningful conversations."
              },
              {
                icon: Baby,
                title: "Parenting in the 21st Century",
                description: "Guidance on mental wellness, behavioural understanding, and effective parenting strategies for today's families."
              },
              {
                icon: Briefcase,
                title: "Healthy Entrepreneur Wellness",
                description: "Leadership mental health, stress management, and building resilience for business success."
              }
            ].map((workshop, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="card-base"
              >
                <div className="icon-box-light mb-5">
                  <workshop.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-title text-foreground mb-3">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {workshop.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Preview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="font-heading text-xl text-foreground mb-6">
              Breakfast with my Teenager — Event Highlights
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[breakfastGallery1, breakfastGallery4, breakfastGallery6].map((img, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`Breakfast event highlight ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
              <div className="aspect-[4/3] overflow-hidden rounded-lg relative group">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster={breakfastGallery1}
                >
                  <source src={breakfastEventVideo} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button asChild size="lg">
                <Link to="/services">
                  View All Events & Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;