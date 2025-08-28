import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar";
import HomePage from "./components/hero";
import ScrollStack from "./components/story";
import ProductCardGrid from "./components/projects";


const cards = [
    {
      title: "Architectural Design",
      subtitle: "Architectural design services for residential and commercial projects",
      badge: "Feature",
    },
    {
      title: "Interior Design",
      subtitle: "Interior design solutions to create functional and aesthetic spaces",
      badge: "Feature",
    },
    {
      title: "Heritage",
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
      <div className="relative min-h-screen bg-[#896c4a]">
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
{/*}
        <ScrollStack 
        cards={cards} 
        backgroundColor="bg-[#896c4a]" 
        cardHeight="70vh"
        sectionHeightMultiplier={3}
      /> */}
        <ProductCardGrid />
      </div>
    </BrowserRouter>
  )
}

export default App