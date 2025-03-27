
import React from "react";
import { useInView } from "react-intersection-observer";
import { Mic, Calendar, Music } from "lucide-react";

const EventCard = ({ title, date, location, description, icon, delay }) => {
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
        <div className="flex items-start">
          <div className="mr-4 p-3 bg-musician-green/10 rounded-full">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-musician-light">{title}</h3>
            <div className="flex items-center text-musician-green text-sm mb-2">
              <Calendar size={16} className="mr-2" />
              <span>{date}</span>
            </div>
            <p className="text-musician-light/70 text-sm mb-3">{location}</p>
            <p className="text-musician-light/80">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LivePerformancesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const events = [
    {
      title: "Wedding Performances",
      date: "Available Year-Round",
      location: "Los Angeles & Surrounding Areas",
      description: "Create unforgettable memories with custom musical performances for your wedding ceremony, cocktail hour, or reception. I tailor my setlist to match your style and preferences.",
      icon: <Mic size={24} className="text-musician-green" />,
      delay: 200,
    },
    {
      title: "Birthday Celebrations",
      date: "Available Year-Round",
      location: "Private Venues & Residences",
      description: "Make your birthday celebration extra special with live music. From intimate acoustic sessions to lively performances, I'll create the perfect ambiance for your party.",
      icon: <Music size={24} className="text-musician-green" />,
      delay: 400,
    },
    {
      title: "Corporate Events",
      date: "Available Year-Round",
      location: "Hotels & Conference Centers",
      description: "Enhance your corporate events with professional live music. From networking mixers to award ceremonies, I provide sophisticated entertainment that impresses clients and colleagues.",
      icon: <Calendar size={24} className="text-musician-green" />,
      delay: 600,
    },
  ];

  return (
    <section
      id="live-performances"
      className="section-spacing bg-musician-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-title tracking-tight">
            Live <span className="text-musician-green">Performances</span>
          </h2>
          <div className="h-1 w-20 bg-musician-green mx-auto rounded-full"></div>
          <p className="text-musician-light/80 text-center max-w-3xl mx-auto mt-6">
            I bring my musical expertise to private events, creating customized experiences
            that perfectly complement your special occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div 
          className={`mt-16 glass-card p-8 rounded-2xl max-w-4xl mx-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-musician-green text-center">Custom Event Packages</h3>
          <p className="text-musician-light/80 text-center mb-6">
            Every event is unique, and I offer customized packages to meet your specific needs and budget.
            From solo performances to full band arrangements, I work with you to create the perfect musical experience.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-musician-green text-musician-darker rounded-full font-medium transition-all duration-300 hover:bg-musician-green-muted focus:outline-none focus:ring-2 focus:ring-musician-green focus:ring-offset-2 focus:ring-offset-musician-darker"
            >
              Request Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivePerformancesSection;
