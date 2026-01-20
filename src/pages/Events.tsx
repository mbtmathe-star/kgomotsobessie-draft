import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";

// Import all gallery images
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

const galleryImages = [
  { src: galleryEvent1, alt: "Workshop presentation" },
  { src: galleryEvent2, alt: "Community workshop session" },
  { src: galleryEvent3, alt: "Speaker presenting" },
  { src: galleryEvent4, alt: "Guest speaker presentation" },
  { src: galleryEvent5, alt: "Workshop facilitator" },
  { src: galleryEvent6, alt: "Family photo at event" },
  { src: galleryEvent7, alt: "Parents and teens together" },
  { src: galleryEvent8, alt: "Speaker addressing attendees" },
  { src: galleryEvent9, alt: "Keynote presentation" },
  { src: galleryEvent10, alt: "Workshop session" },
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl text-center mx-auto"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6"
            >
              <Camera className="inline-block w-4 h-4 mr-2" />
              Photo Gallery
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
            >
              Event <span className="text-primary">Gallery</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Capturing meaningful moments from our workshops and community events.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
              Join Our Next Event
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-primary-foreground/80 mb-8"
            >
              Be part of our transformative workshops and community initiatives.
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
