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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import workshopParenting from "@/assets/workshop-parenting.jpg";
import workshopPresentation from "@/assets/workshop-presentation.jpg";
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
      description:
        "Support for anxiety, depression, trauma, grief, and personal development. Evidence-based therapeutic approaches tailored to your unique needs.",
      forWho: "Adults seeking personal growth, healing, and mental wellness support",
    },
    {
      icon: Users,
      title: "Family & Couples Counselling",
      description:
        "Strengthening relationships through improved communication, conflict resolution, and rebuilding trust within families and partnerships.",
      forWho: "Couples and families navigating relationship challenges",
    },
    {
      icon: Baby,
      title: "Child & Adolescent Support",
      description:
        "Behavioural and emotional support for young people and their families. Age-appropriate interventions that address developmental challenges.",
      forWho: "Children, teenagers, and their parents/guardians",
    },
  ];

  const organisationalServices = [
    {
      icon: Building2,
      title: "Employee Health & Wellness Services",
      description:
        "Comprehensive workplace wellness programmes designed to promote mental health, reduce burnout, and build supportive organisational cultures.",
      forWho: "Organisations committed to employee wellbeing and productivity",
    },
    {
      icon: Clock,
      title: "Trauma Debriefing (Within 72 Hours)",
      description:
        "Rapid response trauma debriefing services for workplace incidents. Professional support delivered within 72 hours post-incident.",
      forWho: "Organisations responding to workplace trauma or critical incidents",
    },
    {
      icon: Users,
      title: "Group & Individual Interventions",
      description:
        "Tailored group sessions and one-on-one support for staff facing work-related stress, burnout, or personal challenges.",
      forWho: "Teams and individuals within organisational settings",
    },
  ];

  const crisisServices = [
    {
      icon: AlertTriangle,
      title: "Crisis Intervention",
      description:
        "Immediate professional support during acute crisis situations. Stabilisation and safety planning for individuals and families in distress.",
      forWho: "Individuals and families in acute crisis",
    },
    {
      icon: Brain,
      title: "Trauma Support (Immediate & Long-Term)",
      description:
        "Comprehensive trauma services from initial response through to long-term healing. Evidence-based approaches for all types of trauma.",
      forWho: "Trauma survivors at any stage of their healing journey",
    },
    {
      icon: Shield,
      title: "Disaster-Related Psychosocial Services",
      description:
        "Specialised support for communities and individuals affected by disasters. Expertise in disaster management and community resilience.",
      forWho: "Communities, emergency services, and disaster response teams",
    },
  ];

  const workshops = [
    {
      icon: Users,
      title: "Breakfast with my Teenager",
      description:
        "An interactive workshop designed to bring parents and teenagers closer together. Focus on improving communication, building trust, and strengthening family bonds.",
      cta: "Contact us to learn more or join the next session",
    },
    {
      icon: Baby,
      title: "Parenting in the 21st Century",
      description:
        "A workshop for modern parenting challenges. Guidance on mental wellness, behavioural understanding, and effective parenting strategies for today's families.",
      cta: "Request more information to participate",
    },
    {
      icon: Briefcase,
      title: "Healthy Entrepreneur Wellness",
      description:
        "Corporate and entrepreneur wellness programme focused on leadership mental health, stress management, and building resilience for business success.",
      cta: "Contact us to schedule a session for your team",
    },
  ];

  const breakfastGalleryImages = [
    { src: breakfastGallery1, alt: "Breakfast with my Teenager event - parents and teens connecting" },
    { src: breakfastGallery2, alt: "Breakfast with my Teenager workshop session" },
    { src: breakfastGallery3, alt: "Breakfast with my Teenager community gathering" },
    { src: breakfastGallery4, alt: "Family photo at Breakfast with my Teenager event" },
    { src: breakfastGallery5, alt: "Parents and teens at Breakfast with my Teenager" },
    { src: breakfastGallery6, alt: "Speaker presenting at the workshop" },
    { src: breakfastGallery7, alt: "Workshop facilitator engaging with attendees" },
    { src: breakfastGallery8, alt: "Guest speaker sharing insights" },
    { src: breakfastGallery9, alt: "Keynote presentation at the event" },
    { src: breakfastGallery10, alt: "Speaker addressing parents and teenagers" },
    { src: breakfastGallery11, alt: "Workshop facilitator leading a session" },
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
              Comprehensive Social Work Services
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Expert support for individuals, families, organisations, and communities — 
              delivered with compassion, integrity, and clinical excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Individual & Family Services */}
      <section className="section-padding section-warm">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl icon-container-solid flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Individual & Family Services
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-3xl">
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
              <motion.div
                key={index}
                variants={fadeUp}
                className="card-elevated p-8 flex flex-col h-full border-l-4 border-l-primary"
              >
                <div className="w-14 h-14 rounded-xl icon-container flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-primary font-semibold">Who it's for:</p>
                  <p className="text-xs text-muted-foreground mt-1">{service.forWho}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Employee Health & Wellness */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl icon-container-solid flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Employee Health & Wellness Services
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-3xl">
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
              <motion.div
                key={index}
                variants={fadeUp}
                className="card-elevated p-8 flex flex-col h-full border-l-4 border-l-primary"
              >
                <div className="w-14 h-14 rounded-xl icon-container flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-primary font-semibold">Who it's for:</p>
                  <p className="text-xs text-muted-foreground mt-1">{service.forWho}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trauma, Crisis & Disaster Support */}
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
                Trauma, Crisis Intervention & Disaster Support
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-3xl">
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

      {/* Workshops & Support Groups */}
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
              <span className="text-sm font-medium">Request More Information</span>
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
            className="grid md:grid-cols-3 gap-8"
          >
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="card-elevated p-8 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <workshop.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {workshop.description}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {workshop.cta}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Breakfast with my Teenager Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Event Highlights</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Breakfast with my Teenager
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Moments from our signature event bringing parents and teenagers together 
              for meaningful conversations over breakfast.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {breakfastGalleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-8"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Inquire About the Next Event
              </Link>
            </Button>
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
              Schedule a consultation and let's explore how we can best support your journey.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/contact">
                  Book Your Consultation
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
