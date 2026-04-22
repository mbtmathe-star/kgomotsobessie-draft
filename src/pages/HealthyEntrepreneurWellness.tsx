import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Brain, DollarSign, Salad, Church, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";

import hewKgomotso from "@/assets/hew-kgomotso-bessie.png";
import hewPastor from "@/assets/hew-pastor-thapelo.png";
import hewCharlene from "@/assets/hew-charlene-laufs.png";
import hewSanlam from "@/assets/hew-sanlam-advisor.png";
import hewJenique from "@/assets/hew-jenique-emslie.png";
import hewCallie from "@/assets/hew-callie-hendricks.png";

import hewStallIndalo1 from "@/assets/hew-stall-indalo-1.png";
import hewStallIndalo2 from "@/assets/hew-stall-indalo-2.png";
import hewStallVenue from "@/assets/hew-stall-venue.png";
import hewStallAttendee from "@/assets/hew-stall-attendee.png";
import hewStallHealth from "@/assets/hew-stall-health.png";
import hewStallZinzino from "@/assets/hew-stall-zinzino.png";
import hewStallZinzinoTeam from "@/assets/hew-stall-zinzino-team.png";
import hewStallVpk from "@/assets/hew-stall-vpk.png";
import hewStallVpkTeam from "@/assets/hew-stall-vpk-team.png";
import hewActivityPanelSession from "@/assets/hew-activity-panel-session.png";
import hewActivityAudienceQuestion from "@/assets/hew-activity-audience-question.png";
import hewActivityVisionActive1 from "@/assets/hew-activity-vision-active-1.png";
import hewActivityVisionActive2 from "@/assets/hew-activity-vision-active-2.png";
import hewActivityAudienceSmiles from "@/assets/hew-activity-audience-smiles.png";
import hewActivityAudienceListening from "@/assets/hew-activity-audience-listening.png";
import hewActivitySessionDiscussion from "@/assets/hew-activity-session-discussion.png";
import hewActivityGroupPhoto from "@/assets/hew-activity-group-photo.png";
import topNotchLogo from "@/assets/topnotch-053-logo.png";

const stallPhotos = [
  { src: hewStallIndalo1, alt: "Indalo ChloroLife stall presentation" },
  { src: hewStallIndalo2, alt: "Indalo ChloroLife representative" },
  { src: hewStallVenue, alt: "Event venue with stalls and attendees" },
  { src: hewStallAttendee, alt: "Event attendee at stall" },
  { src: hewStallHealth, alt: "Health professional at stall" },
  { src: hewStallZinzino, alt: "Zinzino wellness products" },
  { src: hewStallZinzinoTeam, alt: "Zinzino team at their stall" },
  { src: hewStallVpk, alt: "VPK Solutions stall" },
  { src: hewStallVpkTeam, alt: "VPK team at their stall" },
];

const activityPhotos = [
  { src: hewActivityPanelSession, alt: "Healthy Entrepreneur Wellness panel session" },
  { src: hewActivityAudienceQuestion, alt: "Audience member speaking during engagement session" },
  { src: hewActivityVisionActive1, alt: "Vision Active activity during the wellness event" },
  { src: hewActivityVisionActive2, alt: "Participants taking part in Vision Active session" },
  { src: hewActivityAudienceSmiles, alt: "Audience members enjoying the wellness session" },
  { src: hewActivityAudienceListening, alt: "Attendees listening during the engagement session" },
  { src: hewActivitySessionDiscussion, alt: "Event discussion and audience participation" },
  { src: hewActivityGroupPhoto, alt: "Group photo from Healthy Entrepreneur Wellness event" },
];

const speakers = [
  {
    name: "Kgomotso Bessie",
    role: "Owner & Event Organiser",
    topic: "Healthy Entrepreneur Wellness",
    image: hewKgomotso,
    icon: Heart,
  },
  {
    name: "Pastor Thapelo Mohitlhi",
    role: "Speaker & Founder of Financial Wealth Creation Industries",
    topic: "Spiritual Wellness",
    image: hewPastor,
    icon: Church,
  },
  {
    name: "Charlene Laufs",
    role: "Psychologist",
    topic: "Mental Wellness",
    image: hewCharlene,
    icon: Brain,
  },
  {
    name: "Sanlam Financial Advisor",
    role: "Financial Advisor — Sanlam",
    topic: "Financial Wellness & Security",
    image: hewSanlam,
    icon: DollarSign,
  },
  {
    name: "Jenique Emslie",
    role: "Dietician",
    topic: "Nutrition & Healthy Living",
    image: hewJenique,
    icon: Salad,
  },
  {
    name: "Callie Hendricks",
    role: "Master of Ceremony",
    topic: "MC",
    image: hewCallie,
    icon: Mic,
  },
];

