import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Phone, Calendar, CheckCircle, Award, FileCheck, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import heroImage from "@/assets/hero-support.jpg";
import workshopImage from "@/assets/workshop-breakfast-1.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Supportive care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6"
            >
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Black Woman-Owned | Level 1 BBBEE | SACSSP Registered</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Expert Social Work Services
              <br />
              <span className="text-primary-foreground/90">for Lasting Impact</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl"
            >
              Delivering evidence-based clinical, organisational, and community social work 
              services that promote healing, resilience, and empowerment across the Northern Cape.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="xl" variant="hero">
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </motion.div>

            {/* Quick Contact */}
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
              <a 
                href="tel:0795871204" 
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">079 587 1204</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-primary">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            {[
              { value: "2013", label: "In Practice Since" },
              { value: "11+", label: "Years of Experience" },
              { value: "Level 1", label: "BBBEE Contributor" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/70 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Practice Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
              About Our Practice
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              A Trusted, Registered Social Work Practice
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Kgomotso Bessie Social Workers and Consulting Inc. is a Black woman-owned, 
              Level 1 BBBEE social work practice based in Kimberley, Northern Cape. Founded by 
              Kgomotso Bessie — a qualified social worker with a Master's in Disaster Management 
              and over 11 years of experience across government, community work, and private practice — 
              we deliver personalised, ethical, and evidence-based services to individuals, families, 
              organisations, and communities.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Meet the Founder
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
              What We Offer
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Comprehensive Social Work Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Expert support for individuals, families, organisations, and communities — 
              delivered with compassion, integrity, and clinical excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Individual & Family Services",
                description:
                  "Individual counselling, family & couples therapy, child & adolescent support, grief and bereavement counselling.",
                link: "/services",
              },
              {
                icon: Users,
                title: "Employee Health & Wellness",
                description:
                  "Workplace wellness programmes, trauma debriefing within 72 hours, group and individual interventions for organisations.",
                link: "/services",
              },
              {
                icon: Shield,
                title: "Crisis & Trauma Support",
                description:
                  "Immediate and long-term trauma support, crisis intervention, disaster-related psychosocial services.",
                link: "/services",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="card-elevated p-8 text-center group hover:border-primary/20 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Trusted, Professional, Results-Driven
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: FileCheck, text: "SACSSP Registered Practice (1033-819)" },
              { icon: Award, text: "Registered & Licensed Professionals" },
              { icon: CheckCircle, text: "Evidence-Based & Ethical Care" },
              { icon: UserCheck, text: "Personalised & Flexible Service Delivery" },
              { icon: Users, text: "In-Person, Virtual & Community-Based Options" },
              { icon: Shield, text: "Safe, Confidential & Supportive Environment" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center gap-4 p-4 rounded-xl bg-accent/50"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workshops & Initiatives */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={workshopImage}
            alt="Breakfast with my Teenager workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>

        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Workshops & Community Initiatives</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
            >
              Breakfast with my Teenager
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-primary-foreground/80 leading-relaxed mb-8"
            >
              An interactive workshop designed to bring parents and teenagers closer together. 
              Focus on improving communication, building trust, and strengthening family bonds 
              in a supportive, facilitated environment.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">
                  Request More Information
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-8"
            >
              <h3 className="font-heading text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide expert social work services that promote healing, resilience, 
                and empowerment while upholding the highest ethical standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-8"
            >
              <h3 className="font-heading text-xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a trusted, reliable, and leading social work practice delivering innovative, 
                accessible, and personalised services that strengthen individuals, organisations, 
                and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
            >
              Ready to Begin Your Journey?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-primary-foreground/90 mb-8"
            >
              Take the first step towards healing, growth, and resilience. 
              Schedule your consultation today.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <a href="tel:0795871204">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
