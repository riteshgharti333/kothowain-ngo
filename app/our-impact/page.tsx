// app/our-work/impact/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiUsers,
  FiTrendingUp,
  FiMapPin,
  FiBarChart2,
  FiPieChart,
  FiDownload,
  FiEye,
  FiShare2,
  FiStar,
  FiAward,
  FiTarget,
  FiCompass,
  FiChevronDown,
  FiCheckCircle,
  FiGift,
  FiActivity,
  FiHome,
  FiDroplet,
  FiBookOpen,
  FiThermometer,
  FiClock,
} from "react-icons/fi";
import HeadingWithPaint from "../components/HeadingWithPaint";
import PageBanner from "../components/PageBanner";
import { useState } from "react";

/* ================================================================== */
/* Impact-specific reusable components                                 */
/* ================================================================== */

// Growth arrow with leaves
const GrowthArrow = ({ active = false }: { active?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`relative w-16 h-24 ${active ? "opacity-100" : "opacity-50"}`}
  >
    <svg viewBox="0 0 64 96" fill="none" className="w-full h-full">
      <path
        d="M32,88 L32,8 M32,8 L12,28 M32,8 L52,28"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaves */}
      <circle cx="32" cy="35" r="5" fill="currentColor" />
      <circle cx="32" cy="50" r="5" fill="currentColor" />
      <circle cx="32" cy="65" r="5" fill="currentColor" />
    </svg>
  </motion.div>
);

