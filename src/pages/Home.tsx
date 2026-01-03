import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Sparkles, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import heroImage from "@/assets/hero-support.jpg";
import matricImage from "@/assets/matric-students.jpg";

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
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Kimberley, Northern Cape</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Resilience in Action.
              <br />
              <span className="text-primary-foreground/90">Care in Practice.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl"
            >
              Empowering individuals, families, and organizations across the Northern Cape 
              through expert clinical social work and transformative wellness consulting.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="xl" variant="hero">
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/impact">
                  Join #MatricUngazibulali
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "11+", label: "Years Experience" },
              { value: "7", label: "Years of #MatricUngazibulali" },
              { value: "100+", label: "Families Supported" },
              { value: "2024", label: "Practice Founded" },
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

      {/* Intro Section */}
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
              Where Clinical Excellence Meets Community Heart
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Based in Kimberley, Northern Cape, Kgomotso Bessie Social Workers and Consulting Inc. 
              is both a clinical social work practice and a strategic wellness consultancy. 
              We are rooted in community resilience, dedicated to restoring hope, and committed 
              to transforming lives through evidence-based practice and compassionate care.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Learn Our Story
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
              Our Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for individuals, families, and organizations.
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
                title: "Clinical Private Practice",
                description:
                  "Individual and family counselling, trauma interventions, grief and bereavement support, and specialized parenting programs.",
                link: "/services",
              },
              {
                icon: Users,
                title: "Strategic Wellness Consulting",
                description:
                  "Employee health and wellness programs, mental health advocacy, and The Healthy Entrepreneur Workshop for founders.",
                link: "/services",
              },
              {
                icon: Shield,
                title: "Crisis & Disaster Management",
                description:
                  "Community resilience building, emergency social response strategies, and professional debriefing services.",
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

      {/* Impact Highlight */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={matricImage}
            alt="Matric students studying"
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
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Flagship Initiative — 7 Years Strong</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
            >
              #MatricUngazibulali
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-xl text-primary-foreground/80 mb-4"
            >
              "Matric, Don't Kill Yourself"
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-primary-foreground/70 leading-relaxed mb-8"
            >
              Celebrating 7 years of saving lives and restoring hope. Our suicide prevention 
              and mental health awareness initiative ensures no matriculant faces their 
              high-pressure transitions alone.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="hero">
                <Link to="/impact">
                  Learn About Our Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline">
                <Link to="/contact">Become a Partner</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="text-6xl text-primary/20 font-heading mb-4">"</div>
            <blockquote className="font-heading text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">
              Circumstances do not define destiny — resilience does.
            </blockquote>
            <p className="text-primary font-medium">— Kgomotso Bessie, Founder</p>
          </motion.div>
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
