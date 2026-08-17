// app/our-work/education/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiUsers,
  FiBookOpen,
  FiAward,
  FiGlobe,
  FiMap,
  FiEdit3,
  FiCompass,
  FiStar,
  FiChevronDown,
  FiPaperclip,
  FiCheckCircle,
} from "react-icons/fi";
import HeadingWithPaint from "../../components/HeadingWithPaint";
import PageBanner from "../../components/PageBanner";
import { useState } from "react";

/* ================================================================== */
/* Small reusable bits unique to this page                             */
/* ================================================================== */

// Torn / deckle paper edge divider
const TornDivider = ({ flip = false }: { flip?: boolean }) => (
  <svg
    viewBox="0 0 1200 40"
    preserveAspectRatio="none"
    className={`w-full h-[28px] block ${flip ? "rotate-180" : ""}`}
  >
    <path
      d="M0,40 L0,18 Q20,2 40,16 T80,14 T120,18 T160,10 T200,20 T240,12 T280,18 T320,8 T360,18 T400,14 T440,20 T480,10 T520,16 T560,8 T600,18 T640,12 T680,20 T720,10 T760,16 T800,8 T840,18 T880,12 T920,20 T960,10 T1000,16 T1040,8 T1080,18 T1120,12 T1160,20 T1200,14 L1200,40 Z"
      fill="currentColor"
    />
  </svg>
);

// Ring-binder spiral, decorative, runs along a page edge
const SpiralRings = () => (
  <div className="hidden lg:flex flex-col justify-evenly items-center absolute -left-4 top-6 bottom-6 w-8 z-20">
    {Array.from({ length: 10 }).map((_, i) => (
      <span
        key={i}
        className="w-6 h-6 rounded-full border-[3px] border-teal-950/25 bg-paper shadow-inner"
      />
    ))}
  </div>
);

