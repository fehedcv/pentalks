"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E0DED8] text-[#222222]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src="image.png" alt="PenTalks Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-[#222222]">PenTalks</span>
            </Link>
            <p className="text-[#666666] mb-6 max-w-xs">
              Where architectural vision meets timeless design. Creating spaces that inspire and transform communities.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="h-10 w-10 rounded-full bg-[#E0DED8] flex items-center justify-center text-[#666666] hover:bg-[#C47A3D] hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="h-10 w-10 rounded-full bg-[#E0DED8] flex items-center justify-center text-[#666666] hover:bg-[#C47A3D] hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="h-10 w-10 rounded-full bg-[#E0DED8] flex items-center justify-center text-[#666666] hover:bg-[#C47A3D] hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="h-10 w-10 rounded-full bg-[#E0DED8] flex items-center justify-center text-[#666666] hover:bg-[#C47A3D] hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#222222]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to="/" className="text-[#666666] hover:text-[#C47A3D] transition-colors">
                    Home
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to="/about" className="text-[#666666] hover:text-[#C47A3D] transition-colors">
                    About
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to="/Mukham" className="text-[#666666] hover:text-[#C47A3D] transition-colors">
                    Mukham
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to="/projects" className="text-[#666666] hover:text-[#C47A3D] transition-colors">
                    Projects
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to="/contact" className="text-[#666666] hover:text-[#C47A3D] transition-colors">
                    Contact
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#222222]">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href="#" className="text-[#666666] hover:text-[#C47A3D] transition-colors">
                    Architectural Design
                  </a>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href="#" className="text-[#666666] hover:text-[#C47A3D] transition-colors">
                    Interior Design
                  </a>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href="#" className="text-[#666666] hover:text-[#C47A3D] transition-colors">
                    Heritage Preservation
                  </a>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href="#" className="text-[#666666] hover:text-[#C47A3D] transition-colors">
                    Sustainable Design
                  </a>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href="#" className="text-[#666666] hover:text-[#C47A3D] transition-colors">
                    Consultancy
                  </a>
                </motion.div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#222222]">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#C47A3D] mt-1 flex-shrink-0" />
                <span className="text-[#666666]">123 Design Street, Creative City, CC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#C47A3D] flex-shrink-0" />
                <span className="text-[#666666]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#C47A3D] flex-shrink-0" />
                <span className="text-[#666666]">info@pentalks.com</span>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-md font-medium mb-3 text-[#222222]">Subscribe to our Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-l-full border border-[#E0DED8] focus:outline-none focus:ring-2 focus:ring-[#C47A3D] focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#C47A3D] text-white px-4 py-2 rounded-r-full hover:bg-[#A8652F] transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E0DED8] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#666666] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PenTalks. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#666666] hover:text-[#C47A3D] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#666666] hover:text-[#C47A3D] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#666666] hover:text-[#C47A3D] text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer