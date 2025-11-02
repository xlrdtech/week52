import Image from "next/image"
import { Target, Lightbulb } from "lucide-react"
import type { Metadata } from "next"

export default function AboutPage() {
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
          <h1 className="text-5xl font-bold mb-4">About 52 Weeks Development</h1>
          <p className="text-xl">Redeveloping individuals and communities through second chance opportunities.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Redeveloping individuals and communities through second chance opportunities.
              </p>
              <p className="text-muted-foreground mb-6">
                52 Weeks Development exists to empower returning citizens by providing temporary housing, hands-on job
                training, apprenticeship opportunities, trauma-informed counseling, and career placement—helping them
                transition from incarceration to hope, stability, and opportunity.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                      <Target className="w-6 h-6 text-cyan-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vision</h3>
                    <p className="text-muted-foreground">
                      By chasing results and not numbers, 52 Weeks Development will become a beacon of hope for second
                      chance deserving individuals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-cyan-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Purpose</h3>
                    <p className="text-muted-foreground">
                      If 52 Weeks Development assists with temporary housing, actual on the job training, apprenticeship
                      opportunities, mental health/individual trauma counseling, and career placement, a returning
                      citizen can return to hope and opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1391.JPG-Afkt1HNUb0Ldf2QdjE16rHZIuxXb4O.jpeg"
                alt="Team photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground">
              Learn about our history, business model, and the individuals we serve.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                This organization was originally founded in 2018 with a mission to support at-risk youth in making
                meaningful educational and career strides. Our founder, Waine Weeks, saw the potential in these young
                individuals and wanted to create opportunities that would help them break cycles of poverty,
                disengagement, and underachievement.
              </p>
              <p className="text-muted-foreground mb-4">
                As the work progressed, we began to notice a troubling pattern: many of the same youth we were
                supporting eventually became involved with the judicial system. Upon release, they faced overwhelming
                barriers to reentry—limited access to education, employment, and community support—which often led them
                back into the same cycles we aimed to prevent.
              </p>
              <p className="text-muted-foreground">
                This realization shifted our focus. We felt a deep responsibility to serve this overlooked population by
                providing them with a true second chance. Our mission evolved to not only prevent justice involvement
                but also to empower returning citizens to rebuild their lives and reenter society with confidence and
                purpose.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Business Model</h3>
              <p className="text-muted-foreground mb-4">
                52 Weeks Development's model combines the proven frameworks of YouthBuild, Job Corps, and the Milton
                Hershey School to create a holistic, wraparound support system specifically tailored for second-chance
                individuals aged 18-45.
              </p>
              <p className="text-muted-foreground mb-6">
                By integrating education, workforce development, housing, and therapeutic services under one
                organizational umbrella, we provide a structured, long-term pathway for returning citizens to rebuild
                their lives and reenter society with confidence and purpose.
              </p>
              <h4 className="font-bold mb-3">Our Goals</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Short-Term Goals (1-6 Years)</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">✓</span>
                      <span>
                        Launch the 52 Weeks Development program with an initial cohort of 20 participants in a 24-month
                        residential training cycle.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">✓</span>
                      <span>Implement an additional 12-month post-graduation monitoring and support phase.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">✓</span>
                      <span>
                        Use proven outcomes to position the organization for strategic partnerships and increased
                        funding.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Long-Term Goals (7-15 Years)</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">✓</span>
                      <span>
                        Replicate the 52 Weeks Development model in other high-need regions across the country.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">✓</span>
                      <span>
                        Position 52 Weeks Development as a national leader in reentry and workforce development.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Who We Serve</h3>
              <p className="text-muted-foreground mb-6">
                Our programs are designed for justice-involved individuals seeking a second chance.
              </p>
              <h4 className="font-bold mb-3">Demographics</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span className="text-muted-foreground">Age: 18-45 years old</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span className="text-muted-foreground">
                    Status: Currently incarcerated or institutionalized individuals preparing for reentry
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span className="text-muted-foreground">
                    Diverse backgrounds: All races, creeds, colors, and sexual affiliations.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span className="text-muted-foreground">
                    Geographic Focus: Initially focused on individuals within Broward and Dade Counties, with plans for
                    national expansion.
                  </span>
                </li>
              </ul>
              <h4 className="font-bold mb-3">Key Needs We Address</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span className="text-muted-foreground">
                    <strong>Stable Housing:</strong> Safe, supportive, and structured living environment.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span className="text-muted-foreground">
                    <strong>Workforce Development:</strong> Job training, apprenticeships, and educational
                    opportunities.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span className="text-muted-foreground">
                    <strong>Mental Health Support:</strong> Trauma-informed counseling and wellness services.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span className="text-muted-foreground">
                    <strong>Social Reintegration:</strong> Rebuilding connections and support networks.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Metadata moved to app/about-us/layout.tsx
