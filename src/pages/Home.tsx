import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Phone, Calendar, CheckCircle, Award, FileCheck, UserCheck, Sparkles, Baby, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import heroImage from "@/assets/hero-support.jpg";
import breakfastGallery1 from "@/assets/workshop-breakfast-1.jpg";
import breakfastGallery4 from "@/assets/breakfast-gallery-4.jpg";
import breakfastGallery6 from "@/assets/breakfast-gallery-6.jpg";

const Home = () => {
  return <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Supportive care" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>

        {/* Content */}
        <div className="container-custom section-padding relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-5 text-xs">
              <Award className="h-3.5 w-3.5" />
              <span className="font-medium">Black Woman-Owned | Level 1 BBBEE | SACSSP Registered</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5">
              Expert Social Work Services
              <span className="block text-primary-foreground/85 mt-1">for Lasting Impact</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-7 max-w-xl">
              Delivering evidence-based clinical, organisational, and community social work 
              services that promote healing, resilience, and empowerment.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 bg-primary">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
            {[{
            value: "2013",
            label: "In Practice Since"
          }, {
            value: "11+",
            label: "Years Experience"
          }, {
            value: "Level 1",
            label: "BBBEE Contributor"
          }].map((stat, index) => (
              <div key={index}>
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-primary-foreground/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Practice Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={stagger} className="max-w-4xl mx-auto text-center">
            <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
              About Our Practice
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Trusted, Registered Social Work Practice
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
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
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
              What We Offer
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Social Work Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Expert support for individuals, families, organisations, and communities — 
              delivered with compassion, integrity, and clinical excellence.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Heart,
            title: "Individual & Family Services",
            description: "Individual counselling, family & couples therapy, child & adolescent support, grief and bereavement counselling.",
            link: "/services"
          }, {
            icon: Users,
            title: "Employee Health & Wellness",
            description: "Workplace wellness programmes, trauma debriefing within 72 hours, group and individual interventions for organisations.",
            link: "/services"
          }, {
            icon: Shield,
            title: "Crisis & Trauma Support",
            description: "Immediate and long-term trauma support, crisis intervention, disaster-related psychosocial services.",
            link: "/services"
          }].map((service, index) => <motion.div key={index} variants={fadeUp} className="bg-card rounded-xl p-7 text-center border border-border hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-accent flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link to={service.link} className="inline-flex items-center text-primary font-medium text-sm hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>)}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeUp} className="text-center mt-12">
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
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted, Professional, Results-Driven
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[{
            icon: FileCheck,
            text: "SACSSP Registered Practice (1033-819)"
          }, {
            icon: Award,
            text: "Registered & Licensed Professionals"
          }, {
            icon: CheckCircle,
            text: "Evidence-Based & Ethical Care"
          }, {
            icon: UserCheck,
            text: "Personalised & Flexible Service Delivery"
          }, {
            icon: Users,
            text: "In-Person, Virtual & Community-Based Options"
          }, {
            icon: Shield,
            text: "Safe, Confidential & Supportive Environment"
          }].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-accent/40 border border-border">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-primary flex items-center justify-center">
                  <item.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Annual Events & Workshops */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Annual Events & Workshops</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Workshops & Community Initiatives
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Interactive programmes designed to build skills, strengthen relationships, 
              and promote mental wellness across communities and organisations.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: Users,
                title: "Breakfast with my Teenager",
                description: "An interactive workshop designed to bring parents and teenagers closer together through meaningful conversations.",
              },
              {
                icon: Baby,
                title: "Parenting in the 21st Century",
                description: "Guidance on mental wellness, behavioural understanding, and effective parenting strategies for today's families.",
              },
              {
                icon: Briefcase,
                title: "Healthy Entrepreneur Wellness",
                description: "Leadership mental health, stress management, and building resilience for business success.",
              },
            ].map((workshop, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 text-center border border-border"
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-accent flex items-center justify-center mb-4">
                  <workshop.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {workshop.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Breakfast with my Teenager Preview Gallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-8"
          >
            <motion.h3 variants={fadeUp} className="font-heading text-xl font-semibold text-foreground text-center mb-6">
              Breakfast with my Teenager — Event Highlights
            </motion.h3>
            <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto">
              {[breakfastGallery1, breakfastGallery4, breakfastGallery6].map((img, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <img
                    src={img}
                    alt={`Breakfast with my Teenager event photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <Button asChild size="lg">
              <Link to="/services">
                View All Events & Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading text-lg font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To provide expert social work services that promote healing, resilience, 
                and empowerment while upholding the highest ethical standards.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading text-lg font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To be a trusted, reliable, and leading social work practice delivering innovative, 
                accessible, and personalised services that strengthen individuals, organisations, 
                and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-primary-foreground/85 mb-6">
              Take the first step towards healing, growth, and resilience. 
              Schedule your consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="heroOutline">
                <Link to="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline">
                <a href="tel:0795871204">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Home;