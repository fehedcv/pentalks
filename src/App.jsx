import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar";
import { useEffect } from "react";
import HomePage from "./components/hero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Mukham from "./components/pages/mukham";
import Index from "./components/pages/mukham2";
import OurStoryPage from "./components/pages/aboutus";
import ContactPage from "./components/pages/contact";

// import ProductCardGrid from "./components/projects"; // Commented out since we're replacing it
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/projectsv2"

// Simplified Card components for the project cards (no CSS variables needed)
const ProjectCard = ({ children, className = '', hoverable = false, onClick, ...props }) => (
  <div
    className={`
      rounded-lg bg-white shadow-lg border border-gray-200
      ${hoverable ? 'transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer' : ''}
      ${className}
    `}
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
);

const ProjectCardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const ProjectCardTitle = ({ children, className = '', ...props }) => (
  <h2 className={`text-3xl font-bold text-gray-800 mb-2 ${className}`} {...props}>
    {children}
  </h2>
);

const ProjectCardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-gray-600 text-lg ${className}`} {...props}>
    {children}
  </p>
);

const ProjectCardContent = ({ children, className = '', ...props }) => (
  <div className={`px-6 pb-6 ${className}`} {...props}>
    {children}
  </div>
);



const ProjectCards = () => {
  const projects = [
    {
      id: 1,
      name: "Mukham",
      description: "Comprehensive architectural design services for residential and commercial projects. Creating innovative spaces that blend functionality with aesthetic appeal.",
      image: "https://i.etsystatic.com/18208658/r/il/4c30f0/4698299310/il_570xN.4698299310_pwr4.jpg",
      alt: "Modern architectural design"
    },
    {
      id: 2,
      name: "Ver",
      description: "Complete interior design solutions that transform spaces into functional and beautiful environments. From concept to execution, we create spaces that inspire.",
      image: "https://treenewal.com/wp-content/uploads/2022/06/tree_root_growth.jpg",
      alt: "Elegant interior design"
    }
  ];
  
  return (
    <div className="py-16 px-4" style={{ backgroundColor: '#FAF7F2' }}> {/* Warm cream background */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#222222' }}>Our Projects</h2> {/* Deep neutral text */}
          <p className="text-xl" style={{ color: '#666666' }}>Discover our featured work and services</p> {/* Soft grey muted text */}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/${project.name}`} className="group">
              <div 
                className="h-full min-h-[600px] flex flex-col rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                style={{ 
                  backgroundColor: 'white',
                  border: '1px solid #E0DED8' // Subtle beige grey border
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ backgroundColor: '#C47A3D', opacity: 0 }} // Refined terracotta overlay
                  ></div>
                </div>
                
                <div className="flex-1 flex flex-col p-6">
                  <div className="mb-4">
                    <h3 
                      className="text-2xl font-bold mb-2 group-hover:underline"
                      style={{ color: '#222222' }} // Deep neutral text
                    >
                      {project.name}
                    </h3>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <p 
                      className="mb-6 leading-relaxed"
                      style={{ color: '#666666' }} // Soft grey muted text
                    >
                      {project.description}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <span 
                          className="text-sm font-medium"
                          style={{ color: '#666666' }} // Soft grey muted text
                        >
                          Click to view details
                        </span>
                        <div 
                          className="flex items-center transition-all duration-300 group-hover:translate-x-1"
                          style={{ color: '#C47A3D' }} // Refined terracotta
                        >
                          <span className="mr-2">Learn more</span>
                          <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </motion.div>
      </div>
    </div>
  );
};


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative min-h-screen bg-[#896c4a]">
      <HomePage />
      <ProjectCards />
    </div>
  );
};

function App() {
  return (
    <div>
    
    
        {/* Add your Routes here */}
        <Routes>
          {/* Your route components will go here */}
          <Route path="/" element={<Home />} />
          <Route path="/Mukham" element={
          <div className="min-h-screen bg-[#896c4a]">
            <Index />           
          </div>
        } />
          <Route path="contact" element={
          <div className="min-h-screen bg-[#896c4a]">
            <ContactPage />   
          </div>        
          } />
          <Route path="about" element={
          <div className="min-h-screen bg-[#896c4a]">
            <OurStoryPage />   
          </div>        
          } />
        </Routes>
{/*
         */}
        {/* Replaced ProductCardGrid with ProjectCards */}
      <Navigation />
    </div>
  )
}

export default App