
import React from "react";
import { Mail, MapPin, Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
      className="section-spacing bg-musician-darker relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-title tracking-tight">
            Get in <span className="text-musician-green">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-musician-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl h-full">
              <h3 className="text-xl font-bold mb-6 text-musician-green">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-musician-green mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-musician-light font-medium mb-1">Email</h4>
                    <a href="mailto:hello@musician.com" className="text-musician-light/70 hover:text-musician-green transition-colors">
                      hello@musician.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-musician-green mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-musician-light font-medium mb-1">Location</h4>
                    <p className="text-musician-light/70">Los Angeles, California</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-musician-light font-medium mb-3">Connect</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-musician-dark flex items-center justify-center hover:bg-musician-green transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} className="text-musician-light" />
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-musician-dark flex items-center justify-center hover:bg-musician-green transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter size={18} className="text-musician-light" />
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-musician-dark flex items-center justify-center hover:bg-musician-green transition-colors duration-300"
                      aria-label="Youtube"
                    >
                      <Youtube size={18} className="text-musician-light" />
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-musician-dark flex items-center justify-center hover:bg-musician-green transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} className="text-musician-light" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-musician-green">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-musician-light text-sm mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-musician-dark border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-musician-green/50 text-musician-light"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-musician-light text-sm mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-musician-dark border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-musician-green/50 text-musician-light"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-musician-light text-sm mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-musician-dark border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-musician-green/50 text-musician-light resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-musician-green text-musician-darker rounded-lg font-medium transition-all duration-300 hover:bg-musician-green-muted focus:outline-none focus:ring-2 focus:ring-musician-green focus:ring-offset-2 focus:ring-offset-musician-darker"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
