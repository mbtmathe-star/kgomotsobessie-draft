import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import founderImage from "@/assets/founder-portrait.jpg";
import communityImage from "@/assets/community-resilience.jpg";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding section-teal">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
              About the Founder
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              The Journey of Resilience
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              From humble beginnings in a rural village to becoming a trusted voice in clinical 
              social work and wellness consulting — this is a story of purpose forged through perseverance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={founderImage}
                  alt="Kgomotso Bessie - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <p className="font-heading text-3xl font-bold">11+</p>
                <p className="text-sm opacity-90">Years of Service</p>
              </div>
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
              >
                Meet Kgomotso Bessie
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Born in the village of <strong className="text-foreground">Mmiga Ramatlabama</strong>, 
                  Kgomotso Bessie's early life was shaped by the quiet strength of remarkable women. 
                  Raised by a grandmother who brewed homemade beer to supplement the family income 
                  and a mother who worked tirelessly as a domestic helper, she learned firsthand 
                  that dignity is not determined by circumstance.
                </p>

                <p>
                  These humble beginnings planted the seeds of deep empathy and unwavering purpose. 
                  Witnessing resilience in action taught her that transformation begins when someone 
                  believes in your potential — even when the world suggests otherwise.
                </p>

                <p>
                  This understanding became the foundation of her career: 
                  <strong className="text-foreground"> 11 years of dedicated service</strong> within 
                  the Department of Social Development, including specialized work with the South African 
                  Police Service (SAPS), supporting families and communities through their most 
                  challenging moments.
                </p>

                <p>
                  In <strong className="text-foreground">March 2024</strong>, she founded 
                  Kgomotso Bessie Social Workers and Consulting Inc. — bringing high-level 
                  clinical expertise directly to the communities that need it most.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 p-6 bg-accent rounded-xl border-l-4 border-primary"
              >
                <p className="text-foreground font-medium italic font-heading text-lg">
                  "Circumstances do not define destiny — resilience does."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
              Credentials
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground"
            >
              Qualifications & Expertise
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="card-elevated p-8 flex gap-5"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Master's Degree
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Crisis, Emergency, and Disaster Management<br />
                  <span className="text-primary font-medium">University of the Free State (2021)</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="card-elevated p-8 flex gap-5"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Bachelor of Social Work
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Foundation in Clinical Social Work Practice<br />
                  <span className="text-primary font-medium">Completed 2012</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="card-elevated p-8 flex gap-5"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Government Service
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  11 Years with Department of Social Development<br />
                  <span className="text-primary font-medium">Including SAPS Specialized Work</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="card-elevated p-8 flex gap-5"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Private Practice
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Founded Kgomotso Bessie Social Workers and Consulting Inc.<br />
                  <span className="text-primary font-medium">March 2024</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={communityImage}
            alt="Community resilience"
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
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Our Vision
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-primary-foreground/90 leading-relaxed mb-8"
            >
              To be a beacon of hope and a catalyst for change in the Northern Cape — 
              empowering every individual, family, and organization we serve to discover 
              their inherent strength and build lasting resilience.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" variant="hero">
                <Link to="/services">
                  Explore Our Services
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

export default About;
