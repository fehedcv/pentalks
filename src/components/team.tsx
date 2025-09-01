"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, TargetAndTransition} from 'framer-motion';
import { cn } from '../lib/utils'; // Assuming this utility correctly merges class names
import ScrollFloat from './scrollfloat';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface TeamCarouselProps {
  /** Array of team members */
  members: TeamMember[];
  /** Title displayed above the carousel */
  title?: string;
  /** Title font size */
  titleSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Title color */
  titleColor?: string;
  /** Background color or gradient. Overrides the default 'bg-background' class. */
  background?: string;
  /** Card width in pixels */
  cardWidth?: number;
  /** Card height in pixels */
  cardHeight?: number;
  /** Card border radius */
  cardRadius?: number;
  /** Enable/disable navigation arrows */
  showArrows?: boolean;
  /** Enable/disable dots indicator */
  showDots?: boolean;
  /** Enable/disable keyboard navigation */
  keyboardNavigation?: boolean;
  /** Enable/disable touch/swipe navigation */
  touchNavigation?: boolean;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Auto-play interval in milliseconds (0 to disable) */
  autoPlay?: number;
  /** Pause auto-play on hover */
  pauseOnHover?: boolean;
  /** Number of visible cards on each side */
  visibleCards?: number;
  /** Scale factor for side cards */
  sideCardScale?: number;
  /** Opacity for side cards */
  sideCardOpacity?: number;
  /** Apply grayscale filter to side cards */
  grayscaleEffect?: boolean;
  /** Custom className for container */
  className?: string;
  /** Custom className for cards */
  cardClassName?: string;
  /** Custom className for title */
  titleClassName?: string;
  /** Member info position */
  infoPosition?: 'bottom' | 'overlay' | 'none';
  /** Info text color */
  infoTextColor?: string;
  /** Info background */
  infoBackground?: string;
  /** Callback when active member changes */
  onMemberChange?: (member: TeamMember, index: number) => void;
  /** Callback when card is clicked */
  onCardClick?: (member: TeamMember, index: number) => void;
  /** Initial active index */
  initialIndex?: number;
}

