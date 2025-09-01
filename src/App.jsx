import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar";
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

// New Project Cards Component
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
    <div className="py-16 px-4" style={{ backgroundColor: '#896c4a' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Our Projects</h2>
          <p className="text-xl text-white/80">Discover our featured work and services</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // animate once when 20% of it is visible
        >
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/${project.name}`}>
              <ProjectCard
                hoverable
                className="h-full min-h-[600px] flex flex-col"
              >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10"></div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <ProjectCardHeader>
                  <ProjectCardTitle>{project.name}</ProjectCardTitle>
                </ProjectCardHeader>
                
                <ProjectCardContent className="flex-1 flex flex-col justify-between">
                  <ProjectCardDescription className="mb-6 leading-relaxed">
                    {project.description}
                  </ProjectCardDescription>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">
                        Click to view details
                      </span>
                      <div className="flex items-center text-blue-600">
                        <span className="mr-2">Learn more</span>
                        <svg 
                          className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </ProjectCardContent>
              </div>
            </ProjectCard>
          </Link>
          ))}
        </div>
        </motion.div>
      </div>
    </div>
  );
};

const Home = () => (
  <div className="relative min-h-screen bg-[#896c4a]">
    <HomePage />
    <ProjectCards />
  </div>
);

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