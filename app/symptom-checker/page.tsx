"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Phone, Target, Brain, Sparkles } from "lucide-react"

export default function SymptomChecker() {
  const [animalType, setAnimalType] = useState("")
  const [symptoms, setSymptoms] = useState("")
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setResults({
        possibleDiseases: [
          {
            name: "Upper Respiratory Infection",
            probability: 85,
            severity: "moderate",
            description: "Common viral or bacterial infection affecting the upper respiratory tract.",
            symptoms: ["coughing", "sneezing", "nasal discharge", "fever"],
            treatment: "Supportive care, antibiotics if bacterial, rest and hydration.",
            urgency: "Schedule vet visit within 24-48 hours",
          },
          {
            name: "Kennel Cough",
            probability: 65,
            severity: "mild",
            description: "Highly contagious respiratory infection common in dogs.",
            symptoms: ["dry cough", "retching", "mild fever"],
            treatment: "Usually self-limiting, cough suppressants may help.",
            urgency: "Monitor closely, vet visit if worsening",
          },
        ],
      })
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              AI Symptom Checker
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Advanced AI analysis for accurate animal health diagnostics
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="shadow-xl border-0 bg-white dark:bg-gray-800">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                <CardTitle className="flex items-center text-blue-700 dark:text-blue-400 text-xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-3">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  Symptom Analysis
                </CardTitle>
                <CardDescription>
                  Provide detailed information about your animal's condition for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="animal-type" className="text-gray-700 dark:text-gray-300 font-medium">
                      Animal Type
                    </Label>
                    <Select value={animalType} onValueChange={setAnimalType}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select animal type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">🐕 Dog</SelectItem>
                        <SelectItem value="cat">🐱 Cat</SelectItem>
                        <SelectItem value="cattle">🐄 Cattle</SelectItem>
                        <SelectItem value="goat">🐐 Goat</SelectItem>
                        <SelectItem value="sheep">🐑 Sheep</SelectItem>
                        <SelectItem value="pig">🐷 Pig</SelectItem>
                        <SelectItem value="horse">🐎 Horse</SelectItem>
                        <SelectItem value="poultry">🐔 Poultry</SelectItem>
                        <SelectItem value="other">🦎 Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="age" className="text-gray-700 dark:text-gray-300 font-medium">
                      Age (optional)
                    </Label>
                    <Input id="age" placeholder="e.g., 3 years, 6 months" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="symptoms" className="text-gray-700 dark:text-gray-300 font-medium">
                      Symptoms
                    </Label>
                    <Textarea
                      id="symptoms"
                      placeholder="Describe all observed symptoms in detail (e.g., coughing for 3 days, loss of appetite, lethargy, fever)"
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      rows={4}
                      className="mt-2 resize-none"
                    />
                  </div>

                  <div>
                    <Label htmlFor="duration" className="text-gray-700 dark:text-gray-300 font-medium">
                      Duration
                    </Label>
                    <Input id="duration" placeholder="How long have symptoms been present?" className="mt-2" />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 py-3 rounded-xl"
                    disabled={!animalType || !symptoms || loading}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        AI Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Analyze with AI
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {loading && (
                <Card className="shadow-xl border-0 bg-white dark:bg-gray-800">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                      <Brain className="h-8 w-8 text-white animate-pulse" />
                    </div>
                    <div className="text-gray-900 dark:text-white text-lg font-medium">AI is analyzing symptoms...</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      Processing with advanced algorithms
                    </div>
                  </CardContent>
                </Card>
              )}

              {results && (
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">AI Analysis Results</h2>

                  {results.possibleDiseases.map((disease: any, index: number) => (
                    <Card
                      key={index}
                      className="shadow-xl border-0 bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300"
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl text-gray-900 dark:text-white">{disease.name}</CardTitle>
                          <Badge
                            className={`${
                              disease.severity === "severe"
                                ? "bg-gradient-to-r from-red-500 to-pink-500"
                                : disease.severity === "moderate"
                                  ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                                  : "bg-gradient-to-r from-green-500 to-emerald-500"
                            } text-white shadow-md`}
                          >
                            {disease.probability}% match
                          </Badge>
                        </div>
                        <CardDescription>{disease.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Common Symptoms:</h4>
                          <div className="flex flex-wrap gap-2">
                            {disease.symptoms.map((symptom: string, i: number) => (
                              <Badge key={i} variant="outline" className="text-gray-600 dark:text-gray-400">
                                {symptom}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Recommended Treatment:</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{disease.treatment}</p>
                        </div>

                        <div className="flex items-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                          <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                          <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                            {disease.urgency}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="shadow-xl border-0 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <Phone className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                        <h3 className="font-semibold text-red-800 dark:text-red-200">Important Disclaimer</h3>
                      </div>
                      <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                        This AI tool provides general guidance only and should not replace professional veterinary
                        diagnosis. Always consult with a qualified veterinarian for proper diagnosis and treatment.
                      </p>
                      <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                        <Phone className="mr-2 h-4 w-4" />
                        Find Emergency Vet Near You
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