export const TeamCarousel: React.FC<TeamCarouselProps> = ({
  members,
  title = "OUR TEAM",
  titleSize = "2xl",
  titleColor = "#C47A3D", // refined terracotta
  background = "#FAF7F2", // warm cream
  cardWidth = 280,
  cardHeight = 380,
  cardRadius = 20,
  showArrows = true,
  showDots = true,
  keyboardNavigation = true,
  touchNavigation = true,
  animationDuration = 800,
  autoPlay = 0,
  pauseOnHover = true,
  visibleCards = 2,
  sideCardScale = 0.9,
  sideCardOpacity = 0.8,
  grayscaleEffect = true,
  className,
  cardClassName,
  titleClassName,
  infoPosition = "bottom",
  infoTextColor = "#222222", // deep neutral
  infoBackground = "transparent",
  onMemberChange,
  onCardClick,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0); // 0: no movement, 1: next, -1: prev
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalMembers = members.length;

  const paginate = useCallback(
    (newDirection: number) => {
      if (totalMembers === 0) return;
      setDirection(newDirection);
      const nextIndex = (currentIndex + newDirection + totalMembers) % totalMembers;
      setCurrentIndex(nextIndex);
      onMemberChange?.(members[nextIndex], nextIndex);
    },
    [currentIndex, totalMembers, members, onMemberChange]
  );

  const wrapIndex = (index: number) => {
    return (index + totalMembers) % totalMembers;
  };

  const calculatePosition = (index: number) => {
    const activeIndex = currentIndex;
    const diff = wrapIndex(index - activeIndex);

    if (diff === 0) return 'center';
    if (diff <= visibleCards) return `right-${diff}`;
    if (diff >= totalMembers - visibleCards) return `left-${totalMembers - diff}`;
    return 'hidden';
  };

  const getVariantStyles = (position: string): TargetAndTransition => {
    const transition = {
      duration: animationDuration / 1000,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    };

    switch (position) {
      case 'center':
        return {
          zIndex: 10,
          opacity: 1,
          scale: 1.1,
          x: 0,
          filter: 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'right-1':
        return {
          zIndex: 5,
          opacity: sideCardOpacity,
          scale: sideCardScale,
          x: cardWidth * 0.7,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'right-2':
        return {
          zIndex: 1,
          opacity: sideCardOpacity * 0.7,
          scale: sideCardScale * 0.9,
          x: cardWidth * 1.4,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'left-1':
        return {
          zIndex: 5,
          opacity: sideCardOpacity,
          scale: sideCardScale,
          x: -cardWidth * 0.7,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'left-2':
        return {
          zIndex: 1,
          opacity: sideCardOpacity * 0.7,
          scale: sideCardScale * 0.9,
          x: -cardWidth * 1.4,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      default:
        return {
          zIndex: 0,
          opacity: 0,
          scale: 0.8,
          x: direction > 0 ? cardWidth * (visibleCards + 1) : -cardWidth * (visibleCards + 1),
          pointerEvents: 'none',
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          transition,
        };
    }
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay > 0) {
      interval = setInterval(() => {
        paginate(1);
      }, autoPlay);
    }

    const carouselContainer = document.getElementById('team-carousel-container');

    const handleMouseEnter = () => {
      if (pauseOnHover && autoPlay > 0) clearInterval(interval);
    };

    const handleMouseLeave = () => {
      if (pauseOnHover && autoPlay > 0) {
        interval = setInterval(() => {
          paginate(1);
        }, autoPlay);
      }
    };

    if (carouselContainer && pauseOnHover && autoPlay > 0) {
      carouselContainer.addEventListener('mouseenter', handleMouseEnter);
      carouselContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearInterval(interval);
      if (carouselContainer && pauseOnHover && autoPlay > 0) {
        carouselContainer.removeEventListener('mouseenter', handleMouseEnter);
        carouselContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [autoPlay, paginate, pauseOnHover]);

  // Keyboard navigation
  useEffect(() => {
    if (!keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [keyboardNavigation, paginate]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!touchNavigation) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchNavigation) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchNavigation) return;

    const swipeThreshold = 50;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        paginate(1);
      } else {
        paginate(-1);
      }
    }
  };

  const titleSizeClasses = {
    sm: 'text-4xl',
    md: 'text-5xl',
    lg: 'text-6xl',
    xl: 'text-7xl',
    '2xl': 'text-8xl',
  };

  return (
    <div
      id="team-carousel-container"
      className={cn(`min-h-screen flex flex-col items-center justify-center overflow-hidden relative 
        transparent`, className)}
      style={{ 
        background: background,
        backgroundColor: "#FAF7F2" // warm cream fallback
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Title */}
      {title && (
        <h2
          className={cn(`font-bold mb-10`, titleSizeClasses[titleSize], titleClassName)}
          style={{ color: titleColor }}
        >
          {title}
        </h2>
      )}

      {/* Carousel Container */}
      <div
        className="w-full max-w-6xl relative mt-20"
        style={{
          height: cardHeight + 100,
          perspective: '1000px',
        }}
      >
        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <motion.button
              onClick={() => paginate(-1)}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: "rgba(196, 122, 61, 0.7)", // terracotta with opacity
                backdropFilter: "blur(8px)",
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{
                backgroundColor: "rgba(196, 122, 61, 0.9)",
                boxShadow: "0 4px 12px rgba(196, 122, 61, 0.3)",
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: "rgba(196, 122, 61, 0.7)", // terracotta with opacity
                backdropFilter: "blur(8px)",
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{
                backgroundColor: "rgba(196, 122, 61, 0.9)",
                boxShadow: "0 4px 12px rgba(196, 122, 61, 0.3)",
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </>
        )}

        {/* Cards Track */}
        <div
          className="w-full h-full flex justify-center items-center relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {members.map((member, index) => {
              const position = calculatePosition(index);
              const isCurrent = index === currentIndex;

              if (position === 'hidden' && !isCurrent) return null;

              return (
                <motion.div
                  key={member.id}
                  className={cn(
                    "absolute overflow-hidden cursor-pointer",
                    cardClassName
                  )}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    borderRadius: cardRadius,
                    top: '50%',
                    left: '50%',
                    marginLeft: -cardWidth / 2,
                    marginTop: -cardHeight / 2,
                    backgroundColor: "#FAF7F2", // warm cream
                    border: `2px solid ${isCurrent ? "#C47A3D" : "#E0DED8"}`, // terracotta for active, beige grey for inactive
                    boxShadow: isCurrent 
                      ? "0 10px 30px rgba(196, 122, 61, 0.2), 0 6px 20px rgba(34, 34, 34, 0.1)"
                      : "0 4px 15px rgba(34, 34, 34, 0.1)",
                  }}
                  initial={getVariantStyles('hidden')}
                  animate={getVariantStyles(position)}
                  exit={getVariantStyles('hidden')}
                  onClick={() => {
                    if (!isCurrent) {
                      const newDirection = index > currentIndex ? 1 : -1;
                      setDirection(newDirection);
                      setCurrentIndex(index);
                      onMemberChange?.(members[index], index);
                    }
                    onCardClick?.(member, index);
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Info */}
                  {infoPosition === 'overlay' && (
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 text-center"
                      style={{
                        background: infoBackground || "linear-gradient(transparent, rgba(34, 34, 34, 0.8))",
                        color: "#FAF7F2", // warm cream for overlay text
                      }}
                    >
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Member Info (Bottom) */}
      {infoPosition === 'bottom' && members[currentIndex] && (
        <motion.div
          key={members[currentIndex].id + "-info"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-10"
        >
          <h2
            className="text-4xl font-bold mb-3 relative inline-block"
            style={{ color: "#222222" }} // deep neutral
          >
            {members[currentIndex].name}
            <span
              className="absolute top-full left-0 w-full h-0.5 mt-2"
              style={{ backgroundColor: "#C47A3D" }} // terracotta underline
            />
          </h2>
          <p
            className="text-xl font-medium opacity-80 uppercase tracking-wider"
            style={{ color: "#C47A3D" }} // terracotta for role
          >
            {members[currentIndex].role}
          </p>
          {members[currentIndex].bio && (
            <p 
              className="text-base mt-4 max-w-lg mx-auto opacity-70"
              style={{ color: "#666666" }} // soft grey for bio
            >
              {members[currentIndex].bio}
            </p>
          )}
        </motion.div>
      )}

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center gap-3 mt-15">
          {members.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                if (index !== currentIndex) {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(index);
                  onMemberChange?.(members[index], index);
                }
              }}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "scale-125"
                  : "hover:scale-110"
              )}
              style={{
                backgroundColor: index === currentIndex
                  ? "#C47A3D" // terracotta for active dot
                  : "#E0DED8", // beige grey for inactive dots
                boxShadow: index === currentIndex
                  ? "0 2px 8px rgba(196, 122, 61, 0.4)"
                  : "none",
              }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;