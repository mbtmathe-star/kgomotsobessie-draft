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
  const whatsappNumber = "27713787172";
  const whatsappMessage = encodeURIComponent("Hello! I would like to inquire about your services.");

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
            <motion.p variants={fadeUp} className="text-white/80 font-semibold uppercase tracking-wider text-xs md:text-sm mb-2">
              Get in Touch
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              Let's Start Your Journey
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-white/85 leading-relaxed max-w-4xl">
              Whether you're seeking personal support, organisational consulting, 
              or partnership opportunities — we're here to listen and help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 md:py-14 lg:py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2"
            >
              <motion.h2 variants={fadeUp} className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">
                Contact Information
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-5">
                {/* Address */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg icon-container-solid flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Office Address</h3>
                    <p className="text-foreground text-sm">
                      Medicare, 259 Barkly Road, Homestead<br />
                      Kimberley 8301, Northern Cape
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg icon-container-solid flex items-center justify-center">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Phone / WhatsApp</h3>
                    <a href="tel:0713787172" className="text-primary hover:text-primary-dark transition-colors font-medium block">
                      071 378 7172
                    </a>
                    <a href="tel:0795871204" className="text-primary hover:text-primary-dark transition-colors font-medium block">
                      079 587 1204
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg icon-container-solid flex items-center justify-center">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Email</h3>
                    <a href="mailto:kgomotsobessie88@gmail.com" className="text-primary hover:text-primary-dark transition-colors text-sm">
                      kgomotsobessie88@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg icon-container-solid flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Office Hours</h3>
                    <p className="text-foreground text-sm">
                      Mon – Fri: 8:00 AM – 5:00 PM<br />
                      Sat: By appointment
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Registration Details */}
              <motion.div variants={fadeUp} className="mt-6 p-4 bg-primary-light/50 rounded-lg border border-primary/15">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-2">Professional Registration</h3>
                    <div className="text-foreground text-xs space-y-0.5">
                      <p>Company Reg: 2024/800742/21</p>
                      <p>SACSSP Reg: 1033-819</p>
                      <p>BHF: 9990890001145061</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Payment Methods */}
              <motion.div variants={fadeUp} className="mt-4 p-4 bg-accent/50 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2">Payment Methods</h3>
                <p className="text-foreground text-sm">
                  We accept <strong>cash</strong> and electronic payments.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeUp} className="mt-6">
                <h3 className="font-semibold text-foreground text-sm mb-3">Connect With Us</h3>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064121128498"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary-light/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-primary/15"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://instagram.com/kgomotsobessie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary-light/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-primary/15"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.div variants={fadeUp} className="mt-6">
                <Button asChild variant="whatsapp" className="w-full">
                  <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
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
              <motion.div variants={fadeUp} className="bg-white rounded-lg p-6 md:p-8 shadow-md border border-border">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">
                  Send Us a Message
                </h2>
                <p className="text-foreground text-sm mb-6">
                  Fill out the form below and we'll respond within 24-48 hours.
                </p>

                <form action="https://formsubmit.co/kgomotsobessie88@gmail.com" method="POST" className="space-y-6">
                  {/* FormSubmit configuration */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission - KB Social Workers" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/contact?submitted=true`} />
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="Your full name" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" required className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="079 000 0000" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea id="message" name="message" placeholder="Tell us how we can help you..." required rows={6} className="resize-none" />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
