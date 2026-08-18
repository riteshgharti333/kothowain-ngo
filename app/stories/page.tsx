// app/stories/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiBookOpen,
  FiDroplet,
  FiThermometer,
  FiHome,
  FiMapPin,
  FiClock,
  FiUser,
  FiUsers,
  FiStar,
  FiChevronDown,
  FiTag,
  FiShare2,
  FiMail,
  FiCheckCircle,
  FiGift,
  FiSun,
  FiMoon,
  FiCompass,
} from "react-icons/fi";
import HeadingWithPaint from "../components/HeadingWithPaint";
import PageBanner from "../components/PageBanner";
import { useState } from "react";

/* ================================================================== */
/* Story-specific reusable components                                 */
/* ================================================================== */

// Chapter divider with book spine
const ChapterDivider = ({ chapter = "01" }: { chapter?: string }) => (
  <div className="flex items-center gap-4 my-8">
    <span className="font-mono text-xs font-bold text-amber-500 tracking-widest">
      {chapter}
    </span>
    <span className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
    <FiBookOpen className="w-4 h-4 text-teal-700" />
  </div>
);

// Story bookmark
const StoryBookmark = ({ color = "bg-amber-500" }: { color?: string }) => (
  <div className={`absolute -top-1 -right-2 w-8 h-12 ${color} shadow-lg rounded-b-lg`}>
    <div className="absolute bottom-0 left-0 right-0 h-4 bg-white/20" />
  </div>
);

// Quote mark
const QuoteMark = ({ flip = false }: { flip?: boolean }) => (
  <svg
    viewBox="0 0 40 30"
    className={`w-10 h-8 ${flip ? "rotate-180" : ""}`}
    fill="currentColor"
  >
    <path d="M0,30 L0,20 Q0,5 15,0 L20,8 Q10,12 8,20 L15,20 L15,30 Z M25,30 L25,20 Q25,5 40,0 L45,8 Q35,12 33,20 L40,20 L40,30 Z" />
  </svg>
);

// Story progress indicator
const StoryProgress = ({ current = 1, total = 6 }: { current?: number; total?: number }) => (
  <div className="flex items-center gap-2">
    {Array.from({ length: total }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: i * 0.05 }}
        className={`w-2 h-2 rounded-full ${
          i < current ? "bg-amber-500" : "bg-cream-100"
        }`}
      />
    ))}
    <span className="text-xs font-mono text-ink-soft ml-2">
      {current}/{total}
    </span>
  </div>
);

