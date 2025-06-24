import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Stethoscope, BookOpen, Phone, Shield, Heart, Users, Sparkles, Activity, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              AnimalCare AI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional veterinary guidance powered by AI. Get instant symptom analysis, disease information, and
              expert care recommendations for your animals.
            </p>

            {/* Clean Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="pl-6 pr-4 py-4">
                    <Search className="h-5 w-5 text-blue-500" />
                  </div>
                  <Input
                    placeholder="Enter animal symptoms... (e.g., fever, coughing, loss of appetite)"
                    className="flex-1 border-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-0 text-base py-4"
                  />
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 m-2 rounded-xl shadow-lg transition-all duration-200">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Analyze
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/symptom-checker">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 rounded-xl"
                >
                  <Activity className="mr-2 h-5 w-5" />
                  Check Symptoms
                </Button>
              </Link>
              <Link href="/diseases">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-950 shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 rounded-xl"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Disease Database
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 rounded-xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose AnimalCare AI?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform combines veterinary expertise with modern technology to provide reliable animal health
              guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-700 dark:text-blue-400 text-xl">Expert-Verified Information</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  All disease information and treatment recommendations are reviewed by licensed veterinarians with
                  years of experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-pink-700 dark:text-pink-400 text-xl">24/7 Symptom Checker</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  Get instant guidance on animal symptoms and potential diseases any time of day or night.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-purple-700 dark:text-purple-400 text-xl">Trusted by Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  Used by veterinarians, farmers, and pet owners worldwide for reliable animal health information.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disease Cards Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Common Animal Diseases</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Quick access to information about frequently encountered animal health issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Canine Parvovirus",
                severity: "🔥",
                animal: "Dogs",
                color: "from-red-500 to-pink-500",
                bgColor: "from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950",
              },
              {
                name: "Mastitis",
                severity: "🟡",
                animal: "Cattle",
                color: "from-amber-500 to-orange-500",
                bgColor: "from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950",
              },
              {
                name: "Feline Upper Respiratory",
                severity: "🟡",
                animal: "Cats",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950",
              },
              {
                name: "Foot and Mouth Disease",
                severity: "🔥",
                animal: "Livestock",
                color: "from-red-500 to-rose-500",
                bgColor: "from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950",
              },
              {
                name: "Kennel Cough",
                severity: "🐢",
                animal: "Dogs",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950",
              },
              {
                name: "Milk Fever",
                severity: "🟡",
                animal: "Cattle",
                color: "from-yellow-500 to-amber-500",
                bgColor: "from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950",
              },
              {
                name: "Feline Leukemia",
                severity: "🔥",
                animal: "Cats",
                color: "from-red-500 to-pink-500",
                bgColor: "from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950",
              },
              {
                name: "Pneumonia",
                severity: "🟡",
                animal: "All Animals",
                color: "from-indigo-500 to-purple-500",
                bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950",
              },
            ].map((disease, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg bg-gradient-to-br ${disease.bgColor}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-sm font-semibold text-gray-900 dark:text-white">
                      {disease.name}
                    </CardTitle>
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {disease.severity}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${disease.color} text-white text-xs rounded-full font-medium shadow-md`}
                  >
                    {disease.animal}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/diseases">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-950 shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 rounded-xl"
              >
                <Star className="mr-2 h-5 w-5" />
                View All Diseases
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Started with AnimalCare AI Today</h2>
          <p className="text-xl text-blue-100 mb-8 opacity-90">
            Join thousands of animal caregivers who trust our platform for reliable health guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/symptom-checker">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 rounded-xl font-semibold"
              >
                <Activity className="mr-2 h-5 w-5" />
                Start Diagnosis
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 rounded-xl font-semibold"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