const EducationPage = () => {
  /* ---------------------------------------------------------------- */
  /* Content                                                           */
  /* ---------------------------------------------------------------- */

  const quickFacts = [
    { label: "3,200+ learners", rotate: -4 },
    { label: "42 learning centers", rotate: 3 },
    { label: "68% literacy gain", rotate: -2 },
  ];

  const subjects = [
    {
      period: "01",
      icon: FiBookOpen,
      title: "Primary Education",
      teaser: "Reading, writing, numbers.",
      desc: "Foundational literacy and numeracy so every child enters school ready to stay — taught in the village before the long walk to the schoolhouse becomes routine.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&h=350&fit=crop&q=80",
    },
    {
      period: "02",
      icon: FiEdit3,
      title: "Non-Formal Education",
      teaser: "For children who left early.",
      desc: "Catch-up classes for children who left school to help their families — condensed, flexible, and taught in spaces the community already trusts.",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=350&fit=crop&q=80",
    },
    {
      period: "03",
      icon: FiAward,
      title: "Scholarship Program",
      teaser: "Fees, books, uniforms.",
      desc: "Covering the real cost of staying in school so a family's income never decides whether a promising student finishes the year.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=350&fit=crop&q=80",
    },
    {
      period: "04",
      icon: FiUsers,
      title: "Teacher Training",
      teaser: "Local teachers, trained locally.",
      desc: "Child-centred teaching methods and termly refreshers for community teachers, most of whom came up through Kothowain classrooms themselves.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&h=350&fit=crop&q=80",
    },
    {
      period: "05",
      icon: FiMap,
      title: "Mobile Learning Centers",
      teaser: "The classroom that travels.",
      desc: "A rotating circuit that carries lessons to villages the road doesn't reach, on a schedule families can set their week by.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=350&fit=crop&q=80",
    },
    {
      period: "06",
      icon: FiCompass,
      title: "Digital Literacy Lab",
      teaser: "First keyboard, first click.",
      desc: "First-generation computer skills for older students, opening doors to work and study beyond the Hill Tracts.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&h=350&fit=crop&q=80",
    },
  ];

  const routeStops = [
    {
      stop: "01",
      title: "Outreach",
      desc: "We walk the village, meet families, map who's out of school.",
    },
    {
      stop: "02",
      title: "Enrollment",
      desc: "Children and parents welcomed in their own language.",
    },
    {
      stop: "03",
      title: "Learning Center",
      desc: "Foundational lessons begin close to home.",
    },
    {
      stop: "04",
      title: "Primary School",
      desc: "Transition in, with materials and follow-up visits.",
    },
    {
      stop: "05",
      title: "Scholarship",
      desc: "Top performers tracked into secondary school and beyond.",
    },
  ];

  const reportCard = [
    { subject: "Enrollment Growth", grade: "A+", score: 92 },
    { subject: "Literacy Improvement", grade: "A", score: 85 },
    { subject: "Teacher Retention", grade: "A", score: 88 },
    { subject: "Center Attendance", grade: "B+", score: 78 },
  ];

  const partners = [
    { name: "BRAC International", rotate: -6 },
    { name: "UNESCO", rotate: 4 },
    { name: "HOPE'87 Austria", rotate: -3 },
    { name: "SONNE International", rotate: 5 },
    { name: "Prince Claus Fonds", rotate: -5 },
    { name: "Helen Keller Intl.", rotate: 3 },
  ];

  const [openSubject, setOpenSubject] = useState<number | null>(0);

  return (
    <main className="">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&h=900&fit=crop&q=80"
        breadcrumb="Education"
        headingLine1="Every Child"
        headingHighlight="Learns."
        headingLine2="Every Village"
        headingAfter="Rises."
        description="From mobile learning centers on the hill trails to scholarships that carry students into university, Kothowain builds the pathway between a village and a classroom."
        seed={200}
      />

      {/* ============================================================ */}
      {/* 2. OPEN NOTEBOOK — mission spread                              */}
      {/* ============================================================ */}
      <section className="bg-paper py-[80px] lg:py-[110px] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 rounded-[1.5rem] overflow-hidden shadow-[0_25px_70px_-25px_rgba(21,36,32,0.25)] bg-white">
            <SpiralRings />

            {/* Left page — ruled paper text */}
            <div
              className="relative p-9 lg:p-14 lg:pl-16"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 30px, rgba(21,36,32,0.08) 31px)",
              }}
            >
              <span className="absolute top-0 bottom-0 left-[38px] lg:left-[46px] w-[2px] bg-amber-500/30" />
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                  Field notes
                </span>
              </div>
              <HeadingWithPaint
                text="A classroom for every hill village"
                className="text-left mb-6"
              />
              <p className="text-ink-soft leading-[1.9] text-base mb-4">
                Many children in the Chittagong Hill Tracts live hours from the
                nearest school. Kothowain's education work meets them where they
                are — in their own village, in their own language — long before
                the classroom door comes into view.
              </p>
              <p className="text-ink-soft leading-[1.9] text-base">
                What starts as a lesson under a tin roof often ends in a
                scholarship, a teaching post, or a first job beyond the hills.
              </p>

              {/* Sticky-note facts */}
              <div className="flex flex-wrap gap-3 mt-8">
                {quickFacts.map((fact) => (
                  <motion.span
                    key={fact.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ rotate: fact.rotate }}
                    className="inline-block bg-amber-500/15 border border-amber-500/40 text-teal-950 text-xs font-bold px-3.5 py-2 rounded-md shadow-sm"
                  >
                    {fact.label}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Right page — taped photo + pinned quote */}
            <div className="relative bg-cream-50 p-9 lg:p-14 flex items-center justify-center min-h-[420px]">
              <motion.div
                initial={{ opacity: 0, rotate: -6, y: 20 }}
                whileInView={{ opacity: 1, rotate: -4, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative w-[78%] aspect-[4/5] bg-white p-3 pb-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)]"
              >
                {/* washi tape corners */}
                <span className="absolute -top-3 left-6 w-14 h-6 bg-amber-400/60 rotate-[-8deg] shadow-sm" />
                <span className="absolute -top-3 right-6 w-14 h-6 bg-teal-700/40 rotate-[10deg] shadow-sm" />
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=625&fit=crop&q=80"
                    alt="Community learning center"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 6 }}
                whileInView={{ opacity: 1, x: 0, rotate: 4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-8 right-4 lg:right-8 bg-teal-950 text-cream-50 rounded-xl px-5 py-4 max-w-[210px] shadow-xl"
              >
                <FiPaperclip className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 text-amber-400 rotate-45" />
                <p className="text-xs italic leading-relaxed text-cream-50/90">
                  "A child who can read a letter can also write one back."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TODAY'S SUBJECTS — timetable accordion                     */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Today's timetable
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Six periods, one goal"
              className="justify-center"
            />
          </div>

          <div className="rounded-[1.5rem] overflow-hidden border border-teal-950/10 bg-white shadow-[0_20px_50px_-25px_rgba(21,36,32,0.2)]">
            {subjects.map((subject, index) => {
              const isOpen = openSubject === index;
              return (
                <div
                  key={subject.title}
                  className="border-b border-teal-950/8 last:border-b-0"
                >
                  <button
                    onClick={() => setOpenSubject(isOpen ? null : index)}
                    className="w-full flex items-center gap-5 px-5 lg:px-8 py-5 text-left hover:bg-amber-50/40 transition-colors duration-300"
                  >
                    <span className="font-mono text-[11px] tracking-wider text-amber-500 font-bold w-16 flex-shrink-0">
                      PERIOD {subject.period}
                    </span>
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? "bg-teal-950" : "bg-teal-950/5"
                      }`}
                    >
                      <subject.icon
                        className={`w-4.5 h-4.5 ${isOpen ? "text-amber-400" : "text-teal-700"}`}
                      />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-display text-base lg:text-lg text-teal-950 font-semibold">
                        {subject.title}
                      </span>
                      <span className="block text-ink-soft text-xs lg:text-sm">
                        {subject.teaser}
                      </span>
                    </span>
                    <FiChevronDown
                      className={`w-5 h-5 text-teal-950 flex-shrink-0 transition-transform duration-300 ${
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
                        transition={{
                          duration: 0.35,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 lg:px-8 pb-7 pt-1 flex flex-col sm:flex-row gap-5 items-start">
                          <div className="relative w-full sm:w-[180px] aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
                            <Image
                              src={subject.image}
                              alt={subject.title}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <p className="text-ink-soft text-sm leading-relaxed pl-[76px] sm:pl-0">
                            {subject.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. THE ROUTE TO SCHOOL — ticket-stub horizontal path           */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-teal-950 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                The route to school
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-cream-50">
              Five stops, one journey
            </h2>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-6 px-1 snap-x snap-mandatory scrollbar-hide">
            {routeStops.map((stop, index) => (
              <motion.div
                key={stop.stop}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex-shrink-0 w-[240px] snap-start"
              >
                <div
                  className="relative bg-cream-50 rounded-2xl p-6 pt-5"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(circle 7px at 0 50%, transparent 7px, black 7.5px), radial-gradient(circle 7px at 100% 50%, transparent 7px, black 7.5px)",
                    WebkitMaskComposite: "source-in",
                    maskComposite: "intersect",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] tracking-widest text-amber-600 font-bold">
                      STOP {stop.stop}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-teal-950 text-amber-400 text-[10px] font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <div className="border-t border-dashed border-teal-950/20 mb-4" />
                  <h3 className="font-display text-base text-teal-950 font-semibold mb-1.5">
                    {stop.title}
                  </h3>
                  <p className="text-ink-soft text-xs leading-relaxed">
                    {stop.desc}
                  </p>
                </div>
                {index < routeStops.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-5 w-5 border-t-2 border-dashed border-amber-500/40" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. REPORT CARD — impact as a graded report                    */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[820px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Progress report
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Our year in review"
              className="justify-center"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-2xl shadow-[0_25px_60px_-25px_rgba(21,36,32,0.25)] overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-amber-500 to-teal-700" />
            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-teal-950/10">
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-amber-500 font-bold uppercase">
                    Kothowain Education
                  </p>
                  <h3 className="font-display text-xl text-teal-950 font-semibold">
                    Student Progress Report
                  </h3>
                </div>
                <span className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-teal-700/40 rotate-[-12deg] text-teal-700 text-[10px] font-bold text-center leading-tight">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-5">
                {reportCard.map((row, index) => (
                  <motion.div
                    key={row.subject}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    <span className="w-40 lg:w-52 text-sm font-semibold text-teal-950 flex-shrink-0">
                      {row.subject}
                    </span>
                    <div className="flex-1 h-2.5 rounded-full bg-cream-50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.score}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + index * 0.08,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500"
                      />
                    </div>
                    <span className="w-11 text-right font-display font-bold text-teal-950">
                      {row.grade}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. TEACHER ID CARD                                             */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
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
              text="Meet a community teacher"
              className="justify-center"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
            {/* ID badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -6, y: 20 }}
              whileInView={{ opacity: 1, rotate: -3, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ rotate: 0 }}
              className="relative w-[260px] bg-white rounded-2xl shadow-[0_25px_50px_-20px_rgba(21,36,32,0.35)] p-5 pt-9 flex-shrink-0"
            >
              <span className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 rounded-full bg-cream-100 border border-teal-950/10" />
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop&q=80"
                  alt="Moyna Tripura"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="text-center font-display text-lg text-teal-950 font-semibold">
                Moyna Tripura
              </p>
              <p className="text-center text-amber-500 text-xs font-bold mb-4">
                Ruma Learning Center
              </p>
              <div className="flex justify-between text-[10px] text-ink-soft border-t border-dashed border-teal-950/15 pt-3">
                <span>ID# KW-0182</span>
                <span>Since 2019</span>
              </div>
            </motion.div>

            {/* Attendance-sheet style bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-[440px] bg-white rounded-2xl p-7 lg:p-8 shadow-[0_20px_50px_-25px_rgba(21,36,32,0.2)] relative"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(21,36,32,0.06) 28px)",
              }}
            >
              <FiPaperclip className="absolute -top-3 -left-3 w-7 h-7 text-teal-700 rotate-[-30deg]" />
              <p className="text-ink-soft text-sm leading-[1.9] mb-4">
                Moyna teaches forty children across three grade levels in a room
                the village built itself. She was one of the first graduates of
                Kothowain's teacher training track, and now trains two new
                community teachers every year.
              </p>
              <p className="text-ink-soft text-sm leading-[1.9]">
                On market days she carries workbooks two hours by foot to the
                nearest print shop and back — the ordinary persistence behind
                every number on the report above.
              </p>
              <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-teal-950/10">
                {[
                  { label: "Years", value: "6" },
                  { label: "Students", value: "40" },
                  { label: "Trained", value: "12" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-xl text-teal-950 font-bold">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-ink-soft uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. STAMPED BY OUR PARTNERS                                     */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Approved by
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Stamped by our partners"
              className="justify-center"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                style={{ rotate: partner.rotate }}
                className="w-[150px] aspect-square rounded-full border-2 border-dashed border-teal-950/30 flex flex-col items-center justify-center text-center p-4 hover:border-amber-500 transition-colors duration-300"
              >
                <FiCheckCircle className="w-5 h-5 text-teal-700 mb-2" />
                <span className="text-[11px] font-bold text-teal-950 leading-tight uppercase tracking-wide">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CERTIFICATE CTA                                             */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[130px] bg-paper relative overflow-hidden">
        <div className="max-w-[820px] mx-auto px-6 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white rounded-[1.5rem] p-1.5 shadow-[0_30px_70px_-25px_rgba(21,36,32,0.3)]"
          >
            <div className="border-2 border-dashed border-amber-500/50 rounded-[1.2rem] px-8 py-14 lg:px-16 lg:py-16 text-center relative">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-amber-500 font-bold">
                Certificate of Support
              </span>
              <h2 className="font-display font-semibold text-3xl lg:text-5xl text-teal-950 leading-[1.15] tracking-tight mt-4 mb-5">
                This entitles you to change{" "}
                <span className="text-amber-500 italic font-normal">
                  one child's
                </span>{" "}
                story
              </h2>
              <p className="text-ink-soft text-base max-w-[440px] mx-auto leading-relaxed mb-10">
                Sponsor a scholarship, fund a learning center, or spend a term
                teaching. Every gift is signed, sealed, and put to work.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5">
                <Link
                  href="#donate"
                  className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber-500 text-teal-950 font-bold text-sm transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 hover:-translate-y-0.5 active:scale-95"
                >
                  Sponsor a Child
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#volunteer"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-teal-950 text-teal-950 font-bold text-sm transition-all duration-300 hover:bg-teal-950 hover:text-cream-50 hover:-translate-y-0.5 active:scale-95"
                >
                  Teach a Term
                  <FiHeart className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-dashed border-teal-950/15 flex items-center justify-center gap-4">
                <span className="w-16 h-16 rounded-full bg-teal-950 flex items-center justify-center rotate-[-8deg] shadow-lg flex-shrink-0">
                  <span className="text-amber-400 font-display font-bold text-[10px] text-center leading-tight">
                    KOTHO
                    <br />
                    WAIN
                  </span>
                </span>
                <p className="text-xs text-ink-soft italic max-w-[220px] text-left">
                  "The road may stop at the village. Learning shouldn't."
                </p>
              </div>
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

export default EducationPage;
