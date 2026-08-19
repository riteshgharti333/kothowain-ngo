"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiArrowUpRight,
  FiHeart,
  FiMail,
} from "react-icons/fi";
import HeadingWithPaint from "./HeadingWithPaint";

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const founder = {
    name: "Gabriel Tripura",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&q=80",
    bio1: "Gabriel founded Kothowain in 2003 with a vision to empower indigenous communities across the Chittagong Hill Tracts. His deep understanding of local challenges has shaped the organization's community-first approach.",
    bio2: "Under his leadership, Kothowain has grown from a small grassroots initiative to a trusted development organization serving thousands of families through education, healthcare, and livelihood programs.",
    quote: "Change begins with listening to the community.",
    socials: { linkedin: "#", twitter: "#", facebook: "#" },
  };

  const otherMembers = [
    {
      name: "Donald Pakura",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
      bio: "Coordinating grassroots projects across the Hill Tracts with focus on sustainable development.",
      socials: { linkedin: "#", twitter: "#", facebook: "#" },
    },
    {
      name: "M A Mamun",
      role: "Country Manager",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&q=80",
      bio: "Driving impact through strategic partnerships and national program expansion.",
      socials: { linkedin: "#", twitter: "#", facebook: "#" },
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-[120px] lg:py-[150px] bg-paper relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-500/5 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-teal-950/5 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-2 sm:px-5 md:px-6 lg:px-10 relative">
        {/* Section Head */}
        <div className="text-center max-w-[640px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
              Our team
            </span>
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <HeadingWithPaint
              text="Meet the people behind the work"
              className="justify-center"
            />
          </motion.div>
        </div>

        {/* Founder - Featured Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-center bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(21,36,32,0.2)]">
            {/* Founder Image */}
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>

            {/* Founder Info */}
            <div className="p-8 lg:p-12">
              {/* Accent line */}
              <div className="w-12 h-1 rounded-full bg-amber-500 mb-5" />

              <h3 className="font-display text-3xl lg:text-4xl text-teal-950 font-semibold mb-2">
                {founder.name}
              </h3>
              <p className="text-amber-500 text-sm font-bold mb-6">
                {founder.role}
              </p>

              {/* Bio paragraphs */}
              <p className="text-ink-soft text-[15px] leading-relaxed mb-4">
                {founder.bio1}
              </p>
              <p className="text-ink-soft text-[15px] leading-relaxed mb-6">
                {founder.bio2}
              </p>

              {/* Quote */}
              <div className="bg-cream-50 rounded-2xl p-5 mb-6 border-l-4 border-amber-500">
                <p className="text-teal-950 text-sm italic leading-relaxed">
                  "{founder.quote}"
                </p>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-ink-soft font-medium">
                  Connect:
                </span>
                {[
                  {
                    icon: FiLinkedin,
                    href: founder.socials.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: FiTwitter,
                    href: founder.socials.twitter,
                    label: "Twitter",
                  },
                  {
                    icon: FiFacebook,
                    href: founder.socials.facebook,
                    label: "Facebook",
                  },
                  { icon: FiMail, href: "#", label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-cream-50 flex items-center justify-center text-teal-950 hover:bg-amber-500 hover:text-teal-950 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Members - Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherMembers.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(21,36,32,0.15)] hover:shadow-[0_30px_60px_-20px_rgba(21,36,32,0.3)] transition-all duration-500"
            >
              <div className="grid grid-cols-[0.6fr_1fr] sm:grid-cols-[0.5fr_1fr]">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 200px, 250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/30 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6 lg:p-7 flex flex-col justify-center">
                  {/* Accent line - NOW ALL AMBER */}
                  <div className="w-8 h-1 rounded-full bg-amber-500 mb-3" />

                  <h3 className="font-display text-xl lg:text-2xl text-teal-950 font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-bold mb-3 text-amber-500">
                    {member.role}
                  </p>

                  <p className="text-ink-soft text-xs lg:text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex items-center gap-2">
                    {[
                      {
                        icon: FiLinkedin,
                        href: member.socials.linkedin,
                        label: "LinkedIn",
                      },
                      {
                        icon: FiTwitter,
                        href: member.socials.twitter,
                        label: "Twitter",
                      },
                      {
                        icon: FiFacebook,
                        href: member.socials.facebook,
                        label: "Facebook",
                      },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-8 h-8 rounded-full bg-cream-50 flex items-center justify-center text-teal-950 hover:bg-amber-500 hover:text-teal-950 transition-all duration-300 hover:scale-110"
                      >
                        <social.icon className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
