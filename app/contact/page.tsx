"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle, MessageCircle, Zap } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    urgency: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get in touch with our team or find emergency veterinary help in your area
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-indigo-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
                <CardTitle className="text-indigo-700 dark:text-indigo-400">Send us a Message</CardTitle>
                <CardDescription>
                  Have questions about our platform or need technical support? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="feedback">Platform Feedback</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="medical">Medical Content Question</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General inquiry</SelectItem>
                          <SelectItem value="medium">Medium - Need response within 48 hours</SelectItem>
                          <SelectItem value="high">High - Need response within 24 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Please describe your question or issue in detail..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Emergency Alert */}
            <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-red-800 dark:text-red-200 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Animal Emergency?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 dark:text-red-300 text-sm mb-4">
                  If your animal is experiencing a medical emergency, contact your local veterinary clinic or emergency
                  animal hospital immediately.
                </p>
                <Button variant="destructive" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Find Emergency Vet
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">support@animalcare-ai.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">1-800-ANIMAL-CARE</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Support Hours</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mon-Fri: 8AM-6PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Vet Directory */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Emergency Vet Directory
                </CardTitle>
                <CardDescription>Find emergency veterinary care near you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium text-sm">24/7 Animal Emergency Center</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">123 Main St, City, State</p>
                  <p className="text-xs text-blue-600">(555) 123-4567</p>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium text-sm">VetCare Emergency Hospital</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">456 Oak Ave, City, State</p>
                  <p className="text-xs text-blue-600">(555) 987-6543</p>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium text-sm">Regional Animal Hospital</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">789 Pine St, City, State</p>
                  <p className="text-xs text-blue-600">(555) 456-7890</p>
                </div>

                <Button variant="outline" className="w-full text-sm">
                  View Full Directory
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Find answers to common questions about our platform and services.
                </p>
                <Button variant="outline" className="w-full">
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
