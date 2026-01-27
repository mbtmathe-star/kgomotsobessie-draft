import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart, Users, Sparkles, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { fadeUp, stagger } from "@/lib/animations";

// Import video and gallery images from the Breakfast with my Teenager event
import breakfastRecapVideo from "@/assets/breakfast-recap-video.mp4";
import galleryEvent1 from "@/assets/gallery-event-1.jpg";
import galleryEvent2 from "@/assets/gallery-event-2.jpg";
import galleryEvent3 from "@/assets/gallery-event-3.jpg";
import galleryEvent4 from "@/assets/gallery-event-4.jpg";
import galleryEvent5 from "@/assets/gallery-event-5.jpg";
import galleryEvent6 from "@/assets/gallery-event-6.jpg";
import galleryEvent7 from "@/assets/gallery-event-7.jpg";
import galleryEvent8 from "@/assets/gallery-event-8.jpg";
import galleryEvent9 from "@/assets/gallery-event-9.jpg";
import galleryEvent10 from "@/assets/gallery-event-10.jpg";
const eventGallery = [{
  src: galleryEvent1,
  alt: "Breakfast workshop presentation"
}, {
  src: galleryEvent2,
  alt: "Parents and teenagers interacting"
}, {
  src: galleryEvent3,
  alt: "Speaker addressing attendees"
}, {
  src: galleryEvent4,
  alt: "Guest speaker presentation"
}, {
  src: galleryEvent5,
  alt: "Workshop facilitator"
}, {
  src: galleryEvent6,
  alt: "Family photo at event"
}, {
  src: galleryEvent7,
  alt: "Parents and teens together"
}, {
  src: galleryEvent8,
  alt: "Keynote presentation"
}, {
  src: galleryEvent9,
  alt: "Workshop session"
}, {
  src: galleryEvent10,
  alt: "Group discussion"
}];
const Impact = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return <>
      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/15 text-white px-3 py-1.5 rounded-full mb-4 border border-white/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">Flagship Workshop</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
              Breakfast with my Teenager
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/95 font-heading mb-3">
              Bridging the Gap Between Parents and Teens
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm md:text-base text-white/85 leading-relaxed max-w-3xl">
              A transformative workshop experience that brings parents and teenagers together 
              over a shared meal, fostering open communication and strengthening family bonds.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About the Event */}
      <section className="py-10 md:py-14 bg-white border-b border-border">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-xs mb-2">
              About the Workshop
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              What is Breakfast with my Teenager?
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-3 text-foreground text-sm md:text-base leading-relaxed">
              <p>
                <strong>Breakfast with my Teenager</strong> is our signature workshop designed to 
                create meaningful connections between parents and their teenage children. In today's 
                fast-paced world, families often struggle to find quality time together, and 
                communication gaps can widen during the crucial adolescent years.
              </p>

              <p>
                This workshop brings families together in a relaxed breakfast setting, where they 
                participate in guided activities, open discussions, and practical exercises that 
                help bridge generational divides and foster understanding.
              </p>

              <p>
                Through expert facilitation, parents learn to listen without judgment while teenagers 
                discover how to express themselves effectively. The result is stronger family bonds 
                and improved communication that lasts long after the breakfast ends.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Recap Section */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-xs mb-2">
              Event Recap
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Watch the Workshop in Action
            </motion.h2>

            <motion.div variants={fadeUp} className="max-w-4xl">
              <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
                <video src={breakfastRecapVideo} controls poster={galleryEvent1} className="w-full h-full object-cover" preload="metadata">
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Highlights from our Breakfast with my Teenager workshop sessions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              Workshop Highlights
            </motion.h2>

            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Family Bonding
                </h3>
                <p className="text-sm text-muted-foreground">
                  Quality time in a structured environment that encourages genuine connection 
                  between parents and teenagers.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Open Communication
                </h3>
                <p className="text-sm text-muted-foreground">
                  Guided exercises that help families develop healthier communication patterns 
                  and mutual understanding.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Ongoing Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Resources and follow-up support to help families continue their journey of 
                  connection beyond the workshop.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-10 md:py-14 bg-white">
        
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-4 right-4 text-white/80 hover:text-white p-2" onClick={() => setSelectedImage(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} src={selectedImage} alt="Event gallery image" className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={e => e.stopPropagation()} />
          </motion.div>}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-10 md:py-14 bg-primary">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <motion.h2 variants={fadeUp} className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-2">
                Join Our Next Workshop
              </motion.h2>
              <motion.p variants={fadeUp} className="text-sm md:text-base text-white/80">
                Register your family for the next Breakfast with my Teenager event.
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
    </>;
};
export default Impact;