import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, DollarSign, Users, Calendar, Home } from "lucide-react"
import Image from "next/image"
import HeroBackground from "@/components/hero-background"

export default function Donate() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl text-gray-300">
              Your contribution helps us provide second chances and rebuild lives.
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Your Support Matters</h2>
            <p className="text-gray-600">
              Your donation directly impacts the lives of justice-involved individuals seeking a second chance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-sky-100">
                    <Home className="h-8 w-8 text-sky-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Provide Safe Housing</h3>
                <p className="text-gray-600 text-center">
                  Help us offer stable, supportive housing that removes individuals from environments associated with
                  past behaviors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-sky-100">
                    <Users className="h-8 w-8 text-sky-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Fund Job Training</h3>
                <p className="text-gray-600 text-center">
                  Support hands-on training programs that prepare participants for high-demand careers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-sky-100">
                    <Heart className="h-8 w-8 text-sky-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Enable Mental Health Support</h3>
                <p className="text-gray-600 text-center">
                  Help provide trauma-informed counseling and mental health services essential for successful
                  reintegration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ways to Give</h2>
            <p className="text-gray-600">Choose the donation option that works best for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-sky-100">
                    <DollarSign className="h-10 w-10 text-sky-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">One-Time Donation</h3>
                <p className="text-gray-600 text-center mb-6">
                  Make an immediate impact with a one-time contribution of any amount.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      $25
                    </Button>
                  </a>
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      $50
                    </Button>
                  </a>
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      $100
                    </Button>
                  </a>
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      $250
                    </Button>
                  </a>
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      $500
                    </Button>
                  </a>
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      Other
                    </Button>
                  </a>
                </div>
                <a
                  href="https://square.link/u/OQowKsqR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Donate Now</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-sky-100">
                    <Calendar className="h-10 w-10 text-sky-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Monthly Giving</h3>
                <p className="text-gray-600 text-center mb-6">
                  Become a sustaining supporter with a recurring monthly donation.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      $10/mo
                    </Button>
                  </a>
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      $25/mo
                    </Button>
                  </a>
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      $50/mo
                    </Button>
                  </a>
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      $100/mo
                    </Button>
                  </a>
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      $200/mo
                    </Button>
                  </a>
                  <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full">
                      Other
                    </Button>
                  </a>
                </div>
                <a
                  href="https://square.link/u/OQowKsqR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Become a Monthly Donor</Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Image
                        src="/donate-qr.png"
                        alt="Donation QR Code"
                        width={250}
                        height={250}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-4">Scan to Donate</h3>
                    <p className="text-gray-600 mb-4">
                      Use your phone's camera to scan this QR code and make a donation quickly and securely through
                      Square.
                    </p>
                    <p className="text-gray-600">
                      Your contribution will directly support our programs and help us continue providing second chances
                      to those who need them most.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Your Donation Makes a Difference</h2>
            <p className="text-xl text-gray-300 mb-8 text-center">
              See how your contribution directly impacts the lives of our program participants.
            </p>

            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src="/website_photo_1.jpg"
                alt="Program Participants"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">$50</div>
                <p className="text-gray-300">
                  Provides one day of safe, supportive housing for an individual in our program.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">$250</div>
                <p className="text-gray-300">Funds a week of job skills training to prepare someone for employment.</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">$1,000</div>
                <p className="text-gray-300">
                  Supports a month of comprehensive services including housing, training, and counseling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support helps us provide the tools, training, and support needed for successful reintegration.
          </p>
          <a href="https://square.link/u/OQowKsqR" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
              Donate Now
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
