// app/team/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiUsers,
  FiMapPin,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiChevronDown,
  FiCheckCircle,
  FiGift,
  FiStar,
  FiAward,
  FiCompass,
  FiBriefcase,
  FiGlobe,
  FiUser,
  FiUserPlus,
  FiHome,
} from "react-icons/fi";
import HeadingWithPaint from "../components/HeadingWithPaint";
import PageBanner from "../components/PageBanner";
import { useState } from "react";
import SplitSection from "../components/SplitSection";

/* ================================================================== */
/* Type definitions                                                   */
/* ================================================================== */

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  socials: SocialLink[];
}

/* ================================================================== */
/* Team-specific reusable components                                 */
/* ================================================================== */

// Team member ID badge
const TeamBadge = ({
  name = "Team Member",
  role = "Role",
}: {
  name?: string;
  role?: string;
}) => (
  <div className="relative w-64 bg-white rounded-2xl shadow-xl p-5 pt-8 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 to-teal-600" />
    <span className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-5 rounded-full bg-cream-100 border border-teal-950/10" />

    {/* Avatar */}
    <div className="w-20 h-20 rounded-full bg-teal-950 mx-auto mb-3 flex items-center justify-center">
      <FiUser className="w-10 h-10 text-amber-400" />
    </div>

    <p className="text-center font-display text-lg text-teal-950 font-semibold">
      {name}
    </p>
    <p className="text-center text-amber-500 text-xs font-bold mb-3">{role}</p>

    <div className="border-t border-dashed border-teal-950/15 pt-3">
      <div className="flex justify-between text-[10px] text-ink-soft">
        <span>ID# TM-2024</span>
        <span>Kothowain</span>
      </div>
    </div>
  </div>
);

