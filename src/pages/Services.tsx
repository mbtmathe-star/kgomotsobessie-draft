import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Brain, Briefcase, MessageCircle, Building2, AlertTriangle, Baby, Sparkles, Clock, Check, Flame, HandHelping, CheckCircle2 } from "lucide-react";
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
  const individualServices = [{
    icon: Heart,
    title: "Individual Counselling & Therapy",
    description: "Support for anxiety, depression, trauma, grief, and personal development.",
    features: ["Anxiety & Depression", "Trauma Recovery", "Personal Growth"],
    forWho: "Adults seeking personal growth and mental wellness"
  }, {
    icon: Users,
    title: "Family & Couples Counselling",
    description: "Strengthening relationships through improved communication and conflict resolution.",
    features: ["Communication Skills", "Conflict Resolution", "Trust Building"],
    forWho: "Couples and families navigating challenges"
  }, {
    icon: Baby,
    title: "Child & Adolescent Support",
    description: "Behavioural and emotional support for young people and their families.",
    features: ["Behavioural Support", "Emotional Guidance", "Family Integration"],
    forWho: "Children, teenagers, and their parents"
  }];
  const organisationalServices = [{
    icon: Building2,
    title: "Employee Wellness Programmes",
    description: "Comprehensive workplace wellness to promote mental health and reduce burnout.",
    features: ["Mental Health Awareness", "Burnout Prevention", "Culture Building"],
    forWho: "Organisations committed to employee wellbeing"
  }, {
    icon: Clock,
    title: "Trauma Debriefing (72 Hours)",
    description: "Rapid response trauma debriefing for workplace incidents.",
    features: ["Immediate Response", "Professional Support", "Recovery Planning"],
    forWho: "Organisations responding to critical incidents"
  }, {
    icon: Users,
    title: "Group & Individual Interventions",
    description: "Tailored sessions for staff facing work-related stress or personal challenges.",
    features: ["Group Sessions", "One-on-One Support", "Stress Management"],
    forWho: "Teams and individuals in organisational settings"
  }];
  const trainingAudience = [
    { icon: Heart, label: "Social Workers" },
    { icon: AlertTriangle, label: "Disaster Management Officials" },
    { icon: Flame, label: "Fire & Emergency Services" },
    { icon: Building2, label: "Municipal Community Officers" },
    { icon: HandHelping, label: "NGO Practitioners" },
  ];

  const trainingTopics = [
    "Understanding trauma in disaster contexts",
    "Psychological First Aid",
    "Supporting affected communities without secondary trauma",
    "Boundaries and emotional regulation in crisis environments",
    "Preventing burnout and compassion fatigue",
  ];

  const counsellingFor = [
    "Officials directly exposed to disaster events",
    "Staff experiencing cumulative trauma",
    "Teams working in high-risk or high-stress environments",
  ];

  const supportIncludes = [
    "Individual trauma counselling",
    "Group debriefing sessions",
    "Post-incident psychological support",
    "Secondary trauma management",
    "Organisational wellness interventions",
  ];
  const workshops = [{
    icon: Users,
    title: "Breakfast with my Teenager",
    id: "breakfast-with-my-teenager",
    description: "An interactive workshop to bring parents and teenagers closer through meaningful conversations."
  }, {
    icon: Baby,
    title: "Parenting in the 21st Century",
    id: "parenting-in-the-21st-century",
    description: "Guidance on mental wellness and effective parenting strategies for modern families."
  }, {
    icon: Briefcase,
    title: "Healthy Entrepreneur Wellness",
    id: "healthy-entrepreneur-wellness",
    description: "Leadership mental health, stress management, and resilience for business success."
  }];
  const breakfastGalleryImages = [{
    src: breakfastGallery1,
    alt: "Breakfast event - parents and teens connecting"
  }, {
    src: breakfastGallery2,
    alt: "Workshop session"
  }, {
    src: breakfastGallery3,
    alt: "Community gathering"
  }, {
    src: breakfastGallery4,
    alt: "Family photo at event"
  }, {
    src: breakfastGallery5,
    alt: "Parents and teens"
  }, {
    src: breakfastGallery6,
    alt: "Speaker presenting"
  }, {
    src: breakfastGallery7,
    alt: "Workshop facilitator"
  }, {
    src: breakfastGallery8,
    alt: "Guest speaker"
  }, {
    src: breakfastGallery9,
    alt: "Keynote presentation"
  }, {
    src: breakfastGallery10,
    alt: "Speaker addressing attendees"
  }, {
    src: breakfastGallery11,
    alt: "Workshop session"
  }];
  const ServiceCard = ({
    service,
    index
  }: {
    service: typeof individualServices[0];
    index: number;
  }) => <motion.div key={index} variants={fadeUp} className="bg-white rounded-lg p-5 md:p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg icon-container-solid flex items-center justify-center mb-4">
        <service.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </div>
      <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2">
        {service.title}
      </h3>
      <p className="text-foreground text-sm leading-relaxed mb-4">
        {service.description}
      </p>
      <ul className="space-y-1.5 mb-4">
        {service.features.map((feature, i) => <li key={i} className="flex items-center gap-2 text-sm text-foreground">
            <Check className="h-4 w-4 text-primary shrink-0" />
            {feature}
          </li>)}
      </ul>
      <div className="pt-3 border-t border-border">
        <p className="text-xs text-foreground">
          <span className="text-primary font-semibold">For:</span> {service.forWho}
        </p>
      </div>
    </motion.div>;
  return <>
      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-white/80 font-semibold uppercase tracking-wider text-xs md:text-sm mb-2">
              Our Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              Comprehensive Social Work Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-white/85 leading-relaxed max-w-4xl">
              Expert support for individuals, families, organisations, and communities — 
              delivered with compassion, integrity, and professional excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Individual & Family Services */}
      <section className="py-8 md:py-12 bg-white border-b border-border">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="mb-6 md:mb-8">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg icon-container-solid flex items-center justify-center">
                <Heart className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                Individual & Family Services
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm md:text-base text-foreground">
              Personalised support services rooted in compassion and professional excellence.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {individualServices.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
          </motion.div>
        </div>
      </section>

      {/* Employee Health & Wellness */}
      <section className="py-8 md:py-12 bg-[hsl(45_20%_98%)] border-b border-border">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="mb-6 md:mb-8">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg icon-container-solid flex items-center justify-center">
                <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                Employee Health & Wellness
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm md:text-base text-foreground">
              Organisational solutions that prioritise mental health and build thriving workplace cultures.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {organisationalServices.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
          </motion.div>
        </div>
      </section>

      {/* Crisis & Trauma Services */}
      <section className="py-8 md:py-12 bg-white border-b border-border">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="mb-6 md:mb-8">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg icon-container-solid flex items-center justify-center">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                Disaster Trauma Training & Frontline Resilience Services
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm md:text-base text-foreground">
              We provide specialised trauma training and psychosocial support services for professionals working in disaster-affected communities.
            </motion.p>
          </motion.div>

          {/* Intro */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-8">
            <motion.p variants={fadeUp} className="text-sm md:text-base text-foreground leading-relaxed mb-4">
              Our services are designed to strengthen the emotional resilience, psychological safety, and professional sustainability of officials exposed to disaster-related trauma. Led by a qualified Social Worker with Disaster Management training, our approach is trauma-informed, practical, and research-based.
            </motion.p>
          </motion.div>

          {/* Training for Frontline Officials */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-8">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg icon-container-solid flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
                1. Trauma Training for Frontline Officials
              </h3>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm md:text-base text-foreground mb-4">
              Structured workshops designed for:
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
              {trainingAudience.map((item, i) => (
                <div key={i} className="bg-white rounded-lg border border-border p-4 flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-sm md:text-base font-semibold text-foreground mb-3">Training includes:</p>
              <div className="bg-white rounded-lg border border-border p-5">
                <ul className="space-y-3">
                  {trainingTopics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Counselling & Support */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-8">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg icon-container-solid flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
                2. Trauma Counselling & Support for Disaster Officials
              </h3>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm md:text-base text-foreground mb-4">
              We offer confidential, professional counselling services for:
            </motion.p>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div variants={fadeUp} className="bg-[hsl(var(--section-teal-wash))] rounded-lg border border-border p-5">
                <ul className="space-y-3">
                  {counsellingFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-[hsl(var(--section-teal-wash))] rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-3">Support may include:</p>
                <ul className="space-y-3">
                  {supportIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Why This Matters */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 border-2 border-primary/20 rounded-lg p-5 md:p-6">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Why This Service Matters</h3>
            <p className="text-sm md:text-base text-foreground leading-relaxed italic">
              Frontline professionals are often expected to provide stability during crises — yet many receive limited psychosocial support themselves. Investing in trauma preparedness and emotional resilience protects both employees and the communities they serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-8 md:py-12 bg-[hsl(174_30%_97%)] border-b border-border">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="mb-6 md:mb-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/15 text-primary px-3 py-1.5 rounded-full mb-3 border border-primary/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-semibold">Request More Information</span>
            </motion.div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Workshops & Community Initiatives
              </h2>
              <p className="text-sm md:text-base text-foreground">
                Interactive programmes designed to build skills, strengthen relationships, 
                and promote mental wellness.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {workshops.map((workshop, index) => <motion.div key={index} id={workshop.id} variants={fadeUp} className="bg-white rounded-lg p-5 md:p-6 shadow-sm border border-border scroll-mt-24">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg icon-container flex items-center justify-center mb-4">
                  <workshop.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2">
                  {workshop.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed mb-4">
                  {workshop.description}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Enquire Now
                  </Link>
                </Button>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      

      {/* CTA */}
      <section className="bg-primary py-8 md:py-12">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 text-sm md:text-base">
                Book a consultation to discuss how we can support you.
              </p>
            </div>
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>;
};
export default Services;