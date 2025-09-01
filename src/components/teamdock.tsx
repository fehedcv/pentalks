"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface TeamDockProps {
  members: TeamMember[];
}

const TeamDock: React.FC<TeamDockProps> = ({ members }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const isPaused = useRef(false);

  // Auto-scroll functionality
  useEffect(() => {
    const startScrolling = () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }

      scrollInterval.current = setInterval(() => {
        if (dockRef.current && !isPaused.current) {
          const { scrollLeft, scrollWidth, clientWidth } = dockRef.current;
          const maxScroll = scrollWidth - clientWidth;
          
          if (scrollLeft >= maxScroll - 2) {
            // Smoothly reset to start when reaching end
            dockRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Smoothly scroll to the right
            dockRef.current.scrollBy({ left: 2, behavior: 'smooth' });
          }
        }
      }, 30);
    };

    startScrolling();

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, []);

  // Pause auto-scroll on hover or drag
  const handleMouseEnter = useCallback(() => {
    isPaused.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isPaused.current = false;
  }, []);

  const handleCardClick = useCallback((id: string) => {
    setSelectedId(id === selectedId ? null : id);
  }, [selectedId]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Tube-like dock container */}
      <div 
        className="relative w-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-4 shadow-inner"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Scrollable container (hidden scrollbar) */}
        <div 
          ref={dockRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              layoutId={member.id}
              onClick={() => handleCardClick(member.id)}
              className={cn(
                "flex-shrink-0 w-20 h-20 cursor-pointer rounded-full shadow-lg overflow-hidden bg-white border-2 border-white",
                selectedId === member.id ? "ring-4 ring-blue-500 scale-110" : "hover:scale-105"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded card modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const member = members.find((m) => m.id === selectedId);
                if (!member) return null;
                return (
                  <>
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                      <p className="text-gray-500 mb-4">{member.role}</p>
                      <p className="text-gray-700">{member.bio || "No biography available."}</p>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Sample data with 20 team members
export const sampleTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Sarah founded the company in 2015 with a vision to revolutionize the industry. With over 15 years of experience, she leads our strategic direction."
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Michael oversees all technical operations and product development. He holds a PhD in Computer Science from Stanford."
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bio: "Emily leads our design team with a focus on user-centered solutions. Her work has won multiple international awards."
  },
  {
    id: "4",
    name: "David Kim",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bio: "David specializes in front-end development and has contributed to several open source projects."
  },
  {
    id: "5",
    name: "Jessica Williams",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    bio: "Jessica leads our marketing efforts with over 10 years of experience in digital marketing and brand strategy."
  },
  {
    id: "6",
    name: "Ryan Patel",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Ryan manages product development from conception to launch, ensuring we deliver value to our customers."
  },
  {
    id: "7",
    name: "Olivia Martinez",
    role: "UX Researcher",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Olivia conducts user research to inform our design decisions and create products that truly meet user needs."
  },
  {
    id: "8",
    name: "James Wilson",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "James ensures our infrastructure is scalable, reliable, and secure. He's an expert in cloud technologies."
  },
  {
    id: "9",
    name: "Sophia Brown",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Sophia develops machine learning models that power our product's intelligent features."
  },
  {
    id: "10",
    name: "Daniel Taylor",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
    bio: "Daniel architects and implements our backend systems with a focus on performance and scalability."
  },
  {
    id: "11",
    name: "Isabella Garcia",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    bio: "Isabella develops our content strategy and ensures all communications align with our brand voice."
  },
  {
    id: "12",
    name: "Ethan Anderson",
    role: "QA Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Ethan ensures our products meet the highest quality standards through rigorous testing processes."
  },
  {
    id: "13",
    name: "Mia Lopez",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    bio: "Mia creates beautiful and responsive user interfaces using modern web technologies."
  },
  {
    id: "14",
    name: "Alexander Lee",
    role: "Business Development",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Alexander identifies new business opportunities and builds strategic partnerships for the company."
  },
  {
    id: "15",
    name: "Charlotte White",
    role: "HR Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    bio: "Charlotte oversees our talent acquisition and employee development programs."
  },
  {
    id: "16",
    name: "Benjamin Harris",
    role: "Sales Executive",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    bio: "Benjamin leads our sales efforts and helps customers find the right solutions for their needs."
  },
  {
    id: "17",
    name: "Amelia Clark",
    role: "Customer Support",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Amelia ensures our customers receive exceptional support and have the best experience with our products."
  },
  {
    id: "18",
    name: "William Lewis",
    role: "Security Specialist",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
    bio: "William protects our systems and data from security threats with cutting-edge security measures."
  },
  {
    id: "19",
    name: "Harper Walker",
    role: "UI Designer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    bio: "Harper creates visually stunning interfaces that are both beautiful and highly functional."
  },
  {
    id: "20",
    name: "Jacob Robinson",
    role: "Project Coordinator",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Jacob keeps our projects on track and ensures smooth communication between teams."
  }
];

export default TeamDock;