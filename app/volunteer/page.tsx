// app/volunteer/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiUsers,
  FiMapPin,
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiUser,
  FiUserPlus,
  FiStar,
  FiChevronDown,
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiTool,
  FiBookOpen,
  FiDroplet,
  FiThermometer,
  FiHome,
  FiGift,
  FiCompass,
  FiBriefcase,
  FiGlobe,
} from "react-icons/fi";
import HeadingWithPaint from "../components/HeadingWithPaint";
import PageBanner from "../components/PageBanner";
import { useState } from "react";

/* ================================================================== */
/* Volunteer-specific reusable components                             */
/* ================================================================== */

// Volunteer badge/ID card
const VolunteerBadge = ({ name = "Your Name", role = "Volunteer" }: { name?: string; role?: string }) => (
  <div className="relative w-64 bg-white rounded-2xl shadow-xl p-5 pt-8 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 to-teal-600" />
    <span className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-5 rounded-full bg-cream-100 border border-teal-950/10" />
    
    {/* Avatar circle */}
    <div className="w-20 h-20 rounded-full bg-teal-950 mx-auto mb-3 flex items-center justify-center">
      <FiUser className="w-10 h-10 text-amber-400" />
    </div>
    
    <p className="text-center font-display text-lg text-teal-950 font-semibold">
      {name}
    </p>
    <p className="text-center text-amber-500 text-xs font-bold mb-3">
      {role}
    </p>
    
    <div className="border-t border-dashed border-teal-950/15 pt-3">
      <div className="flex justify-between text-[10px] text-ink-soft">
        <span>ID# VOL-2024</span>
        <span>Kothowain</span>
      </div>
    </div>
  </div>
);

