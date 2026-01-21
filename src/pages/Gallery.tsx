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
];

const Events = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-3 py-1 bg-white/15 text-white text-xs font-medium rounded-full mb-4"
            >
              <Camera className="inline-block w-3.5 h-3.5 mr-1.5" />
              Photo Gallery
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-4"
            >
              Event <span className="text-white/90">Gallery</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/85 leading-relaxed max-w-3xl"
            >
              Capturing meaningful moments from our workshops and community events.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3"
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
                Join Our Next Event
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-sm md:text-base text-white/80"
              >
                Be part of our transformative workshops and community initiatives.
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

export default Events;