const HealthyEntrepreneurWellness = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/15 text-white px-3 py-1.5 rounded-full mb-4 border border-white/20"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">Annual Workshop</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4"
            >
              Healthy Entrepreneur Wellness
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/95 font-heading mb-3"
            >
              Holistic Wellness for Entrepreneurs
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base text-white/85 leading-relaxed max-w-3xl"
            >
              A wellness-focused event bringing together experts in spiritual health, mental
              wellness, financial security, and nutrition to empower entrepreneurs with the tools
              they need for a balanced and healthy life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About the Event */}
      <section className="py-10 md:py-14 bg-white border-b border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-semibold uppercase tracking-wider text-xs mb-2"
            >
              About the Event
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4"
            >
              What is Healthy Entrepreneur Wellness?
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-3 text-foreground text-sm md:text-base leading-relaxed max-w-4xl"
            >
              <p>
                <strong>Healthy Entrepreneur Wellness</strong> is an event organised by Kgomotso
                Bessie Social Workers & Consulting Inc, designed to address the holistic well-being
                of entrepreneurs. Running a business takes a toll on every dimension of health —
                spiritual, mental, financial, and physical.
              </p>
              <p>
                This event brings together a panel of experts from different wellness disciplines
                to equip entrepreneurs with practical knowledge and strategies for maintaining
                balance while building their businesses.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Recap */}
      <section className="py-10 md:py-14 bg-muted/30 border-b border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-semibold uppercase tracking-wider text-xs mb-2"
            >
              Event Recap
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6"
            >
              A Meaningful Beginning in Kimberley
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-4 text-sm md:text-base leading-relaxed text-foreground"
            >
              <p>
                The inaugural <strong>Healthy Entrepreneur Wellness</strong> event in <strong>Kimberley</strong>,
                hosted at <strong>Kimberley Ford</strong> on <strong>28 March 2026</strong>, marked the
                beginning of a powerful conversation around what it truly means to build sustainably
                as an entrepreneur.
              </p>
              <p>
                Led by <strong>Callie Hendricks</strong>, <strong>Master of Ceremony</strong>, the
                event featured a dynamic panel of experts who shared practical, real-world insights
                on maintaining balance across spiritual, mental, financial, and physical well-being.
                The session created an open space for honest dialogue, audience engagement, and
                thought-provoking questions that resonated deeply with attendees.
              </p>
              <p>
                Beyond the panel, the experience extended into live interviews, intentional
                networking, and a high-energy wellness activity with <strong>Vision Active</strong>
                — bringing everyone into a moment of movement, presence, and connection. The event
                closed with appreciation through gift-giving to speakers, reinforcing the value of
                contribution and community.
              </p>
              <p>
                An intentional initiative by <strong>Kgomotso Bessie Social Workers &amp; Consulting
                Inc</strong>, this experience reminded us that success in business is not only about
                growth, but also about sustaining the person behind it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Speakers & Panel */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-semibold uppercase tracking-wider text-xs mb-2"
            >
              Meet the Panel
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-8"
            >
              Speakers & Organisers
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {speakers.map((speaker) => (
                <div
                  key={speaker.name}
                  className="bg-muted/20 rounded-lg border border-border overflow-hidden group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <speaker.icon className="h-4 w-4 text-primary" />
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {speaker.topic}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{speaker.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-10 md:py-14 bg-white border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-semibold uppercase tracking-wider text-xs mb-2"
            >
              During the Event
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6"
            >
              Event Highlights
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {activityPhotos.map((photo) => (
                <div
                  key={photo.alt}
                  className="aspect-[4/3] rounded-lg overflow-hidden border border-border"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stalls */}
      <section className="py-10 md:py-14 bg-muted/30 border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-semibold uppercase tracking-wider text-xs mb-2"
            >
              On the Day
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6"
            >
              Stalls
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {stallPhotos.map((photo) => (
                <div
                  key={photo.alt}
                  className="aspect-[4/3] rounded-lg overflow-hidden border border-border"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sponsor / Venue Partner */}
      <section className="py-10 md:py-14 bg-white border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-semibold uppercase tracking-wider text-xs mb-2"
            >
              Proudly Hosted In Partnership With
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6"
            >
              Sponsor & Venue Partner
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-6 items-center bg-muted/20 rounded-lg border border-border p-6 md:p-8"
            >
              <div className="flex items-center justify-center bg-white rounded-lg border border-border p-6">
                <img
                  src={topNotchLogo}
                  alt="Top Notch 053 — Outdoor Lifestyle, Bar & Grill"
                  className="w-full max-w-sm h-auto object-contain"
                />
              </div>
              <div className="space-y-3 text-sm md:text-base text-foreground leading-relaxed">
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">
                  Top Notch 053
                </h3>
                <p>
                  Top Notch 053 is a bar and grill space offering an outdoor &amp; indoor lifestyle —
                  club, restaurant, salon, car wash, and chesanyama services. A popular spot for
                  both locals and visitors in Kimberley.
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">
                    4094 Shaka Street, Vergenoeg, Kimberley
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Contact</p>
                  <p className="text-muted-foreground">
                    Mulisa —{" "}
                    <a href="tel:0647584413" className="text-primary hover:underline">
                      064 758 4413
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    Thabang —{" "}
                    <a href="tel:0734620845" className="text-primary hover:underline">
                      073 462 0845
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14 bg-primary">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <motion.h2
                variants={fadeUp}
                className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-2"
              >
                Interested in Our Next Event?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-sm md:text-base text-white/80">
                Get in touch to learn about upcoming Healthy Entrepreneur Wellness sessions.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <Button asChild variant="heroOutline">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HealthyEntrepreneurWellness;
