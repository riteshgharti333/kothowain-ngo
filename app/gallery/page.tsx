// app/gallery/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiCamera,
  FiGrid,
  FiImage,
  FiMapPin,
  FiCalendar,
  FiTag,
  FiChevronDown,
  FiCheckCircle,
  FiGift,
  FiShare2,
  FiDownload,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize,
  FiUsers,
  FiDroplet,
  FiBookOpen,
  FiThermometer,
  FiHome,
  FiPlay,
  FiLoader,
} from "react-icons/fi";
import HeadingWithPaint from "../components/HeadingWithPaint";
import PageBanner from "../components/PageBanner";
import { useState, useEffect, useCallback } from "react";

/* ================================================================== */
/* Types                                                              */
/* ================================================================== */

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  location: string;
  date: string;
  photographer: string;
  description: string;
  category: string;
  width: number;
  height: number;
  color?: string;
}

interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
  avg_color: string;
}

interface PexelsResponse {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
  next_page: string;
}

/* ================================================================== */
/* Gallery-specific reusable components                               */
/* ================================================================== */

// Pinterest-style masonry card with dynamic sizing
const MasonryCard = ({ item, index, onOpen }: { item: GalleryItem; index: number; onOpen: (id: string) => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Dynamic aspect ratio based on actual image dimensions
  const aspectRatio = item.width / item.height;
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group mb-4 break-inside-avoid"
      onClick={() => onOpen(item.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with natural aspect ratio */}
      <div 
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 bg-cream-50 flex items-center justify-center">
            <FiLoader className="w-8 h-8 text-teal-700 animate-spin" />
          </div>
        )}
        <Image
          src={item.url}
          alt={item.title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          unoptimized
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Gradient overlay on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/30 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Category badge - always visible */}
        <span className="absolute top-3 left-3 bg-amber-500 text-teal-950 text-[10px] font-bold px-2.5 py-1 rounded-full">
          {item.category}
        </span>
        
        {/* Save button (Pinterest style) */}
        <button
          className={`absolute top-3 right-3 px-3 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
            isHovered 
              ? 'bg-amber-500 text-teal-950 opacity-100 translate-y-0' 
              : 'bg-cream-50/20 backdrop-blur-sm text-cream-50 opacity-0 -translate-y-2'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            // Save functionality
          }}
        >
          Save
        </button>
        
        {/* Bottom info on hover */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <h3 className="text-cream-50 font-display font-semibold text-sm mb-1 line-clamp-2">
            {item.title}
          </h3>
          <div className="flex items-center gap-3 text-cream-50/70 text-xs">
            <span className="flex items-center gap-1">
              <FiMapPin className="w-3 h-3" /> {item.location}
            </span>
            <span className="flex items-center gap-1">
              <FiCalendar className="w-3 h-3" /> {item.date}
            </span>
          </div>
        </div>
        
        {/* Expand icon */}
        <div 
          className={`absolute bottom-3 right-3 w-10 h-10 rounded-full bg-cream-50/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <FiMaximize className="w-4 h-4 text-cream-50" />
        </div>
      </div>
    </motion.div>
  );
};

