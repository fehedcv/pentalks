"use client"

import { ScrollTimeline } from "../timeline"
import { motion } from "framer-motion"
import TeamDock, { sampleTeamMembers } from "../teamdock"
import TeamCarousel from "../team"
import { useEffect } from "react"
import ScrollFloat from "../scrollfloat"

const COLORS = {
  primary: "#C47A3D", // warm terracotta (brand accent)
  text: "#222222", // deep neutral for main text
  bg: "#FAF7F2", // warm cream background
  muted: "#666666", // soft grey for secondary text
  border: "#E0DED8", // subtle beige-grey for borders
}

type TimelineEntry = {
  year: number
  title: string
  body: string
}

type TeamMember = {
  id: string
  name: string
  role: string
  image: string
  bio: string
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ahmed",
    role: "CEO & Founder",
    image: "https://github.com/fehedcv/pentalks/blob/main/src/assets/ahmed.jpeg?raw=true",
    bio: "Visionary leader with 15+ years in tech innovation and startup growth.",
  },
  {
    id: "2",
    name: "Sakeeb Arsalan",
    role: "CTO",
    image: "https://github.com/fehedcv/pentalks/blob/main/src/assets/sakeeb.jpeg?raw=true",
    bio: "Full-stack architect passionate about scalable solutions and emerging technologies.",
  },
  {
    id: "3",
    name: "Anshif",
    role: "Head of Design",
    image: "https://github.com/fehedcv/pentalks/blob/main/src/assets/anshif.jpeg?raw=true",
    bio: "Creative strategist focused on user-centered design and brand storytelling.",
  },
  {
    id: "4",
    name: "Hashim",
    role: "Lead Developer",
    image: "https://github.com/fehedcv/pentalks/blob/main/src/assets/hashim.jpeg?raw=true",
    bio: "Code craftsman dedicated to clean architecture and performance optimization.",
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=face",
    bio: "Growth hacker with expertise in digital marketing and customer acquisition.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 240, damping: 22 },
  },
}

const itemFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
}

function SectionTitle({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string
  title: string
  intro?: string
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className="text-sm font-medium tracking-wide uppercase"
          style={{ color: COLORS.primary }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-2 text-pretty text-3xl font-semibold md:text-4xl"
        style={{ color: COLORS.text }}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className="mt-3 text-base leading-relaxed"
          style={{ color: COLORS.muted }}
        >
          {intro}
        </p>
      ) : null}
    </div>
  )
}

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  return (
    <motion.li
      variants={itemUp}
      className="relative pl-6"
      style={{ borderLeft: `2px solid ${COLORS.border}` }}
    >
      <span
        className="absolute -left-2 top-1.5 h-3 w-3 rounded-full"
        style={{
          backgroundColor: COLORS.primary,
          boxShadow: `0 0 0 4px ${COLORS.bg}`,
        }}
        aria-hidden
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold" style={{ color: COLORS.primary }}>
          {entry.year}
        </span>
        <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>
          {entry.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
          {entry.body}
        </p>
      </div>
    </motion.li>
  )
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={itemUp}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-xl p-4"
      style={{ backgroundColor: COLORS.bg, border: `1px solid ${COLORS.border}` }}
    >
      <div className="flex items-center gap-4">
        <img
          src={member.image}
          alt={member.name}
          className="h-16 w-16 rounded-lg object-cover"
          style={{ border: `1px solid ${COLORS.border}` }}
        />
        <div>
          <h4 className="text-base font-semibold" style={{ color: COLORS.text }}>
            {member.name}
          </h4>
          <p className="text-sm" style={{ color: COLORS.muted }}>
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function OurStoryPage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <main style={{ backgroundColor: COLORS.bg }} className="py-20">
      {/* Header */}
      <section className="mx-auto w-full max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemUp}>
            <p
              className="text-sm font-medium uppercase tracking-wide"
              style={{ color: COLORS.primary }}
            >
              Our Story
            </p>
            <h1
              className="mt-2 text-pretty text-4xl font-semibold md:text-5xl"
              style={{ color: COLORS.text }}
            >
              Crafting architecture with warmth and intention
            </h1>
            <p
              className="mt-3 max-w-2xl text-base leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              Since 2021, Mukham has pursued work that balances material honesty,
              daylight, and human scale. This page captures the milestones that
              shaped us, the team who carries the practice, and the growing
              community that supports our journey.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-12 md:px-6 md:pb-16">
        <div className="flex flex-col gap-8">
          <ScrollTimeline />
        </div>
      </section>

      {/* Core Team */}
     <section className="w-full px-4 py-12 md:px-6 md:py-16"> {/* Removed max-width constraint */}
        <div className="flex flex-col">
          <TeamCarousel members={teamMembers} title="Meet Our Team" />
        </div>
      </section>

      {/* Members (Large list) */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="flex flex-col gap-6">
          <TeamDock members={sampleTeamMembers} />
        </div>
      </section>

      {/* Subtle footer strip */}
      <div className="h-px w-full" style={{ backgroundColor: COLORS.border }} />
      <footer className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6">
        <p className="text-center text-sm" style={{ color: COLORS.muted }}>
          © {new Date().getFullYear()} Mukham Studio
        </p>
      </footer>
    </main>
  )
}
