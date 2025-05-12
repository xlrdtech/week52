import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, Briefcase, Heart, GraduationCap } from "lucide-react"
import HeroBackground from "@/components/hero-background"

export default function Programs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-gray-300">
              Redeveloping individuals and communities through second chance opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Programs</h2>
            <p className="text-gray-600">
              Our comprehensive approach addresses the full spectrum of needs required for successful reintegration into
              society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-sky-100">
                    <Home className="h-8 w-8 text-sky-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Temporary Supportive Housing</h3>
                <p className="text-gray-600 text-center">
                  Safe, stable housing providing a structured environment for growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-sky-100">
                    <Briefcase className="h-8 w-8 text-sky-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Workforce Development</h3>
                <p className="text-gray-600 text-center">Job training and apprenticeships for high-demand careers.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-sky-100">
                    <Heart className="h-8 w-8 text-sky-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Mental Health Support</h3>
                <p className="text-gray-600 text-center">Trauma-informed counseling for emotional wellbeing.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-sky-100">
                    <GraduationCap className="h-8 w-8 text-sky-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Educational Advancement</h3>
                <p className="text-gray-600 text-center">GED preparation and vocational certifications.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Temporary Supportive Housing */}
      <section id="housing" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-center">Temporary Supportive Housing</h2>
              <p className="text-gray-600 mb-6">
                Our temporary supportive housing provides a safe, structured environment that fosters personal growth
                and accountability while reducing the risk of recidivism.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Safe, Stable Environment:</strong> Secure housing that removes individuals from environments
                    associated with past behaviors.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Structured Living:</strong> Clear expectations, routines, and accountability measures that
                    promote responsibility and self-discipline.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Supportive Community:</strong> Peer support and mentorship from staff and fellow
                    participants who understand the reentry journey.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Integrated Services:</strong> Housing that connects directly to our other program
                    components, creating a seamless support system.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 italic">
                "Our housing program is designed to be a stepping stone, not a permanent solution. We provide the
                stability needed for individuals to focus on their personal development and successfully transition to
                independent living."
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/website_photo_1.jpg" alt="Temporary Supportive Housing" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Workforce Development */}
      <section id="workforce" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/website_photo_2.jpg"
                alt="Workforce Development & Job Training"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Workforce Development & Job Training</h2>
              <p className="text-gray-600 mb-6">
                Equip yourself with essential skills for high-demand careers through hands-on training and
                apprenticeships with local businesses for real-world experience.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Industry-Specific Training:</strong> Focused skill development in high-growth sectors like
                    construction, healthcare, technology, and hospitality.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>NCCER Core Training:</strong> Nationally recognized construction education that includes
                    safety, construction basics, and essential workplace skills.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Trade Pathways:</strong> Specialized training in masonry, plumbing, carpentry, and other
                    in-demand trades.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Apprenticeship Opportunities:</strong> Partnerships with local businesses to provide paid,
                    real-world work experience and employment pipelines.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Job Placement Assistance:</strong> Resume building, interview preparation, and connections
                    to employers who are open to hiring justice-involved individuals.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 italic">
                "Our workforce development program doesn't just teach skills—it builds confidence, work ethic, and the
                professional networks needed for long-term career success."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health & Trauma Counseling */}
      <section id="mental-health" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-center">Mental Health & Trauma Counseling</h2>
              <p className="text-gray-600 mb-6">
                Licensed professionals offer individual and group therapy focused on trauma recovery, emotional
                regulation, and mental wellness to provide the emotional support and tools necessary to navigate
                challenges and build resilience.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Trauma-Informed Approach:</strong> Counseling that recognizes and addresses the impact of
                    past trauma on current behaviors and decision-making.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Individual Therapy:</strong> One-on-one sessions with licensed counselors to address
                    personal challenges and develop coping strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Group Support:</strong> Peer-based sessions that build community, reduce isolation, and
                    provide shared learning experiences.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Emotional Regulation:</strong> Skills training to manage stress, anger, and other
                    challenging emotions in healthy ways.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Substance Use Support:</strong> Resources and counseling for those dealing with substance
                    use disorders as part of their reentry journey.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 italic">
                "Mental health is the foundation of successful reentry. By addressing trauma and building emotional
                resilience, we help participants create the internal stability needed for external success."
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/website_photo_6.jpg" alt="Mental Health & Trauma Counseling" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Advancement */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/website_14.jpg" alt="Educational Advancement" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Educational Advancement</h2>
              <p className="text-gray-600 mb-6">
                Access to GED prep, vocational certifications, and life skills training to close education gaps and
                enhance career readiness for better workforce opportunities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>GED Preparation:</strong> Structured classes and tutoring to help participants earn their
                    high school equivalency diploma.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Vocational Certifications:</strong> Industry-recognized credentials that enhance
                    employability and earning potential.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Digital Literacy:</strong> Computer skills training essential for today's workplace and for
                    accessing online resources.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Financial Literacy:</strong> Education on budgeting, banking, credit, and long-term
                    financial planning.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-sky-600" />
                  <span>
                    <strong>Life Skills Training:</strong> Practical education on communication, problem-solving, time
                    management, and other essential skills for success.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 italic">
                "Education is a powerful tool for transformation. By closing educational gaps and building new skills,
                our participants gain not just knowledge, but confidence and expanded opportunities."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Flyer */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="w-full text-center">
            <h2 className="text-3xl font-bold mb-6">Building Pathways to Success</h2>
            <p className="text-gray-300 mb-8">
              52 Weeks Development provides credentialed training programs and comprehensive support services to empower
              second chance individuals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/website_photo_4.jpg"
                  alt="Masonry Training"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/website_photo_3.jpg"
                  alt="Welding Training"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-sky-400">NCCER CORE TRAINING</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <span className="text-sky-400 mr-2">•</span>
                      <span>Safety</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <span className="text-sky-400 mr-2">•</span>
                      <span>Construction Basics</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-sky-400">TRADE PATHWAYS</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <span className="text-sky-400 mr-2">•</span>
                      <span>Masonry</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <span className="text-sky-400 mr-2">•</span>
                      <span>Plumbing</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <span className="text-sky-400 mr-2">•</span>
                      <span>Carpentry</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-sky-400">CAREER & ACADEMIC SUPPORT</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <span className="text-sky-400 mr-2">•</span>
                      <span>GED Preparation</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <span className="text-sky-400 mr-2">•</span>
                      <span>Job Placement Assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                  Request Program Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take the First Step?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our programs and how we can help you or someone you know build a
            brighter future.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
