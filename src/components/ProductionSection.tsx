
import React from "react";
import { useInView } from "react-intersection-observer";
import { Headphones, Mic, Sliders } from "lucide-react";

const ServiceCard = ({ title, icon, description, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl overflow-hidden ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <div className="mb-4 p-3 bg-musician-green/10 inline-block rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-musician-light">{title}</h3>
        <p className="text-musician-light/80">{description}</p>
      </div>
    </div>
  );
};

const ProductionSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      title: "Music Production",
      icon: <Headphones size={28} className="text-musician-green" />,
      description: "From concept to final master, I guide your project through every stage of the production process. My approach balances technical precision with creative exploration to bring your musical vision to life.",
      delay: 200,
    },
    {
      title: "Sound Engineering",
      icon: <Sliders size={28} className="text-musician-green" />,
      description: "With expertise in recording, mixing, and mastering, I ensure your music sounds professional and polished. I use industry-standard equipment and techniques to achieve the highest quality results.",
      delay: 400,
    },
    {
      title: "Studio Recording",
      icon: <Mic size={28} className="text-musician-green" />,
      description: "My well-equipped studio provides the perfect environment for capturing exceptional performances. I work with vocalists, instrumentalists, and bands to record tracks that sound authentic and engaging.",
      delay: 600,
    },
  ];

  const projects = [
    {
      title: "Album Production",
      description: "Produced a 12-track indie rock album, handling everything from initial recording to final mastering. The album received acclaim for its dynamic sound and emotional depth.",
      delay: 200,
    },
    {
      title: "Film Scoring",
      description: "Composed and produced the original soundtrack for an independent short film. The score enhanced the narrative through carefully crafted themes and atmospheric sound design.",
      delay: 400,
    },
    {
      title: "Commercial Music",
      description: "Created custom music for advertising campaigns, developing memorable hooks and professional production that elevated the brand message across multiple platforms.",
      delay: 600,
    },
  ];

  return (
    <section
      id="production"
      className="section-spacing bg-musician-darker relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-title tracking-tight">
            Music <span className="text-musician-green">Production</span> & Sound <span className="text-musician-green">Engineering</span>
          </h2>
          <div className="h-1 w-20 bg-musician-green mx-auto rounded-full"></div>
          <p className="text-musician-light/80 text-center max-w-3xl mx-auto mt-6">
            I offer comprehensive music production and sound engineering services,
            helping artists and creators achieve professional quality sound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className={`mt-20 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "700ms" }}>
          <h3 className="text-2xl font-bold mb-8 text-center font-title tracking-tight text-musician-light">
            Recent <span className="text-musician-green">Projects</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`glass-card p-6 rounded-xl ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${project.delay}ms` }}
              >
                <h4 className="text-lg font-bold mb-3 text-musician-green">{project.title}</h4>
                <p className="text-musician-light/80">{project.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-musician-green text-musician-darker rounded-full font-medium transition-all duration-300 hover:bg-musician-green-muted focus:outline-none focus:ring-2 focus:ring-musician-green focus:ring-offset-2 focus:ring-offset-musician-darker"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
