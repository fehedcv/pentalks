import React from 'react';
import ScrollStack from "../story";

const cards = [
  {
    title: "Architectural Design",
    subtitle: "Architectural design services for residential and commercial projects",
    badge: "Feature",
  },
  {
    title: "Interior Design",
    subtitle: "Interior design solutions to create functional and aesthetic spaces",
    badge: "Feature",
  },
  {
    title: "Heritage",
    subtitle: "Low-cost, accessible, and youth-friendly",
    content: (
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Custom Content</h3>
        <p className="text-white/80">You can even pass JSX as content!</p>
      </div>
    )
  },
];

function Mukham() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#896c4a] to-[#6b5139] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Mukham
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Crafting spaces that tell stories through innovative architectural and interior design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#896c4a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Our Work
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#896c4a] transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#896c4a] mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            From concept to completion, we bring your vision to life through expert architectural and interior design services
          </p>
        </div>
      </section>

      {/* ScrollStack Section */}
      {/*}
      <ScrollStack 
        cards={cards} 
        backgroundColor="bg-[#896c4a]" 
        cardHeight="70vh"
        sectionHeightMultiplier={3}
      /> */}

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#896c4a] mb-6">
                About Mukham
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We are a passionate team of architects and designers dedicated to creating spaces that reflect your unique story and lifestyle. Our approach combines traditional craftsmanship with modern innovation.
              </p>
              <p className="text-gray-600 mb-8">
                With years of experience in both residential and commercial projects, we understand that every space has the potential to inspire and transform lives.
              </p>
              <button className="bg-[#896c4a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6b5139] transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="bg-[#896c4a] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Expert architectural design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Personalized interior solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Heritage preservation expertise
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Sustainable design practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#896c4a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and bring it to life together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#896c4a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#896c4a] transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mukham</h3>
              <p className="text-gray-400">
                Transforming spaces through thoughtful design and architectural excellence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Architectural Design</li>
                <li>Interior Design</li>
                <li>Heritage Restoration</li>
                <li>Consultation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@mukham.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Design Street</li>
                <li>Creative City, CC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mukham. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Mukham;