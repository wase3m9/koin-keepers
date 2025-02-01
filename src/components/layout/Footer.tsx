import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/c32bdb0f-2218-49ac-8e7f-81e46d8cc068.png" 
                alt="KoinKeepers Logo" 
                className="h-24 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/60">
              Your trusted partner for crypto tax solutions.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-sm text-white/60 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-white/60 hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/60 hover:text-primary"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-white">Resources</h4>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-white/60 hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-white/60 hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/60 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-white">Contact</h4>
            <ul className="space-y-1">
              <li className="text-sm text-white/60">
                Email: hello@koin-keepers.co.uk
              </li>
              <li className="text-sm text-white/60">Phone: +44 207 118 9799</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6">
          <div className="text-center space-y-1">
            <p className="text-xs text-white/60">
              © {currentYear} KoinKeepers. All rights reserved.
            </p>
            <p className="text-xs text-white/60">
              © KoinKeepers is a trading name of Cloudkeepers London Ltd, a company registered in England and Wales; reg number 11047263
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};