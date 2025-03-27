
import React from "react";
import { Play, Pause, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface MusicTrackProps {
  title: string;
  description: string;
  imageUrl: string;
  delay: number;
}

const MusicTrack: React.FC<MusicTrackProps> = ({ title, description, imageUrl, delay }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative aspect-square overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <div className="h-16 w-16 rounded-full bg-musician-green flex items-center justify-center">
            {isPlaying ? (
              <Pause size={30} className="text-musician-darker" />
            ) : (
              <Play size={30} className="text-musician-darker ml-1" />
            )}
          </div>
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-musician-light">{title}</h3>
        <p className="text-musician-light/70 text-sm mb-4">{description}</p>
        <a
          href="#"
          className="inline-flex items-center text-musician-green hover:text-musician-green-muted transition-colors text-sm font-medium"
        >
          Listen on Streaming <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const MusicSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const tracks = [
    {
      title: "Neon Dreams",
      description: "Electronic • 2023",
      imageUrl: "https://source.unsplash.com/random/400x400/?neon,music",
      delay: 200,
    },
    {
      title: "Midnight Echo",
      description: "Ambient • 2022",
      imageUrl: "https://source.unsplash.com/random/400x400/?night,music",
      delay: 400,
    },
    {
      title: "Solar Flux",
      description: "Downtempo • 2022",
      imageUrl: "https://source.unsplash.com/random/400x400/?sun,music",
      delay: 600,
    },
    {
      title: "Urban Pulse",
      description: "Electronic • 2021",
      imageUrl: "https://source.unsplash.com/random/400x400/?city,music",
      delay: 800,
    },
  ];

  return (
    <section
      id="music"
      className="section-spacing bg-musician-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-title tracking-tight">
            Latest <span className="text-musician-green">Releases</span>
          </h2>
          <div className="h-1 w-20 bg-musician-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <MusicTrack key={index} {...track} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
