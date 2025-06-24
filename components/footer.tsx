import Link from "next/link"
import { Stethoscope, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AnimalCare AI
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional veterinary guidance powered by AI technology. Helping improve animal health outcomes
              worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/symptom-checker" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Symptom Checker
                </Link>
              </li>
              <li>
                <Link href="/diseases" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Disease Encyclopedia
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Emergency Vets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Prevention Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-400">support@animalcare-ai.com</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-400">1-800-ANIMAL-CARE</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-400">Available Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 AnimalCare AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
