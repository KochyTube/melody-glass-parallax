
import React from "react";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-musician-dark border-t border-white/5 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-musician-light/60 text-sm">
              © {new Date().getFullYear()} Musician. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-musician-light/60 hover:text-musician-green transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-musician-light/60 hover:text-musician-green transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-musician-light/60 hover:text-musician-green transition-colors text-sm"
            >
              Licensing
            </a>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <a
            href="#home"
            className="h-10 w-10 rounded-full bg-musician-dark border border-white/10 flex items-center justify-center hover:bg-musician-green transition-colors duration-300"
            aria-label="Back to top"
          >
            <ChevronUp size={20} className="text-musician-light" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
