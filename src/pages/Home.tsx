import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Sparkles } from "lucide-react";
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
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/impact">
                  Join #MatricUngazibulali
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding section-teal">
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
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Based in Kimberley, Northern Cape, Kgomotso Bessie Social Workers and Consulting Inc. 
              is both a clinical social work practice and a strategic wellness consultancy. 
              We are rooted in community resilience, dedicated to restoring hope, and committed 
              to transforming lives through evidence-based practice and compassionate care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding">
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
                className="card-elevated p-8 text-center group hover:border-primary/20"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Highlight */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={matricImage}
            alt="Matric students studying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/80" />
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
              <span className="text-sm font-medium">Flagship Initiative</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
            >
              #MatricUngazibulali
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-primary-foreground/90 leading-relaxed mb-8"
            >
              Celebrating 7 years of saving lives and restoring hope. Our suicide prevention 
              and mental health awareness initiative ensures no matriculant faces their 
              high-pressure transitions alone.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button asChild size="lg" variant="hero">
                <Link to="/impact">
                  Learn About Our Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
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
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/contact">
                  Book a Consultation Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
