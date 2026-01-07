import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, School, Sparkles, Calendar, Target, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import matricImage from "@/assets/matric-students.jpg";
import communityImage from "@/assets/community-resilience.jpg";
const Impact = () => {
  return <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={matricImage} alt="Matric students" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="container-custom section-padding relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Flagship Initiative</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              #MatricUngazibulali
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-primary-foreground/90 leading-relaxed mb-4">
              "Matric, Don't Kill Yourself"
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg text-primary-foreground/80 leading-relaxed">
              A suicide prevention and mental health awareness initiative dedicated to 
              protecting our youth during one of life's most challenging transitions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Milestone Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
              <Calendar className="h-8 w-8 text-primary-foreground" />
              <span className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground">
                7
              </span>
              <span className="text-2xl md:text-3xl text-primary-foreground/90 font-heading">
                Years
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-heading text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
              Celebrating Our 7th Anniversary in 2026
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Seven years of saving lives, restoring hope, and building a movement 
              that ensures no matriculant faces their struggles alone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
                The Campaign
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is #MatricUngazibulali?
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed">
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

            
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
              Our Mission
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Make an Impact
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[{
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
            description: "Every matriculant deserves to know that someone cares. We ensure no student navigates their high-pressure transition without support."
          }].map((pillar, index) => <motion.div key={index} variants={fadeUp} className="card-elevated p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary flex items-center justify-center">
                  <pillar.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} className="bg-accent rounded-2xl p-8 md:p-12 text-center border border-primary/20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                <HandHeart className="h-8 w-8 text-primary-foreground" />
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Join Us in Protecting Our Youth
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                We are seeking organizational partners for our 2026 campaign. Schools, 
                businesses, community organizations, and individuals who share our vision 
                are invited to join this life-saving movement.
              </p>

              <div className="bg-background rounded-xl p-6 mb-8 max-w-md mx-auto">
                <p className="text-sm text-muted-foreground mb-2">Partnership Inquiry for</p>
                <p className="font-heading text-2xl font-bold text-primary">
                  #MatricUngazibulali 2026
                </p>
              </div>

              <Button asChild size="lg">
                <Link to="/contact">
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Together, We Save Lives
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-primary-foreground/80 mb-8">
              Whether you're a student who needs support, a parent seeking guidance, 
              or an organization wanting to make a difference — we're here for you.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
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