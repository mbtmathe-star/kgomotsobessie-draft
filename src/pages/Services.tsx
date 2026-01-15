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
  Building2,
  AlertTriangle,
  Baby,
  Sparkles,
  Clock,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import breakfastGallery1 from "@/assets/workshop-breakfast-1.jpg";
import breakfastGallery2 from "@/assets/workshop-breakfast-2.jpg";
import breakfastGallery3 from "@/assets/workshop-breakfast-3.jpg";
import breakfastGallery4 from "@/assets/breakfast-gallery-4.jpg";
import breakfastGallery5 from "@/assets/breakfast-gallery-5.jpg";
import breakfastGallery6 from "@/assets/breakfast-gallery-6.jpg";
import breakfastGallery7 from "@/assets/breakfast-gallery-7.jpg";
import breakfastGallery8 from "@/assets/breakfast-gallery-8.jpg";
import breakfastGallery9 from "@/assets/breakfast-gallery-9.jpg";
import breakfastGallery10 from "@/assets/breakfast-gallery-10.jpg";
import breakfastGallery11 from "@/assets/breakfast-gallery-11.jpg";

const Services = () => {
  const individualServices = [
    {
      icon: Heart,
      title: "Individual Counselling & Therapy",
      description: "Support for anxiety, depression, trauma, grief, and personal development.",
      features: ["Anxiety & Depression", "Trauma Recovery", "Personal Growth"],
      forWho: "Adults seeking personal growth and mental wellness",
    },
    {
      icon: Users,
      title: "Family & Couples Counselling",
      description: "Strengthening relationships through improved communication and conflict resolution.",
      features: ["Communication Skills", "Conflict Resolution", "Trust Building"],
      forWho: "Couples and families navigating challenges",
    },
    {
      icon: Baby,
      title: "Child & Adolescent Support",
      description: "Behavioural and emotional support for young people and their families.",
      features: ["Behavioural Support", "Emotional Guidance", "Family Integration"],
      forWho: "Children, teenagers, and their parents",
    },
  ];

  const organisationalServices = [
    {
      icon: Building2,
      title: "Employee Wellness Programmes",
      description: "Comprehensive workplace wellness to promote mental health and reduce burnout.",
      features: ["Mental Health Awareness", "Burnout Prevention", "Culture Building"],
      forWho: "Organisations committed to employee wellbeing",
    },
    {
      icon: Clock,
      title: "Trauma Debriefing (72 Hours)",
      description: "Rapid response trauma debriefing for workplace incidents.",
      features: ["Immediate Response", "Professional Support", "Recovery Planning"],
      forWho: "Organisations responding to critical incidents",
    },
    {
      icon: Users,
      title: "Group & Individual Interventions",
      description: "Tailored sessions for staff facing work-related stress or personal challenges.",
      features: ["Group Sessions", "One-on-One Support", "Stress Management"],
      forWho: "Teams and individuals in organisational settings",
    },
  ];

  const crisisServices = [
    {
      icon: AlertTriangle,
      title: "Crisis Intervention",
      description: "Immediate professional support during acute crisis situations.",
      features: ["Immediate Response", "Safety Planning", "Stabilisation"],
      forWho: "Individuals and families in acute crisis",
    },
    {
      icon: Brain,
      title: "Trauma Support",
      description: "Comprehensive trauma services from initial response to long-term healing.",
      features: ["Acute Care", "Long-Term Healing", "Evidence-Based Approaches"],
      forWho: "Trauma survivors at any stage of healing",
    },
    {
      icon: Shield,
      title: "Disaster Psychosocial Services",
      description: "Specialised support for communities affected by disasters.",
      features: ["Community Resilience", "Emergency Response", "Recovery Support"],
      forWho: "Communities and emergency response teams",
    },
  ];

  const workshops = [
    {
      icon: Users,
      title: "Breakfast with my Teenager",
      description: "An interactive workshop to bring parents and teenagers closer through meaningful conversations.",
    },
    {
      icon: Baby,
      title: "Parenting in the 21st Century",
      description: "Guidance on mental wellness and effective parenting strategies for modern families.",
    },
    {
      icon: Briefcase,
      title: "Healthy Entrepreneur Wellness",
      description: "Leadership mental health, stress management, and resilience for business success.",
    },
  ];

  const breakfastGalleryImages = [
    { src: breakfastGallery1, alt: "Breakfast event - parents and teens connecting" },
    { src: breakfastGallery2, alt: "Workshop session" },
    { src: breakfastGallery3, alt: "Community gathering" },
    { src: breakfastGallery4, alt: "Family photo at event" },
    { src: breakfastGallery5, alt: "Parents and teens" },
    { src: breakfastGallery6, alt: "Speaker presenting" },
    { src: breakfastGallery7, alt: "Workshop facilitator" },
    { src: breakfastGallery8, alt: "Guest speaker" },
    { src: breakfastGallery9, alt: "Keynote presentation" },
    { src: breakfastGallery10, alt: "Speaker addressing attendees" },
    { src: breakfastGallery11, alt: "Workshop session" },
  ];

  const ServiceCard = ({ service, index }: { service: typeof individualServices[0]; index: number }) => (
    <motion.div
      key={index}
      variants={fadeUp}
      className="bg-white rounded-xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
    >
      <div className="w-14 h-14 rounded-xl icon-container-solid flex items-center justify-center mb-6">
        <service.icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-5">
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
      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          <span className="text-primary font-semibold">Who it's for:</span> {service.forWho}
        </p>
      </div>
    </motion.div>
  );

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
              Our Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive Social Work Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
              Expert support for individuals, families, organisations, and communities — 
              delivered with compassion, integrity, and clinical excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Individual & Family Services */}
      <section className="section-padding section-white section-divider">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl icon-container-solid flex items-center justify-center">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Individual & Family Services
                </h2>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-3xl">
              Personalised therapeutic services rooted in compassion and clinical excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {individualServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Employee Health & Wellness */}
      <section className="section-padding section-cream section-divider">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl icon-container-solid flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Employee Health & Wellness
                </h2>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-3xl">
              Organisational solutions that prioritise mental health and build thriving workplace cultures.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {organisationalServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Crisis & Trauma Services */}
      <section className="section-padding section-white section-divider">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl icon-container-solid flex items-center justify-center">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Crisis, Trauma & Disaster Support
                </h2>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-3xl">
              Specialised expertise in emergency response and building community resilience.
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
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workshops */}
      <section className="section-padding section-teal section-divider">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full mb-4 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Request More Information</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Workshops & Community Initiatives
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Interactive programmes designed to build skills, strengthen relationships, 
                  and promote mental wellness.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 shadow-md border border-border"
              >
                <div className="w-14 h-14 rounded-xl icon-container flex items-center justify-center mb-6">
                  <workshop.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {workshop.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Enquire Now
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding section-white section-divider">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-10"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Users className="h-4 w-4" />
              <span className="text-sm font-semibold">Event Highlights</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Breakfast with my Teenager
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl">
              Moments from our flagship parent-teen workshop bringing families closer together.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {breakfastGalleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="aspect-[4/3] overflow-hidden rounded-lg shadow-md group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container-wide px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 text-lg">
                Book a consultation to discuss how we can support you.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="heroOutline">
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
