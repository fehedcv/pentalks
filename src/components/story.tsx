"use client";
import React, { useEffect, useRef, useState } from "react";
import ScrollFloat from "./scrollfloat";

export interface ScrollStackCard {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  content?: React.ReactNode;
}

interface ScrollStackProps {
  cards: ScrollStackCard[];
  backgroundColor?: string;
  cardHeight?: string;
  animationDuration?: string;
  sectionHeightMultiplier?: number;
  intersectionThreshold?: number;
  className?: string;
}

const defaultBackgrounds = [
  "https://images.pexels.com/photos/33562120/pexels-photo-33562120.jpeg",
  "https://images.pexels.com/photos/29506613/pexels-photo-29506613.jpeg",
  "https://images.pexels.com/photos/29506611/pexels-photo-29506611.jpeg",
  "https://images.pexels.com/photos/7233329/pexels-photo-7233329.jpeg"

];

const ScrollStack: React.FC<ScrollStackProps> = ({
  cards,
  backgroundColor = "bg-background",
  cardHeight = "60vh",
  animationDuration = "0.5s",
  sectionHeightMultiplier = 3,
  intersectionThreshold = 0.1,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const cardCount = Math.min(cards.length, 5);

  const cardStyle = {
    height: cardHeight,
    maxHeight: "500px",
    borderRadius: "20px",
    transition: `transform ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1), opacity ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1)`,
    willChange: "transform, opacity",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: intersectionThreshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !cardsContainerRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          const sectionTop = sectionRect.top;
          const sectionHeight = sectionRef.current.offsetHeight;
          const scrollableDistance = sectionHeight - viewportHeight;

          let progress = 0;
          if (sectionTop <= 0 && Math.abs(sectionTop) <= scrollableDistance) {
            progress = Math.abs(sectionTop) / scrollableDistance;
          } else if (sectionTop <= 0) {
            progress = 1;
          }

          let newActiveIndex = 0;
          const progressPerCard = 1 / cardCount;
          for (let i = 0; i < cardCount; i++) {
            if (progress >= progressPerCard * (i + 1)) {
              newActiveIndex = i + 1;
            }
          }

          setActiveCardIndex(Math.min(newActiveIndex, cardCount - 1));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [cardCount, sectionHeightMultiplier, intersectionThreshold]);

  const getCardTransform = (index: number) => {
    const isVisible = isIntersecting && activeCardIndex >= index;
    const scale = 0.9 + index * 0.05;
    let translateY = "100px";

    if (isVisible) {
      translateY = `${90 - index * 30}px`;
    }

    return {
      transform: `translateY(${translateY}) scale(${scale})`,
      opacity: isVisible ? (index === 0 ? 0.9 : 1) : 0,
      zIndex: 10 + index * 10,
      pointerEvents: isVisible ? "auto" : "none",
    };
  };

  return (
    <section
      className="relative w-full h-screen snap-y snap-mandatory"
    >
      <div
        ref={sectionRef}
        className={`relative ${className}`}
        style={{ height: `${sectionHeightMultiplier * 85}vh` }}
      >
        <div
          className={`sticky top-0 w-full h-screen flex items-center 
            justify-center overflow-hidden ${backgroundColor}`}
        >
          <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col justify-center">
            <ScrollFloat
                      scrollContainerRef={null}
                      animationDuration={1}
                      ease='back.inOut(2)'
                      scrollStart='center bottom+=50%'
                      scrollEnd='bottom bottom-=40%'
                      stagger={0.03}
                      textClassName="text-4xl md:text-6xl font-bold text-white text-center mb-8 "
                    >
                      Our Services
            </ScrollFloat>
            <div
              ref={cardsContainerRef}
              className="relative w-full max-w-5xl mx-auto flex-shrink-0"
              style={{ height: cardHeight }}
            >
              {cards.slice(0, 5).map((card, index) => {
                const cardTransform = getCardTransform(index);
                const backgroundImage =
                  card.backgroundImage ||
                  defaultBackgrounds[index % defaultBackgrounds.length];

                return (
                  <div
                    key={index}
                    className="snap-start flex justify-center items-center h-screen"
                  >
                    <div
                      className={`absolute z-50 overflow-hidden shadow-xl 
                        transition-all duration-300`}
                      style={{
                        ...cardStyle,
                        top: 0,
                        left: "50%",
                        transform: `translateX(-50%) ${cardTransform.transform}`,
                        width: "100%",
                        maxWidth: "100%",
                        opacity: cardTransform.opacity,
                        zIndex: cardTransform.zIndex,
                        pointerEvents:
                          cardTransform.pointerEvents as React.CSSProperties["pointerEvents"],
                      }}
                    >
                      <div
                        className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/80"
                        style={{
                          backgroundImage: `url('${backgroundImage}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundBlendMode: "overlay",
                        }}
                      />

                      {card.badge && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                            <span className="text-sm font-medium">
                              {card.badge}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                        {card.content ? (
                          card.content
                        ) : (
                          <div className="max-w-lg">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                              {card.title}
                            </h3>
                            {card.subtitle && (
                              <p className="text-lg text-white/80">
                                {card.subtitle}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
