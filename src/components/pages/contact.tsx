"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

const COLORS = {
  bg: "#FAF7F2", // warm cream
  primary: "#C47A3D", // refined terracotta
  text: "#222222", // deep neutral
  muted: "#666666", // soft grey
  border: "#E0DED8", // subtle beige grey
}

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    try {
      // Simulate submission
      await new Promise((r) => setTimeout(r, 900))
      // You can wire this up to an API route later
      alert("Message sent! We'll get back to you soon.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="font-sans py-24" style={{ backgroundColor: COLORS.bg }}>
      <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-16">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-balance text-3xl font-semibold leading-tight md:text-4xl" style={{ color: COLORS.text }}>
            Contact Mukham
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-6 md:text-base" style={{ color: COLORS.muted }}>
            We'd love to learn about your project. Send us a message and our team will reach out.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Form */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="rounded-2xl p-5 shadow-sm"
            style={{ border: `1px solid ${COLORS.border}`, backgroundColor: "#ffffff" }}
          >
            <motion.form variants={container} onSubmit={onSubmit} className="space-y-4">
              <motion.div variants={item} className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium" style={{ color: COLORS.text }}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    className="h-11 rounded-lg px-3 text-sm placeholder-[#6b7280] outline-none"
                    style={{ 
                      border: `1px solid ${COLORS.border}`, 
                      backgroundColor: "#ffffff", 
                      color: COLORS.text 
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium" style={{ color: COLORS.text }}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    className="h-11 rounded-lg px-3 text-sm placeholder-[#6b7280] outline-none"
                    style={{ 
                      border: `1px solid ${COLORS.border}`, 
                      backgroundColor: "#ffffff", 
                      color: COLORS.text 
                    }}
                    placeholder="you@example.com"
                  />
                </div>
              </motion.div>

              <motion.div variants={item} className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium" style={{ color: COLORS.text }}>
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="h-11 rounded-lg px-3 text-sm placeholder-[#6b7280] outline-none"
                  style={{ 
                    border: `1px solid ${COLORS.border}`, 
                    backgroundColor: "#ffffff", 
                    color: COLORS.text 
                  }}
                  placeholder="+1 555 123 4567"
                />
              </motion.div>

              <motion.div variants={item} className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium" style={{ color: COLORS.text }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  className="rounded-lg p-3 text-sm placeholder-[#6b7280] outline-none"
                  style={{ 
                    border: `1px solid ${COLORS.border}`, 
                    backgroundColor: "#ffffff", 
                    color: COLORS.text 
                  }}
                  placeholder="Tell us about your project, timeline, and goals..."
                />
              </motion.div>

              <motion.div variants={item} className="pt-2">
                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <Send size={18} />
                  {submitting ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Info cards + map */}
          <div className="space-y-5">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <ContactInfoCard
                variants={item}
                icon={<Mail size={20} aria-hidden="true" />}
                title="Email"
                value="hello@mukham.studio"
                hint="We reply within 1–2 business days"
              />
              <ContactInfoCard
                variants={item}
                icon={<Phone size={20} aria-hidden="true" />}
                title="Phone"
                value="+1 (555) 234-5678"
                hint="Mon–Fri, 9:00–17:00"
              />
              <ContactInfoCard
                variants={item}
                icon={<MapPin size={20} aria-hidden="true" />}
                title="Address"
                value="221B Baker Street, London"
                hint="Visit by appointment only"
              />
              <ContactInfoCard
                variants={item}
                icon={<Clock size={20} aria-hidden="true" />}
                title="Hours"
                value="Mon–Fri"
                hint="09:00–17:00 (local time)"
              />
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl shadow-sm"
              style={{ border: `1px solid ${COLORS.border}`, backgroundColor: "#ffffff" }}
            >
              <img
                src="/map-placeholder-for-studio-location.png"
                alt="Map placeholder showing the studio location"
                className="h-48 w-full object-cover md:h-60"
              />
              <figcaption className="px-4 py-3 text-center text-xs" style={{ color: COLORS.muted }}>
                Find us at our studio — reach out to schedule a visit.
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>
    </main>
  )
}

function ContactInfoCard({
  icon,
  title,
  value,
  hint,
  variants,
}: {
  icon: React.ReactNode
  title: string
  value: string
  hint?: string
  variants?: any
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4, scale: 1.01 }}
      className="flex items-start gap-3 rounded-xl p-4 shadow-sm"
      style={{ border: `1px solid ${COLORS.border}`, backgroundColor: "#ffffff" }}
    >
      <div className="mt-0.5" style={{ color: COLORS.primary }}>{icon}</div>
      <div>
        <div className="text-sm font-semibold" style={{ color: COLORS.text }}>{title}</div>
        <div className="text-sm" style={{ color: COLORS.text }}>{value}</div>
        {hint ? <div className="mt-0.5 text-xs" style={{ color: COLORS.muted }}>{hint}</div> : null}
      </div>
    </motion.div>
  )
}