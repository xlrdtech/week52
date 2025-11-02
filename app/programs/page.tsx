import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Briefcase, Heart, GraduationCap } from "lucide-react"
import type { Metadata } from "next"

export default function ProgramsPage() {
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
          <h1 className="text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl">Redeveloping individuals and communities through second chance opportunities.</p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore Our Programs</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive approach addresses the full spectrum of needs required for successful reintegration into
              society.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <Home className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Temporary Supportive Housing — COMING SOON</h3>
              <p className="text-muted-foreground">
                Safe, stable housing providing a structured environment for growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Workforce Development</h3>
              <p className="text-muted-foreground">Job training and apprenticeships for high-demand careers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <Heart className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mental Health Support</h3>
              <p className="text-muted-foreground">Trauma-informed counseling for emotional wellbeing.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Educational Advancement</h3>
              <p className="text-muted-foreground">GED preparation and vocational certifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Temporary Supportive Housing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Temporary Supportive Housing — COMING SOON</h2>
              <p className="text-lg mb-6">
                Our temporary supportive housing provides a safe, structured environment that fosters personal growth
                and accountability while reducing the risk of recidivism.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Safe, Stable Environment:</strong> Secure housing that removes individuals from environments
                    associated with past behaviors.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Structured Living:</strong> Clear expectations, routines, and accountability measures that
                    promote responsibility and self-discipline.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Supportive Community:</strong> Peer support and mentorship from staff and fellow
                    participants who understand the reentry journey.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Integrated Services:</strong> Housing that connects directly to our other program
                    components, creating a seamless support system.
                  </div>
                </li>
              </ul>
              <p className="italic text-muted-foreground border-l-4 border-cyan-600 pl-4">
                "Our housing program is designed to be a stepping stone, not a permanent solution. We provide the
                stability needed for individuals to focus on their personal development and successfully transition to
                independent living."
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1395.JPG-bUG1bgRpmmpoaYv48hSzHUttK432S6.jpeg"
                alt="Construction training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workforce Development */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1394.JPG-mXRKZqSev5RB42zBDBXph2DTvEm6OP.jpeg"
                alt="Workforce training"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Workforce Development & Job Training</h2>
              <p className="text-lg mb-6">
                Equip yourself with essential skills for high-demand careers through hands-on training and
                apprenticeships with local businesses for real-world experience.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Industry-Specific Training:</strong> Focused skill development in high-growth sectors like
                    construction, healthcare, technology, and hospitality.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>NCCER Core Training:</strong> Nationally recognized construction education that includes
                    safety, construction basics, and essential workplace skills.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Trade Pathways:</strong> Specialized training in masonry, plumbing, carpentry, and other
                    in-demand trades.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Apprenticeship Opportunities:</strong> Partnerships with local businesses to provide paid
                    work experience and employment pipelines.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Job Placement Assistance:</strong> Resume building, interview preparation, and direct
                    connections to employers.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Support */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Mental Health Support</h2>
              <p className="text-lg mb-6">
                Comprehensive trauma-informed counseling and wellness services to support emotional wellbeing and
                personal growth.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Individual Counseling:</strong> One-on-one sessions with licensed therapists specializing in
                    trauma and reentry challenges.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Group Therapy:</strong> Peer support groups that foster connection and shared healing.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Trauma-Informed Care:</strong> Services designed to address the impact of past trauma on
                    current behavior and wellbeing.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Wellness Programs:</strong> Mindfulness, stress management, and healthy coping strategies.
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1398.JPG-RHwT48d4dOFyprxyCkNF8lsmd2klic.jpeg"
                alt="Classroom session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Advancement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1392.JPG-rg56l2sLjzdUrxPqXjvbA8wmKzzvkw.jpeg"
                alt="Graduation"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Educational Advancement</h2>
              <p className="text-lg mb-6">
                Build a strong educational foundation through GED preparation and vocational certifications that open
                doors to career opportunities.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>GED Preparation:</strong> Comprehensive instruction and support to earn your high school
                    equivalency diploma.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Vocational Certifications:</strong> Industry-recognized credentials that demonstrate your
                    skills to employers.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Life Skills Training:</strong> Financial literacy, communication, and professional
                    development.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Continuing Education Support:</strong> Guidance and resources for pursuing further education
                    and training.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our programs and how we can support your journey to a brighter future.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

// Metadata moved to app/programs/layout.tsx
