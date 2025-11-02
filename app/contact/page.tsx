"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Clock, Globe } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center text-white bg-slate-900">
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're here to answer your questions and help you get involved.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our programs or how you can get involved? We'd love to hear from you. Fill out the
                form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Service Area</h3>
                    <p className="text-muted-foreground">Broward and Dade Counties</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:waine@52weeks.dev" className="text-cyan-600 hover:underline">
                      waine@52weeks.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Website</h3>
                    <a
                      href="https://www.52weeks.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:underline"
                    >
                      www.52weeks.dev
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Note: If you still see 52weeks-dev.org, it will redirect to our new site soon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href="tel:9546965494" className="text-cyan-600 hover:underline">
                      (954) 696-5494
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">Monday – Friday: 9:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-slate-800 text-white rounded-lg">
                <h3 className="text-xl font-bold mb-3">We'd Love to Hear From You</h3>
                <p>
                  Whether you're interested in our programs, want to support our mission, or have questions about how we
                  can help you or someone you know, we're here to assist.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Contact Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white px-6 rounded-lg">
              <AccordionTrigger className="text-left font-bold">How can I apply for your programs?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                To apply for our programs, please contact us directly via phone or email. We'll guide you through the
                application process and determine eligibility based on your specific situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white px-6 rounded-lg">
              <AccordionTrigger className="text-left font-bold">
                Do you offer services for family members of justice-involved individuals?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                While our primary focus is on the justice-involved individuals themselves, we recognize the importance
                of family support in the reentry process. Please contact us to discuss specific needs and how we might
                be able to help.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white px-6 rounded-lg">
              <AccordionTrigger className="text-left font-bold">
                How can businesses partner with 52 Weeks Development?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Businesses can partner with us in various ways, including offering apprenticeships, job opportunities,
                financial support, or in-kind donations. Contact us to discuss partnership opportunities that align with
                your business goals and our mission.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white px-6 rounded-lg">
              <AccordionTrigger className="text-left font-bold">Is my donation tax-deductible?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, 52 Weeks Development is a registered 501(c)(3) non-profit organization, and your donations are
                tax-deductible to the extent allowed by law. You will receive a receipt for your donation for tax
                purposes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
