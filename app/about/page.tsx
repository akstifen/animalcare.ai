import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Heart, Shield, Stethoscope, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            About AnimalCare AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're dedicated to making professional veterinary knowledge accessible to everyone, helping improve animal
            health outcomes worldwide through technology and expertise.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8 border-rose-100 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950">
            <CardTitle className="text-2xl flex items-center text-rose-700 dark:text-rose-400">
              <Heart className="mr-3 h-6 w-6" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              AnimalCare AI bridges the gap between pet owners, farmers, and professional veterinary care. We believe
              that every animal deserves access to quality healthcare guidance, regardless of location or time of day.
              Our platform combines cutting-edge technology with veterinary expertise to provide reliable, accessible
              animal health information.
            </p>
          </CardContent>
        </Card>

        {/* Who We Help */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Who We Help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-blue-100 hover:border-blue-300 transition-colors hover:shadow-xl">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-700 dark:text-blue-400">Pet Owners</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Providing peace of mind with instant access to symptom checking and health guidance for beloved pets,
                  helping owners make informed decisions about their animal's care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-green-100 hover:border-green-300 transition-colors hover:shadow-xl">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-green-700 dark:text-green-400">Farmers & Ranchers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Supporting agricultural professionals with livestock health monitoring, disease prevention strategies,
                  and early intervention guidance to protect their herds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-100 hover:border-purple-300 transition-colors hover:shadow-xl">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-purple-700 dark:text-purple-400">Veterinary Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Offering a comprehensive reference tool for veterinarians, vet techs, and students with up-to-date
                  disease information and treatment protocols.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Approach */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Shield className="mr-3 h-6 w-6 text-green-500" />
              Our Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Expert-Verified Content</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All disease information, symptoms, and treatment recommendations are reviewed and verified by licensed
                  veterinarians with years of clinical experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Evidence-Based Medicine</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our recommendations are based on current veterinary research, established protocols, and best
                  practices from leading veterinary institutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Continuous Updates</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We regularly update our database with the latest research findings, emerging diseases, and evolving
                  treatment protocols to ensure accuracy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">User-Friendly Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our platform is designed to be intuitive and accessible, making complex veterinary information easy to
                  understand and act upon.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  50K+
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Animals Helped</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Disease Profiles</p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-100 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">
                  15K+
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
              </CardContent>
            </Card>
            <Card className="text-center border-red-100 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Availability</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Award className="mr-3 h-6 w-6 text-yellow-500" />
              Our Expert Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Veterinary Advisory Board</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      DVM
                    </Badge>
                    <span className="text-sm">Dr. Sarah Johnson - Small Animal Medicine</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      DVM
                    </Badge>
                    <span className="text-sm">Dr. Michael Chen - Large Animal & Livestock</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      DVM
                    </Badge>
                    <span className="text-sm">Dr. Emily Rodriguez - Emergency & Critical Care</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Technology Team</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Our development team combines expertise in healthcare technology, AI/ML, and user experience design to
                  create intuitive, reliable tools for animal care.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Medical Disclaimer</h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              AnimalCare AI provides educational information and general guidance only. This platform is not intended to
              replace professional veterinary diagnosis, treatment, or advice. Always consult with a qualified
              veterinarian for proper medical care of your animals. In case of emergency, contact your local veterinary
              clinic or emergency animal hospital immediately.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
