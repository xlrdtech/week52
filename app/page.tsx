import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import { CheckCircle, Users, Heart, UserPlus, Building, Mail, Phone } from "lucide-react"
import SectionTransition from "@/components/section-transition"
import ScrollReveal from "@/components/scroll-reveal"
import ThreeDCard from "@/components/3d-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/website_photo_1.jpg"
            alt="52 Weeks Development Team"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-20">
          <SectionTransition delay={0.2}>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-tight">
                Developing individuals and communities through second chance opportunities.
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                At 52 Weeks Development, we are dedicated to redeveloping individuals and communities through second
                chance opportunities, offering a holistic support system tailored for justice-involved individuals.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/programs">
                  <Button size="lg" className="bg-sky-600 hover:bg-sky-700 min-w-[150px]">
                    Explore Our Programs
                  </Button>
                </Link>
                <Link href="/about-us">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10 min-w-[150px]"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </SectionTransition>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50 w-full">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore the 52 Weeks Development Advantage</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach addresses the full spectrum of needs for successful reintegration.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionTransition direction="up" delay={0.1}>
              <ThreeDCard className="h-full">
                <Card className="bg-white border-none shadow-md h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-sky-100">
                        <Users className="h-8 w-8 text-sky-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-2">Empower Your Future</h3>
                    <p className="text-gray-600 text-center">
                      Gain new skills and opportunities through our comprehensive programs.
                    </p>
                  </CardContent>
                </Card>
              </ThreeDCard>
            </SectionTransition>

            <SectionTransition direction="up" delay={0.2}>
              <ThreeDCard className="h-full">
                <Card className="bg-white border-none shadow-md h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-sky-100">
                        <Heart className="h-8 w-8 text-sky-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-2">Tailored Support</h3>
                    <p className="text-gray-600 text-center">
                      Experience programs designed specifically for your unique journey.
                    </p>
                  </CardContent>
                </Card>
              </ThreeDCard>
            </SectionTransition>

            <SectionTransition direction="up" delay={0.3}>
              <ThreeDCard className="h-full">
                <Card className="bg-white border-none shadow-md h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-sky-100">
                        <UserPlus className="h-8 w-8 text-sky-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-2">Innovative Solutions</h3>
                    <p className="text-gray-600 text-center">
                      Utilize integrated services to enhance your path to reintegration.
                    </p>
                  </CardContent>
                </Card>
              </ThreeDCard>
            </SectionTransition>

            <SectionTransition direction="up" delay={0.4}>
              <ThreeDCard className="h-full">
                <Card className="bg-white border-none shadow-md h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-sky-100">
                        <Building className="h-8 w-8 text-sky-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-2">Community Engagement</h3>
                    <p className="text-gray-600 text-center">
                      Connect with true mentorship for your growth and stability.
                    </p>
                  </CardContent>
                </Card>
              </ThreeDCard>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Programs</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comprehensive support services designed for justice-involved individuals aged 18-45.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionTransition direction="left">
              <div className="bg-slate-800 text-white rounded-lg overflow-hidden shadow-lg">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Temporary Supportive Housing</h3>
                  <p className="mb-6">
                    Safe, stable housing for program participants, providing a structured environment that supports
                    personal growth and accountability.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-400" />
                      <span>Structured living environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-400" />
                      <span>Supportive community</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-400" />
                      <span>Reduced risk of recidivism</span>
                    </li>
                  </ul>
                  <div className="mt-8 text-center">
                    <Link href="/programs#housing">
                      <Button variant="outline" className="text-white border-white hover:bg-white/10 min-w-[150px]">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SectionTransition>

            <SectionTransition direction="right">
              <div className="bg-sky-700 text-white rounded-lg overflow-hidden shadow-lg">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Workforce Development & Job Training</h3>
                  <p className="mb-6">
                    Hands-on, industry-specific job training and skill-building programs designed to prepare
                    participants for high-demand careers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-200" />
                      <span>Industry-recognized certifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-200" />
                      <span>Apprenticeship opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-200" />
                      <span>Career placement assistance</span>
                    </li>
                  </ul>
                  <div className="mt-8 text-center">
                    <Link href="/programs#workforce">
                      <Button variant="outline" className="text-white border-white hover:bg-white/10 min-w-[150px]">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SectionTransition>
          </div>

          <ScrollReveal>
            <div className="mt-8 text-center">
              <Link href="/programs">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 min-w-[200px]">
                  View All Programs
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50 w-full">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real People. Real Stories. Real Transformation.</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our participants are more than statistics. They are resilient individuals who have overcome significant
                challenges, rebuilt their lives, and are now thriving contributors to their communities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionTransition direction="up" delay={0.1}>
              <Card className="bg-white border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 overflow-hidden rounded-full mb-2">
                      <Image
                        src="/website_photo_1a.jpg"
                        alt="Program Graduate"
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-bold">James Wilson</div>
                      <div className="text-sm text-gray-500">Program Graduate</div>
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-center italic">
                    "52 Weeks Development has provided a true second chance, empowering me to rebuild my life and pursue
                    my dreams."
                  </p>
                </CardContent>
              </Card>
            </SectionTransition>

            <SectionTransition direction="up" delay={0.2}>
              <Card className="bg-white border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 overflow-hidden rounded-full mb-2">
                      <Image
                        src="/website_photo_6.jpg"
                        alt="Job Training Participant"
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-bold">Michael Thomas</div>
                      <div className="text-sm text-gray-500">Job Training Participant</div>
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-center italic">
                    "52 Weeks Development has been a game changer for me, helping me unlock opportunities I never
                    thought possible."
                  </p>
                </CardContent>
              </Card>
            </SectionTransition>

            <SectionTransition direction="up" delay={0.3}>
              <Card className="bg-white border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 overflow-hidden rounded-full mb-2">
                      <Image
                        src="/website_photo_3.jpg"
                        alt="Housing Program Participant"
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-bold">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">Housing Program Participant</div>
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-center italic">
                    "52 Weeks Development has not just changed my life, it's given me a path to a brighter future."
                  </p>
                </CardContent>
              </Card>
            </SectionTransition>
          </div>

          <ScrollReveal>
            <div className="mt-8 text-center">
              <Link href="/donate">
                <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 min-w-[200px]">
                  Support Our Mission
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionTransition direction="left">
              <div>
                <h2 className="text-3xl font-bold mb-6">Develop Your Future with 52 Weeks Development</h2>
                <p className="text-gray-600 mb-8">
                  Ready to take the first step toward a new beginning? Contact us today to learn more about our programs
                  and how we can help you or someone you know build a brighter future.
                </p>
                <div className="bg-slate-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Our Office</h3>
                  <p className="mb-4">
                    Southeast Florida
                    <br />
                    (Treasure Coast – Dade County)
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-sky-400" />
                      <a href="mailto:Waine@52weeksdev.org" className="hover:underline">
                        Waine@52weeksdev.org
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-sky-400" />
                      <a href="tel:+19546965494" className="hover:underline">
                        (954) 696-5494
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SectionTransition>

            <SectionTransition direction="right">
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
                <ContactForm />
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>
    </div>
  )
}
