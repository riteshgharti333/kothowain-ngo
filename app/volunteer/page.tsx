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
import Volunteer from "../components/Volunteer";

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

      {/* 2. VOLUNTEER IMPACT — stats with handshake metaphor */}
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
      <p className="text-ink-soft text-sm mt-4 max-w-[400px] mx-auto">
        The impact of volunteers who give their time and skills.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {volunteerStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-teal-950/5"
        >
          {/* Decorative corner circle */}
          <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Icon with rings */}
          <div className="relative w-20 h-20 mx-auto mb-4">
            {/* Ripple rings */}
            <div className="absolute inset-0 rounded-full border-2 border-amber-500/20 group-hover:border-amber-500/40 transition-colors duration-300" />
            <div className="absolute inset-2 rounded-full border border-teal-700/10 group-hover:border-teal-700/30 transition-colors duration-300" />
            
            {/* Icon */}
            <div className={`absolute inset-0 ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
              <stat.icon className="w-8 h-8 text-cream-50" />
            </div>
            
            {/* Pulse dot */}
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 animate-ping" />
          </div>

          {/* Value */}
          <div className="font-display text-3xl font-bold text-teal-950 mb-1 group-hover:text-amber-600 transition-colors duration-300">
            {stat.value}
          </div>

          {/* Label */}
          <div className="text-ink-soft text-xs uppercase tracking-wide">
            {stat.label}
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* 5. VOLUNTEER STORIES — testimonials */}
<section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
  <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
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
      <p className="text-ink-soft text-sm mt-4 max-w-[400px] mx-auto">
        Real experiences from volunteers who made a difference.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {volunteerStories.map((volunteer, index) => (
        <motion.div
          key={volunteer.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={volunteer.image}
              alt={volunteer.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />
            
            {/* Role badge */}
            <span className={`absolute top-4 left-4 ${volunteer.color} text-cream-50 text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
              {volunteer.role}
            </span>
            
            {/* Duration badge */}
            <span className="absolute top-4 right-4 bg-cream-50/20 backdrop-blur-sm text-cream-50 text-xs font-bold px-3 py-1 rounded-full">
              {volunteer.duration}
            </span>
            
            {/* Name and country */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-cream-50 font-display font-semibold text-lg">
                {volunteer.name}
              </p>
              <p className="text-cream-50/70 text-sm flex items-center gap-1">
                <FiMapPin className="w-3 h-3" />
                {volunteer.country}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative">
            {/* Quote mark */}
            <svg
              viewBox="0 0 40 30"
              className="w-8 h-6 mb-3 text-amber-500/40"
              fill="currentColor"
            >
              <path d="M0,30 L0,20 Q0,5 15,0 L20,8 Q10,12 8,20 L15,20 L15,30 Z M25,30 L25,20 Q25,5 40,0 L45,8 Q35,12 33,20 L40,20 L40,30 Z" />
            </svg>
            
            <p className="text-teal-950 text-sm italic leading-relaxed mb-4">
              "{volunteer.quote}"
            </p>

            {/* Divider */}
            <div className="border-t border-teal-950/10 pt-4 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-500">
                Kothowain Volunteer
              </span>
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-3.5 h-3.5 text-amber-500 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <Volunteer />
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