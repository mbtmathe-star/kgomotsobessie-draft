import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, School, Sparkles, Calendar, Target, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import communityImage from "@/assets/community-resilience.jpg";
const Impact = () => {
  const pillars = [{
    icon: Target,
    title: "Restoring Societal Stability",
    description: "By addressing youth mental health at its roots, we contribute to healthier families, stronger communities, and a more stable society."
  }, {
    icon: School,
    title: "School & Community Partnerships",
    description: "We partner with schools, traditional leadership, and local organizations to create comprehensive support systems for learners."
  }, {
    icon: Heart,
    title: "No Learner Left Alone",
    description: "Every matriculant deserves to know that someone cares. We ensure no student navigates their transition without support."
  }];
  return <>
      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container-wide">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Flagship Initiative</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              #MatricUngazibulali
            </motion.h1>

            <motion.p variants={fadeUp} className="text-2xl text-white/95 font-heading mb-4">
              "Matric, Don't Kill Yourself"
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg text-white/85 leading-relaxed">
              A suicide prevention and mental health awareness initiative dedicated to 
              protecting our youth during one of life's most challenging transitions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Milestone Bar */}
      <section className="bg-primary py-12">
        <div className="container-wide px-6 sm:px-8 lg:px-16 xl:px-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <Calendar className="h-10 w-10 text-white" />
              <div>
                <span className="font-heading text-5xl md:text-6xl font-bold text-white">7</span>
                <span className="text-2xl text-white/90 font-heading ml-2">Years</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center md:text-left max-w-xl">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-white mb-2">
                Celebrating Our 7th Anniversary in 2026
              </h2>
              <p className="text-white/80">
                Seven years of saving lives, restoring hope, and building a movement 
                that ensures no matriculant faces their struggles alone.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Overview - Two Column */}
      <section className="section-padding section-white section-divider">
        <div className="container-wide">
          <div className="two-col-layout">
            {/* Content Column */}
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
                The Campaign
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is #MatricUngazibulali?
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  The matric year represents one of the most high-pressure periods in a young 
                  South African's life. Academic stress, peer pressure, family expectations, 
                  and uncertainty about the future create a perfect storm that can overwhelm 
                  even the most resilient students.
                </p>

                <p>
                  <strong className="text-foreground">#MatricUngazibulali</strong> — meaning 
                  "Matric, Don't Kill Yourself" — is our response to this crisis. What began 
                  as a heartfelt message has grown into a comprehensive movement that reaches 
                  schools, families, and communities across the Northern Cape.
                </p>

                <p>
                  Through awareness campaigns, school partnerships, and community engagement, 
                  we work to break the stigma around mental health, provide practical coping 
                  strategies, and create support networks that catch students before they fall.
                </p>
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="relative">
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      

      {/* Partnership CTA */}
      <section className="section-padding section-white section-divider">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="bg-primary-light/50 rounded-2xl p-10 md:p-16 border border-primary/20">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-20 h-20 shrink-0 rounded-full bg-primary flex items-center justify-center">
                <HandHeart className="h-10 w-10 text-white" />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Join Us in Protecting Our Youth
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We are seeking organizational partners for our 2026 campaign. Schools, 
                  businesses, community organizations, and individuals who share our vision 
                  are invited to join this life-saving movement.
                </p>
                <div className="inline-block bg-white rounded-xl p-4 mb-6 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Partnership Inquiry for</p>
                  <p className="font-heading text-2xl font-bold text-primary">
                    #MatricUngazibulali 2026
                  </p>
                </div>
              </div>
              
              <div className="shrink-0">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Become a Partner
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground py-20">
        <div className="container-wide px-6 sm:px-8 lg:px-16 xl:px-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="max-w-2xl">
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Together, We Save Lives
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-white/80 mb-8">
              Whether you're a student who needs support, a parent seeking guidance, 
              or an organization wanting to make a difference — we're here for you.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Impact;