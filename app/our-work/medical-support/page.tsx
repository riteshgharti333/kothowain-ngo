// app/our-work/medical-support/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiActivity,
  FiPlus,
  FiUsers,
  FiClock,
  FiMapPin,
  FiShield,
  FiThermometer,
  FiPieChart,
  FiCalendar,
  FiChevronDown,
  FiCheckCircle,
  FiGift,
  FiHome,
  FiStar,
  FiMail,
} from "react-icons/fi";
import HeadingWithPaint from "../../components/HeadingWithPaint";
import PageBanner from "../../components/PageBanner";
import { useState } from "react";
import SplitSection from "@/app/components/SplitSection";

/* ================================================================== */
/* Medical-specific reusable components                                */
/* ================================================================== */

// Heartbeat line divider
const HeartbeatDivider = ({ flip = false }: { flip?: boolean }) => (
  <svg
    viewBox="0 0 1200 40"
    preserveAspectRatio="none"
    className={`w-full h-[25px] block ${flip ? "rotate-180" : ""}`}
  >
    <path
      d="M0,20 L200,20 L220,20 L230,8 L240,32 L250,12 L260,20 L300,20 L320,20 L330,5 L340,35 L350,10 L360,20 L400,20 L420,20 L430,8 L440,32 L450,12 L460,20 L500,20 L520,20 L530,5 L540,35 L550,10 L560,20 L600,20 L620,20 L630,8 L640,32 L650,12 L660,20 L700,20 L720,20 L730,5 L740,35 L750,10 L760,20 L800,20 L820,20 L830,8 L840,32 L850,12 L860,20 L900,20 L920,20 L930,5 L940,35 L950,10 L960,20 L1000,20 L1020,20 L1030,8 L1040,32 L1050,12 L1060,20 L1100,20"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Medical cross with pulse
const MedicalCross = ({ size = "lg" }: { size?: "sm" | "lg" }) => (
  <div className={`relative ${size === "lg" ? "w-16 h-16" : "w-10 h-10"}`}>
    <div className="absolute inset-0 bg-teal-950 rounded-xl flex items-center justify-center">
      <div className="relative w-2/3 h-2/3">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-full bg-amber-400" />
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1/3 bg-amber-400" />
      </div>
    </div>
    <motion.span
      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-500"
    />
  </div>
);

// Vital signs monitor
const VitalSignsMonitor = ({
  value = 80,
  label = "Health",
}: {
  value?: number;
  label?: string;
}) => (
  <div className="bg-teal-950 rounded-2xl p-4 w-full">
    <div className="flex items-center justify-between mb-2">
      <span className="text-cream-50/60 text-[10px] font-mono uppercase tracking-wider">
        {label}
      </span>
      <span className="text-amber-400 font-mono text-xs font-bold">
        {value}%
      </span>
    </div>
    <div className="h-2 bg-cream-50/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
      />
    </div>
  </div>
);

const MedicalSupportPage = () => {
  /* ---------------------------------------------------------------- */
  /* Content                                                           */
  /* ---------------------------------------------------------------- */

  const services = [
    {
      icon: FiThermometer,
      tag: "Preventive",
      title: "Mobile Health Camps",
      desc: "Weekly health camps that travel to remote villages, screening for malnutrition, malaria, and waterborne diseases before they become emergencies.",
      impact: "120+ camps a year",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=450&fit=crop&q=80",
    },
    {
      icon: FiActivity,
      tag: "Maternal",
      title: "Mother & Child Clinics",
      desc: "Antenatal checkups, safe delivery support, and postnatal care that reduce maternal mortality in villages hours from the nearest hospital.",
      impact: "2,400 mothers served",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=450&fit=crop&q=80",
    },
    {
      icon: FiShield,
      tag: "Emergency",
      title: "Emergency Referral Fund",
      desc: "A pooled fund that covers transport and first treatment costs for families facing medical emergencies — the difference between reaching help or not.",
      impact: "380 emergencies funded",
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=450&fit=crop&q=80",
    },
    {
      icon: FiUsers,
      tag: "Training",
      title: "Community Health Workers",
      desc: "Local volunteers trained in first aid, basic diagnosis, and health education — a health worker in every village, not just every town.",
      impact: "96 workers trained",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=450&fit=crop&q=80",
    },
  ];

  const triagePath = [
    {
      step: "01",
      title: "Detection",
      desc: "Community health workers identify symptoms early.",
      icon: FiThermometer,
      color: "from-amber-500 to-teal-600",
    },
    {
      step: "02",
      title: "First Response",
      desc: "Basic treatment starts at village health posts.",
      icon: FiActivity,
      color: "from-teal-600 to-amber-400",
    },
    {
      step: "03",
      title: "Referral",
      desc: "Serious cases referred with transport support.",
      icon: FiMapPin,
      color: "from-amber-400 to-teal-700",
    },
    {
      step: "04",
      title: "Recovery",
      desc: "Follow-up care ensures full recovery at home.",
      icon: FiHeart,
      color: "from-teal-700 to-amber-500",
    },
  ];

  const healthStats = [
    {
      label: "Health Camps Held",
      value: "120+",
      icon: FiCalendar,
      color: "bg-amber-500",
    },
    {
      label: "Patients Treated",
      value: "8,500+",
      icon: FiUsers,
      color: "bg-teal-700",
    },
    {
      label: "Maternal Mortality Drop",
      value: "45%",
      icon: FiHeart,
      color: "bg-amber-500",
    },
    {
      label: "Villages Reached",
      value: "86",
      icon: FiMapPin,
      color: "bg-teal-700",
    },
  ];

  // NEW: Prescription card data
  const prescriptions = [
    {
      rx: "RX-001",
      patient: "Children under 5",
      treatment: "Vitamin A supplementation & deworming",
      dosage: "Bi-annual",
      duration: "Ongoing",
      status: "Active",
      icon: FiThermometer,
    },
    {
      rx: "RX-002",
      patient: "Pregnant mothers",
      treatment: "Iron-folate tablets & antenatal care",
      dosage: "Daily",
      duration: "9 months",
      status: "Active",
      icon: FiHeart,
    },
    {
      rx: "RX-003",
      patient: "Chronic patients",
      treatment: "Hypertension & diabetes management",
      dosage: "Monthly checkup",
      duration: "Lifelong",
      status: "Tracking",
      icon: FiActivity,
    },
    {
      rx: "RX-004",
      patient: "Malaria risk areas",
      treatment: "Rapid testing & ACT therapy",
      dosage: "As needed",
      duration: "Seasonal",
      status: "Ready",
      icon: FiShield,
    },
  ];

  // NEW: Health camp calendar
  const campSchedule = [
    {
      week: "Week 1",
      location: "Ruma Bazar",
      service: "General screening & vaccinations",
      distance: "Central",
      capacity: "200 patients",
      full: false,
    },
    {
      week: "Week 2",
      location: "Thanchi",
      service: "Maternal & child health",
      distance: "4hr walk from Ruma",
      capacity: "150 patients",
      full: true,
    },
    {
      week: "Week 3",
      location: "Belaichori",
      service: "Eye camp & dental checkup",
      distance: "Boat + 2hr walk",
      capacity: "180 patients",
      full: false,
    },
    {
      week: "Week 4",
      location: "Alikadam",
      service: "Chronic disease follow-up",
      distance: "Jeep track",
      capacity: "120 patients",
      full: false,
    },
  ];

  const medicalPartners = [
    { name: "BRAC Health", note: "Mobile clinics" },
    { name: "Médecins Sans Frontières", note: "Emergency care" },
    { name: "UNICEF", note: "Maternal health" },
    { name: "icddr,b", note: "Waterborne diseases" },
    { name: "Helen Keller Intl.", note: "Nutrition screening" },
    { name: "James P. Grant School", note: "Training" },
  ];

  const [activeService, setActiveService] = useState(0);
  const [expandedRx, setExpandedRx] = useState<number | null>(0);

  return (
    <main className="">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        breadcrumb="Medical Support"
        headingLine1="Every Life"
        headingHighlight="Counts."
        headingLine2="Every Village"
        headingAfter="Has a Healer."
        description="From mobile health camps on the hill trails to emergency funds that carry patients to hospital, Kothowain brings care closer to the communities that need it most."
        seed={500}
      />

      {/* ============================================================ */}
      {/* 2. TRIAGE PATH — patient journey                              */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                  The patient's journey
                </span>
              </div>
              <HeadingWithPaint
                text="Care that starts before crisis"
                className="text-left mb-6"
              />
              <p className="text-ink-soft leading-[1.85] text-base mb-4">
                In the Chittagong Hill Tracts, the nearest hospital is often a
                day's journey away. Kothowain's health program works to shorten
                that journey — starting with community health workers who can
                detect illness before it becomes emergency.
              </p>
              <p className="text-ink-soft leading-[1.85] text-base mb-8">
                What begins as a home visit becomes a village clinic, then a
                referral, then recovery — a chain of care that works even when
                the road doesn't.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Mobile Health Camps",
                  "Mother & Child",
                  "Emergency Fund",
                  "Health Workers",
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

            {/* Heartbeat visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-teal-950 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-500/10" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-teal-700/20" />

                {/* EKG line */}
                <div className="relative mb-8">
                  <svg viewBox="0 0 400 100" className="w-full h-24">
                    <motion.path
                      d="M0,50 L40,50 L60,50 L70,20 L80,80 L90,30 L100,50 L130,50 L150,50 L160,25 L170,75 L180,35 L190,50 L220,50 L240,50 L250,20 L260,80 L270,30 L280,50 L310,50 L330,50 L340,25 L350,75 L360,35 L370,50 L400,50"
                      fill="none"
                      stroke="#e8a317"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                </div>

                {/* Triage steps */}
                <div className="space-y-4">
                  {triagePath.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <span
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <step.icon className="w-4 h-4 text-cream-50" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-amber-400 font-bold">
                            {step.step}
                          </span>
                          <span className="text-cream-50 font-display font-semibold text-sm">
                            {step.title}
                          </span>
                        </div>
                        <p className="text-cream-50/60 text-xs">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. MEDICAL SERVICES — treatment cards                         */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="absolute top-0 left-0 right-0 text-cream-100">
          <HeartbeatDivider />
        </div>
        <div className="max-w-[1280px] mx-auto container-px pt-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Our services
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Four ways we heal"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
                className={`group relative rounded-[1.75rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[320px] cursor-pointer ${
                  activeService === index ? "ring-4 ring-amber-500" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/50 to-transparent" />

                <span className="absolute top-5 left-5 bg-amber-500 text-teal-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {service.tag}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                  <h3 className="font-display text-xl lg:text-2xl text-cream-50 font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-cream-50/75 text-sm leading-relaxed mb-3 max-w-[380px]">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                    <FiActivity className="w-3.5 h-3.5" /> {service.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. HEALTH IMPACT — vital signs dashboard                      */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-teal-950 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="absolute -bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-teal-400/5 pointer-events-none" />

        <div className="max-w-[1100px] mx-auto container-px relative">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Vital signs
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-cream-50">
              Health, measured in lives
            </h2>
            <p className="text-cream-50/60 text-sm mt-3 max-w-[380px] mx-auto">
              The numbers that show communities getting stronger.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {healthStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${stat.color} rounded-2xl p-6 text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
                <stat.icon className="w-8 h-8 text-cream-50 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="font-display text-3xl font-bold text-cream-50 mb-1">
                  {stat.value}
                </div>
                <div className="text-cream-50/80 text-xs uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* NEW SECTION 2: HEALTH CAMP CALENDAR                           */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1000px] mx-auto container-px">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                This month
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Where the camps are"
              className="justify-center"
            />
            <p className="text-ink-soft text-sm mt-4 max-w-[400px] mx-auto">
              Four weeks, four locations, one roving medical team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {campSchedule.map((camp, index) => (
              <motion.div
                key={camp.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                {/* Week badge */}
                <span className="absolute top-5 right-5 bg-amber-500 text-teal-950 text-xs font-bold px-3 py-1 rounded-full">
                  {camp.week}
                </span>

                {/* Location */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-teal-950 flex items-center justify-center">
                    <FiMapPin className="w-5 h-5 text-amber-400" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-teal-950 font-semibold">
                      {camp.location}
                    </h3>
                    <p className="text-xs text-ink-soft">{camp.distance}</p>
                  </div>
                </div>

                {/* Service */}
                <p className="text-sm text-teal-950 font-semibold mb-4">
                  {camp.service}
                </p>

                {/* Capacity bar */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-ink-soft font-bold">
                    {camp.capacity}
                  </span>
                  <span
                    className={`text-xs font-bold ${camp.full ? "text-amber-500" : "text-teal-600"}`}
                  >
                    {camp.full ? "FULL" : "OPEN"}
                  </span>
                </div>
                <div className="h-2 bg-cream-50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: camp.full ? "100%" : "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full ${camp.full ? "bg-amber-500" : "bg-teal-600"}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. COMMUNITY HEALTH WORKER SPOTLIGHT                          */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[1000px] mx-auto container-px">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                From the field
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Meet a village health worker"
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
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=750&fit=crop&q=80"
                alt="Community health worker"
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
                Dr. Anjali Chakma
              </h3>
              <p className="text-amber-500 text-sm font-bold mb-6">
                Community Health Worker, Belaichori
              </p>

              <p className="text-ink-soft text-sm leading-relaxed mb-5">
                Anjali walks between four villages every week, carrying a
                medical bag and a ledger of patients. She can diagnose the
                common illnesses, treat minor injuries, and knows exactly when
                to send someone to the clinic in town.
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6 border-t border-b border-dashed border-teal-950/15 py-5">
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Serving since
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    2017
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Villages covered
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">4</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Patients this year
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    340
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Referrals made
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    52
                  </span>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-5 border-l-4 border-amber-500">
                <p className="text-teal-950 text-sm italic leading-relaxed">
                  "I'm not a doctor. I'm the person who knows when you need
                  one."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. PARTNERS IN HEALTH                                         */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1100px] mx-auto container-px">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Standing with us
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Partners in health"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {medicalPartners.map((partner, index) => (
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
                      <FiPlus className="w-5 h-5 text-amber-400" />
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
      {/* 7. EMERGENCY CTA                                              */}
      {/* ============================================================ */}
      {/* Health CTA - Same split design */}
      <SplitSection
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=900&fit=crop&q=80"
        imageAlt="Emergency medical care"
        badgeIcon={FiHeart} // Heart icon for health
        badgeText="Every gift heals"
        title="Fund a"
        highlightText="health camp"
        highlightAfter="for a village"
        description="One camp treats 200 patients. Your gift brings a doctor, a nurse, and a full medical kit to a village that's never had a clinic."
        buttons={[
          {
            text: "Fund a Health Camp",
            href: "#donate",
            icon: FiArrowRight,
            variant: "primary",
          },
          {
            text: "Volunteer as a Health Worker",
            href: "#volunteer",
            icon: FiHeart,
            variant: "outline",
          },
        ]}
      />

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

export default MedicalSupportPage;
