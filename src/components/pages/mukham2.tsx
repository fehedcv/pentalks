"use client"

import type React from "react"

import { Building, Home, Landmark, TreePine, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect } from "react"
import BlurText from "../blurtext"
import Bg from "/mukham-bg.png"

const GradientButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileHover={{ y: -2, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="inline-flex items-center justify-center rounded-full px-12 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-colors duration-300
               bg-[#C47A3D] hover:bg-[#A8652F] text-white"
  >
    {children}
  </motion.button>
)

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="p-6 rounded-2xl bg-white border border-[#E0DED8] shadow-md hover:shadow-lg transition-all duration-300"
  >
    <div className="mb-4 text-[#C47A3D]">{icon}</div>
    <h3 className="text-xl font-semibold text-[#222222] mb-2">{title}</h3>
    <p className="text-[#666666]">{description}</p>
  </motion.div>
)

const ProcessStep = ({
  number,
  title,
  description,
  isLast,
}: {
  number: string
  title: string
  description: string
  isLast?: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="flex items-start gap-6"
  >
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-[#C47A3D] flex items-center justify-center text-white font-bold text-lg">
        {number}
      </div>
      {!isLast && <div className="w-px flex-1 bg-[#E0DED8] mt-2" />}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-[#222222] mb-2">{title}</h3>
      <p className="text-[#666666]">{description}</p>
    </div>
  </motion.div>
)

const services = [
  { title: "Service 1", description: "Description for service 1", icon: <Building /> },
  { title: "Service 2", description: "Description for service 2", icon: <Home /> },
  { title: "Service 3", description: "Description for service 3", icon: <Landmark /> },
  { title: "Service 4", description: "Description for service 4", icon: <TreePine /> },
  { title: "Service 5", description: "Description for service 5", icon: <Rocket /> },
]

const designProcess = [
  { number: "1", title: "Step 1", description: "Description for step 1" },
  { number: "2", title: "Step 2", description: "Description for step 2" },
  { number: "3", title: "Step 3", description: "Description for step 3" },
]

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-[#FAF7F2]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Bg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#C47A3D]/30 via-[#C47A3D]/20 to-[#C47A3D]/40" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <BlurText
            text="Mukham"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#222222] justify-center flex mb-6"
          />
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl text-[#666666] mx-auto leading-relaxed text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            Where architectural vision meets timeless design. We create spaces
            that inspire, preserve heritage, and shape the future of sustainable
            living.
          </motion.p>                          
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">Our Services</h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              From architectural innovation to heritage preservation, we offer comprehensive design solutions that
              transform spaces and communities.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">Our Design Plan</h2>
            <p className="text-xl text-[#666666]">
              A structured approach to bringing your architectural vision to life, from initial concept to final
              construction.
            </p>
          </div>

          <div className="space-y-8">
            {designProcess.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === designProcess.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-[#666666] mb-12 max-w-2xl mx-auto">
            Let's collaborate to create architectural excellence that stands the test of time. Your vision, our
            expertise, extraordinary results.
          </p>

          <GradientButton>
            <Rocket className="mr-3" size={24} />
            Start Your Project
          </GradientButton>
        </motion.div>
      </section>
    </div>
  )
}

export default Index