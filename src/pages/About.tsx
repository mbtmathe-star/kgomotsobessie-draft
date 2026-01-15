import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, Award, Heart, Users, Shield, Handshake, Scale, Check } from "lucide-react";
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
      title: "Empowerment & Strength-Based Practice",
      description: "Tailored services that build resilience"
    },
    {
      icon: Handshake,
      title: "Collaboration & Advocacy",
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
      <section className="section-padding section-teal">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
              About Our Practice
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              A Trusted Social Work Practice
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
              Black woman-owned, Level 1 BBBEE Social Work Practice delivering expert 
              clinical, organisational, and community services with compassion and integrity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story - Two Column */}
      <section className="section-padding section-white section-divider">
        <div className="container-wide">
          <div className="two-col-layout">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img
                  alt="Kgomotso Bessie - Founder & Director"
                  className="w-full h-full object-cover"
                  src="/lovable-uploads/0b397c3b-cb56-4e2c-95fd-b1f3789667bd.png"
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
            >
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                Meet Kgomotso Bessie
              </motion.h2>
              <motion.p variants={fadeUp} className="text-primary font-semibold mb-6 text-lg">
                Founder & Director
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed text-lg">
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

              <motion.div variants={fadeUp} className="mt-8 p-6 bg-primary-light/50 rounded-xl border-l-4 border-primary">
                <p className="text-foreground font-medium italic font-heading text-xl">
                  "Circumstances do not define destiny — resilience does."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding section-cream section-divider">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
              Credentials
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Qualifications & Expertise
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 shadow-md border border-border flex gap-5"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl icon-container-solid flex items-center justify-center">
                  <qual.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
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

      {/* Mission & Vision - Side by Side */}
      <section className="section-padding section-white section-divider">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary-light/30 rounded-xl p-8 border-l-4 border-primary"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide expert social work services that promote healing, resilience, 
                and empowerment while upholding the highest ethical standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary-light/30 rounded-xl p-8 border-l-4 border-primary"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be a trusted, reliable, and leading social work practice delivering innovative, 
                accessible, and personalised services that strengthen individuals, organisations, 
                and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding section-teal section-divider">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
              What Guides Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 shadow-md border border-border"
              >
                <div className="w-14 h-14 mb-5 rounded-xl icon-container-solid flex items-center justify-center">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
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

        <div className="container-wide section-padding relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-white/90 leading-relaxed mb-8">
              Whether you need individual support, family counselling, or organisational 
              wellness services — we're here to help.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="hero">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline">
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
