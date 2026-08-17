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
        "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=450&fit=crop&q=80",
    },
    {
      icon: FiSun,
      tag: "Filtration",
      title: "BioSand Filters",
      desc: "Household concrete filters that clean water through layers of sand and gravel, removing 98% of pathogens with no moving parts.",
      impact: "1,200 filters running",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=450&fit=crop&q=80",
    },
    {
      icon: FiShield,
      tag: "Community",
      title: "Water Committees",
      desc: "Trained local caretakers who test water quality, fix leaks, and collect a small maintenance fund from every household.",
      impact: "52 committees active",
      image:
        "https://images.unsplash.com/photo-1541176855679-bdf184a0bb68?w=600&h=450&fit=crop&q=80",
    },
    {
      icon: FiLifeBuoy,
      tag: "WASH",
      title: "Hygiene Education",
      desc: "Handwashing stations, menstrual health programs, and school sanitation clubs that make clean water truly life-saving.",
      impact: "80 schools reached",
      image:
        "https://images.unsplash.com/photo-1584427546453-5e6f44c6c697?w=600&h=450&fit=crop&q=80",
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
    { year: "2018", distance: "2+ hours", buckets: 6, desc: "Families walk to distant streams" },
    { year: "2020", distance: "45 minutes", buckets: 3, desc: "First standposts installed" },
    { year: "2022", distance: "15 minutes", buckets: 2, desc: "Pipelines reach village centers" },
    { year: "2024", distance: "2 minutes", buckets: 1, desc: "Tapstands at household clusters" },
    { year: "2026", distance: "0 minutes", buckets: 0, desc: "Goal: water at every doorstep" },
  ];

  // NEW: Drop by drop donation tiers
  const donationDrops = [
    { amount: "৳500", drops: 10, impact: "Clean water for 1 family for a month", icon: FiDroplet, size: "w-16 h-16" },
    { amount: "৳2,500", drops: 50, impact: "BioSand filter for one household", icon: FiFilter, size: "w-20 h-20" },
    { amount: "৳10,000", drops: 200, impact: "Standpost serving 30 families", icon: FiHome, size: "w-24 h-24" },
    { amount: "৳50,000", drops: 1000, impact: "Complete village water system", icon: FiGift, size: "w-28 h-28" },
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
        image="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&h=900&fit=crop&q=80"
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
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
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
                Kothowain's gravity-fed systems capture that water at its
                source and pipe it to standposts in the village center. No
                pumps. No fuel. No ongoing cost. Just the same water, guided
                to where it's needed.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Gravity-Fed", "BioSand Filters", "Water Committees", "WASH Education"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold text-teal-950 bg-white border border-teal-950/10 px-4 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Water flow visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1538300342682-cf57afb97285?w=700&h=500&fit=crop&q=80"
                  alt="Spring water flowing down"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 via-transparent to-teal-950/80" />
                
                {/* Flowing water overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex flex-col justify-between p-6"
                >
                  {watershedSteps.map((s, i) => (
                    <motion.div
                      key={s.step}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="flex items-center gap-3"
                    >
                      <span className={`w-2 h-2 rounded-full bg-amber-400 shadow-lg ${i === 0 ? 'animate-ping-slow' : ''}`} />
                      <span className="text-cream-50 text-xs font-bold bg-teal-950/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {s.title}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
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
                <span className="absolute top-5 right-5 w-11 h-11 rounded-full bg-cream-50/15 backdrop-blur-sm flex items-center justify-center">
                  <program.icon className="w-5 h-5 text-cream-50" />
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
      {/* NEW SECTION 1: THE BUCKET LINE — water access timeline        */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                The bucket line
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Every step closer to home"
              className="justify-center"
            />
            <p className="text-ink-soft text-sm mt-4 max-w-[400px] mx-auto">
              The distance between a family and clean water, shrinking year by year.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-700 via-amber-500 to-teal-700 rounded-full hidden lg:block" />

            <div className="space-y-12 relative">
              {bucketTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Year marker */}
                  <div className="hidden lg:flex w-1/2 justify-end items-center">
                    {index % 2 === 0 ? (
                      <div className="text-right">
                        <span className="font-display text-4xl font-bold text-teal-950">
                          {item.year}
                        </span>
                      </div>
                    ) : (
                      <div className="text-left">
                        <span className="font-display text-4xl font-bold text-teal-950">
                          {item.year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-cream-50 shadow-lg" />

                  {/* Content card */}
                  <div className="lg:w-1/2 w-full">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-teal-950/5">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {Array.from({ length: item.buckets }).map((_, i) => (
                            <motion.span
                              key={i}
                              initial={{ scale: 0, rotate: -20 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                              className="w-6 h-7 bg-gradient-to-b from-teal-600 to-teal-800 rounded-b-lg rounded-t-sm relative"
                            >
                              <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-2 border-2 border-teal-700 rounded-t-full" />
                              <span className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-1.5 bg-amber-400/60 rounded-full" />
                            </motion.span>
                          ))}
                        </div>
                        <span className="font-mono text-xs font-bold text-amber-500">
                          {item.distance}
                        </span>
                      </div>
                      <p className="text-ink-soft text-sm leading-relaxed">
                        {item.desc}
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
                  <WaterLevelMeter level={index === 0 ? 94 : index === 1 ? 62 : index === 2 ? 98 : 85} />
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
      {/* NEW SECTION 2: DROP BY DROP — micro-donation visualizer       */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Drop by drop
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Small gifts, big ripples"
              className="justify-center"
            />
            <p className="text-ink-soft text-sm mt-4 max-w-[400px] mx-auto">
              Every drop counts. Tap a tier to see what your gift becomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationDrops.map((tier, index) => (
              <motion.button
                key={tier.amount}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedDrop(index)}
                className={`group relative bg-white rounded-3xl p-6 pt-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  selectedDrop === index ? "ring-4 ring-amber-500" : ""
                }`}
              >
                {/* Ripple circles */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    {[0, 1, 2].map((ripple) => (
                      <motion.div
                        key={ripple}
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1 + ripple * 0.5, opacity: 0.3 - ripple * 0.08 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.3 + ripple * 0.4, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-500/30"
                        style={{ width: `${120 + ripple * 40}px`, height: `${120 + ripple * 40}px` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Drop icon */}
                <div className={`relative mx-auto mb-4 ${tier.size} rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <tier.icon className="w-1/2 h-1/2 text-amber-400" />
                </div>

                {/* Amount */}
                <div className="font-display text-2xl font-bold text-teal-950 mb-2">
                  {tier.amount}
                </div>

                {/* Drops count */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                      className={`w-2 h-2 rounded-full ${
                        i < Math.ceil(tier.drops / 200) ? "bg-amber-500" : "bg-cream-100"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-[10px] text-ink-soft mb-3">
                  ≈ {tier.drops} drops
                </div>

                {/* Impact */}
                <p className="text-xs text-teal-950 font-semibold leading-relaxed">
                  {tier.impact}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Selected tier detail */}
          <AnimatePresence>
            {selectedDrop !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-8 bg-white rounded-2xl p-6 border-2 border-amber-500/20">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-teal-950 flex items-center justify-center">
                      <FiGift className="w-5 h-5 text-amber-400" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-teal-950">
                        Give {donationDrops[selectedDrop].amount}
                      </p>
                      <p className="text-sm text-ink-soft">
                        {donationDrops[selectedDrop].impact}
                      </p>
                    </div>
                    <Link
                      href="#donate"
                      className="ml-auto group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm hover:bg-teal-950 hover:text-amber-400 transition-all duration-300"
                    >
                      Donate Now
                      <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
                  <span className="text-xs text-ink-soft">{season.flow}% flow</span>
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
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=750&fit=crop&q=80"
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
                  <span className="text-teal-950 font-semibold text-sm">3 pipelines</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Serving since
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">2018</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Families served
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">240</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Uptime
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">99.2%</span>
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
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=900&fit=crop&q=80"
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
              <span className="text-amber-500 italic font-normal">standpost</span>{" "}
              for a village
            </h2>

            <p className="text-cream-50/70 text-lg max-w-[420px] leading-relaxed mb-8">
              One standpost serves 30 families. A drop in the bucket for you,
              a lifetime of clean water for them.
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
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default CleanWaterPage;