// Handshake icon wrapper
const HandshakeIcon = ({ active = false }: { active?: boolean }) => (
  <motion.div
    animate={active ? { rotate: [0, -10, 10, 0] } : {}}
    transition={{ duration: 2, repeat: active ? Infinity : 0 }}
    className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
      active ? "bg-amber-500" : "bg-teal-950"
    }`}
  >
    <FiHeart className="w-7 h-7 text-cream-50" />
    {active && (
      <motion.span
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute inset-0 rounded-full border-2 border-amber-500"
      />
    )}
  </motion.div>
);

// Commitment level indicator
const CommitmentMeter = ({ level = 50 }: { level?: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.span
        key={i}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: i * 0.08 }}
        className={`w-8 h-1.5 rounded-full ${
          i <= level ? "bg-amber-500" : "bg-cream-100"
        }`}
      />
    ))}
  </div>
);

const VolunteerPage = () => {
  /* ---------------------------------------------------------------- */
  /* Content                                                           */
  /* ---------------------------------------------------------------- */

  const volunteerRoles = [
    {
      icon: FiBookOpen,
      title: "Education Volunteer",
      category: "Teaching & Mentoring",
      timeCommitment: "3-6 months",
      location: "On-site",
      skills: ["Teaching", "Mentoring", "Language"],
      description: "Teach at a learning center, tutor students, or help develop curriculum materials for community teachers.",
      impact: "Support 40+ students per term",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: FiDroplet,
      title: "Water Program Volunteer",
      category: "Engineering & Field Work",
      timeCommitment: "1-3 months",
      location: "Field-based",
      skills: ["Engineering", "Mapping", "Field Work"],
      description: "Help survey springs, map pipeline routes, or train community water committees in system maintenance.",
      impact: "Bring clean water to 200+ families",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: FiThermometer,
      title: "Health Program Volunteer",
      category: "Medical & Public Health",
      timeCommitment: "2-4 months",
      location: "Field Clinics",
      skills: ["Medical", "Public Health", "Training"],
      description: "Support mobile health camps, assist with patient screenings, or help train community health workers.",
      impact: "Help treat 100+ patients per camp",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: FiHome,
      title: "Food Security Volunteer",
      category: "Agriculture & Nutrition",
      timeCommitment: "1-6 months",
      location: "Community-based",
      skills: ["Agriculture", "Nutrition", "Community"],
      description: "Support community kitchens, help with kitchen gardens, or assist with nutrition education programs.",
      impact: "Support meals for 600+ families",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: FiGlobe,
      title: "Remote Volunteer",
      category: "Digital & Support",
      timeCommitment: "Flexible",
      location: "Remote",
      skills: ["Digital", "Writing", "Design"],
      description: "Help with content creation, translation, graphic design, or digital fundraising from anywhere in the world.",
      impact: "Support all programs from afar",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: FiBriefcase,
      title: "Professional Volunteer",
      category: "Skilled Expertise",
      timeCommitment: "Project-based",
      location: "Flexible",
      skills: ["Management", "Strategy", "Technical"],
      description: "Lend your professional skills — legal, financial, IT, or strategic planning — to strengthen our programs.",
      impact: "Build organizational capacity",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=400&fit=crop&q=80",
    },
  ];

  const volunteerSteps = [
    {
      step: "01",
      title: "Browse & Apply",
      desc: "Find a role that matches your skills and availability.",
      icon: FiCompass,
      duration: "5 min",
    },
    {
      step: "02",
      title: "Intro Call",
      desc: "Meet our team and learn about the work on the ground.",
      icon: FiPhone,
      duration: "30 min",
    },
    {
      step: "03",
      title: "Orientation",
      desc: "Understand our approach, values, and community context.",
      icon: FiBookOpen,
      duration: "2 days",
    },
    {
      step: "04",
      title: "Start Making Impact",
      desc: "Begin your volunteer journey with ongoing support.",
      icon: FiStar,
      duration: "Ongoing",
    },
  ];

  const volunteerStories = [
    {
      name: "Sarah Mitchell",
      country: "United Kingdom",
      role: "Education Volunteer",
      duration: "6 months",
      quote: "The six months I spent teaching in Ruma changed my life more than I changed anyone else's.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80",
      color: "bg-amber-500",
    },
    {
      name: "Tomás Rivera",
      country: "Spain",
      role: "Water Engineer",
      duration: "3 months",
      quote: "We installed three water systems in three months. The communities did the real work — I just helped.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80",
      color: "bg-teal-700",
    },
    {
      name: "Amara Okafor",
      country: "Nigeria",
      role: "Health Volunteer",
      duration: "4 months",
      quote: "Every health camp was exhausting and beautiful. I've never felt more useful.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80",
      color: "bg-amber-400",
    },
  ];

  const volunteerStats = [
    { label: "Active Volunteers", value: "240+", icon: FiUsers, color: "bg-amber-500" },
    { label: "Hours Contributed", value: "18,000+", icon: FiClock, color: "bg-teal-700" },
    { label: "Countries Represented", value: "22", icon: FiGlobe, color: "bg-amber-400" },
    { label: "Community Projects", value: "86", icon: FiStar, color: "bg-teal-950" },
  ];

  const faqs = [
    {
      question: "Do I need specific qualifications to volunteer?",
      answer: "Most roles don't require specific qualifications — just commitment, flexibility, and a willingness to learn. Some roles (like medical volunteers) may need relevant certifications. We'll match you to a role that fits your skills.",
    },
    {
      question: "What are the living arrangements?",
      answer: "On-site volunteers stay in simple guesthouses or with host families in the communities we serve. It's basic but comfortable — and it's the best way to understand daily life in the Hill Tracts.",
    },
    {
      question: "Can I volunteer remotely?",
      answer: "Yes! We have remote volunteer roles in digital content, translation, graphic design, fundraising, and more. You can contribute from anywhere in the world.",
    },
    {
      question: "What does it cost to volunteer?",
      answer: "Volunteering with Kothowain is free. You'll need to cover your travel to Bangladesh and personal expenses, but accommodation and meals during your placement are provided.",
    },
    {
      question: "How long do most volunteers stay?",
      answer: "Most volunteers stay 2-6 months, but we also have short-term (2-4 week) opportunities for specific projects. Remote volunteers can contribute flexibly based on project needs.",
    },
    {
      question: "Will I receive training?",
      answer: "Yes. Every volunteer goes through orientation and role-specific training. You'll also have a local mentor throughout your placement.",
    },
  ];

  const [activeRole, setActiveRole] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStep, setFormStep] = useState(0);

  const volunteerFormSteps = [
    { label: "Personal Info", icon: FiUser },
    { label: "Role & Skills", icon: FiBriefcase },
    { label: "Availability", icon: FiCalendar },
    { label: "Submit", icon: FiCheckCircle },
  ];

  return (
    <main className="">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&h=900&fit=crop&q=80"
        breadcrumb="Volunteer"
        headingLine1="Give Your Time."
        headingHighlight="Change A Life."
        headingLine2="Find Your"
        headingAfter="Purpose."
        description="Volunteers are the heartbeat of Kothowain. Whether you're teaching in a village classroom or designing from across the world, your time creates lasting change in the Chittagong Hill Tracts."
        seed={800}
      />

      {/* ============================================================ */}
      {/* 2. VOLUNTEER IMPACT — stats with handshake metaphor          */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Why volunteer
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Your time, their future"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl ${stat.color} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-cream-50" />
                </div>
                <div className="font-display text-3xl font-bold text-teal-950 mb-1">
                  {stat.value}
                </div>
                <div className="text-ink-soft text-xs uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. VOLUNTEER ROLES — interactive cards                       */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Open positions
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Find your role"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveRole(index)}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  activeRole === index ? "ring-4 ring-amber-500" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={role.image}
                    alt={role.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 to-transparent" />
                  <span className="absolute top-4 left-4 bg-amber-500 text-teal-950 text-xs font-bold px-3 py-1 rounded-full">
                    {role.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-teal-950 flex items-center justify-center">
                      <role.icon className="w-5 h-5 text-amber-400" />
                    </span>
                    <h3 className="font-display text-lg text-teal-950 font-semibold">
                      {role.title}
                    </h3>
                  </div>

                  <p className="text-ink-soft text-sm leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-bold text-teal-950 bg-cream-50 border border-teal-950/10 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-ink-soft mb-4">
                    <span className="flex items-center gap-1">
                      <FiClock className="w-3.5 h-3.5" /> {role.timeCommitment}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="w-3.5 h-3.5" /> {role.location}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-teal-950/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-500">
                      {role.impact}
                    </span>
                    <span className="text-teal-950 group-hover:translate-x-1 transition-transform duration-300">
                      <FiArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. HOW IT WORKS — journey timeline                            */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-teal-950 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 relative">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                The journey
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-cream-50">
              How it works
            </h2>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 to-teal-600 rounded-full" />

            <div className="space-y-12">
              {volunteerSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-6 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-1/2">
                    <div className="bg-cream-50/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-cream-50/20 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs text-amber-400 font-bold">
                          {step.step}
                        </span>
                        <span className="text-xs text-cream-50/50">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="font-display text-lg text-cream-50 font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-cream-50/60 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-full bg-amber-500 border-4 border-teal-950 flex items-center justify-center shadow-lg"
                    >
                      <step.icon className="w-5 h-5 text-teal-950" />
                    </motion.span>
                  </div>

                  {/* Empty space for alternating */}
                  <div className="lg:w-1/2 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. VOLUNTEER STORIES — testimonials                           */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                They came, they served
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Volunteer stories"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {volunteerStories.map((volunteer, index) => (
              <motion.div
                key={volunteer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={volunteer.image}
                    alt={volunteer.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-cream-50 font-display font-semibold text-lg">
                      {volunteer.name}
                    </p>
                    <p className="text-cream-50/70 text-sm">
                      {volunteer.country}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`${volunteer.color} text-cream-50 text-xs font-bold px-3 py-1 rounded-full`}>
                      {volunteer.role}
                    </span>
                    <span className="text-xs text-ink-soft">
                      {volunteer.duration}
                    </span>
                  </div>
                  <p className="text-teal-950 text-sm italic leading-relaxed">
                    "{volunteer.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. VOLUNTEER APPLICATION FORM                                 */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[700px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Get started
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Apply to volunteer"
              className="justify-center"
            />
          </div>

          {/* Form progress */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {volunteerFormSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      formStep >= index
                        ? "bg-teal-950 text-amber-400"
                        : "bg-white text-ink-soft"
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </motion.span>
                  <span className="text-[10px] text-ink-soft mt-1">
                    {step.label}
                  </span>
                </div>
                {index < volunteerFormSteps.length - 1 && (
                  <span className="w-8 h-px bg-teal-950/20" />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <AnimatePresence mode="wait">
              {formStep === 0 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-teal-950 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-teal-950 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-teal-950 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="Your country"
                      className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                </motion.div>
              )}

              {formStep === 1 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-teal-950 mb-2">
                      Preferred Role
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:outline-none transition-colors">
                      <option>Select a role</option>
                      {volunteerRoles.map((role) => (
                        <option key={role.title}>{role.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-teal-950 mb-2">
                      Relevant Skills
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your skills and experience"
                      className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                </motion.div>
              )}

              {formStep === 2 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-teal-950 mb-2">
                      Available Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-teal-950 mb-2">
                      Duration
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:outline-none transition-colors">
                      <option>2-4 weeks</option>
                      <option>1-3 months</option>
                      <option>3-6 months</option>
                      <option>6+ months</option>
                      <option>Remote / Flexible</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {formStep === 3 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-teal-950 mx-auto mb-4 flex items-center justify-center"
                  >
                    <FiCheckCircle className="w-10 h-10 text-amber-400" />
                  </motion.div>
                  <h3 className="font-display text-2xl text-teal-950 font-semibold mb-2">
                    Application Ready!
                  </h3>
                  <p className="text-ink-soft text-sm mb-6">
                    Review your information and submit your application.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-6 pt-6 border-t border-teal-950/10">
              {formStep > 0 && (
                <button
                  onClick={() => setFormStep(formStep - 1)}
                  className="px-6 py-2.5 rounded-full border-2 border-teal-950/20 text-teal-950 font-semibold text-sm hover:bg-teal-950 hover:text-cream-50 transition-all duration-300"
                >
                  Back
                </button>
              )}
              {formStep < 3 ? (
                <button
                  onClick={() => setFormStep(formStep + 1)}
                  className="ml-auto px-6 py-2.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm hover:bg-teal-950 hover:text-amber-400 transition-all duration-300"
                >
                  Next Step
                </button>
              ) : (
                <button className="ml-auto px-6 py-2.5 rounded-full bg-teal-950 text-cream-50 font-semibold text-sm hover:bg-amber-500 hover:text-teal-950 transition-all duration-300">
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. FAQ SECTION                                                */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Common questions
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Volunteer FAQs"
              className="justify-center"
            />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-amber-50/40 transition-colors duration-300"
                  >
                    <span className="font-display text-base text-teal-950 font-semibold">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`w-5 h-5 text-teal-950 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-ink-soft text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CTA SECTION                                                */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden order-1 lg:order-2 min-h-[280px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=900&fit=crop&q=80"
              alt="Volunteers working together"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-l from-teal-950/40 to-transparent lg:from-transparent lg:to-teal-950/60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-teal-950 p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden order-2 lg:order-1"
          >
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-amber-500/10" />
            <div className="absolute top-10 right-20 w-20 h-20 rounded-full bg-teal-400/5" />

            <span className="font-mono text-xs tracking-[0.25em] uppercase text-amber-500 font-bold mb-5 inline-flex items-center gap-2">
              <FiUserPlus className="w-4 h-4" /> Join us
            </span>

            <h2 className="font-display font-semibold text-4xl lg:text-5xl text-cream-50 leading-[1.05] tracking-tight mb-4">
              Ready to{" "}
              <span className="text-amber-500 italic font-normal">make a difference?</span>
            </h2>

            <p className="text-cream-50/70 text-lg max-w-[420px] leading-relaxed mb-8">
              Your skills, your time, your heart — that's all it takes. Start
              your volunteer journey today.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#apply"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-cream-50 hover:-translate-y-0.5 active:scale-95"
              >
                Apply Now
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-cream-50/30 text-cream-50 font-semibold text-sm transition-all duration-300 hover:border-cream-50 hover:bg-cream-50 hover:text-teal-950 hover:-translate-y-0.5 active:scale-95"
              >
                Ask a Question
                <FiMessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
};

export default VolunteerPage;