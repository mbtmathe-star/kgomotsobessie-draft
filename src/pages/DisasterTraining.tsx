import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Users,
  Heart,
  Brain,
  AlertTriangle,
  Flame,
  Building2,
  HandHelping,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";

const trainingAudience = [
  { icon: Heart, label: "Social Workers" },
  { icon: AlertTriangle, label: "Disaster Management Officials" },
  { icon: Flame, label: "Fire & Emergency Services" },
  { icon: Building2, label: "Municipal Community Officers" },
  { icon: HandHelping, label: "NGO Practitioners" },
];

const trainingTopics = [
  "Understanding trauma in disaster contexts",
  "Psychological First Aid techniques",
  "Supporting affected communities without secondary trauma",
  "Emotional regulation and professional boundaries in crisis",
  "Preventing burnout and compassion fatigue",
];

const counsellingFor = [
  "Officials directly exposed to disaster events",
  "Staff experiencing cumulative or secondary trauma",
  "Teams operating in high-risk, high-stress environments",
];

const supportIncludes = [
  "Individual trauma counselling",
  "Group debriefing sessions",
  "Post-incident psychological support",
  "Secondary trauma management",
  "Organisational wellness interventions",
];

const DisasterTraining = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-white/80 font-semibold uppercase tracking-wider text-xs md:text-sm mb-2"
            >
              Specialised Service
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4"
            >
              Disaster Trauma Training &<br />
              Frontline Resilience Services
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/85 leading-relaxed max-w-4xl"
            >
              Strengthening the emotional resilience, psychological safety, and
              professional sustainability of officials working in
              disaster-affected communities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-14 bg-white border-b border-border">
        <div className="container-wide max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base text-foreground leading-relaxed mb-4"
            >
              We provide specialised trauma training and psychosocial support
              for professionals on the frontlines of disaster response. Led by a
              qualified Social Worker with Disaster Management training, our
              approach is trauma-informed, practical, and grounded in research.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="bg-primary/5 border border-primary/15 rounded-lg p-5 md:p-6"
            >
              <p className="text-foreground text-sm md:text-base italic leading-relaxed">
                Frontline professionals are often expected to provide stability
                during crises — yet many receive limited psychosocial support
                themselves. Investing in trauma preparedness and emotional
                resilience protects both employees and the communities they
                serve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-10 md:py-14 bg-[hsl(var(--section-cream))] border-b border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg icon-container-solid flex items-center justify-center">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                Trauma Training for Frontline Officials
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm md:text-base text-foreground mb-8">
              Structured workshops equipping disaster-response professionals
              with the tools to manage trauma effectively.
            </motion.p>

            {/* Who it's for */}
            <motion.div variants={fadeUp} className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                Designed For
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {trainingAudience.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-border p-4 flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Training topics */}
            <motion.div variants={fadeUp}>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                Training Covers
              </h3>
              <div className="bg-white rounded-lg border border-border p-5 md:p-6">
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
        </div>
      </section>

      {/* Counselling Section */}
      <section className="py-10 md:py-14 bg-white border-b border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg icon-container-solid flex items-center justify-center">
                <Brain className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                Trauma Counselling & Support for Officials
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm md:text-base text-foreground mb-8">
              Confidential, professional counselling for disaster-response
              personnel facing trauma-related challenges.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Who we support */}
              <motion.div variants={fadeUp} className="bg-[hsl(var(--section-teal-wash))] rounded-lg border border-border p-5 md:p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Who We Support
                </h3>
                <ul className="space-y-3">
                  {counsellingFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support includes */}
              <motion.div variants={fadeUp} className="bg-[hsl(var(--section-teal-wash))] rounded-lg border border-border p-5 md:p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Support Includes
                </h3>
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-10 md:py-14">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                Equip Your Team for Disaster Response
              </h2>
              <p className="text-white/90 text-sm md:text-base">
                Get in touch to discuss training workshops or support services
                for your organisation.
              </p>
            </div>
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enquire Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisasterTraining;
