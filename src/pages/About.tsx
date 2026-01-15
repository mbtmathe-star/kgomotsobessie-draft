import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, Award, Heart, Users, Shield, Handshake, Scale, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import communityImage from "@/assets/community-resilience.jpg";

const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion & Empathy",
      description: "Care delivered with kindness and understanding"
    },
    {
      icon: Scale,
      title: "Integrity & Ethics",
      description: "Professionalism, confidentiality, and accountability"
    },
    {
      icon: Shield,
      title: "Empowerment",
      description: "Strength-based practice that builds resilience"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Working with families, organisations, and communities"
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Serving diverse populations with equity and fairness"
    }
  ];

  const qualifications = [
    {
      icon: GraduationCap,
      title: "Master's in Disaster Management",
      description: "Advanced expertise in crisis, emergency, and disaster response"
    },
    {
      icon: GraduationCap,
      title: "Postgraduate Diploma in Disaster Management",
      description: "Specialised training in emergency and community resilience"
    },
    {
      icon: Award,
      title: "Bachelor of Social Work",
      description: "Foundation in clinical social work practice"
    },
    {
      icon: Briefcase,
      title: "11+ Years Experience",
      description: "Government, community work, private practice & organisational wellness"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-py bg-section-teal hero-curve-left">
        <div className="container-wide relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-overline mb-4">
              About Our Practice
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-display text-foreground mb-6">
              A Trusted Social Work Practice
            </motion.h1>
            <motion.p variants={fadeUp} className="text-subtitle">
              Black woman-owned, Level 1 BBBEE Social Work Practice delivering expert 
              clinical, organisational, and community services with compassion and integrity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-py bg-white">
        <div className="container-wide">
          <div className="layout-split">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded overflow-hidden">
                <img
                  alt="Kgomotso Bessie - Founder & Director"
                  className="w-full h-full object-cover"
                  src="/lovable-uploads/0b397c3b-cb56-4e2c-95fd-b1f3789667bd.png"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-white p-5 md:p-6 rounded">
                <p className="text-2xl md:text-3xl font-bold">2013</p>
                <p className="text-sm text-white/80">In Practice Since</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-headline text-foreground mb-2">
                Meet Kgomotso Bessie
              </motion.h2>
              <motion.p variants={fadeUp} className="text-primary font-semibold mb-6 text-lg">
                Founder & Director
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-5 text-body">
                <p>
                  Kgomotso Bessie is a qualified social worker with a passion for empowering 
                  individuals, families, and communities. With over <strong className="text-foreground">11 years of experience</strong> spanning 
                  government service, community work, private practice, and organisational wellness, 
                  she brings a wealth of expertise to every engagement.
                </p>

                <p>
                  In practice since <strong className="text-foreground">2013</strong>, Kgomotso has worked extensively 
                  with the Department of Social Development and the South African Police Service (SAPS), 
                  supporting families and communities through their most challenging moments.
                </p>

                <p>
                  In <strong className="text-foreground">2024</strong>, she founded 
                  Kgomotso Bessie Social Workers and Consulting Inc. — a Black woman-owned, 
                  Level 1 BBBEE practice committed to delivering innovative, accessible, and 
                  personalised social work services.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 p-6 bg-section-light border-l-4 border-primary">
                <Quote className="h-6 w-6 text-primary mb-3" />
                <p className="text-foreground text-xl italic font-medium">
                  "Circumstances do not define destiny — resilience does."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-py bg-section-cream">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mb-14"
          >
            <motion.p variants={fadeUp} className="text-overline mb-4">
              Credentials
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-headline text-foreground">
              Qualifications & Expertise
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-0 divide-y divide-border/60"
          >
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="py-8 md:py-10 flex flex-col md:flex-row gap-5"
              >
                <div className="icon-box-lg shrink-0">
                  <qual.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {qual.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {qual.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 bg-section-light border-l-4 border-primary"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-body">
                To provide expert social work services that promote healing, resilience, 
                and empowerment while upholding the highest ethical standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 bg-section-light border-l-4 border-primary"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-body">
                To be a trusted, reliable, and leading social work practice delivering innovative, 
                accessible, and personalised services that strengthen individuals, organisations, 
                and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-py bg-section-teal section-curve-left">
        <div className="container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mb-14"
          >
            <motion.p variants={fadeUp} className="text-overline mb-4">
              What Guides Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-headline text-foreground">
              Our Core Values
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <div className="icon-box-lg shrink-0">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={communityImage} alt="Community resilience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>

        <div className="container-wide section-py relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.h2 variants={fadeUp} className="text-headline text-white mb-6">
              Ready to Work With Us?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed mb-8">
              Whether you need individual support, family counselling, or organisational 
              wellness services — we're here to help.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="btn-primary-gradient btn-glow">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">
                  Contact Us
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
