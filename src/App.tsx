import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { FancyPortfolio } from "./components/FancyPortfolio";
import { SimplePortfolio } from "./components/SimplePortfolio";

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSimple = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <div 
            ref={scrollContainerRef}
            className="h-screen w-screen overflow-y-auto overflow-x-hidden bg-[#1e1e1e] scroll-smooth custom-scrollbar"
          >
            <LandingPage onScrollDown={scrollToSimple} />
            <SimplePortfolio />
          </div>
        } 
      />
      <Route 
        path="/fancy" 
        element={<FancyPortfolio />} 
      />
    </Routes>
  );
}
