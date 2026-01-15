import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Phone, Calendar, CheckCircle, Award, FileCheck, UserCheck, Sparkles, Baby, Briefcase, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import heroImage from "@/assets/hero-support.jpg";
import breakfastGallery1 from "@/assets/workshop-breakfast-1.jpg";
import breakfastGallery4 from "@/assets/breakfast-gallery-4.jpg";
import breakfastGallery6 from "@/assets/breakfast-gallery-6.jpg";
import breakfastEventVideo from "@/assets/breakfast-event-video.mp4";
import founderImage from "@/assets/founder-portrait.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section - Full width with left-aligned content */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Supportive care" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-wide section-padding relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 text-sm border border-white/20">
              <Award className="h-4 w-4" />
              <span className="font-medium">Black Woman-Owned | Level 1 BBBEE | SACSSP Registered</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Expert Social Work Services for Lasting Impact
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Delivering evidence-based clinical, organisational, and community social work 
              services that promote healing, resilience, and empowerment.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline">
                <Link to="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container-wide px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "2013", label: "In Practice Since" },
              { value: "11+", label: "Years Experience" },
              { value: "Level 1", label: "BBBEE Contributor" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-white/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Two Column Layout */}
      <section className="section-padding section-white section-divider">
        <div className="container-wide">
          <div className="two-col-layout">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/0b397c3b-cb56-4e2c-95fd-b1f3789667bd.png"
                  alt="Kgomotso Bessie - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="font-heading text-3xl font-bold">2013</p>
                <p className="text-sm opacity-90">In Practice Since</p>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
                About Our Practice
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Trusted, Registered Social Work Practice
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed text-lg">
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
              <motion.div variants={fadeUp} className="mt-8">
                <Button asChild variant="outline" size="lg">
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

      {/* Services Section */}
      <section className="section-padding section-teal section-divider">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
              What We Offer
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Comprehensive Social Work Services
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Expert support for individuals, families, organisations, and communities — 
                  delivered with compassion, integrity, and clinical excellence.
                </p>
              </div>
              <Button asChild size="lg" className="shrink-0">
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
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Individual & Family Services",
                description: "Individual counselling, family & couples therapy, child & adolescent support, grief and bereavement counselling.",
                features: ["Individual Counselling", "Family Therapy", "Grief Support"],
                link: "/services"
              },
              {
                icon: Users,
                title: "Employee Health & Wellness",
                description: "Workplace wellness programmes, trauma debriefing within 72 hours, group and individual interventions for organisations.",
                features: ["Workplace Wellness", "Trauma Debriefing", "Group Interventions"],
                link: "/services"
              },
              {
                icon: Shield,
                title: "Crisis & Trauma Support",
                description: "Immediate and long-term trauma support, crisis intervention, disaster-related psychosocial services.",
                features: ["Crisis Intervention", "Trauma Support", "Disaster Response"],
                link: "/services"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 mb-6 rounded-xl icon-container-solid flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
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
                  to={service.link}
                  className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-dark group"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16">
        <div className="container-wide px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/90 text-lg">
                Take the first step towards healing, growth, and resilience.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="heroOutline">
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline">
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
      <section className="section-padding section-white section-divider">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Trusted, Professional, Results-Driven
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: FileCheck, text: "SACSSP Registered Practice (1033-819)" },
              { icon: Award, text: "Registered & Licensed Professionals" },
              { icon: CheckCircle, text: "Evidence-Based & Ethical Care" },
              { icon: UserCheck, text: "Personalised & Flexible Service Delivery" },
              { icon: Users, text: "In-Person, Virtual & Community-Based Options" },
              { icon: Shield, text: "Safe, Confidential & Supportive Environment" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-lg bg-gradient-to-r from-primary-light/50 to-transparent border border-primary/10"
              >
                <div className="w-12 h-12 shrink-0 rounded-lg icon-container-solid flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="section-padding section-cream section-divider">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Annual Events & Workshops</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Workshops & Community Initiatives
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Interactive programmes designed to build skills, strengthen relationships, 
                  and promote mental wellness across communities and organisations.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 mb-14"
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
                className="bg-white rounded-xl p-8 shadow-md border border-border"
              >
                <div className="w-12 h-12 rounded-lg icon-container flex items-center justify-center mb-5">
                  <workshop.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
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
            <motion.h3 variants={fadeUp} className="font-heading text-xl font-semibold text-foreground mb-6">
              Breakfast with my Teenager — Event Highlights
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[breakfastGallery1, breakfastGallery4, breakfastGallery6].map((img, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                  <img
                    src={img}
                    alt={`Breakfast event highlight ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
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
