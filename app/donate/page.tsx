// app/donate/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiGift,
  FiShield,
  FiLock,
  FiDollarSign,
  FiUsers,
  FiBookOpen,
  FiDroplet,
  FiThermometer,
  FiHome,
  FiChevronDown,
  FiStar,
  FiAward,
  FiGlobe,
  FiClock,
  FiRepeat,
  FiMail,
  FiCheckCircle,
  FiInfo,
  FiDownload,
  FiMapPin,
  FiCalendar,
  FiTrendingUp,
  FiTarget,
  FiActivity,
  FiBarChart2,
} from "react-icons/fi";
import HeadingWithPaint from "../components/HeadingWithPaint";
import PageBanner from "../components/PageBanner";
import { useState } from "react";
import Donate from "../components/Donate";

/* ================================================================== */
/* Donate page-specific components                                     */
/* ================================================================== */

// Pulsing Heart Component
const PulsingHeart = ({ active = false }: { active?: boolean }) => (
  <motion.div
    animate={active ? { scale: [1, 1.2, 1] } : {}}
    transition={{ duration: 1.5, repeat: active ? Infinity : 0 }}
    className="relative w-16 h-16"
  >
    <div className="absolute inset-0 bg-teal-950 rounded-full flex items-center justify-center">
      <FiHeart className="w-8 h-8 text-amber-400" />
    </div>
    {active && (
      <motion.span
        animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute inset-0 rounded-full border-2 border-amber-500"
      />
    )}
  </motion.div>
);

// Better ImpactBar component (replaces ImpactMeter)
const ImpactBar = ({ value, label, color }: { value: number; label: string; color: string }) => (
  <div className="bg-cream-50/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-cream-50/20 transition-colors duration-300">
    <div className="flex items-center justify-between mb-3">
      <span className="text-cream-50 font-display font-semibold text-sm">
        {label}
      </span>
      <span className="text-amber-400 font-display font-bold text-xl">
        {value}%
      </span>
    </div>
    <div className="h-3 bg-cream-50/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  </div>
);

// Better TestimonialCard
const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
  >
    {/* Star icon */}
    <div className="absolute top-6 right-8 w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
      <FiStar className="w-6 h-6 text-amber-500" />
    </div>

    {/* Quote */}
    <p className="text-teal-950 text-base italic leading-relaxed mb-6">
      "{testimonial.quote}"
    </p>

    {/* Divider */}
    <div className="border-t border-teal-950/10 pt-5">
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-amber-500">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg text-teal-950 font-semibold">
            {testimonial.name}
          </h3>
          <p className="text-amber-500 text-sm font-bold">
            {testimonial.role}
          </p>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="w-4 h-4 text-amber-500 fill-current" />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

// Trust badge
const TrustBadge = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-2 bg-cream-50 rounded-full px-4 py-2">
    <Icon className="w-4 h-4 text-teal-700" />
    <span className="text-xs font-semibold text-teal-950">{text}</span>
  </div>
);

