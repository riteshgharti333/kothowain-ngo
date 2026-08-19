// components/stories/StoryCards.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiArrowRight, 
  FiMapPin, 
  FiClock, 
  FiCalendar, 
  FiDroplet, 
  FiThermometer, 
  FiHome,
} from "react-icons/fi";
import HeadingWithPaint from "../components/HeadingWithPaint";

const StoryCards = () => {
  // All stories data inside component
  const stories = [
    {
      id: 1,
      title: "The Water Keeper of Thanchi",
      author: "Lalmohon Chakma",
      location: "Thanchi, Bandarban",
      program: "Clean Water",
      date: "February 2024",
      readTime: "6 min read",
      color: "bg-teal-700",
      icon: FiDroplet,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=750&fit=crop&q=80",
      excerpt: "Every Tuesday, Lalmohon walks the pipeline from spring to standpost, checking joints and clearing leaf traps. It's a small ritual with big consequences.",
    },
    {
      id: 2,
      title: "A Health Worker's Journey",
      author: "Anjali Chakma",
      location: "Belaichori, Rangamati",
      program: "Medical Support",
      date: "January 2024",
      readTime: "7 min read",
      color: "bg-amber-500",
      icon: FiThermometer,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=750&fit=crop&q=80",
      excerpt: "Anjali walks between four villages every week, carrying a medical bag and a ledger of patients. She's not a doctor — but she's the reason many people don't need one.",
    },
    {
      id: 3,
      title: "The Kitchen That Feeds a Village",
      author: "Ushai Marma",
      location: "Ruma, Bandarban",
      program: "Food & Nutrition",
      date: "December 2023",
      readTime: "5 min read",
      color: "bg-amber-400",
      icon: FiHome,
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=750&fit=crop&q=80",
      excerpt: "Ushai runs the stove for forty families twice a week, turning whatever the community pools together into a meal that stretches the furthest.",
    },
  ];

  return (
    <section className="py-[90px] lg:py-[120px] bg-paper">
      <div className="max-w-[1280px] mx-auto px-2 sm:px-5 md:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
              From the field
            </span>
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
          </div>
          <HeadingWithPaint
            text="Stories of change"
            className="justify-center"
          />
          <p className="text-ink-soft text-sm mt-4 max-w-[400px] mx-auto">
            Real stories from the Chittagong Hill Tracts — told by the people who lived them.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />
                
                {/* Program badge */}
                <span className={`absolute top-4 left-4 ${story.color} text-cream-50 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2`}>
                  <story.icon className="w-3 h-3" />
                  {story.program}
                </span>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-cream-50/80 text-sm">
                  <FiMapPin className="w-4 h-4" />
                  <span>{story.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date and read time */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-ink-soft flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {story.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-ink-soft" />
                  <span className="text-xs text-ink-soft flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    {story.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-teal-950 font-semibold mb-2 group-hover:text-amber-600 transition-colors">
                  {story.title}
                </h3>

                {/* Author */}
                <p className="text-amber-500 text-sm font-bold mb-3">
                  By {story.author}
                </p>

                {/* Excerpt */}
                <p className="text-ink-soft text-sm leading-relaxed">
                  {story.excerpt}
                </p>

                {/* Read more */}
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 text-amber-500 font-semibold text-sm hover:text-teal-950 transition-colors mt-4"
                >
                  Read Full Story
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryCards;