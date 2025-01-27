import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a20a1d4a-4223-408f-add6-c4e465311f69.png" 
                alt="CoinKeepers Logo" 
                className="h-8 object-contain"
              />
            </div>
            <p className="text-sm text-white/60">
              Your trusted partner for crypto tax solutions.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
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
            <h4 className="font-medium mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
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
            <h4 className="font-medium mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/60">
                Email: hello@coin-keepers.co.uk
              </li>
              <li className="text-sm text-white/60">Phone: +44 207 118 9799</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-sm text-white/60">
            © {currentYear} CoinKeepers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};