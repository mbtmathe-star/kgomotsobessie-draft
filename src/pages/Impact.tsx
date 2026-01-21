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
      <section className="bg-primary py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/15 text-white px-3 py-1.5 rounded-full mb-4 border border-white/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">Flagship Initiative</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
              #MatricUngazibulali
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/95 font-heading mb-3">
              "Matric, Don't Kill Yourself"
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm md:text-base text-white/85 leading-relaxed max-w-3xl">
              A suicide prevention and mental health awareness initiative dedicated to 
              protecting our youth during one of life's most challenging transitions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Milestone Bar */}
      <section className="bg-primary py-6 md:py-8 border-t border-white/10">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-white" />
              <div>
                <span className="font-heading text-3xl md:text-4xl font-bold text-white">7</span>
                <span className="text-lg text-white/90 font-heading ml-1">Years</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center md:text-left">
              <h2 className="font-heading text-lg md:text-xl font-semibold text-white mb-1">
                Celebrating Our 7th Anniversary in 2026
              </h2>
              <p className="text-white/80 text-sm">
                Seven years of saving lives, restoring hope, and building a movement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Overview */}
      <section className="py-10 md:py-14 bg-white border-b border-border">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-xs mb-2">
              The Campaign
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              What is #MatricUngazibulali?
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-3 text-foreground text-sm md:text-base leading-relaxed">
              <p>
                The matric year represents one of the most high-pressure periods in a young 
                South African's life. Academic stress, peer pressure, family expectations, 
                and uncertainty about the future create a perfect storm that can overwhelm 
                even the most resilient students.
              </p>

              <p>
                <strong>#MatricUngazibulali</strong> — meaning 
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
        </div>
      </section>

      {/* Mission Pillars */}
      

      {/* Partnership CTA */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="bg-primary-light/50 rounded-lg p-6 md:p-10 border border-primary/20">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-primary flex items-center justify-center">
                <HandHeart className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h2 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2">
                  Join Us in Protecting Our Youth
                </h2>
                <p className="text-foreground text-sm md:text-base leading-relaxed mb-4">
                  We are seeking organizational partners for our 2026 campaign. Schools, 
                  businesses, community organizations, and individuals who share our vision 
                  are invited to join this life-saving movement.
                </p>
                <div className="inline-block bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-xs text-foreground mb-0.5">Partnership Inquiry for</p>
                  <p className="font-heading text-lg md:text-xl font-bold text-primary">
                    #MatricUngazibulali 2026
                  </p>
                </div>
              </div>
              
              <div className="shrink-0">
                <Button asChild>
                  <Link to="/contact">
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      
    </>;
};
export default Impact;