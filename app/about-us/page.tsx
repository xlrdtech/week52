import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Target, Lightbulb } from "lucide-react"
import SectionTransition from "@/components/section-transition"
import ScrollReveal from "@/components/scroll-reveal"
import ParallaxScroll from "@/components/parallax-scroll"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Updated to match home page */}
      <section className="relative bg-slate-900 text-white w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/website_photo_5.jpg"
            alt="52 Weeks Development Team"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-20">
          <SectionTransition>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-tight">
                About 52 Weeks Development
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Redeveloping individuals and communities through second chance opportunities.
              </p>
            </div>
          </SectionTransition>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SectionTransition direction="left">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Redeveloping individuals and communities through second chance opportunities.
                </p>
                <p className="text-gray-600 mb-6">
                  52 Weeks Development exists to empower returning citizens by providing temporary housing, hands-on job
                  training, apprenticeship opportunities, trauma-informed counseling, and career placement—helping them
                  transition from incarceration to hope, stability, and opportunity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Target className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Vision</h3>
                      <p className="text-gray-600">
                        By chasing results and not numbers, 52 Weeks Development will become a beacon of hope for second
                        chance deserving individuals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Lightbulb className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Purpose</h3>
                      <p className="text-gray-600">
                        If 52 Weeks Development assists with temporary housing, actual on the job training,
                        apprenticeship opportunities, mental health/individual trauma counseling, and career placement,
                        a returning citizen can return to hope and opportunity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionTransition>
            <SectionTransition direction="right">
              <ParallaxScroll>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/website_photo_5.jpg"
                    alt="52 Weeks Development Team"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </ParallaxScroll>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Three Column Layout for Our Story, Business Model, and Who We Serve */}
      <section className="py-16 bg-slate-50 w-full">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Learn about our history, business model, and the individuals we serve.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Our Story */}
            <Card className="bg-white border-none shadow-lg h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-center">Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    This organization was originally founded in 2018 with a mission to support at-risk youth in making
                    meaningful educational and career strides. Our founder, Waine Weeks, saw the potential in these
                    young individuals and wanted to create opportunities that would help them break cycles of poverty,
                    disengagement, and underachievement.
                  </p>
                  <p className="text-gray-600">
                    As the work progressed, we began to notice a troubling pattern: many of the same youth we were
                    supporting eventually became involved with the judicial system. Upon release, they faced
                    overwhelming barriers to reentry—limited access to education, employment, and community
                    support—which often led them back into the same cycles we aimed to prevent.
                  </p>
                  <p className="text-gray-600">
                    This realization shifted our focus. We felt a deep responsibility to serve this overlooked
                    population by providing them with a true second chance. Our mission evolved to not only prevent
                    justice involvement but also to empower returning citizens with the tools, training, and support
                    they need to reclaim their lives, rebuild their futures, and become active, thriving members of
                    their communities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Column 2: Our Business Model */}
            <Card className="bg-white border-none shadow-lg h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-center">Our Business Model</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    52 Weeks Development's model combines the proven frameworks of YouthBuild, Job Corps, and the Milton
                    Hershey School to create a holistic, wraparound support system specifically tailored for
                    second-chance individuals aged 18–45.
                  </p>
                  <p className="text-gray-600">
                    By integrating education, workforce development, housing, and therapeutic services under one
                    organizational umbrella, we provide a structured, long-term pathway for returning citizens to
                    rebuild their lives and reenter society with confidence and purpose.
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-2">Our Goals</h3>

                  <div>
                    <h4 className="font-bold text-lg">Short-Term Goals (1–6 Years)</h4>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                        <span>
                          Launch the 52 Weeks Development program with an initial cohort of 20 participants in a
                          24-month residential training and development cycle.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                        <span>Implement an additional 12-month post-graduation monitoring and support phase.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                        <span>
                          Use proven outcomes to position the organization for strategic partnerships and increased
                          funding.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">Long-Term Goals (7–15 Years)</h4>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                        <span>
                          Replicate the 52 Weeks Development model in other high-need regions across the country.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                        <span>Position 52 Weeks Development as a leader in reentry innovation and policy reform.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Column 3: Who We Serve */}
            <Card className="bg-white border-none shadow-lg h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-center">Who We Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Our programs are designed for justice-involved individuals seeking a second chance.
                  </p>

                  <h3 className="text-xl font-bold mt-2 mb-2">Demographics</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                      <span>Age: 18–45 years old</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                      <span>Status: Currently incarcerated or institutionalized individuals preparing for reentry</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                      <span>
                        Diverse Backgrounds: Our program is inclusive of all races, creeds, colors, and sexual
                        affiliations.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                      <span>
                        Geographic Focus: Initially focused on individuals within Southeast Florida, with plans for
                        national expansion.
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-2">Key Needs We Address</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                      <span>
                        <strong>Stable Housing:</strong> Safe, supportive, and structured living environments.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                      <span>
                        <strong>Workforce Development:</strong> Job training, apprenticeships, and educational
                        opportunities.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                      <span>
                        <strong>Mental Health Support:</strong> Trauma-informed counseling and wellness services.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600 flex-shrink-0" />
                      <span>
                        <strong>Social Reintegration:</strong> Rebuilding connections and support networks.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white w-full">
        <div className="container mx-auto px-4 text-center">
          <SectionTransition>
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Help us create second chances and rebuild lives. Together, we can make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 min-w-[150px]"
                >
                  Explore Our Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 min-w-[150px]">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </SectionTransition>
        </div>
      </section>
    </div>
  )
}
