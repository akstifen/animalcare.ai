"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, BookOpen, AlertTriangle, Database, Sparkles } from "lucide-react"

const diseases = [
  {
    id: 1,
    name: "Canine Parvovirus",
    animal: "Dogs",
    severity: "severe",
    category: "Viral",
    symptoms: ["Vomiting", "Diarrhea", "Lethargy", "Loss of appetite", "Fever"],
    description: "Highly contagious viral infection that affects dogs, particularly puppies.",
    prevention: "Vaccination, avoid contact with infected animals, proper hygiene",
    treatment: "Supportive care, IV fluids, anti-nausea medication, hospitalization often required",
  },
  {
    id: 2,
    name: "Mastitis",
    animal: "Cattle",
    severity: "moderate",
    category: "Bacterial",
    symptoms: ["Swollen udder", "Hot udder", "Abnormal milk", "Fever", "Reduced milk production"],
    description: "Inflammation of the mammary gland, commonly caused by bacterial infection.",
    prevention: "Proper milking hygiene, teat dipping, dry cow therapy",
    treatment: "Antibiotics, anti-inflammatory drugs, frequent milking",
  },
  {
    id: 3,
    name: "Feline Upper Respiratory Infection",
    animal: "Cats",
    severity: "mild",
    category: "Viral/Bacterial",
    symptoms: ["Sneezing", "Nasal discharge", "Eye discharge", "Coughing", "Fever"],
    description: "Common respiratory condition in cats caused by various viruses and bacteria.",
    prevention: "Vaccination, reduce stress, good ventilation",
    treatment: "Supportive care, antibiotics if bacterial, eye/nose cleaning",
  },
  {
    id: 4,
    name: "Foot and Mouth Disease",
    animal: "Livestock",
    severity: "severe",
    category: "Viral",
    symptoms: ["Fever", "Blisters on feet", "Mouth lesions", "Lameness", "Drooling"],
    description: "Highly contagious viral disease affecting cloven-hoofed animals.",
    prevention: "Vaccination, quarantine, biosecurity measures",
    treatment: "Supportive care, isolation, often requires reporting to authorities",
  },
]

export default function DiseasesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAnimal, setSelectedAnimal] = useState("all")
  const [selectedSeverity, setSelectedSeverity] = useState("all")
  const [selectedDisease, setSelectedDisease] = useState<any>(null)

  const filteredDiseases = diseases.filter((disease) => {
    const matchesSearch =
      disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.symptoms.some((symptom) => symptom.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesAnimal =
      selectedAnimal === "all" || disease.animal.toLowerCase().includes(selectedAnimal.toLowerCase())
    const matchesSeverity = selectedSeverity === "all" || disease.severity === selectedSeverity

    return matchesSearch && matchesAnimal && matchesSeverity
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "severe":
        return "destructive"
      case "moderate":
        return "default"
      case "mild":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "severe":
        return "🔥"
      case "moderate":
        return "🟡"
      case "mild":
        return "🐢"
      default:
        return "⚪"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-4">
            <Database className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Disease Encyclopedia
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive database of animal diseases, symptoms, and treatments
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Filters and Search */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-violet-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950">
                <CardTitle className="flex items-center text-violet-700 dark:text-violet-400">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Search & Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-500 h-4 w-4" />
                    <Input
                      placeholder="Search diseases or symptoms..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-violet-200 focus:border-violet-500 focus:ring-violet-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Animal Type</label>
                  <Select value={selectedAnimal} onValueChange={setSelectedAnimal}>
                    <SelectTrigger>
                      <SelectValue placeholder="All animals" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All animals</SelectItem>
                      <SelectItem value="dogs">Dogs</SelectItem>
                      <SelectItem value="cats">Cats</SelectItem>
                      <SelectItem value="cattle">Cattle</SelectItem>
                      <SelectItem value="livestock">Livestock</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Severity</label>
                  <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                    <SelectTrigger>
                      <SelectValue placeholder="All severities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All severities</SelectItem>
                      <SelectItem value="mild">🐢 Mild</SelectItem>
                      <SelectItem value="moderate">🟡 Moderate</SelectItem>
                      <SelectItem value="severe">🔥 Severe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedAnimal("all")
                    setSelectedSeverity("all")
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Disease List */}
          <div className="lg:col-span-2">
            {selectedDisease ? (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl flex items-center">
                        <span className="mr-2">{getSeverityIcon(selectedDisease.severity)}</span>
                        {selectedDisease.name}
                      </CardTitle>
                      <CardDescription className="text-lg mt-2">{selectedDisease.description}</CardDescription>
                    </div>
                    <Button variant="outline" onClick={() => setSelectedDisease(null)}>
                      Back to List
                    </Button>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="outline">{selectedDisease.animal}</Badge>
                    <Badge variant={getSeverityColor(selectedDisease.severity)}>{selectedDisease.severity}</Badge>
                    <Badge variant="secondary">{selectedDisease.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5 text-orange-500" />
                      Symptoms
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedDisease.symptoms.map((symptom: string, index: number) => (
                        <div key={index} className="flex items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                          <span className="text-sm">{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Prevention</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedDisease.prevention}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Treatment</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedDisease.treatment}</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Important:</strong> This information is for educational purposes only. Always consult with
                      a qualified veterinarian for proper diagnosis and treatment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">
                    {filteredDiseases.length} Disease{filteredDiseases.length !== 1 ? "s" : ""} Found
                  </h2>
                </div>

                {filteredDiseases.map((disease) => (
                  <Card
                    key={disease.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedDisease(disease)}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center">
                            <span className="mr-2">{getSeverityIcon(disease.severity)}</span>
                            {disease.name}
                          </CardTitle>
                          <CardDescription className="mt-2">{disease.description}</CardDescription>
                        </div>
                        <BookOpen className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Badge variant="outline">{disease.animal}</Badge>
                        <Badge variant={getSeverityColor(disease.severity)}>{disease.severity}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Common symptoms:</p>
                        <div className="flex flex-wrap gap-1">
                          {disease.symptoms.slice(0, 3).map((symptom, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {symptom}
                            </Badge>
                          ))}
                          {disease.symptoms.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{disease.symptoms.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {filteredDiseases.length === 0 && (
                  <Card>
                    <CardContent className="text-center py-8">
                      <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No diseases found</h3>
                      <p className="text-gray-600 dark:text-gray-400">Try adjusting your search terms or filters</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
