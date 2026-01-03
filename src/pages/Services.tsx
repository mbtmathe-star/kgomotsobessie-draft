import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Users,
  Shield,
  Brain,
  Briefcase,
  MessageCircle,
  Home,
  Sparkles,
  Building2,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";

const Services = () => {
  const clinicalServices = [
    {
      icon: Heart,
      title: "Individual & Family Counselling",
      description:
        "Comprehensive support for family preservation, relationship dynamics, grief, and bereavement. We help families navigate challenges while strengthening bonds.",
      forWho: "Individuals and families facing life transitions, relationship difficulties, or loss",
    },
    {
      icon: Brain,
      title: "Trauma Interventions",
      description:
        "Professional debriefing and therapeutic crisis support to help process traumatic experiences. Evidence-based approaches tailored to your unique needs.",
      forWho: "Trauma survivors, first responders, and those affected by critical incidents",
    },
    {
      icon: MessageCircle,
      title: "Parenting in the 21st Century",
      description:
        "Modern parenting programs including our signature #BreakfastWithMyTeenager initiative, designed to strengthen parent-child communication.",
      forWho: "Parents navigating the complexities of raising children in the digital age",
    },
  ];

  const consultingServices = [
    {
      icon: Building2,
      title: "Employee Health & Wellness Programs (EHWP)",
      description:
        "Comprehensive workplace wellness solutions that promote mental health, reduce burnout, and create supportive organizational cultures.",
      forWho: "Organizations committed to employee wellbeing and productivity",
    },
    {
      icon: Users,
      title: "Mental Health Advocacy & Culture Consulting",
      description:
        "Strategic guidance on building mentally healthy workplaces, developing policies, and fostering inclusive organizational cultures.",
      forWho: "HR leaders, executives, and organizations seeking culture transformation",
    },
    {
      icon: Sparkles,
      title: "The Healthy Entrepreneur Workshop",
      description:
        "Specialized support for founders navigating leadership pressure, isolation, and the unique mental health challenges of entrepreneurship.",
      forWho: "Business owners, startup founders, and entrepreneurs",
    },
  ];

  const crisisServices = [
    {
      icon: Shield,
      title: "Community Resilience Building",
      description:
        "Developing community-level strategies to enhance collective coping mechanisms and social support networks during challenging times.",
      forWho: "Communities, municipalities, and regional organizations",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Social Response",
      description:
        "Rapid deployment of social work services during disasters, emergencies, and critical community incidents.",
      forWho: "Emergency services, disaster response teams, and affected communities",
    },
    {
      icon: Home,
      title: "Professional Debriefing Services",
      description:
        "Structured support for professionals and teams following exposure to traumatic events or high-stress situations.",
      forWho: "First responders, healthcare workers, and frontline staff",
    },
  ];

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
              Our Services
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Comprehensive Care for Every Need
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              From individual counselling to organizational wellness consulting, 
              we offer evidence-based services designed to heal, strengthen, and transform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Clinical Private Practice */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Clinical Private Practice
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-3xl">
              Personalized therapeutic services rooted in compassion and clinical excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {clinicalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="card-elevated p-8 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-primary font-medium">Who it's for:</p>
                  <p className="text-xs text-muted-foreground mt-1">{service.forWho}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Wellness Consulting */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Strategic Wellness Consulting
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-3xl">
              Organizational solutions that prioritize mental health and build thriving workplace cultures.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {consultingServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="card-elevated p-8 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-primary font-medium">Who it's for:</p>
                  <p className="text-xs text-muted-foreground mt-1">{service.forWho}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Crisis & Disaster Management */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Crisis & Disaster Management
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-3xl">
              Specialized expertise in emergency response and building community resilience.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {crisisServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="card-elevated p-8 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-primary font-medium">Who it's for:</p>
                  <p className="text-xs text-muted-foreground mt-1">{service.forWho}</p>
                </div>
              </motion.div>
            ))}
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
              Not Sure Which Service You Need?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-primary-foreground/90 mb-8"
            >
              Schedule a free initial consultation and let's explore how we can best support your journey.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/contact">
                  Book Your Free Consultation
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

export default Services;
