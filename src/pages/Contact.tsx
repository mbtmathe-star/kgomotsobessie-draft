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
      <section className="section-padding section-teal">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
              Get in Touch
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Start Your Journey
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
              Whether you're seeking personal support, organisational consulting, 
              or partnership opportunities — we're here to listen and help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding section-white section-divider">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2"
            >
              <motion.h2 variants={fadeUp} className="font-heading text-2xl font-bold text-foreground mb-8">
                Contact Information
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl icon-container-solid flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      Medicare, 259 Barkly Road, Homestead<br />
                      Kimberley 8301<br />
                      Northern Cape, South Africa
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl icon-container-solid flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
                    <a href="tel:0713787172" className="text-primary hover:text-primary-dark transition-colors text-lg font-medium">
                      071 378 7172
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl icon-container-solid flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:kgomotsobessie88@gmail.com" className="text-primary hover:text-primary-dark transition-colors">
                      kgomotsobessie88@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl icon-container-solid flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday – Friday: 8:00 AM – 5:00 PM<br />
                      Saturday: By appointment
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Registration Details */}
              <motion.div variants={fadeUp} className="mt-10 p-6 bg-primary-light/50 rounded-xl border border-primary/15">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Professional Registration</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Company Reg: 2024/800742/21</p>
                      <p>SACSSP Reg: 1033-819</p>
                      <p>BHF Number: 9990890001145061</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Payment Methods */}
              <motion.div variants={fadeUp} className="mt-6 p-6 bg-accent/50 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-3">Payment Methods</h3>
                <p className="text-muted-foreground">
                  We accept <strong className="text-foreground">cash</strong> and electronic payments for all consultations.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeUp} className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064121128498"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary-light/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-primary/15"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/kgomotsobessie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary-light/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-primary/15"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.div variants={fadeUp} className="mt-8">
                <Button asChild variant="whatsapp" size="lg" className="w-full">
                  <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
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
              <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-border">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
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
