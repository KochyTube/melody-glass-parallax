
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      className="section-spacing bg-musician-darker relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-title tracking-tight">
              About <span className="text-musician-green">Me</span>
            </h2>
            <div className="h-1 w-20 bg-musician-green mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div 
              className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="rounded-2xl overflow-hidden glass-card relative aspect-[3/4] md:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-musician-green/10 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/600x800/?musician')] bg-cover bg-center"></div>
              </div>
            </div>

            <div 
              className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "400ms" }}
            >
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-musician-green">The Story</h3>
                <p className="text-musician-light/80 mb-6">
                  I am a passionate musician, producer, and audio engineer with over 10 years of experience in the industry. My journey began in my bedroom studio, experimenting with sounds and creating unique compositions.
                </p>
                <p className="text-musician-light/80 mb-6">
                  Today, I've had the privilege of working with incredible artists and creating music that resonates with audiences worldwide. My approach combines traditional techniques with innovative technology.
                </p>
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-3 text-musician-light">Expertise</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="h-1 w-4 bg-musician-green mr-2"></div>
                      <span className="text-musician-light/80">Production</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-1 w-4 bg-musician-green mr-2"></div>
                      <span className="text-musician-light/80">Composition</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-1 w-4 bg-musician-green mr-2"></div>
                      <span className="text-musician-light/80">Sound Design</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-1 w-4 bg-musician-green mr-2"></div>
                      <span className="text-musician-light/80">Engineering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
