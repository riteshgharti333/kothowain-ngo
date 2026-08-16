// app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiShield,
  FiUsers,
  FiBookOpen,
  FiActivity,
  FiDroplet,
  FiHome,
  FiAlertCircle,
  FiTarget,
  FiEye,
  FiAward,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import HeadingWithPaint from "../components/HeadingWithPaint";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import TornEdgeOrganic from "../components/TornEdgeOrganic";

const AboutPage = () => {
  const values = [
    {
      icon: FiHeart,
      title: "Dignity",
      desc: "Every person deserves respect and the opportunity to thrive with honor.",
    },
    {
      icon: FiShield,
      title: "Integrity",
      desc: "We are transparent, accountable, and honest in everything we do.",
    },
    {
      icon: FiUsers,
      title: "Equality",
      desc: "We believe in equal rights and opportunities for all communities.",
    },
    {
      icon: FiTarget,
      title: "Empowerment",
      desc: "We enable people to take control of their own development.",
    },
    {
      icon: FiHeart,
      title: "Compassion",
      desc: "We act with kindness and empathy toward those we serve.",
    },
    {
      icon: FiAward,
      title: "Sustainability",
      desc: "We build lasting solutions that continue beyond our involvement.",
    },
  ];

  const timeline = [
    {
      year: "2003",
      title: "Founded",
      desc: "Kothowain established in response to extreme poverty and cultural erosion in the CHT.",
    },
    {
      year: "2006",
      title: "First Community Project",
      desc: "Launched first education program reaching 200 children in Bandarban.",
    },
    {
      year: "2012",
      title: "Expanded Programs",
      desc: "Added healthcare, sanitation, and livelihood development initiatives.",
    },
    {
      year: "2018",
      title: "Major Milestone",
      desc: "Reached 5,000+ families across three Hill Districts.",
    },
    {
      year: "2026",
      title: "Today",
      desc: "Serving 7,000+ families with 500+ volunteers and 3,000+ projects.",
    },
  ];

  const programs = [
    {
      icon: FiBookOpen,
      title: "Education",
      desc: "Creating access to learning and skills for indigenous children.",
    },
    {
      icon: FiActivity,
      title: "Healthcare",
      desc: "Supporting healthier communities through medical outreach.",
    },
    {
      icon: FiHeart,
      title: "Food & Nutrition",
      desc: "Helping families access essential nutrition year-round.",
    },
    {
      icon: FiUsers,
      title: "Community Development",
      desc: "Creating opportunities for sustainable independence.",
    },
    {
      icon: FiAlertCircle,
      title: "Emergency Relief",
      desc: "Responding when communities need immediate help.",
    },
  ];

  const impactStats = [
    { value: "10K+", label: "Lives Reached" },
    { value: "25+", label: "Communities" },
    { value: "50+", label: "Projects" },
    { value: "5K+", label: "Families Supported" },
  ];

  return (
    <main>
      {/* About Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-cream-50 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&h=900&fit=crop&q=80"
            alt="Community"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-950/70 to-teal-950/40" />
        </div>

        {/* Torn paper divider at bottom */}
        <TornEdgeOrganic
          color="#fffdf8"
          height={100}
          seed={100}
          className="z-20"
        />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-cream-50/60 text-sm mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-amber-400">About</span>
            </div>

            <h1 className="font-display font-semibold text-5xl lg:text-6xl text-cream-50 leading-[1.05] tracking-tight mb-6">
              Building Dignity.
              <br />
              <span className="text-amber-500 italic font-normal">
                Creating Opportunity.
              </span>
            </h1>

            <p className="text-cream-50/70 text-lg max-w-[500px] leading-relaxed">
              Kothowain — the Vulnerable People&apos;s Development Organization
              — works alongside indigenous communities across the Chittagong
              Hill Tracts to create lasting change through education,
              healthcare, and sustainable development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-[100px] lg:py-[120px] bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                  Who we are
                </span>
              </div>
              <HeadingWithPaint
                text="A community led by its people"
                className="text-left mb-6"
              />
              <p className="text-ink-soft leading-[1.8] text-base mb-4">
                Kothowain was founded in 2003 to address extreme poverty, low
                literacy, and the erosion of cultural identity among indigenous
                peoples in the Chittagong Hill Tracts of Bangladesh.
              </p>
              <p className="text-ink-soft leading-[1.8] text-base mb-4">
                We serve Marma, Chakma, Tripura, and other indigenous
                communities across Bandarban, Rangamati, and Khagrachari
                districts.
              </p>
              <p className="text-ink-soft leading-[1.8] text-base">
                What sets us apart is our community-first approach — every
                program is designed with, not for, the people it serves.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop&q=80"
                  alt="Community farming"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -left-4 bg-amber-500 text-teal-950 p-5 rounded-2xl shadow-xl max-w-[220px]">
                <div className="font-display text-3xl font-bold">21+</div>
                <div className="text-xs font-semibold mt-1">
                  Years of service
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story - Timeline */}
      <section className="py-[100px] lg:py-[120px] bg-cream-100 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Our story
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </motion.div>
            <HeadingWithPaint
              text="The journey so far"
              className="justify-center"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-teal-950/10 lg:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row gap-4 mb-10 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-cream-100 z-10" />

                {/* Content */}
                <div
                  className={`ml-14 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                    <div className="text-amber-500 font-bold text-sm mb-1">
                      {item.year}
                    </div>
                    <h3 className="font-display text-lg text-teal-950 font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-ink-soft text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-[100px] lg:py-[120px] bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-teal-950 rounded-[2rem] p-8 lg:p-10 text-cream-50"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center mb-6">
                <FiTarget className="w-6 h-6 text-teal-950" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">
                Our Mission
              </h3>
              <p className="text-cream-50/70 leading-[1.8]">
                To bring sustainable, positive change by reducing poverty among
                marginalized people — especially women and children — through
                participatory, rights-based programs in the Chittagong Hill
                Tracts.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-amber-500 rounded-[2rem] p-8 lg:p-10 text-teal-950"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-950 flex items-center justify-center mb-6">
                <FiEye className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">
                Our Vision
              </h3>
              <p className="text-teal-950/80 leading-[1.8]">
                Socio-economic development, promotion and empowerment among
                marginalized people in Bangladesh — creating a future where
                every community has the resources and dignity to thrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-[100px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Our values
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </motion.div>
            <HeadingWithPaint
              text="What guides our work"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-7 border border-teal-950/5 hover:border-amber-500/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-950/5 group-hover:bg-teal-950 flex items-center justify-center mb-4 transition-colors duration-300">
                  <value.icon className="w-5 h-5 text-teal-700 group-hover:text-amber-400 transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg text-teal-950 font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-[100px] lg:py-[120px] bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                What we do
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </motion.div>
            <HeadingWithPaint
              text="Our areas of work"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-cream-50 rounded-2xl p-7 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                    index % 2 === 0 ? "bg-teal-950" : "bg-amber-500"
                  }`}
                >
                  <program.icon
                    className={`w-5 h-5 ${
                      index % 2 === 0 ? "text-amber-400" : "text-teal-950"
                    }`}
                  />
                </div>
                <h3 className="font-display text-lg text-teal-950 font-semibold mb-2">
                  {program.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {program.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-[80px] bg-teal-950">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-amber-400">
                  {stat.value}
                </div>
                <div className="text-cream-50/60 text-sm mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <Team />

      {/* Testimonial */}
      <Testimonial />

      {/* Final CTA */}
      <section className="py-[100px] bg-paper">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-semibold text-4xl lg:text-5xl text-teal-950 mb-6"
          >
            Be Part of the{" "}
            <span className="text-amber-500 italic font-normal">Change</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-ink-soft text-lg mb-8"
          >
            Change begins when people choose to act.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="#donate"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 hover:-translate-y-0.5"
            >
              Donate Now
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#volunteer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-teal-950 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-teal-950 hover:text-cream-50 hover:-translate-y-0.5"
            >
              Become a Volunteer
              <FiArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
