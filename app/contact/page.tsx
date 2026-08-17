// app/contact/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiMessageCircle,
  FiUser,
  FiCheckCircle,
  FiGlobe,
  FiCompass,
  FiChevronDown,
  FiGift,
  FiShare2,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiNavigation,
  FiCalendar,
  FiHome,
  FiUsers,
} from "react-icons/fi";
import HeadingWithPaint from "../components/HeadingWithPaint";
import PageBanner from "../components/PageBanner";
import { useState } from "react";

/* ================================================================== */
/* Contact-specific reusable components                               */
/* ================================================================== */

// Letter envelope component
const Envelope = ({ active = false }: { active?: boolean }) => (
  <motion.div
    animate={active ? { rotate: [0, -5, 5, 0] } : {}}
    transition={{ duration: 2, repeat: active ? Infinity : 0 }}
    className="relative w-24 h-16"
  >
    <div className="absolute inset-0 bg-teal-950 rounded-lg" />
    <div className="absolute top-0 left-0 right-0 h-0 w-0 border-l-[48px] border-r-[48px] border-t-[32px] border-l-transparent border-r-transparent border-t-amber-500" style={{ transform: 'translateY(-1px)' }} />
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-amber-400/30 rounded-t-lg" />
    {active && (
      <motion.span
        animate={{ y: [0, -10, 0], opacity: [1, 0, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute -top-8 left-1/2 transform -translate-x-1/2"
      >
        <FiSend className="w-5 h-5 text-amber-500" />
      </motion.span>
    )}
  </motion.div>
);

// Location pin with pulse
const LocationPin = ({ active = false }: { active?: boolean }) => (
  <motion.div
    animate={active ? { scale: [1, 1.2, 1] } : {}}
    transition={{ duration: 1.5, repeat: active ? Infinity : 0 }}
    className="relative w-16 h-16"
  >
    <div className="absolute inset-0 bg-amber-500 rounded-full flex items-center justify-center">
      <FiMapPin className="w-8 h-8 text-teal-950" />
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

// Response time indicator
const ResponseTime = ({ time = "24 hours" }: { time?: string }) => (
  <div className="flex items-center gap-2 text-sm">
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
    </span>
    <span className="text-ink-soft">
      Usually responds within <span className="font-bold text-teal-950">{time}</span>
    </span>
  </div>
);

const ContactPage = () => {
  /* ---------------------------------------------------------------- */
  /* Content                                                           */
  /* ---------------------------------------------------------------- */

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Visit Us",
      lines: [
        "Kothowain Foundation",
        "House 12, Road 5, Banani",
        "Dhaka 1213, Bangladesh",
      ],
      action: "Get Directions",
      color: "bg-amber-500",
    },
    {
      icon: FiPhone,
      title: "Call Us",
      lines: [
        "+880 1712-345678",
        "+880 1912-345678",
        "Sun-Thu, 9am-5pm",
      ],
      action: "Call Now",
      color: "bg-teal-700",
    },
    {
      icon: FiMail,
      title: "Email Us",
      lines: [
        "info@kothowain.org",
        "volunteer@kothowain.org",
        "donate@kothowain.org",
      ],
      action: "Send Email",
      color: "bg-amber-400",
    },
    {
      icon: FiClock,
      title: "Office Hours",
      lines: [
        "Sunday - Thursday",
        "9:00 AM - 5:00 PM",
        "Friday - Saturday: Closed",
      ],
      action: "Set Appointment",
      color: "bg-teal-950",
    },
  ];

  const offices = [
    {
      city: "Dhaka",
      type: "Head Office",
      address: "House 12, Road 5, Banani, Dhaka 1213",
      phone: "+880 1712-345678",
      email: "dhaka@kothowain.org",
      hours: "Sun-Thu, 9am-5pm",
      image: "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?w=600&h=400&fit=crop&q=80",
    },
    {
      city: "Rangamati",
      type: "Regional Office",
      address: "College Gate, Rangamati Sadar",
      phone: "+880 1812-345678",
      email: "rangamati@kothowain.org",
      hours: "Sun-Thu, 9am-5pm",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop&q=80",
    },
    {
      city: "Bandarban",
      type: "Field Office",
      address: "Main Road, Bandarban Sadar",
      phone: "+880 1912-345678",
      email: "bandarban@kothowain.org",
      hours: "Sun-Thu, 9am-5pm",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop&q=80",
    },
  ];

  const socialLinks = [
    { icon: FiFacebook, name: "Facebook", handle: "@kothowain", color: "bg-blue-600", url: "#" },
    { icon: FiTwitter, name: "Twitter", handle: "@kothowain", color: "bg-sky-500", url: "#" },
    { icon: FiInstagram, name: "Instagram", handle: "@kothowain", color: "bg-pink-600", url: "#" },
    { icon: FiYoutube, name: "YouTube", handle: "Kothowain Foundation", color: "bg-red-600", url: "#" },
    { icon: FiLinkedin, name: "LinkedIn", handle: "Kothowain Foundation", color: "bg-blue-800", url: "#" },
  ];

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days (Sunday-Thursday). For urgent matters, please call our office directly.",
    },
    {
      question: "Can I visit your project sites?",
      answer: "Yes! We welcome visitors to our project sites in the Chittagong Hill Tracts. Please contact us at least 2 weeks in advance so we can arrange logistics and ensure community availability.",
    },
    {
      question: "How can I partner with Kothowain?",
      answer: "We're always open to partnerships with organizations, businesses, and individuals who share our mission. Email us at partnership@kothowain.org with your proposal or idea.",
    },
    {
      question: "Do you accept in-kind donations?",
      answer: "Yes, we accept in-kind donations including medical supplies, educational materials, water testing equipment, and more. Please contact us to discuss what items we currently need.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeOffice, setActiveOffice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop&q=80"
        breadcrumb="Contact"
        headingLine1="Let's Start"
        headingHighlight="A Conversation."
        headingLine2="We're"
        headingAfter="Listening."
        description="Whether you have a question, want to volunteer, or are ready to support our work in the Chittagong Hill Tracts — we'd love to hear from you."
        seed={900}
      />

      {/* ============================================================ */}
      {/* 2. CONTACT INFO CARDS — quick ways to reach us               */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Get in touch
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Reach us anytime"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-7 h-7 text-cream-50" />
                </div>
                <h3 className="font-display text-lg text-teal-950 font-semibold mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-sm text-ink-soft">
                      {line}
                    </p>
                  ))}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-amber-500 text-sm font-bold hover:text-teal-950 transition-colors"
                >
                  {info.action}
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CONTACT FORM + MAP — main interaction area                 */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Envelope active={true} />
                <div>
                  <h2 className="font-display text-2xl text-teal-950 font-semibold">
                    Send us a message
                  </h2>
                  <ResponseTime time="24 hours" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
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
                      Message Sent!
                    </h3>
                    <p className="text-ink-soft text-sm mb-6">
                      Thank you for reaching out, {formData.name}. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm hover:bg-teal-950 hover:text-amber-400 transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-teal-950 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Full name"
                          className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-teal-950 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-teal-950 mb-2">
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+880 1XXX-XXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-teal-950 mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                        >
                          <option>General Inquiry</option>
                          <option>Volunteering</option>
                          <option>Donation</option>
                          <option>Partnership</option>
                          <option>Media</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-teal-950 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className="w-full px-4 py-3 rounded-xl border border-teal-950/10 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 hover:-translate-y-0.5 active:scale-95"
                    >
                      Send Message
                      <FiSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Map and quick info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* Map placeholder */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-[300px] bg-teal-950">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop&q=80"
                  alt="Map"
                  fill
                  className="object-cover opacity-60"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <LocationPin active={true} />
                    <p className="text-cream-50 font-display font-semibold mt-2">
                      Kothowain Foundation
                    </p>
                    <p className="text-cream-50/70 text-sm">
                      Banani, Dhaka
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-display text-lg text-teal-950 font-semibold mb-4">
                  Follow our journey
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="group flex items-center gap-2 bg-cream-50 hover:bg-teal-950 rounded-full px-4 py-2 transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4 text-teal-700 group-hover:text-amber-400 transition-colors" />
                      <span className="text-xs font-semibold text-teal-950 group-hover:text-cream-50 transition-colors">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. OFFICE LOCATIONS — interactive cards                       */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Our locations
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Where to find us"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveOffice(index)}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  activeOffice === index ? "ring-4 ring-amber-500" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={office.image}
                    alt={office.city}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-cream-50 font-display text-xl font-semibold">
                      {office.city}
                    </span>
                    <span className="block text-cream-50/70 text-xs">
                      {office.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2 text-sm text-ink-soft">
                    <p className="flex items-start gap-2">
                      <FiMapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      {office.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <FiPhone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      {office.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <FiMail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      {office.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <FiClock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      {office.hours}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FAQ SECTION                                                */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Before you write
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Common questions"
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
      {/* 6. NEWSLETTER SIGNUP                                          */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-teal-950 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="absolute -bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-teal-400/5 pointer-events-none" />
        
        <div className="max-w-[600px] mx-auto px-6 lg:px-10 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Stay connected
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-cream-50 mb-4">
              Get updates from the hills
            </h2>
            <p className="text-cream-50/70 text-base max-w-[400px] mx-auto leading-relaxed mb-8">
              Subscribe to our newsletter for stories, impact updates, and
              opportunities to get involved.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 rounded-full bg-cream-50/10 border border-cream-50/20 text-cream-50 placeholder-cream-50/50 focus:border-amber-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-cream-50 hover:-translate-y-0.5 active:scale-95"
              >
                Subscribe
                <FiSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. FINAL CTA                                                  */}
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
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=900&fit=crop&q=80"
              alt="Community connection"
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
              <FiHeart className="w-4 h-4" /> Ready when you are
            </span>

            <h2 className="font-display font-semibold text-4xl lg:text-5xl text-cream-50 leading-[1.05] tracking-tight mb-4">
              Let's build{" "}
              <span className="text-amber-500 italic font-normal">something together</span>
            </h2>

            <p className="text-cream-50/70 text-lg max-w-[420px] leading-relaxed mb-8">
              Whether you're a donor, volunteer, partner, or just someone who
              cares — we're here to talk about how we can make a difference
              together.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#donate"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-cream-50 hover:-translate-y-0.5 active:scale-95"
              >
                Make a Donation
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/volunteer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-cream-50/30 text-cream-50 font-semibold text-sm transition-all duration-300 hover:border-cream-50 hover:bg-cream-50 hover:text-teal-950 hover:-translate-y-0.5 active:scale-95"
              >
                Become a Volunteer
                <FiUsers className="w-4 h-4" />
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

export default ContactPage;