
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
        <div className="max-w-5xl mx-auto">
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
                <p className="text-musician-light/80 mb-6">
                  My musical style blends electronic elements with orchestral arrangements, creating immersive soundscapes that tell stories without words. I draw inspiration from both classical composers and contemporary electronic artists.
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
                    <div className="flex items-center">
                      <div className="h-1 w-4 bg-musician-green mr-2"></div>
                      <span className="text-musician-light/80">Live Performance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-1 w-4 bg-musician-green mr-2"></div>
                      <span className="text-musician-light/80">Mixing & Mastering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={`mt-12 glass-card p-6 md:p-8 rounded-2xl ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "600ms" }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-musician-green">My Musical Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-3 text-musician-light">Background</h4>
                <p className="text-musician-light/80 mb-4">
                  My musical journey began at age 7 with classical piano training. By my teenage years, I was experimenting with electronic music production and began performing at local venues. After studying music technology at university, I established my own studio and began producing for other artists.
                </p>
                <p className="text-musician-light/80">
                  I've since collaborated with artists across genres, from indie rock bands to electronic music producers, helping them achieve their unique sound while maintaining my own artistic voice.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3 text-musician-light">Philosophy</h4>
                <p className="text-musician-light/80 mb-4">
                  I believe music is the most universal language we have. My goal is to create sonic experiences that evoke emotion and connect with listeners on a deeper level. Every project I undertake is an opportunity to push boundaries and explore new territory.
                </p>
                <p className="text-musician-light/80">
                  Whether I'm composing for film, producing for other artists, or creating my own releases, I bring the same level of care, attention to detail, and creative exploration to everything I do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
