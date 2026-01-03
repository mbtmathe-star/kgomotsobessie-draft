import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Linkedin, MessageCircle, Send, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { fadeUp, stagger } from "@/lib/animations";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24-48 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const whatsappNumber = "27795871204";
  const whatsappMessage = encodeURIComponent("Hello! I would like to inquire about your services.");

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding section-teal">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="text-primary font-medium uppercase tracking-wider text-sm mb-3">
              Get in Touch
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Let's Start Your Journey
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Whether you're seeking personal support, organizational consulting, 
              or partnership opportunities — we're here to listen and help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2"
            >
              <motion.h2
                variants={fadeUp}
                className="font-heading text-2xl font-bold text-foreground mb-6"
              >
                Contact Information
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground text-sm">
                      259 Barkly Road, Homestead<br />
                      Kimberley, 8301<br />
                      Northern Cape, South Africa
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:0795871204"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      079 587 1204
                    </a>
                  </div>
                </div>

                {/* Registration */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Registration</h3>
                    <p className="text-muted-foreground text-sm">
                      K2024800742<br />
                      (Incorporated December 2024)
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday – Friday: 8:00 AM – 5:00 PM<br />
                      Saturday: By appointment
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeUp} className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/kgomotsobessie88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/kgomotso-bessie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.div variants={fadeUp} className="mt-8">
                <Button
                  asChild
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-3"
            >
              <motion.div
                variants={fadeUp}
                className="card-elevated p-8 md:p-10"
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we'll respond within 24-48 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="079 000 0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-lg font-medium text-foreground">
              259 Barkly Road, Homestead
            </p>
            <p className="text-muted-foreground">Kimberley, 8301</p>
            <a
              href="https://maps.google.com/?q=259+Barkly+Road+Homestead+Kimberley+8301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary hover:text-primary-dark font-medium"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