// Filter chip
const FilterChip = ({ label, active, onClick, icon: Icon }: { label: string; active: boolean; onClick: () => void; icon: React.ComponentType<{ className: string }> }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
      active
        ? "bg-teal-950 text-amber-400 shadow-lg"
        : "bg-white text-teal-950 hover:bg-amber-50"
    }`}
  >
    <Icon className="w-4 h-4" />
    {label}
  </motion.button>
);

/* ================================================================== */
/* API Configuration                                                  */
/* ================================================================== */

const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || "YOUR_PEXELS_API_KEY";
const PEXELS_API_URL = "https://api.pexels.com/v1/search";

// Category mappings with search queries - no orientation constraint
const CATEGORY_QUERIES = {
  education: "education children learning classroom",
  water: "clean water village community",
  health: "healthcare medical rural community",
  food: "community kitchen food sharing",
  community: "community gathering village people",
};

const GalleryPage = () => {
  /* ---------------------------------------------------------------- */
  /* State                                                             */
  /* ---------------------------------------------------------------- */

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const galleryCategories = [
    { id: "all", label: "All Photos", icon: FiGrid },
    { id: "education", label: "Education", icon: FiBookOpen },
    { id: "water", label: "Clean Water", icon: FiDroplet },
    { id: "health", label: "Medical", icon: FiThermometer },
    { id: "food", label: "Food & Nutrition", icon: FiHome },
    { id: "community", label: "Community", icon: FiUsers },
  ];

  /* ---------------------------------------------------------------- */
  /* API Functions                                                     */
  /* ---------------------------------------------------------------- */

  const fetchGalleryPhotos = useCallback(async (category: string = "all", pageNum: number = 1) => {
    try {
      setLoading(true);
      setError(null);

      let query = "bangladesh village community development";
      
      if (category !== "all" && CATEGORY_QUERIES[category as keyof typeof CATEGORY_QUERIES]) {
        query = CATEGORY_QUERIES[category as keyof typeof CATEGORY_QUERIES];
      }

      // REMOVED orientation constraint to get varied image sizes
      // Using larger per_page to get more variety
      const url = `${PEXELS_API_URL}?query=${encodeURIComponent(query)}&per_page=24&page=${pageNum}&size=medium`;

      const response = await fetch(url, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data: PexelsResponse = await response.json();

      // Transform Pexels photos to our GalleryItem format
      const transformedItems: GalleryItem[] = data.photos.map((photo) => {
        // Generate fake location and date based on photo ID
        const locations = ["Ruma, Bandarban", "Thanchi, Bandarban", "Belaichori, Rangamati", "Alikadam, Bandarban", "Jurachari, Rangamati"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const years = ["2023", "2024"];
        
        return {
          id: photo.id.toString(),
          url: photo.src.large || photo.src.medium || photo.src.original,
          title: photo.alt || "Kothowain Project Photo",
          location: locations[photo.id % locations.length],
          date: `${months[photo.id % months.length]} ${years[photo.id % years.length]}`,
          photographer: photo.photographer,
          description: photo.alt || "A moment captured from Kothowain's work in the Chittagong Hill Tracts.",
          category: category === "all" ? galleryCategories[(photo.id % 5) + 1].id : category,
          width: photo.width,
          height: photo.height,
          color: photo.avg_color,
        };
      });

      if (pageNum === 1) {
        setGalleryItems(transformedItems);
      } else {
        setGalleryItems(prev => [...prev, ...transformedItems]);
      }

      setHasMore(data.next_page ? true : false);
      setPage(data.page);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch images");
      console.error("Error fetching gallery photos:", err);
      
      // Fallback to hardcoded images if API fails
      if (pageNum === 1) {
        setGalleryItems(getFallbackImages(category));
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  const getFallbackImages = (category: string): GalleryItem[] => {
    // Fallback images with varied aspect ratios
    const fallbackImages = [
      {
        id: "fallback-1",
        url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&q=80",
        title: "Morning Lessons at Learning Center",
        location: "Ruma, Bandarban",
        date: "March 2024",
        photographer: "Kothowain Team",
        description: "Children gather for morning lessons at the Ruma Learning Center.",
        category: "education",
        width: 800,
        height: 600, // Landscape
      },
      {
        id: "fallback-2",
        url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop&q=80",
        title: "Clean Water Access",
        location: "Thanchi, Bandarban",
        date: "February 2024",
        photographer: "Kothowain Team",
        description: "Community members collect clean water from a new standpost.",
        category: "water",
        width: 600,
        height: 800, // Portrait
      },
      {
        id: "fallback-3",
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80",
        title: "Mobile Health Camp",
        location: "Belaichori, Rangamati",
        date: "January 2024",
        photographer: "Kothowain Team",
        description: "A doctor examines a patient at a mobile health camp.",
        category: "health",
        width: 800,
        height: 500, // Wide landscape
      },
      {
        id: "fallback-4",
        url: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=800&fit=crop&q=80",
        title: "Community Kitchen Day",
        location: "Alikadam, Bandarban",
        date: "December 2023",
        photographer: "Kothowain Team",
        description: "Volunteers prepare meals at the community kitchen.",
        category: "food",
        width: 500,
        height: 800, // Tall portrait
      },
      {
        id: "fallback-5",
        url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop&q=80",
        title: "Village Planning Meeting",
        location: "Jurachari, Rangamati",
        date: "November 2023",
        photographer: "Kothowain Team",
        description: "Community members gather to plan development priorities.",
        category: "community",
        width: 800,
        height: 600, // Landscape
      },
      {
        id: "fallback-6",
        url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=600&fit=crop&q=80",
        title: "First Day of School",
        location: "Thanchi, Bandarban",
        date: "October 2023",
        photographer: "Kothowain Team",
        description: "A young student arrives for her first day at a learning center.",
        category: "education",
        width: 600,
        height: 600, // Square
      },
      {
        id: "fallback-7",
        url: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=700&h=900&fit=crop&q=80",
        title: "Kitchen Garden Harvest",
        location: "Alikadam, Bandarban",
        date: "September 2023",
        photographer: "Kothowain Team",
        description: "A family harvests vegetables from their kitchen garden.",
        category: "food",
        width: 700,
        height: 900, // Tall portrait
      },
      {
        id: "fallback-8",
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=600&fit=crop&q=80",
        title: "Mobile Learning Center",
        location: "Alikadam, Bandarban",
        date: "August 2023",
        photographer: "Kothowain Team",
        description: "A mobile learning center brings education to remote villages.",
        category: "education",
        width: 900,
        height: 600, // Wide landscape
      },
    ];

    if (category === "all") {
      return fallbackImages;
    }
    return fallbackImages.filter(img => img.category === category);
  };

  const loadMore = () => {
    if (hasMore && !loadingMore) {
      setLoadingMore(true);
      fetchGalleryPhotos(activeFilter, page + 1);
    }
  };

  /* ---------------------------------------------------------------- */
  /* Effects                                                           */
  /* ---------------------------------------------------------------- */

  useEffect(() => {
    fetchGalleryPhotos(activeFilter, 1);
  }, [activeFilter, fetchGalleryPhotos]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedImage, galleryItems]);

  /* ---------------------------------------------------------------- */
  /* Lightbox Functions                                                */
  /* ---------------------------------------------------------------- */

  const openLightbox = (id: string) => {
    setSelectedImage(id);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % galleryItems.length;
      setSelectedImage(galleryItems[nextIndex].id);
    } else {
      const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      setSelectedImage(galleryItems[prevIndex].id);
    }
  };

  const selectedImageData = selectedImage !== null 
    ? galleryItems.find(item => item.id === selectedImage) 
    : null;

  /* ---------------------------------------------------------------- */
  /* Render                                                            */
  /* ---------------------------------------------------------------- */

  return (
    <main className="">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?w=1600&h=900&fit=crop&q=80"
        breadcrumb="Gallery"
        headingLine1="Every Picture"
        headingHighlight="Tells A Story."
        headingLine2="See The"
        headingAfter="Impact."
        description="A visual journey through the Chittagong Hill Tracts — capturing moments of learning, clean water, healing, and community transformation."
        seed={1100}
      />

      {/* ============================================================ */}
      {/* 2. FEATURED PHOTO — hero shot                                 */}
      {/* ============================================================ */}
      {galleryItems.length > 0 && !loading && (
        <section className="py-[90px] lg:py-[120px] bg-paper relative overflow-hidden">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                  Photo of the month
                </span>
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              </div>
              <HeadingWithPaint
                text="Featured photograph"
                className="justify-center"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              onClick={() => openLightbox(galleryItems[0].id)}
            >
              <div className="relative h-[500px] lg:h-[600px]">
                <Image
                  src={galleryItems[0].url}
                  alt={galleryItems[0].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />
                
                {/* Photo info */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-amber-500 text-teal-950 text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-cream-50/70 text-xs flex items-center gap-1">
                      <FiMapPin className="w-3 h-3" /> {galleryItems[0].location}
                    </span>
                    <span className="text-cream-50/70 text-xs flex items-center gap-1">
                      <FiCalendar className="w-3 h-3" /> {galleryItems[0].date}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl text-cream-50 font-semibold mb-2">
                    {galleryItems[0].title}
                  </h2>
                  <p className="text-cream-50/70 text-sm max-w-[500px]">
                    {galleryItems[0].description}
                  </p>
                </div>
                
                {/* Expand icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-cream-50/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiMaximize className="w-5 h-5 text-cream-50" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* 3. PINTEREST-STYLE MASONRY GRID                               */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Explore the gallery
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Moments captured"
              className="justify-center"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {galleryCategories.map((category) => (
              <FilterChip
                key={category.id}
                label={category.label}
                active={activeFilter === category.id}
                onClick={() => setActiveFilter(category.id)}
                icon={category.icon}
              />
            ))}
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex justify-center py-20">
              <div className="text-center">
                <FiLoader className="w-12 h-12 text-teal-700 animate-spin mx-auto mb-4" />
                <p className="text-ink-soft">Loading photos...</p>
              </div>
            </div>
          )}

          {/* Error state */}
          {error && !loading && galleryItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-red-500 mb-4">Error loading images: {error}</p>
              <button
                onClick={() => fetchGalleryPhotos(activeFilter, 1)}
                className="px-6 py-3 rounded-full bg-amber-500 text-teal-950 font-semibold hover:bg-teal-950 hover:text-amber-400 transition-all"
              >
                Retry
              </button>
            </div>
          )}

          {/* Masonry grid with CSS columns */}
          {!loading && galleryItems.length > 0 && (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {galleryItems.map((item, index) => (
                <MasonryCard
                  key={item.id}
                  item={item}
                  index={index}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          )}

          {/* Load more button */}
          {hasMore && !loading && (
            <div className="text-center mt-10">
              <button
                onClick={loadMore}
                disabled={loadingMore}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-950 text-cream-50 font-semibold text-sm transition-all duration-300 hover:bg-amber-500 hover:text-teal-950 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingMore ? (
                  <>
                    <FiLoader className="w-4 h-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    Load More Photos
                    <FiChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. SHARE YOUR PHOTOS CTA                                      */}
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
              src="https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?w=800&h=900&fit=crop&q=80"
              alt="Photography"
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
              <FiCamera className="w-4 h-4" /> Share your perspective
            </span>

            <h2 className="font-display font-semibold text-4xl lg:text-5xl text-cream-50 leading-[1.05] tracking-tight mb-4">
              Got photos{" "}
              <span className="text-amber-500 italic font-normal">from the hills?</span>
            </h2>

            <p className="text-cream-50/70 text-lg max-w-[420px] leading-relaxed mb-8">
              If you've volunteered with us or visited our project sites,
              we'd love to feature your photographs in our gallery.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-cream-50 hover:-translate-y-0.5 active:scale-95"
              >
                Submit Photos
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/stories"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-cream-50/30 text-cream-50 font-semibold text-sm transition-all duration-300 hover:border-cream-50 hover:bg-cream-50 hover:text-teal-950 hover:-translate-y-0.5 active:scale-95"
              >
                Read Stories
                <FiHeart className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. LIGHTBOX MODAL                                             */}
      {/* ============================================================ */}
      <AnimatePresence>
        {lightboxOpen && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-teal-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-teal-950/80 backdrop-blur-sm flex items-center justify-center hover:bg-teal-950 transition-colors"
              >
                <FiX className="w-6 h-6 text-cream-50" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-teal-950/80 backdrop-blur-sm flex items-center justify-center hover:bg-teal-950 transition-colors"
              >
                <FiChevronLeft className="w-6 h-6 text-cream-50" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-teal-950/80 backdrop-blur-sm flex items-center justify-center hover:bg-teal-950 transition-colors"
              >
                <FiChevronRight className="w-6 h-6 text-cream-50" />
              </button>

              {/* Image */}
              <div className="relative h-[60vh]">
                <Image
                  src={selectedImageData.url}
                  alt={selectedImageData.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-2xl text-teal-950 font-semibold mb-2">
                  {selectedImageData.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed mb-4">
                  {selectedImageData.description}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-ink-soft">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="w-4 h-4 text-amber-500" />
                    {selectedImageData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4 text-amber-500" />
                    {selectedImageData.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiCamera className="w-4 h-4 text-amber-500" />
                    Photo by {selectedImageData.photographer}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default GalleryPage;