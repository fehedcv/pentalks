import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar";
import HomePage from "./components/hero";


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
      </div>
    </BrowserRouter>
  )
}

export default App