import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import SectionTransition from "@/components/section-transition"
import ScrollReveal from "@/components/scroll-reveal"
import HeroBackground from "@/components/hero-background"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Updated to match programs and donate pages */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">We're here to answer your questions and help you get involved.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our programs or how you can get involved? We'd love to hear from you. Fill out the
                form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-full bg-sky-100 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Location</h3>
                    <p className="text-gray-600">
                      Southeast Florida
                      <br />
                      (Treasure Coast – Dade County)
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 p-3 rounded-full bg-sky-100 flex-shrink-0">
                    <Mail className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <a href="mailto:Waine@52weeksdev.org" className="text-sky-600 hover:underline">
                      Waine@52weeksdev.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 p-3 rounded-full bg-sky-100 flex-shrink-0">
                    <Phone className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <a href="tel:+19546965494" className="text-sky-600 hover:underline">
                      (954) 696-5494
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 p-3 rounded-full bg-sky-100 flex-shrink-0">
                    <Clock className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Office Hours</h3>
                    <p className="text-gray-600">Monday – Friday: 9:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">We'd Love to Hear From You</h3>
                <p className="mb-0">
                  Whether you're interested in our programs, want to support our mission, or have questions about how we
                  can help you or someone you know, we're here to assist.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-md self-start">
              <h3 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 w-full">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <Card className="bg-white border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">How can I apply for your programs?</h3>
                    <p className="text-gray-600">
                      To apply for our programs, please contact us directly via phone or email. We'll guide you through
                      the application process and determine eligibility based on your specific situation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      Do you offer services for family members of justice-involved individuals?
                    </h3>
                    <p className="text-gray-600">
                      While our primary focus is on the justice-involved individuals themselves, we recognize the
                      importance of family support in the reentry process. Please contact us to discuss specific needs
                      and how we might be able to help.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">How can businesses partner with 52 Weeks Development?</h3>
                    <p className="text-gray-600">
                      Businesses can partner with us in various ways, including offering apprenticeships, job
                      opportunities, financial support, or in-kind donations. Contact us to discuss partnership
                      opportunities that align with your business goals and our mission.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Is my donation tax-deductible?</h3>
                    <p className="text-gray-600">
                      Yes, 52 Weeks Development is a registered 501(c)(3) non-profit organization, and your donations
                      are tax-deductible to the extent allowed by law. You will receive a receipt for your donation for
                      tax purposes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white w-full">
        <div className="container mx-auto px-4 text-center">
          <SectionTransition>
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in our mission to provide second chances and rebuild lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 min-w-[150px]">
                  Donate Now
                </Button>
              </Link>
              <Link href="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 min-w-[150px]"
                >
                  Explore Our Programs
                </Button>
              </Link>
            </div>
          </SectionTransition>
        </div>
      </section>
    </div>
  )
}
