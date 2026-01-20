import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Users, Briefcase, Baby, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import breakfastWorkshop from "@/assets/breakfast-workshop.png";
import healthyEntrepreneur from "@/assets/healthy-entrepreneur-wellness.png";
import workshopParenting from "@/assets/workshop-parenting.jpg";
import breakfastRecapVideo from "@/assets/breakfast-recap-video.mp4";
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

const events = [
  {
    icon: Users,
    title: "Breakfast with my Teenager",
    description: "An interactive workshop designed to bring parents and teenagers closer through meaningful conversations and shared experiences.",
    image: breakfastWorkshop,
    featured: true,
  },
  {
    icon: Baby,
    title: "Parenting in the 21st Century",
    description: "Guidance on mental wellness and effective parenting strategies for modern families navigating today's challenges.",
    image: workshopParenting,
    featured: false,
  },
  {
    icon: Briefcase,
    title: "Healthy Entrepreneur Wellness",
    description: "Leadership mental health, stress management, and resilience building for business success and sustainable growth.",
    image: healthyEntrepreneur,
    featured: false,
  },
];

const galleryImages = [
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

const Events = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6"
            >
              <Calendar className="inline-block w-4 h-4 mr-2" />
              Workshops & Events
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
            >
              Building Stronger{" "}
              <span className="text-primary">Communities</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            >
              Join our transformative workshops designed to strengthen family bonds, 
              support mental wellness, and empower individuals and communities.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button asChild size="lg">
                <Link to="/contact">
                  Inquire About Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Our Workshops
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              Explore our range of workshops designed to address mental health, 
              family dynamics, and professional wellness.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <event.icon className="h-5 w-5 text-primary" />
                    </div>
                    {event.featured && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4"
            >
              <Play className="w-4 h-4" />
              Event Recap
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Breakfast with my Teenager
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Watch highlights from our parent-teen bonding workshops that have 
              transformed family relationships across our community.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <video
                controls
                poster={breakfastWorkshop}
                className="w-full aspect-video object-cover"
              >
                <source src={breakfastRecapVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Event Gallery
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Moments captured from our community events and workshops.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-wide text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4"
            >
              Host a Workshop
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-primary-foreground/80 mb-8"
            >
              Interested in bringing one of our workshops to your organization, 
              school, or community? Get in touch with us today.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/contact">
                  Contact Us
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

export default Events;
