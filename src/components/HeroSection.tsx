
import React, { useEffect, useState } from "react";
import ParallaxContainer from "./ParallaxContainer";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      <ParallaxContainer speed={0.2} className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-full w-full bg-musician-green opacity-5"></div>
      </ParallaxContainer>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center">
          <ParallaxContainer speed={-0.1}>
            <h4 
              className={`text-sm md:text-base font-medium tracking-widest text-musician-green mb-2 md:mb-3 uppercase opacity-0 transition-opacity duration-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Welcome to my world
            </h4>
          </ParallaxContainer>

          <ParallaxContainer speed={-0.2}>
            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight opacity-0 transition-opacity duration-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <span className="text-musician-light font-title">Artist Name</span>
            </h1>
          </ParallaxContainer>

          <ParallaxContainer speed={-0.15}>
            <p 
              className={`text-base md:text-lg max-w-2xl mx-auto text-musician-light/80 mb-8 md:mb-10 opacity-0 transition-opacity duration-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              Producer • Composer • Audio Engineer
            </p>
          </ParallaxContainer>

          <ParallaxContainer speed={-0.1}>
            <div 
              className={`opacity-0 transition-opacity duration-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "1100ms" }}
            >
              <a
                href="#music"
                className="inline-flex items-center px-6 py-3 bg-musician-green text-musician-darker rounded-full font-medium transition-all duration-300 hover:bg-musician-green-muted focus:outline-none focus:ring-2 focus:ring-musician-green focus:ring-offset-2 focus:ring-offset-musician-darker"
              >
                Explore Music
              </a>
            </div>
          </ParallaxContainer>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse-subtle">
        <a
          href="#about"
          className="text-musician-light hover:text-musician-green transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