// FAQ Accordion Item
const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-amber-50/40 transition-colors duration-300"
    >
      <span className="font-display text-base text-teal-950 font-semibold">
        {question}
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
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const DonatePage = () => {
  /* ---------------------------------------------------------------- */
  /* Content                                                           */
  /* ---------------------------------------------------------------- */

  const impactStats = [
    {
      label: "Lives Impacted",
      value: "18,500+",
      icon: FiHeart,
      color: "bg-amber-500",
    },
    {
      label: "Programs Funded",
      value: "12",
      icon: FiTarget,
      color: "bg-teal-700",
    },
    {
      label: "Villages Served",
      value: "86",
      icon: FiMapPin,
      color: "bg-amber-400",
    },
    {
      label: "Transparency Rating",
      value: "A+",
      icon: FiAward,
      color: "bg-teal-950",
    },
  ];

  const impactAreas = [
    {
      id: "education",
      title: "Education",
      icon: FiBookOpen,
      description:
        "Your donation helps keep children in school with learning materials, teacher training, and scholarships.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop&q=80",
      color: "bg-amber-500",
      stats: { served: "3,200+", progress: 92 },
    },
    {
      id: "water",
      title: "Clean Water",
      icon: FiDroplet,
      description:
        "Fund gravity-fed water systems that bring clean water to entire villages, reducing waterborne diseases.",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=400&fit=crop&q=80",
      color: "bg-teal-700",
      stats: { served: "12,500+", progress: 94 },
    },
    {
      id: "health",
      title: "Medical Support",
      icon: FiThermometer,
      description:
        "Support mobile health camps, emergency referrals, and community health worker training.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80",
      color: "bg-amber-400",
      stats: { served: "8,500+", progress: 88 },
    },
    {
      id: "food",
      title: "Food & Nutrition",
      icon: FiHome,
      description:
        "Keep community kitchens running and provide nutrition packages during lean seasons.",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop&q=80",
      color: "bg-teal-950",
      stats: { served: "1.1M+", progress: 85 },
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Monthly Donor",
      quote:
        "I've been giving monthly for 3 years. The transparency reports show exactly where my money goes.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    },
    {
      name: "Tomás Rivera",
      role: "One-time Donor",
      quote:
        "I donated to the water program and got photos of the standpost being installed. Incredible impact!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    },
    {
      name: "Amara Okafor",
      role: "Child Sponsor",
      quote:
        "Sponsoring a child has been the most rewarding experience. I get updates every term.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    },
  ];

  const faqs = [
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes! Kothowain Foundation is a registered non-profit organization in Bangladesh. We provide tax receipts for all donations. International donors should check their local tax laws for deductibility.",
    },
    {
      question: "How much of my donation goes directly to programs?",
      answer:
        "87% of every donation goes directly to our programs. The remaining 13% covers essential administrative costs, ensuring we can continue our work efficiently and transparently.",
    },
    {
      question: "Can I choose which program my donation supports?",
      answer:
        "Absolutely! You can designate your donation to Education, Clean Water, Medical Support, or Food & Nutrition programs. You can also give to 'Where Most Needed' and we'll allocate it to the most urgent needs.",
    },
    {
      question: "How do monthly donations work?",
      answer:
        "Monthly donations are automatically charged to your card or account each month. You can pause, modify, or cancel at any time. Monthly giving provides sustainable, predictable funding for our programs.",
    },
    {
      question: "Will I receive updates about my impact?",
      answer:
        "Yes! You'll receive quarterly impact reports, project updates, and stories from the communities you're supporting. We believe in complete transparency.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeArea, setActiveArea] = useState("education");

  return (
    <main className="overflow-hidden">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&h=900&fit=crop&q=80"
        breadcrumb="Donate"
        headingLine1="Your Gift"
        headingHighlight="Changes Lives."
        headingLine2="Every Taka"
        headingAfter="Counts."
        description="When you donate to Kothowain, you're not just giving money — you're giving a child an education, a family clean water, and a village hope for the future."
        seed={1200}
      />

     {/* 2. IMPACT STATS — trust indicators */}
<section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
  <div className="max-w-[1100px] mx-auto container-px">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {impactStats.map((stat, index) => (
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

    {/* Trust badges */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap gap-3 justify-center mt-12"
    >
      {[
        { icon: FiShield, text: "Secure Payment" },
        { icon: FiLock, text: "256-bit SSL Encryption" },
        { icon: FiAward, text: "Registered NGO" },
        { icon: FiCheckCircle, text: "Transparent Reporting" },
      ].map((badge, index) => (
        <motion.div
          key={badge.text}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          className="group/badge flex items-center gap-2 bg-white border border-teal-950/10 rounded-full px-4 py-2 transition-all duration-300 hover:bg-teal-950 hover:border-teal-950 hover:scale-105 cursor-pointer"
        >
          <badge.icon className="w-4 h-4 text-teal-700 group-hover/badge:text-amber-400 transition-colors" />
          <span className="text-xs font-semibold text-teal-950 group-hover/badge:text-cream-50 transition-colors">
            {badge.text}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* ============================================================ */}
      {/* 3. DONATION FORM + IMPACT AREAS                              */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1200px] mx-auto container-px">
          <div className="grid grid-cols-1">
            {/* Donation Form Component */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-center flex justify-center mb-8">
                <PulsingHeart active={true} />
              </div>
              <Donate />
            </motion.div>

            {/* Impact Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                  <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                    Where your money goes
                  </span>
                </div>
                <h3 className="font-display text-2xl text-teal-950 font-semibold mb-4">
                  Choose your impact area
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {impactAreas.map((area, index) => (
                  <motion.div
                    key={area.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setActiveArea(area.id)}
                    className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      activeArea === area.id ? "ring-4 ring-amber-500" : ""
                    }`}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 to-transparent" />
                      <span
                        className={`absolute top-3 left-3 ${area.color} text-cream-50 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1`}
                      >
                        <area.icon className="w-3 h-3" />
                        {area.title}
                      </span>
                    </div>
                    <div className="bg-white p-4">
                      <p className="text-ink-soft text-xs leading-relaxed mb-3">
                        {area.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-teal-950">
                          {area.stats.served} served
                        </span>
                        <div className="w-20 h-1.5 bg-cream-50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${area.stats.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full bg-amber-500 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
    {/* 4. IMPACT METERS — where money goes */}
<section className="py-[90px] lg:py-[120px] bg-teal-950 relative overflow-hidden">
  <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 pointer-events-none" />
  <div className="max-w-[900px] mx-auto container-px relative">
    <div className="text-center mb-14">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
        <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
          Transparency
        </span>
        <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
      </div>
      <h2 className="font-display font-semibold text-3xl lg:text-4xl text-cream-50">
        Where every taka goes
      </h2>
    </div>

    {/* Better horizontal bar layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ImpactBar value={87} label="Programs" color="bg-gradient-to-r from-amber-500 to-amber-400" />
      <ImpactBar value={8} label="Administration" color="bg-gradient-to-r from-teal-600 to-teal-500" />
      <ImpactBar value={3} label="Fundraising" color="bg-gradient-to-r from-amber-400 to-teal-600" />
      <ImpactBar value={2} label="Reserve" color="bg-gradient-to-r from-teal-700 to-teal-600" />
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-cream-50/70 text-center text-sm mt-12 max-w-[600px] mx-auto"
    >
      87% of your donation goes directly to programs. We publish annual
      reports and financial statements to maintain complete transparency.
    </motion.p>
  </div>
</section>


{/* 5. DONOR TESTIMONIALS */}
<section className="py-[90px] lg:py-[120px] bg-cream-100 relative overflow-hidden">
  <div className="max-w-[1100px] mx-auto container-px">
    <div className="text-center mb-14">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
        <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
          Donor stories
        </span>
        <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
      </div>
      <HeadingWithPaint
        text="Why people give"
        className="justify-center"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          {/* Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-4 h-4 text-amber-500 fill-current" />
              ))}
            </div>
            
            {/* Quote */}
            <p className="text-teal-950 text-base italic leading-relaxed mb-6 flex-1">
              "{testimonial.quote}"
            </p>
            
            {/* Person info */}
            <div className="flex items-center gap-4 pt-5 border-t border-teal-950/10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="font-display text-base text-teal-950 font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-amber-500 text-xs font-bold">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* ============================================================ */}
      {/* 6. FAQ SECTION                                                */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[800px] mx-auto container-px">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Common questions
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint text="Donation FAQs" className="justify-center" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
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

export default DonatePage;