// Ripple rings for impact
const ImpactRings = ({ active = false }: { active?: boolean }) => (
  <div className="relative w-24 h-24">
    {[0, 1, 2].map((ring) => (
      <motion.div
        key={ring}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={active ? { scale: 1 + ring * 0.4, opacity: 0.4 - ring * 0.1 } : { scale: 0.5, opacity: 0.15 }}
        transition={{ duration: 2, delay: ring * 0.4, repeat: active ? Infinity : 0 }}
        className="absolute inset-0 rounded-full border-2 border-amber-500"
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <FiStar className={`w-6 h-6 ${active ? "text-amber-500" : "text-amber-500/40"}`} />
    </div>
  </div>
);

// Progress bar with milestones
const MilestoneBar = ({ progress = 50, milestones = [] }: { progress?: number; milestones?: string[] }) => (
  <div className="relative pt-4">
    <div className="h-2 bg-cream-50 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-full bg-gradient-to-r from-amber-500 to-teal-600 rounded-full"
      />
    </div>
    <div className="flex justify-between mt-2">
      {milestones.map((milestone, i) => (
        <span key={i} className="text-[10px] text-ink-soft font-semibold">
          {milestone}
        </span>
      ))}
    </div>
  </div>
);

const ImpactPage = () => {
  /* ---------------------------------------------------------------- */
  /* Content                                                           */
  /* ---------------------------------------------------------------- */

  const impactStats = [
    { label: "Lives Touched", value: "18,500+", icon: FiHeart, color: "bg-amber-500", trend: "+12%" },
    { label: "Families Served", value: "3,200+", icon: FiUsers, color: "bg-teal-700", trend: "+8%" },
    { label: "Villages Reached", value: "86", icon: FiMapPin, color: "bg-amber-400", trend: "+15%" },
    { label: "Programs Running", value: "12", icon: FiTarget, color: "bg-teal-950", trend: "+2" },
  ];

  const programImpacts = [
    {
      icon: FiBookOpen,
      program: "Education",
      description: "Literacy and learning outcomes",
      metrics: [
        { label: "Children enrolled", value: "3,200+", pct: 95 },
        { label: "Literacy improvement", value: "68%", pct: 68 },
        { label: "Teacher retention", value: "88%", pct: 88 },
      ],
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: FiDroplet,
      program: "Clean Water",
      description: "Access and waterborne disease reduction",
      metrics: [
        { label: "Clean water access", value: "94%", pct: 94 },
        { label: "Disease reduction", value: "62%", pct: 62 },
        { label: "Systems maintained", value: "98%", pct: 98 },
      ],
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: FiThermometer,
      program: "Medical Support",
      description: "Health camps and maternal care",
      metrics: [
        { label: "Patients treated", value: "8,500+", pct: 85 },
        { label: "Maternal mortality drop", value: "45%", pct: 45 },
        { label: "Villages with health workers", value: "86%", pct: 86 },
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: FiHome,
      program: "Food & Nutrition",
      description: "Meals served and malnutrition reduction",
      metrics: [
        { label: "Meals served", value: "1.1M+", pct: 90 },
        { label: "Malnutrition drop", value: "31%", pct: 31 },
        { label: "Kitchens running", value: "38", pct: 76 },
      ],
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=400&fit=crop&q=80",
    },
  ];

  const locations = [
    { name: "Ruma", region: "Bandarban", families: "850", programs: 4, color: "bg-amber-500" },
    { name: "Thanchi", region: "Bandarban", families: "620", programs: 3, color: "bg-teal-700" },
    { name: "Belaichori", region: "Rangamati", families: "540", programs: 3, color: "bg-amber-400" },
    { name: "Alikadam", region: "Bandarban", families: "480", programs: 2, color: "bg-teal-950" },
    { name: "Lama", region: "Bandarban", families: "410", programs: 2, color: "bg-amber-500" },
    { name: "Jurachari", region: "Rangamati", families: "300", programs: 1, color: "bg-teal-600" },
  ];

  const stories = [
    {
      name: "Priya Tripura",
      location: "Ruma, Bandarban",
      program: "Education",
      quote: "I'm the first girl in my village to finish secondary school.",
      story: "Priya started at a Kothowain learning center when she was six. Now she's studying to become a teacher herself — and tutoring three younger students every evening.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=750&fit=crop&q=80",
      tags: ["Scholarship", "Girls' Education"],
    },
    {
      name: "Lalmohon Chakma",
      location: "Thanchi, Bandarban",
      program: "Clean Water",
      quote: "The water comes to us now. We don't go to it.",
      story: "Lalmohon's village spent four hours a day hauling water from a stream. Today, a standpost sits at the center of the village, and waterborne disease has fallen by half.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=750&fit=crop&q=80",
      tags: ["Water Committee", "Health"],
    },
    {
      name: "Anjali Chakma",
      location: "Belaichori, Rangamati",
      program: "Medical Support",
      quote: "A health worker in the village is better than a doctor far away.",
      story: "As a community health worker, Anjali has treated over 340 patients this year — catching illnesses early and referring the serious cases before they become emergencies.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=750&fit=crop&q=80",
      tags: ["Health Worker", "Maternal Care"],
    },
  ];

  const beforeAfter = [
    {
      label: "2018",
      title: "Before",
      points: [
        "2+ hour walk to school",
        "Unsafe stream water",
        "No village health worker",
        "Seasonal hunger",
      ],
      color: "bg-teal-950",
    },
    {
      label: "2024",
      title: "After",
      points: [
        "Learning center in village",
        "Clean water at standpost",
        "Trained health worker",
        "Community kitchen running",
      ],
      color: "bg-amber-500",
    },
  ];

  const milestones = [
    { year: "2015", milestone: "First learning center opens", achieved: true },
    { year: "2017", milestone: "First water system installed", achieved: true },
    { year: "2019", milestone: "Emergency health fund launches", achieved: true },
    { year: "2021", milestone: "Food program expands to 4 villages", achieved: true },
    { year: "2023", milestone: "50th community kitchen opens", achieved: true },
    { year: "2026", milestone: "Goal: 100 villages reached", achieved: false },
  ];

  const reports = [
    { title: "Annual Report 2024", type: "PDF", size: "4.2 MB", year: "2024" },
    { title: "Water Quality Assessment", type: "PDF", size: "2.8 MB", year: "2024" },
    { title: "Education Impact Study", type: "PDF", size: "3.5 MB", year: "2023" },
    { title: "Health Program Review", type: "PDF", size: "2.1 MB", year: "2023" },
  ];

  const [activeProgram, setActiveProgram] = useState(0);
  const [activeStory, setActiveStory] = useState(0);

  return (
    <main className="">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&h=900&fit=crop&q=80"
        breadcrumb="Our Impact"
        headingLine1="Small Steps."
        headingHighlight="Lasting Change."
        headingLine2="Real Numbers."
        headingAfter="Real People."
        description="Since 2015, Kothowain has walked with communities across the Chittagong Hill Tracts. Here's what that journey looks like — in numbers, in stories, and in lives changed."
        seed={600}
      />

      {/* ============================================================ */}
      {/* 2. IMPACT AT A GLANCE — ripple rings                          */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                The big picture
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Impact at a glance"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <ImpactRings active={index === 0} />
                </div>
                <div className={`w-16 h-16 rounded-2xl ${stat.color} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-cream-50" />
                </div>
                <div className="font-display text-3xl font-bold text-teal-950 mb-1">
                  {stat.value}
                </div>
                <div className="text-ink-soft text-xs uppercase tracking-wide mb-2">
                  {stat.label}
                </div>
                <span className="inline-block bg-amber-50 text-amber-600 text-xs font-bold px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. IMPACT BY PROGRAM — interactive tabs                       */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                By the numbers
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Impact by program"
              className="justify-center"
            />
          </div>

          {/* Program tabs */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {programImpacts.map((program, index) => (
              <button
                key={program.program}
                onClick={() => setActiveProgram(index)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeProgram === index
                    ? "bg-teal-950 text-amber-400 shadow-lg"
                    : "bg-white text-teal-950 hover:bg-amber-50"
                }`}
              >
                <program.icon className="w-4 h-4" />
                {program.program}
              </button>
            ))}
          </div>

          {/* Active program display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                <Image
                  src={programImpacts[activeProgram].image}
                  alt={programImpacts[activeProgram].program}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-cream-50 font-semibold">
                    {programImpacts[activeProgram].program}
                  </h3>
                  <p className="text-cream-50/70 text-sm">
                    {programImpacts[activeProgram].description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {programImpacts[activeProgram].metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-teal-950 font-semibold">
                        {metric.label}
                      </span>
                      <span className="font-display text-lg text-amber-500 font-bold">
                        {metric.value}
                      </span>
                    </div>
                    <div className="h-3 bg-white rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.pct}%` }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        className="h-full bg-gradient-to-r from-amber-500 to-teal-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WHERE WE WORK — map visualization                          */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                On the ground
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Where we work"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-10 h-10 rounded-xl ${location.color} flex items-center justify-center`}>
                    <FiMapPin className="w-5 h-5 text-cream-50" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-teal-950 font-semibold">
                      {location.name}
                    </h3>
                    <p className="text-xs text-ink-soft">{location.region}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-ink-soft">
                  <span>{location.families} families</span>
                  <span>{location.programs} programs</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. REAL IMPACT STORIES — storytelling cards                   */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Voices from the hills
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Real impact stories"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => setActiveStory(index)}
                className={`relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  activeStory === index ? "ring-4 ring-amber-500" : ""
                }`}
              >
                <div className="relative h-[500px]">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/50 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold bg-amber-500 text-teal-950 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-cream-50 text-base italic mb-3">
                      "{story.quote}"
                    </p>
                    <h3 className="font-display text-xl text-cream-50 font-semibold">
                      {story.name}
                    </h3>
                    <p className="text-cream-50/70 text-sm">
                      {story.location} • {story.program}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expanded story */}
          <AnimatePresence>
            {activeStory !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg">
                  <p className="text-ink-soft text-sm leading-relaxed">
                    {stories[activeStory].story}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. BEFORE → AFTER — transformation comparison                 */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-teal-950 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                The transformation
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-cream-50">
              Before → After
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {beforeAfter.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`${phase.color} rounded-3xl p-8 relative overflow-hidden`}
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <span className="inline-block bg-cream-50/20 text-cream-50 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {phase.label}
                </span>
                <h3 className="font-display text-2xl text-cream-50 font-semibold mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-3">
                  {phase.points.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2 text-cream-50/90 text-sm"
                    >
                      {index === 0 ? (
                        <FiTrendingUp className="w-4 h-4 text-cream-50/50" />
                      ) : (
                        <FiCheckCircle className="w-4 h-4 text-amber-400" />
                      )}
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. OUR PROGRESS — milestone timeline                          */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                The journey
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Our progress"
              className="justify-center"
            />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 to-teal-700 rounded-full" />

            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-6 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Year marker */}
                  <div className="hidden lg:flex w-1/2 justify-end">
                    <span className={`font-display text-2xl font-bold ${
                      milestone.achieved ? "text-teal-950" : "text-amber-500"
                    }`}>
                      {milestone.year}
                    </span>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 lg:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <span className={`w-5 h-5 rounded-full border-4 border-cream-50 shadow-lg ${
                      milestone.achieved ? "bg-teal-600" : "bg-amber-500"
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 pl-14 lg:pl-0">
                    <div className={`bg-white rounded-2xl p-5 shadow-lg ${
                      milestone.achieved ? "border-l-4 border-teal-600" : "border-l-4 border-amber-500"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="lg:hidden font-display text-lg font-bold text-teal-950">
                          {milestone.year}
                        </span>
                        {milestone.achieved ? (
                          <FiCheckCircle className="w-4 h-4 text-teal-600" />
                        ) : (
                          <FiTarget className="w-4 h-4 text-amber-500" />
                        )}
                      </div>
                      <p className="text-sm text-teal-950 font-semibold">
                        {milestone.milestone}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. TRANSPARENCY & REPORTS — document cards                    */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Open books
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Transparency & reports"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reports.map((report, index) => (
              <motion.a
                key={report.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-xl bg-teal-950 flex items-center justify-center flex-shrink-0">
                    <FiBarChart2 className="w-5 h-5 text-amber-400" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-base text-teal-950 font-semibold mb-1 group-hover:text-amber-600 transition-colors">
                      {report.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-ink-soft">
                      <span className="bg-cream-50 px-2 py-1 rounded">{report.type}</span>
                      <span>{report.size}</span>
                      <span>{report.year}</span>
                    </div>
                  </div>
                  <FiDownload className="w-5 h-5 text-teal-950 group-hover:text-amber-500 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. DONATE CTA                                                */}
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
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=900&fit=crop&q=80"
              alt="Community impact"
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
              <FiGift className="w-4 h-4" /> Be the change
            </span>

            <h2 className="font-display font-semibold text-4xl lg:text-5xl text-cream-50 leading-[1.05] tracking-tight mb-4">
              Your gift{" "}
              <span className="text-amber-500 italic font-normal">counts</span>{" "}
              in these numbers
            </h2>

            <p className="text-cream-50/70 text-lg max-w-[420px] leading-relaxed mb-8">
              Every story on this page started with someone like you. Join
              them and watch your impact grow.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#donate"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-cream-50 hover:-translate-y-0.5 active:scale-95"
              >
                Donate Now
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#reports"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-cream-50/30 text-cream-50 font-semibold text-sm transition-all duration-300 hover:border-cream-50 hover:bg-cream-50 hover:text-teal-950 hover:-translate-y-0.5 active:scale-95"
              >
                Read Our Reports
                <FiEye className="w-4 h-4" />
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

export default ImpactPage;