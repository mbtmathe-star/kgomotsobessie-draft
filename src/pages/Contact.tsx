import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle, Send, Clock, Shield, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fadeUp, stagger } from "@/lib/animations";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
              Whether you're seeking personal support, organisational consulting, 
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
                      Medicare, 259 Barkly Road, Homestead<br />
                      Kimberley 8301<br />
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

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:kgomotsobessie88@gmail.com"
                      className="text-primary hover:text-primary-dark transition-colors text-sm"
                    >
                      kgomotsobessie88@gmail.com
                    </a>
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

              {/* Registration Details */}
              <motion.div variants={fadeUp} className="mt-8 p-4 bg-accent/50 rounded-xl">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <h3 className="font-semibold text-foreground mb-2">Professional Registration</h3>
                    <p className="text-muted-foreground space-y-1">
                      <span className="block">Company Reg: 2024/800742/21</span>
                      <span className="block">SACSSP Reg: 1033-819</span>
                      <span className="block">BHF Number: 9990890001145061</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeUp} className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064121128498"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/kgomotsobessie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
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

                <form 
                  action="https://formsubmit.co/kgomotsobessie88@gmail.com" 
                  method="POST"
                  className="space-y-6"
                >
                  {/* FormSubmit configuration */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission - KB Social Workers" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/contact?submitted=true`} />
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
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
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
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
              Medicare, 259 Barkly Road, Homestead
            </p>
            <p className="text-muted-foreground">Kimberley 8301</p>
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
