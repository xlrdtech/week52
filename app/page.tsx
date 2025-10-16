import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Heart, Lightbulb, Building2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-slate-900/80 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1391.JPG-Afkt1HNUb0Ldf2QdjE16rHZIuxXb4O.jpeg"
          alt="52 Weeks Development Team"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Developing individuals and communities through second chance opportunities.
          </h1>
          <p className="text-xl mb-8 text-balance">
            At 52 Weeks Development, we are dedicated to redeveloping individuals and communities through second chance
            opportunities, offering a holistic support system tailored for justice-involved individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link href="/programs">Explore Our Programs</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore the 52 Weeks Development Advantage</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive approach addresses the full spectrum of needs for successful reintegration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Empower Your Future</h3>
              <p className="text-muted-foreground">
                Gain new skills and opportunities through our comprehensive programs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <Heart className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tailored Support</h3>
              <p className="text-muted-foreground">
                Experience programs designed specifically for your unique journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovative Solutions</h3>
              <p className="text-muted-foreground">
                Utilize integrated services to enhance your path to reintegration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Engagement</h3>
              <p className="text-muted-foreground">Connect with true mentorship for your growth and stability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Programs</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support services designed for justice-involved individuals aged 18-45.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Temporary Supportive Housing</h3>
              <p className="mb-6">
                Safe, stable housing for program participants, providing a structured environment that supports personal
                growth and accountability.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Structured living environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Supportive community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Reduced risk of recidivism</span>
                </li>
              </ul>
              <Button variant="secondary" asChild>
                <Link href="/programs">Learn More</Link>
              </Button>
            </div>
            <div className="bg-cyan-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Workforce Development & Job Training</h3>
              <p className="mb-6">
                Hands-on, industry-specific job training and skill-building programs designed to prepare participants
                for high-demand careers.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Industry-recognized certifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Apprenticeship opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Career placement assistance</span>
                </li>
              </ul>
              <Button variant="secondary" asChild>
                <Link href="/programs">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real People. Real Stories. Real Transformation.</h2>
            <p className="text-lg text-muted-foreground">
              Our participants are more than statistics. They are resilient individuals who have overcome significant
              challenges, rebuilt their lives, and are now thriving contributors to their communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1392.JPG-rg56l2sLjzdUrxPqXjvbA8wmKzzvkw.jpeg"
                alt="Graduation celebration"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1397.JPG-kZQ8LWQqFYhmaC9A5iHdIkqtWLnYIf.jpeg"
                alt="Classroom learning"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1394.JPG-mXRKZqSev5RB42zBDBXph2DTvEm6OP.jpeg"
                alt="Construction training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