// Team member card component (reusable)
const TeamMemberCard = ({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
        isExpanded ? "ring-4 ring-amber-500" : ""
      }`}
    >
      {/* Member Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />

        {/* Social links on hover */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="w-9 h-9 rounded-full bg-cream-50/20 backdrop-blur-sm flex items-center justify-center hover:bg-amber-500 transition-colors duration-300"
            >
              <social.icon className="w-4 h-4 text-cream-50" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Member Info */}
      <div className="p-5">
        <h3 className="font-display text-lg text-teal-950 font-semibold mb-1">
          {member.name}
        </h3>
        <p className="text-amber-500 text-xs font-bold mb-2">{member.role}</p>
        <p className="text-ink-soft text-xs mb-3">{member.department}</p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold text-teal-950 hover:text-amber-500 transition-colors flex items-center gap-1"
        >
          {isExpanded ? "Show Less" : "Read Bio"}
          <FiChevronDown
            className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-xs text-ink-soft leading-relaxed mt-3 pt-3 border-t border-teal-950/10">
                {member.bio}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Section divider with team motif
const TeamDivider = () => (
  <div className="flex items-center gap-4 my-8">
    <span className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500/30" />
    <FiUsers className="w-5 h-5 text-amber-500" />
    <span className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500/30" />
  </div>
);

const TeamPage = () => {
  /* ---------------------------------------------------------------- */
  /* Content                                                           */
  /* ---------------------------------------------------------------- */

  // Leadership Team
  const leadershipTeam = [
    {
      name: "Rupak Chakma",
      role: "Founder & Executive Director",
      department: "Leadership",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80",
      bio: "Rupak founded Kothowain in 2015 after seeing the gaps in services for hill communities. He brings 15 years of development experience and a deep commitment to community-led change.",
      socials: [
        { icon: FiLinkedin, url: "#" },
        { icon: FiTwitter, url: "#" },
        { icon: FiMail, url: "#" },
      ],
    },
    {
      name: "Monika Tripura",
      role: "Program Director",
      department: "Programs",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
      bio: "Monika oversees all program areas including education, water, health, and food security. She previously worked with UNICEF and BRAC on community development programs.",
      socials: [
        { icon: FiLinkedin, url: "#" },
        { icon: FiMail, url: "#" },
      ],
    },
    {
      name: "Aung Marma",
      role: "Finance Director",
      department: "Operations",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&q=80",
      bio: "Aung manages all financial operations and ensures transparency in every taka spent. His background in accounting and development finance keeps Kothowain accountable.",
      socials: [
        { icon: FiLinkedin, url: "#" },
        { icon: FiMail, url: "#" },
      ],
    },
    {
      name: "Sarah Rahman",
      role: "Partnership Manager",
      department: "Development",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80",
      bio: "Sarah builds and maintains relationships with donors, partners, and stakeholders. Her work has secured funding for over 50 community projects.",
      socials: [
        { icon: FiLinkedin, url: "#" },
        { icon: FiTwitter, url: "#" },
        { icon: FiMail, url: "#" },
      ],
    },
  ];

  // Field Team
  const fieldTeam = [
    {
      name: "Priya Chakma",
      role: "Education Coordinator",
      department: "Field Operations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80",
      bio: "Priya coordinates 42 learning centers across the Hill Tracts. She trains teachers and ensures quality education reaches every village.",
      socials: [
        { icon: FiMail, url: "#" },
        { icon: FiPhone, url: "#" },
      ],
    },
    {
      name: "Jiten Tripura",
      role: "Water Program Manager",
      department: "Field Operations",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80",
      bio: "Jiten oversees the installation and maintenance of gravity-fed water systems. He's an engineer by training and a problem-solver by nature.",
      socials: [
        { icon: FiMail, url: "#" },
        { icon: FiPhone, url: "#" },
      ],
    },
    {
      name: "Maloti Marma",
      role: "Health Program Lead",
      department: "Field Operations",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&q=80",
      bio: "Maloti leads the community health worker program. With 10 years of public health experience, she trains village health workers across 86 villages.",
      socials: [
        { icon: FiMail, url: "#" },
        { icon: FiPhone, url: "#" },
      ],
    },
    {
      name: "Sujoy Chakma",
      role: "Food Security Coordinator",
      department: "Field Operations",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80",
      bio: "Sujoy manages community kitchens and nutrition programs. His agricultural expertise helps communities grow and share food sustainably.",
      socials: [
        { icon: FiMail, url: "#" },
        { icon: FiPhone, url: "#" },
      ],
    },
    {
      name: "Nishi Tripura",
      role: "Community Engagement Officer",
      department: "Field Operations",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&q=80",
      bio: "Nishi is the bridge between communities and programs. She ensures that every project starts with community voices and ends with community ownership.",
      socials: [
        { icon: FiMail, url: "#" },
        { icon: FiPhone, url: "#" },
      ],
    },
    {
      name: "Bipul Chakma",
      role: "Logistics Officer",
      department: "Operations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80",
      bio: "Bipul handles the complex logistics of working in remote hill areas. From boats to motorbikes to footpaths, he gets supplies where they need to go.",
      socials: [
        { icon: FiMail, url: "#" },
        { icon: FiPhone, url: "#" },
      ],
    },
  ];

  // Advisory Board
  const advisoryBoard = [
    {
      name: "Dr. Helena Smith",
      role: "Education Advisor",
      organization: "Former UNESCO Director",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop&q=80",
      expertise: "Education Policy",
    },
    {
      name: "Prof. David Chen",
      role: "Water Systems Advisor",
      organization: "MIT Environmental Engineering",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=500&fit=crop&q=80",
      expertise: "Water Engineering",
    },
    {
      name: "Dr. Amina Rahman",
      role: "Public Health Advisor",
      organization: "icddr,b",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&q=80",
      expertise: "Community Health",
    },
  ];

  // Volunteers & Support Team
  const supportTeam = [
    {
      name: "Emily Watson",
      role: "Remote Volunteer",
      location: "United Kingdom",
      contribution: "Content writing & translation",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80",
    },
    {
      name: "Carlos Rodriguez",
      role: "Pro Bono Consultant",
      location: "Spain",
      contribution: "M&E framework development",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80",
    },
    {
      name: "Yuki Tanaka",
      role: "Remote Designer",
      location: "Japan",
      contribution: "Brand & visual design",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80",
    },
    {
      name: "Fatima Ali",
      role: "Volunteer Coordinator",
      location: "Bangladesh",
      contribution: "Volunteer program support",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
    },
  ];

  const [activeSection, setActiveSection] = useState("leadership");

  const teamSections = [
    {
      id: "leadership",
      label: "Leadership",
      icon: FiStar,
      count: leadershipTeam.length,
    },
    {
      id: "field",
      label: "Field Team",
      icon: FiMapPin,
      count: fieldTeam.length,
    },
    {
      id: "advisory",
      label: "Advisory Board",
      icon: FiAward,
      count: advisoryBoard.length,
    },
    {
      id: "support",
      label: "Support Team",
      icon: FiHeart,
      count: supportTeam.length,
    },
  ];

  const teamStats = [
    {
      label: "Core Team Members",
      value: "24+",
      icon: FiUsers,
      color: "bg-amber-500",
    },
    {
      label: "From Hill Tracts",
      value: "80%",
      icon: FiMapPin,
      color: "bg-teal-700",
    },
    {
      label: "Advisors & Mentors",
      value: "12+",
      icon: FiAward,
      color: "bg-amber-400",
    },
    {
      label: "Volunteers Worldwide",
      value: "240+",
      icon: FiGlobe,
      color: "bg-teal-950",
    },
  ];

  return (
    <main className="">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80"
        breadcrumb="Our Team"
        headingLine1="The People"
        headingHighlight="Behind The Work."
        headingLine2="Passionate."
        headingAfter="Committed."
        description="Kothowain is powered by a diverse team of dreamers and doers — from field workers in the Hill Tracts to advisors around the world. Together, we're building lasting change."
        seed={1000}
      />

      {/* 2. TEAM INTRO — culture & values */}
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                  Who we are
                </span>
              </div>
              <HeadingWithPaint
                text="More than just colleagues"
                className="text-left mb-6"
              />
              <p className="text-ink-soft leading-[1.85] text-base mb-4">
                Our team is a family — connected by shared values, diverse
                experiences, and a deep commitment to the communities we serve.
                From Dhaka to Bandarban, we work together across distances and
                disciplines.
              </p>
              <p className="text-ink-soft leading-[1.85] text-base mb-8">
                We believe in local leadership, cultural respect, and the power
                of community wisdom. That's why 80% of our team comes from the
                Chittagong Hill Tracts themselves.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Local Leadership",
                  "Cultural Respect",
                  "Community Wisdom",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="group/tag relative text-xs font-bold text-teal-950 bg-white border border-teal-950/10 px-4 py-2 rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 hover:border-teal-950 hover:scale-105"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {tag}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Cards with better design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {teamStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-teal-950/5"
                >
                  {/* Decorative corner circle */}
                  <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl ${stat.color} mx-auto mb-3 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-cream-50" />
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TEAM NAVIGATION TABS                                       */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1280px] mx-auto container-px">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Meet the team
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="The people behind the work"
              className="justify-center"
            />
          </div>

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {teamSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-teal-950 text-amber-400 shadow-lg"
                    : "bg-white text-teal-950 hover:bg-amber-50"
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
                <span className="text-xs opacity-70">({section.count})</span>
              </button>
            ))}
          </div>

          <TeamDivider />

          {/* Leadership Team */}
          {activeSection === "leadership" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {leadershipTeam.map((member, index) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  index={index}
                />
              ))}
            </motion.div>
          )}

          {/* Field Team */}
          {activeSection === "field" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {fieldTeam.map((member, index) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  index={index}
                />
              ))}
            </motion.div>
          )}

          {/* Advisory Board */}
          {activeSection === "advisory" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {advisoryBoard.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-teal-950 text-xs font-bold px-3 py-1 rounded-full">
                      {member.expertise}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-lg text-teal-950 font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-amber-500 text-xs font-bold mb-1">
                      {member.role}
                    </p>
                    <p className="text-ink-soft text-xs">
                      {member.organization}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Support Team */}
          {activeSection === "support" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {supportTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-cream-50 text-xs font-bold flex items-center gap-1">
                        <FiMapPin className="w-3 h-3" /> {member.location}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base text-teal-950 font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-amber-500 text-xs font-bold mb-2">
                      {member.role}
                    </p>
                    <p className="text-ink-soft text-xs">
                      {member.contribution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. OTHER TEAMS & COMMUNITY PARTNERS                           */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[1100px] mx-auto container-px">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Extended family
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Other teams we work with"
              className="justify-center"
            />
            <p className="text-ink-soft text-sm mt-4 max-w-[500px] mx-auto">
              Our work is strengthened by partnerships with community
              organizations, local groups, and volunteer teams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Community Committees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-teal-950 rounded-3xl p-8 text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-amber-500/10" />
              <div className="w-16 h-16 rounded-full bg-amber-500 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiUsers className="w-8 h-8 text-teal-950" />
              </div>
              <h3 className="font-display text-xl text-cream-50 font-semibold mb-2">
                Community Committees
              </h3>
              <p className="text-cream-50/60 text-sm mb-4">
                Village-level committees that lead local development
              </p>
              <div className="text-3xl font-display font-bold text-amber-400 mb-2">
                52
              </div>
              <p className="text-cream-50/50 text-xs uppercase tracking-wide">
                Active committees
              </p>
            </motion.div>

            {/* Youth Volunteers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-amber-50" />
              <div className="w-16 h-16 rounded-full bg-teal-700 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiHeart className="w-8 h-8 text-cream-50" />
              </div>
              <h3 className="font-display text-xl text-teal-950 font-semibold mb-2">
                Youth Volunteer Corps
              </h3>
              <p className="text-ink-soft text-sm mb-4">
                Young leaders from Hill Tracts communities
              </p>
              <div className="text-3xl font-display font-bold text-teal-700 mb-2">
                180+
              </div>
              <p className="text-ink-soft text-xs uppercase tracking-wide">
                Youth volunteers
              </p>
            </motion.div>

            {/* Partner Organizations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-amber-500 rounded-3xl p-8 text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
              <div className="w-16 h-16 rounded-full bg-teal-950 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiGlobe className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-display text-xl text-teal-950 font-semibold mb-2">
                Partner Organizations
              </h3>
              <p className="text-teal-950/70 text-sm mb-4">
                NGOs, agencies, and institutions we collaborate with
              </p>
              <div className="text-3xl font-display font-bold text-teal-950 mb-2">
                15+
              </div>
              <p className="text-teal-950/70 text-xs uppercase tracking-wide">
                Active partnerships
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. JOIN THE TEAM CTA                                          */}
      {/* ============================================================ */}
      {/* Join Team CTA - Same split design */}
      <SplitSection
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=900&fit=crop&q=80"
        imageAlt="Team collaboration"
        badgeIcon={FiUserPlus} // User plus icon
        badgeText="Join our team"
        title="Want to be"
        highlightText="part of this?"
        description="We're always looking for passionate people who want to make a difference. Whether you're in Dhaka, Bandarban, or anywhere in the world — there's a place for you here."
        buttons={[
          {
            text: "Volunteer With Us",
            href: "/volunteer",
            icon: FiArrowRight,
            variant: "primary",
          },
          {
            text: "Contact Us",
            href: "/contact",
            icon: FiMail, // Mail icon
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
      `}</style>
    </main>
  );
};

export default TeamPage;
