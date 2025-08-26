import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar";
import HomePage from "./components/hero";
import ScrollStack from "./components/story";


const cards = [
    {
      title: "Welcome to Cubeeto",
      subtitle: "Student marketplace powered by AI",
      badge: "New",
      backgroundImage: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
      title: "Buy & Sell",
      subtitle: "Find items easily with AI-powered search",
      badge: "Feature",
    },
    {
      title: "For Students",
      subtitle: "Low-cost, accessible, and youth-friendly",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Custom Content</h3>
          <p className="text-white/80">You can even pass JSX as content!</p>
        </div>
      )
    },
  ];


function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <HomePage />
        <Navigation/>
        {/* Add your Routes here */}
        <Routes>
          {/* Your route components will go here */}
          {/* Example:
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          */}
        </Routes>
        <ScrollStack 
        cards={cards} 
        backgroundColor="bg-gray-900" 
        cardHeight="70vh"
        sectionHeightMultiplier={3}
      />
      </div>
    </BrowserRouter>
  )
}

export default App