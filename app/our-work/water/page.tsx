// app/our-work/clean-water/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiDroplet,
  FiFilter,
  FiMapPin,
  FiTool,
  FiSun,
  FiUsers,
  FiCheckCircle,
  FiLifeBuoy,
  FiActivity,
  FiShield,
  FiChevronDown,
  FiGift,
  FiHome,
  FiClock,
} from "react-icons/fi";
import HeadingWithPaint from "../../components/HeadingWithPaint";
import PageBanner from "../../components/PageBanner";
import { useState } from "react";

/* ================================================================== */
/* Small reusable bits unique to this page                             */
/* ================================================================== */

// Water level meter - UPDATED with amber/teal theme
const WaterLevelMeter = ({ level = 78 }: { level?: number }) => (
  <div className="relative w-8 h-24 rounded-full border-2 border-teal-700/30 overflow-hidden bg-cream-50">
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: `${level}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-700 to-amber-400"
    >
      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 right-0 h-1.5 bg-white/40 rounded-full"
      />
    </motion.div>
  </div>
);

// Droplet bead line - UPDATED with amber/teal
const DropletBeads = () => (
  <div className="hidden lg:flex flex-col items-center gap-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-teal-600 shadow-sm"
        style={{ marginLeft: `${Math.sin(i) * 10}px` }}
      />
    ))}
  </div>
);

const CleanWaterPage = () => {
  /* ---------------------------------------------------------------- */
  /* Content                                                           */
  /* ---------------------------------------------------------------- */

  const programs = [
    {
      icon: FiFilter,
      tag: "Infrastructure",
      title: "Gravity-Fed Systems",
      desc: "Spring-fed pipelines that carry clean water downhill to standposts and tapstands — no electricity, no diesel, no ongoing cost beyond care.",
      impact: "48 systems installed",
      image:
        "https://images.unsplash.com/photo-1567769462911-520a38352744?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: FiSun,
      tag: "Filtration",
      title: "BioSand Filters",
      desc: "Household concrete filters that clean water through layers of sand and gravel, removing 98% of pathogens with no moving parts.",
      impact: "1,200 filters running",
      image:
        "https://images.unsplash.com/photo-1543180930-261980d4868a?q=80&w=456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: FiShield,
      tag: "Community",
      title: "Water Committees",
      desc: "Trained local caretakers who test water quality, fix leaks, and collect a small maintenance fund from every household.",
      impact: "52 committees active",
      image:
        "https://images.unsplash.com/photo-1570966039336-971e52f92c70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: FiLifeBuoy,
      tag: "WASH",
      title: "Hygiene Education",
      desc: "Handwashing stations, menstrual health programs, and school sanitation clubs that make clean water truly life-saving.",
      impact: "80 schools reached",
      image:
        "https://images.unsplash.com/photo-1543180885-6f6bbf87a3ba?q=80&w=739&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const watershedSteps = [
    {
      step: "01",
      title: "Spring & Stream",
      desc: "Source mapping identifies the cleanest hillside springs.",
      icon: FiMapPin,
      color: "from-amber-500 to-teal-600",
    },
    {
      step: "02",
      title: "Pipeline",
      desc: "Gravity carries water down, no power required.",
      icon: FiDroplet,
      color: "from-teal-600 to-amber-400",
    },
    {
      step: "03",
      title: "Tapstand",
      desc: "Communal standpost brings water close to homes.",
      icon: FiHome,
      color: "from-amber-400 to-teal-700",
    },
    {
      step: "04",
      title: "Home",
      desc: "Families connect and store water safely at the doorstep.",
      icon: FiHeart,
      color: "from-teal-700 to-amber-500",
    },
  ];

  const waterQualityStats = [
    { label: "Clean Water Access", value: "94%", icon: FiDroplet },
    { label: "Waterborne Disease Drop", value: "62%", icon: FiActivity },
    { label: "Systems Maintained", value: "98%", icon: FiTool },
    { label: "Households Reached", value: "12,500+", icon: FiUsers },
  ];

  // NEW: Bucket line data
  const bucketTimeline = [
    {
      year: "2018",
      distance: "2+ hours",
      buckets: 6,
      desc: "Families walk to distant streams",
    },
    {
      year: "2020",
      distance: "45 minutes",
      buckets: 3,
      desc: "First standposts installed",
    },
    {
      year: "2022",
      distance: "15 minutes",
      buckets: 2,
      desc: "Pipelines reach village centers",
    },
    {
      year: "2024",
      distance: "2 minutes",
      buckets: 1,
      desc: "Tapstands at household clusters",
    },
    {
      year: "2026",
      distance: "0 minutes",
      buckets: 0,
      desc: "Goal: water at every doorstep",
    },
  ];

  // NEW: Drop by drop donation tiers
  const donationDrops = [
    {
      amount: "৳500",
      drops: 10,
      impact: "Clean water for 1 family for a month",
      icon: FiDroplet,
      size: "w-16 h-16",
    },
    {
      amount: "৳2,500",
      drops: 50,
      impact: "BioSand filter for one household",
      icon: FiFilter,
      size: "w-20 h-20",
    },
    {
      amount: "৳10,000",
      drops: 200,
      impact: "Standpost serving 30 families",
      icon: FiHome,
      size: "w-24 h-24",
    },
    {
      amount: "৳50,000",
      drops: 1000,
      impact: "Complete village water system",
      icon: FiGift,
      size: "w-28 h-28",
    },
  ];

  const seasonalPatterns = [
    {
      month: "Baishakh",
      season: "Dry Season Peak",
      desc: "Water levels drop; committees coordinate rationing and repair schedules.",
      flow: 25,
      color: "bg-amber-500",
    },
    {
      month: "Ashar",
      season: "Monsoon Rise",
      desc: "Springs recharge; pipelines flush clean with the first heavy rains.",
      flow: 85,
      color: "bg-teal-600",
    },
    {
      month: "Ashwin",
      season: "Post-Monsoon",
      desc: "Turbidity settles; filtration focuses on post-rain contamination.",
      flow: 65,
      color: "bg-amber-400",
    },
    {
      month: "Poush",
      season: "Winter Stable",
      desc: "Steady flow, water quality at its most consistent of the year.",
      flow: 70,
      color: "bg-teal-700",
    },
  ];

  const partnershipLogos = [
    { name: "WaterAid", note: "Gravity-fed systems" },
    { name: "UNICEF WASH", note: "School sanitation" },
    { name: "Max Foundation", note: "BioSand filters" },
    { name: "Practical Action", note: "Spring mapping" },
    { name: "BRAC WASH", note: "Hygiene programs" },
    { name: "OXFAM", note: "Emergency water" },
  ];

  const [activeProgram, setActiveProgram] = useState(0);
  const [selectedDrop, setSelectedDrop] = useState<number | null>(null);

  return (
    <main className="">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1543181077-099f32f30a1c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        breadcrumb="Clean Water & Sanitation"
        headingLine1="Clean Water"
        headingHighlight="Flows."
        headingLine2="Life"
        headingAfter="Follows."
        description="From hillside springs to household taps, Kothowain builds gravity-fed water systems that turn a two-hour walk into a two-minute one — and keep families healthy year-round."
        seed={400}
      />

      {/* ============================================================ */}
      {/* 2. WATERSHED MAP — the journey of water                       */}
      {/* ============================================================ */}
      {/* 2. WATERSHED MAP — the journey of water */}
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-3 gap-3 h-[420px] lg:h-[460px]">
                {/* Large image - left */}
                <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1538300342682-cf57afb97285?w=700&h=800&fit=crop&q=80"
                    alt="Spring water source"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-cream-50 text-xs font-bold">
                    Spring Source, Bandarban
                  </span>
                </div>

                {/* Small image - top right */}
                <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1596787474386-791461ec4bba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Pipeline installation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                </div>

                {/* Small image - bottom right */}
                <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1567769462911-520a38352744?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Water collection"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-amber-500 text-teal-950 rounded-2xl px-4 py-2 shadow-xl rotate-3"
              >
                <span className="text-xs font-bold flex items-center gap-1.5">
                  <FiDroplet className="w-3.5 h-3.5" />
                  Gravity-Powered
                </span>
              </motion.div>
            </motion.div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                  From spring to sink
                </span>
              </div>
              <HeadingWithPaint
                text="Water that finds its own way down"
                className="text-left mb-6"
              />
              <p className="text-ink-soft leading-[1.85] text-base mb-4">
                The Hill Tracts are rich in springs, but they run where they
                want — down ravines and far from homes. Families spend hours
                hauling water that isn't safe to drink anyway.
              </p>
              <p className="text-ink-soft leading-[1.85] text-base mb-8">
                Kothowain's gravity-fed systems capture that water at its source
                and pipe it to standposts in the village center. No pumps. No
                fuel. No ongoing cost. Just the same water, guided to where it's
                needed.
              </p>

              {/* Tags with hover effects */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Gravity-Fed",
                  "BioSand Filters",
                  "Water Committees",
                  "WASH Education",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="group/tag relative text-xs font-bold text-teal-950 bg-white border border-teal-950/10 px-4 py-2 rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 hover:border-teal-950 hover:scale-105"
                  >
                    {/* Hover arrow */}
                    <span className="inline-flex items-center gap-1.5">
                      {tag}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================ */}
      {/* 3. CLEAN WATER PROGRAMS — ripple cards                         */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Our water work
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Four ways we turn drops into life"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveProgram(index)}
                className={`group relative rounded-[1.75rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[320px] cursor-pointer ${
                  activeProgram === index ? "ring-4 ring-amber-500" : ""
                }`}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/50 to-transparent" />

                <span className="absolute top-5 left-5 bg-amber-500 text-teal-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {program.tag}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                  <h3 className="font-display text-xl lg:text-2xl text-cream-50 font-semibold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-cream-50/75 text-sm leading-relaxed mb-3 max-w-[380px]">
                    {program.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                    <FiActivity className="w-3.5 h-3.5" /> {program.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WATER LEVEL METER — impact visualization                    */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-teal-950 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="absolute -bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-teal-400/5 pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 relative">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Our impact
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-cream-50">
              The water level is rising
            </h2>
            <p className="text-cream-50/60 text-sm mt-3 max-w-[380px] mx-auto">
              Measured in health, time saved, and communities transformed.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {waterQualityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-block mb-4">
                  <WaterLevelMeter
                    level={
                      index === 0
                        ? 94
                        : index === 1
                          ? 62
                          : index === 2
                            ? 98
                            : 85
                    }
                  />
                </div>
                <div className="font-display text-3xl font-bold text-cream-50 mb-1 group-hover:text-amber-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-cream-50/50 text-xs uppercase tracking-wide flex items-center justify-center gap-2">
                  <stat.icon className="w-4 h-4 text-amber-400" />
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SEASONAL FLOW CALENDAR — water level timeline              */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Around the year
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="The flow calendar"
              className="justify-center"
            />
          </div>

          <div className="space-y-6">
            {seasonalPatterns.map((season, index) => (
              <motion.div
                key={season.month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs font-bold text-amber-500 w-20">
                    {season.month}
                  </span>
                  <span className="font-display text-lg font-semibold text-teal-950 flex-1">
                    {season.season}
                  </span>
                  <span className="text-xs text-ink-soft">
                    {season.flow}% flow
                  </span>
                </div>

                {/* Flow bar */}
                <div className="h-3 rounded-full bg-cream-50 overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${season.flow}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.1 }}
                    className={`h-full rounded-full ${season.color}`}
                  />
                </div>

                <p className="text-ink-soft text-sm leading-relaxed">
                  {season.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. WATER CARETAKER SPOTLIGHT                                  */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                From the field
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Meet a water caretaker"
              className="justify-center"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] rounded-[1.75rem] overflow-hidden bg-white shadow-[0_25px_60px_-25px_rgba(21,36,32,0.25)]"
          >
            <div className="relative aspect-[4/5] lg:aspect-auto">
              <Image
                src="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Community water caretaker"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent" />
            </div>

            <div className="p-8 lg:p-11">
              <span className="font-mono text-[10px] tracking-widest text-amber-500 font-bold uppercase">
                Field Notes
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-teal-950 font-semibold mt-2 mb-1">
                Lalmohon Chakma
              </h3>
              <p className="text-amber-500 text-sm font-bold mb-6">
                Water Committee Chair, Thanchi Union
              </p>

              <p className="text-ink-soft text-sm leading-relaxed mb-5">
                Lalmohon walks the pipeline from spring to tapstand every
                Tuesday, checking joints and clearing leaf traps. He's been
                doing this since 2018, when the system was first installed.
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6 border-t border-b border-dashed border-teal-950/15 py-5">
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Maintains
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    3 pipelines
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Serving since
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    2018
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Families served
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    240
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Uptime
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    99.2%
                  </span>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-5 border-l-4 border-amber-500">
                <p className="text-teal-950 text-sm italic leading-relaxed">
                  "Water doesn't need a manager. It needs someone who pays
                  attention."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PARTNERSHIP WATERSHED                                      */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Who's in the watershed
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Our water partners"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partnershipLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative bg-white rounded-2xl p-6 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-teal-950 flex items-center justify-center">
                      <FiDroplet className="w-5 h-5 text-amber-400" />
                    </span>
                    <div>
                      <h3 className="font-display text-base text-teal-950 font-semibold">
                        {partner.name}
                      </h3>
                      <p className="text-ink-soft text-xs">{partner.note}</p>
                    </div>
                  </div>
                  <FiCheckCircle className="absolute top-2 right-2 w-4 h-4 text-teal-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. WATER CTA — invitation to make a splash                    */}
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
              src="https://images.unsplash.com/photo-1495647688236-ed6ef40cb28b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Clean water flowing"
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
              <FiGift className="w-4 h-4" /> Make a splash
            </span>

            <h2 className="font-display font-semibold text-4xl lg:text-5xl text-cream-50 leading-[1.05] tracking-tight mb-4">
              Fund a{" "}
              <span className="text-amber-500 italic font-normal">
                standpost
              </span>{" "}
              for a village
            </h2>

            <p className="text-cream-50/70 text-lg max-w-[420px] leading-relaxed mb-8">
              One standpost serves 30 families. A drop in the bucket for you, a
              lifetime of clean water for them.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#donate"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-cream-50 hover:-translate-y-0.5 active:scale-95"
              >
                Fund a Standpost
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#volunteer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-cream-50/30 text-cream-50 font-semibold text-sm transition-all duration-300 hover:border-cream-50 hover:bg-cream-50 hover:text-teal-950 hover:-translate-y-0.5 active:scale-95"
              >
                Join a Water Committee
                <FiHeart className="w-4 h-4" />
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
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default CleanWaterPage;