const StoryPage = () => {
  /* ---------------------------------------------------------------- */
  /* Content                                                           */
  /* ---------------------------------------------------------------- */

  const featuredStory = {
    title: "The Girl Who Taught Her Village to Read",
    author: "Priya Tripura",
    location: "Ruma, Bandarban",
    program: "Education",
    date: "March 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=1000&fit=crop&q=80",
    excerpt:
      "At six, Priya had never held a book. Today, she's the first girl from her village to finish secondary school — and she's teaching three younger students every evening by lamplight.",
    story:
      "Priya's village sits three hours from the nearest road, on a hill that rises like a green wave above the Sangu River. When Kothowain's first learning center opened there in 2015, Priya was among the first children to arrive — barefoot, curious, and carrying a younger sibling on her back.\n\nShe learned to read in the first month. By the third month, she was reading aloud to the other children while the teacher wrote on the chalkboard. By the end of the first year, she had read every book in the center's small library — twice.\n\nWhen the time came to move to the government primary school, Priya was ready. She walked the two-hour trail every morning, rain or shine, and came home to teach what she'd learned to her siblings and neighbors.\n\nToday, at seventeen, Priya has finished secondary school and is preparing for her higher secondary exams. She dreams of becoming a teacher — and she's already started, holding evening classes for three younger students in her family's courtyard.\n\n'I want to be the teacher I had,' she says. 'The one who showed me that books are windows, not walls.'",
    quotes: [
      "I want to be the teacher I had. The one who showed me that books are windows, not walls.",
      "Every evening, I teach three children. Soon there will be more.",
    ],
    tags: ["Education", "Girls' Leadership", "Scholarship"],
    stats: [
      { label: "Years with Kothowain", value: "11" },
      { label: "Books read", value: "300+" },
      { label: "Students taught", value: "9" },
    ],
  };

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
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=750&fit=crop&q=80",
      excerpt:
        "Every Tuesday, Lalmohon walks the pipeline from spring to standpost, checking joints and clearing leaf traps. It's a small ritual with big consequences — 240 families depend on it.",
      story:
        "Lalmohon never expected to become a water keeper. He was a farmer, tending a small plot of ginger and turmeric on the slopes above Thanchi. But when Kothowain installed the village's first gravity-fed water system in 2018, someone needed to maintain it — and Lalmohon raised his hand.\n\nSix years later, he's still walking the pipeline every Tuesday. The route takes two hours, winding through bamboo groves and along stream banks. He checks for leaks, clears leaf traps, and tests the water quality at three points along the way.\n\n'The water doesn't care who drinks it,' he says. 'But I care that it's clean when it reaches them.'\n\nHis daughter, now fifteen, sometimes walks with him. She's learning the route, the joints, the places where problems tend to start. When Lalmohon is too old to walk the pipeline, she'll take over.\n\nThat's the thing about water keepers — they're not just maintaining pipes. They're passing on a responsibility that keeps the whole village healthy.",
      quotes: [
        "The water doesn't care who drinks it. But I care that it's clean when it reaches them.",
        "My daughter walks with me now. Soon, she'll know the route better than I do.",
      ],
      tags: ["Clean Water", "Community Leadership", "Sustainability"],
      stats: [
        { label: "Pipeline length", value: "4.2 km" },
        { label: "Families served", value: "240" },
        { label: "Years as keeper", value: "6" },
      ],
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
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=750&fit=crop&q=80",
      excerpt:
        "Anjali walks between four villages every week, carrying a medical bag and a ledger of patients. She's not a doctor — but she's the reason many people don't need one.",
      story:
        "Anjali's medical bag weighs four kilograms. It contains a thermometer, a blood pressure cuff, bandages, antiseptic, basic medicines, and a well-worn notebook filled with patient records. She carries it four days a week, walking between the villages of Belaichori.\n\nWhen Kothowain trained its first cohort of community health workers in 2017, Anjali was among them. She'd seen too many neighbors die from illnesses that could have been treated early — if only someone had known the warning signs.\n\nNow she's that someone. She can diagnose malaria, spot the early symptoms of malnutrition, and deliver basic first aid. She knows when a patient needs a referral to the clinic in town, and she has an emergency fund to help them get there.\n\n'I'm not a doctor,' she says. 'I'm the person who knows when you need one. That's the difference between a treatable illness and a tragedy.'\n\nThis year, Anjali has treated 340 patients and made 52 referrals. Every one of those referrals meant someone reached the clinic in time.",
      quotes: [
        "I'm not a doctor. I'm the person who knows when you need one.",
        "Every referral I make means someone reached the clinic in time.",
      ],
      tags: ["Health", "Women's Leadership", "Community"],
      stats: [
        { label: "Patients this year", value: "340" },
        { label: "Villages covered", value: "4" },
        { label: "Referrals made", value: "52" },
      ],
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
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=750&fit=crop&q=80",
      excerpt:
        "Ushai runs the stove for forty families twice a week, turning whatever the community pools together into a meal that stretches the furthest.",
      story:
        "The community kitchen in Ruma smells of wood smoke, rice, and something savory that Ushai Marma is stirring in an enormous pot. It's Tuesday — cooking day — and forty families will eat tonight because of what happens in this kitchen.\n\nUshai has been the kitchen coordinator since 2016, when Kothowain helped the village convert an old storage shed into a shared cooking space. The concept is simple: families contribute what they can — rice, vegetables, dried fish, sometimes just labor — and the kitchen turns it into meals for everyone.\n\n'Nobody eats better than anyone else at my table,' Ushai says. 'That's the whole recipe.'\n\nDuring the lean months, when the harvest has run out and the new crops aren't ready, the kitchen runs six days a week. It's the difference between hunger and health for many families.\n\nUshai has trained six new cooks since she started. One of them is her daughter, who at sixteen can already run the kitchen on her own. 'The stove doesn't care who cooks,' Ushai says. 'As long as someone does.'",
      quotes: [
        "Nobody eats better than anyone else at my table. That's the whole recipe.",
        "The stove doesn't care who cooks. As long as someone does.",
      ],
      tags: ["Food Security", "Community", "Women's Leadership"],
      stats: [
        { label: "Families served", value: "40" },
        { label: "Meals per week", value: "240" },
        { label: "Cooks trained", value: "6" },
      ],
    },
    {
      id: 4,
      title: "From the Fields to the Future",
      author: "Sanjoy Tripura",
      location: "Alikadam, Bandarban",
      program: "Education",
      date: "November 2023",
      readTime: "6 min read",
      color: "bg-teal-950",
      icon: FiBookOpen,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=750&fit=crop&q=80",
      excerpt:
        "Sanjoy was twelve when he dropped out of school to help his family farm. Three years later, a mobile learning center brought school back to him.",
      story:
        "Sanjoy dropped out of school in fifth grade. His father had injured his back, and someone needed to work the family's plot of land. At twelve years old, Sanjoy became a farmer.\n\nFor three years, he worked the fields — planting rice in the monsoon, harvesting in the winter, and in between, wondering about the classroom he'd left behind.\n\nThen Kothowain's mobile learning center came to Alikadam. It wasn't a school — just a teacher, a box of books, and a schedule that worked around the farming calendar. Sanjoy joined the evening class, sitting with children half his age and learning to read again.\n\nWithin a year, he'd caught up on three years of schooling. Today, at eighteen, he's preparing for his secondary exams — and he's still farming, but now he's also teaching the younger children in his village.\n\n'The field taught me patience,' he says. 'The books taught me that patience has a purpose.'\n\nSanjoy plans to study agriculture after finishing school. He wants to bring better farming methods back to Alikadam — and he'll be the first person in his family to hold a diploma.",
      quotes: [
        "The field taught me patience. The books taught me that patience has a purpose.",
        "I'm still a farmer. But now I'm a farmer who can read the weather, the market, and the future.",
      ],
      tags: ["Education", "Mobile Learning", "Rural Youth"],
      stats: [
        { label: "Years out of school", value: "3" },
        { label: "Grades caught up", value: "5" },
        { label: "Age today", value: "18" },
      ],
    },
    {
      id: 5,
      title: "The Spring That Came Home",
      author: "Moyna Tripura",
      location: "Jurachari, Rangamati",
      program: "Clean Water",
      date: "October 2023",
      readTime: "5 min read",
      color: "bg-teal-600",
      icon: FiDroplet,
      image:
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=750&fit=crop&q=80",
      excerpt:
        "For forty years, Moyna's village walked two hours to collect water. Then a simple idea changed everything: what if the water came to them?",
      story:
        "Moyna was born in Jurachari in 1965, and for the first forty years of her life, she walked two hours every morning to fetch water from a spring in the valley below her village.\n\nThe spring was clean, but the walk was hard — down a steep hill, across a stream, and back up again with twenty liters of water balanced on her head. In the dry season, the spring ran thin, and families would queue for hours.\n\nWhen Kothowain's water program came to Jurachari in 2019, Moyna was skeptical. 'Water doesn't climb hills,' she said. 'Everyone knows that.'\n\nBut the engineers knew something else: gravity works both ways. They captured the spring at its source — higher up the hill than anyone had thought to look — and piped it down to a standpost in the village center.\n\nToday, Moyna walks two minutes to collect water, not two hours. The time she's saved has gone into her vegetable garden, which now grows enough to feed her family and sell at market.\n\n'I spent forty years carrying water,' she says. 'Now the water carries me.'",
      quotes: [
        "I spent forty years carrying water. Now the water carries me.",
        "Gravity works both ways. That's the first thing I learned.",
      ],
      tags: ["Clean Water", "Women's Stories", "Transformation"],
      stats: [
        { label: "Years carrying water", value: "40" },
        { label: "Distance today", value: "2 min" },
        { label: "Garden income", value: "৳3,000/mo" },
      ],
    },
    {
      id: 6,
      title: "The Village That Learned to Plan",
      author: "The People of Belaichori",
      location: "Belaichori, Rangamati",
      program: "Community Development",
      date: "September 2023",
      readTime: "8 min read",
      color: "bg-amber-500",
      icon: FiUsers,
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=750&fit=crop&q=80",
      excerpt:
        "Five years ago, Belaichori had no shared vision. Today, it has a five-year plan, a community fund, and a generation of young leaders who know how to make it happen.",
      story:
        "Belaichori used to be a village of individual struggles. Each family farmed its own plot, fetched its own water, and solved its own problems. When a bridge washed out or a school roof leaked, people waited for the government to fix it — and waited, and waited.\n\nThen Kothowain introduced a simple idea: community planning. It started with a meeting — just neighbors, sitting in a circle, talking about what they wanted to change.\n\nThe list was long: a bridge, a school roof, a water system, a health post. But something shifted in that meeting. People realized they didn't have to wait for help from outside. They could start with what they had.\n\nFive years later, Belaichori has a five-year development plan, a community fund that every family contributes to, and a committee that meets every month to track progress. The bridge is built. The school roof is repaired. The water system is running.\n\n'We stopped waiting,' says one committee member. 'That was the biggest change.'\n\nToday, Belaichori hosts visitors from other villages who want to learn how it's done. The answer, they tell them, is simple: 'Start with a meeting. Start with a circle. Start with yourselves.'",
      quotes: [
        "We stopped waiting. That was the biggest change.",
        "Start with a meeting. Start with a circle. Start with yourselves.",
      ],
      tags: ["Community Development", "Leadership", "Sustainability"],
      stats: [
        { label: "Years of planning", value: "5" },
        { label: "Projects completed", value: "7" },
        { label: "Committee members", value: "12" },
      ],
    },
  ];

  const [activeStory, setActiveStory] = useState<number | null>(null);
  const [showAllStories, setShowAllStories] = useState(false);

  const displayedStories = showAllStories ? stories : stories.slice(0, 3);

  return (
    <main className="">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&h=900&fit=crop&q=80"
        breadcrumb="Stories"
        headingLine1="Every Story"
        headingHighlight="Matters."
        headingLine2="Every Voice"
        headingAfter="Counts."
        description="These are the stories of the Chittagong Hill Tracts — of resilience, transformation, and hope. They're told by the people who lived them, in their own words."
        seed={700}
      />

      {/* ============================================================ */}
      {/* 2. FEATURED STORY — chapter book style                        */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Featured story
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="This month's chapter"
              className="justify-center"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white rounded-[2rem] shadow-[0_25px_60px_-25px_rgba(21,36,32,0.3)] overflow-hidden"
          >
            <StoryBookmark />
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image side */}
              <div className="relative min-h-[400px] lg:min-h-[600px]">
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent" />
                
                {/* Story meta */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-amber-500 text-teal-950 text-xs font-bold px-3 py-1 rounded-full">
                      {featuredStory.program}
                    </span>
                    <span className="text-cream-50/70 text-xs">
                      {featuredStory.date} • {featuredStory.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-cream-50/70 text-sm mb-2">
                    <FiMapPin className="w-4 h-4" />
                    <span>{featuredStory.location}</span>
                  </div>
                </div>
              </div>

              {/* Story side */}
              <div className="p-8 lg:p-10 relative">
                <QuoteMark />
                <h2 className="font-display text-2xl lg:text-3xl text-teal-950 font-semibold leading-tight mt-3 mb-2">
                  {featuredStory.title}
                </h2>
                <p className="text-amber-500 text-sm font-bold mb-4">
                  By {featuredStory.author}
                </p>
                
                <p className="text-ink-soft text-sm leading-relaxed mb-6">
                  {featuredStory.excerpt}
                </p>

                {/* Featured quote */}
                <div className="bg-amber-50 rounded-2xl p-5 border-l-4 border-amber-500 mb-6">
                  <p className="text-teal-950 text-sm italic leading-relaxed">
                    "{featuredStory.quotes[0]}"
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {featuredStory.stats.map((stat) => (
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

                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 text-amber-500 font-semibold text-sm hover:text-teal-950 transition-colors"
                >
                  Read Full Story
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ALL STORIES — library shelf                               */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                The library
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="More stories from the hills"
              className="justify-center"
            />
          </div>

          <div className="space-y-8">
            <AnimatePresence>
              {displayedStories.map((story) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setActiveStory(story.id)}
                  className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    activeStory === story.id ? "ring-4 ring-amber-500" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
                    {/* Image */}
                    <div className="relative h-[300px] lg:h-auto overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-950/20" />
                      
                      {/* Program badge */}
                      <span className={`absolute top-4 left-4 ${story.color} text-cream-50 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2`}>
                        <story.icon className="w-3 h-3" />
                        {story.program}
                      </span>
                    </div>

                    {/* Story content */}
                    <div className="p-6 lg:p-8 relative">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-ink-soft">
                          {story.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-ink-soft" />
                        <span className="text-xs text-ink-soft">
                          {story.readTime}
                        </span>
                      </div>

                      <h3 className="font-display text-xl lg:text-2xl text-teal-950 font-semibold mb-2 group-hover:text-amber-600 transition-colors">
                        {story.title}
                      </h3>
                      <p className="text-amber-500 text-sm font-bold mb-4">
                        By {story.author}
                      </p>
                      <p className="text-ink-soft text-sm leading-relaxed mb-4">
                        {story.excerpt}
                      </p>

                      {/* Quote */}
                      <div className="bg-cream-50 rounded-xl p-4 border-l-2 border-amber-500 mb-4">
                        <p className="text-teal-950 text-sm italic leading-relaxed">
                          "{story.quotes[0]}"
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {story.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-bold text-teal-950 bg-amber-50 border border-amber-500/20 px-3 py-1 rounded-full flex items-center gap-1"
                          >
                            <FiTag className="w-3 h-3 text-amber-500" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <button className="group inline-flex items-center gap-2 text-amber-500 font-semibold text-sm hover:text-teal-950 transition-colors">
                          Read Full Story
                          <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <StoryProgress current={story.id} total={stories.length} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show more button */}
          {!showAllStories && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllStories(true)}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-950 text-cream-50 font-semibold text-sm transition-all duration-300 hover:bg-amber-500 hover:text-teal-950 hover:-translate-y-0.5 active:scale-95"
              >
                Show All Stories
                <FiChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. EXPANDED STORY VIEW                                        */}
      {/* ============================================================ */}
      <AnimatePresence>
        {activeStory && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 bg-teal-950/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-[800px] max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {activeStory === 0 ? (
                // Featured story expanded
                <div>
                  <div className="relative h-[400px]">
                    <Image
                      src={featuredStory.image}
                      alt={featuredStory.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <button
                      onClick={() => setActiveStory(null)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <span className="text-teal-950 text-xl font-bold">×</span>
                    </button>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-amber-500 text-teal-950 text-xs font-bold px-3 py-1 rounded-full">
                        {featuredStory.program}
                      </span>
                      <span className="text-xs text-ink-soft">
                        {featuredStory.date} • {featuredStory.readTime}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl lg:text-3xl text-teal-950 font-semibold mb-2">
                      {featuredStory.title}
                    </h2>
                    <p className="text-amber-500 text-sm font-bold mb-6">
                      By {featuredStory.author} • {featuredStory.location}
                    </p>
                    
                    <div className="prose max-w-none">
                      {featuredStory.story.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-ink-soft text-sm leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="bg-amber-50 rounded-2xl p-6 mt-6">
                      <p className="text-teal-950 text-base italic leading-relaxed">
                        "{featuredStory.quotes[1]}"
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Regular story expanded
                (() => {
                  const story = stories.find((s) => s.id === activeStory);
                  if (!story) return null;
                  return (
                    <div>
                      <div className="relative h-[400px]">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <button
                          onClick={() => setActiveStory(null)}
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                        >
                          <span className="text-teal-950 text-xl font-bold">×</span>
                        </button>
                      </div>
                      <div className="p-8 lg:p-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`${story.color} text-cream-50 text-xs font-bold px-3 py-1 rounded-full`}>
                            {story.program}
                          </span>
                          <span className="text-xs text-ink-soft">
                            {story.date} • {story.readTime}
                          </span>
                        </div>
                        <h2 className="font-display text-2xl lg:text-3xl text-teal-950 font-semibold mb-2">
                          {story.title}
                        </h2>
                        <p className="text-amber-500 text-sm font-bold mb-6">
                          By {story.author} • {story.location}
                        </p>
                        
                        <div className="prose max-w-none">
                          {story.story.split("\n\n").map((paragraph, i) => (
                            <p key={i} className="text-ink-soft text-sm leading-relaxed mb-4">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        <div className="bg-amber-50 rounded-2xl p-6 mt-6">
                          <p className="text-teal-950 text-base italic leading-relaxed">
                            "{story.quotes[1]}"
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()
              )}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* 5. SHARE & CONNECT CTA                                        */}
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
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=900&fit=crop&q=80"
              alt="Community gathering"
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
              <FiShare2 className="w-4 h-4" /> Share the stories
            </span>

            <h2 className="font-display font-semibold text-4xl lg:text-5xl text-cream-50 leading-[1.05] tracking-tight mb-4">
              Someone you know{" "}
              <span className="text-amber-500 italic font-normal">needs to read this</span>
            </h2>

            <p className="text-cream-50/70 text-lg max-w-[420px] leading-relaxed mb-8">
              Share these stories with someone who believes change is
              possible. Or better yet, come write the next chapter with us.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#volunteer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-cream-50 hover:-translate-y-0.5 active:scale-95"
              >
                Volunteer With Us
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#donate"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-cream-50/30 text-cream-50 font-semibold text-sm transition-all duration-300 hover:border-cream-50 hover:bg-cream-50 hover:text-teal-950 hover:-translate-y-0.5 active:scale-95"
              >
                Support These Stories
                <FiHeart className="w-4 h-4" />
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

export default StoryPage;