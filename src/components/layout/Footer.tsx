import { Link } from "react-router-dom";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <img src="/lovable-uploads/c32bdb0f-2218-49ac-8e7f-81e46d8cc068.png" alt="KoinKeepers Logo" className="h-20 sm:h-24 object-contain brightness-0 invert" />
            </div>
            <p className="text-xs sm:text-sm text-white/60 -mt-2">
              Your trusted partner for crypto tax solutions.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-white text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-xs sm:text-sm text-white/60 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-xs sm:text-sm text-white/60 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs sm:text-sm text-white/60 hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-white text-sm sm:text-base">Resources</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/blog" className="text-xs sm:text-sm text-white/60 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-xs sm:text-sm text-white/60 hover:text-primary">
                  Help centre
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-medium mb-2 text-white text-sm sm:text-base">Contact</h4>
            <ul className="space-y-1">
              <li className="text-xs sm:text-sm text-white/60 break-all">Email: info@cloud-keepers.co.uk</li>
              <li className="text-xs sm:text-sm text-white/60">Phone: +44 20 7118 9799</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6">
          <div className="text-center space-y-1 px-2">
            <p className="text-[10px] sm:text-xs text-white/60">
              © {currentYear} KoinKeepers. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-white/60">
              © KoinKeepers is a trading name of{" "}
              <a href="https://www.cloud-keepers.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                Cloudkeepers London Ltd
              </a>
              , a company registered in England and Wales; Reg Number 11047263
            </p>
          </div>
        </div>
      </div>
    </footer>;
};