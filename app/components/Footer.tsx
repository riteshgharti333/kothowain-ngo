"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowUpRight,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Causes", href: "#causes" },
    { label: "Our Team", href: "#team" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "Donate", href: "#donate" },
  ];

  const programs = [
    { label: "Food Security", href: "#" },
    { label: "Water & Sanitation", href: "#" },
    { label: "Education Support", href: "#" },
    { label: "Healthcare", href: "#" },
    { label: "Emergency Relief", href: "#" },
  ];

  const socials = [
    { icon: FiFacebook, href: "#", label: "Facebook" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    { icon: FiYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer
      id="contact"
      className="bg-teal-950 text-cream-50/70 relative overflow-hidden pt-[80px]"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-teal-700 to-amber-500" />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-amber-500/5 pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-64 h-64 rounded-full bg-cream-50/3 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        {/* CTA Banner - fully visible */}
        <div className=" bg-amber-500 rounded-[2rem] p-8 lg:p-10 mb-16 relative z-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl text-teal-950 font-semibold mb-2">
                Ready to make a difference?
              </h3>
              <p className="text-white text-sm">
                Your support can change lives in the Chittagong Hill Tracts.
              </p>
            </div>
            <Link
              href="#donate"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-teal-950 text-amber-400 font-semibold text-sm transition-all duration-300 hover:bg-ink hover:text-amber-400 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
            >
              Donate Now
              <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] gap-10 lg:gap-14 pb-14 border-b border-cream-50/10">
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                <span className="font-display font-bold text-teal-950 text-lg">
                  K
                </span>
              </div>
              <span className="font-display font-bold text-xl text-cream-50">
                Kothowain
              </span>
            </Link>
            <p className="text-[13.5px] leading-[1.7] max-w-[280px] mb-6">
              Vulnerable People&apos;s Development Organization, working across
              the Chittagong Hill Tracts, Bandarban, Bangladesh.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-cream-50/5 flex items-center justify-center text-cream-50/60 hover:bg-amber-500 hover:text-teal-950 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.08em] text-amber-400 mb-5 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-cream-50/60 hover:text-amber-400 transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-amber-400 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.08em] text-amber-400 mb-5 font-bold">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <a
                    href={program.href}
                    className="group flex items-center gap-2 text-sm text-cream-50/60 hover:text-amber-400 transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-amber-400 transition-all duration-300" />
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.08em] text-amber-400 mb-5 font-bold">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-cream-50/60">
                <FiPhone className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>+880 1556 561 400</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream-50/60">
                <FiMail className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>kothowainbd@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream-50/60">
                <FiMapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>Kalaghata, Bandarban, BD</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream-50/60">
                <FiClock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>Sat – Thu: 9:00 am – 6:00 pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-cream-50/40">
          <div>© 2026 Kothowain Bangladesh. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <FiHeart className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>by</span>
            <a
              href="#"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Kothowain Team
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
