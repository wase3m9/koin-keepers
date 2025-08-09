import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center justify-center flex-shrink-0">
              <img 
                src="/lovable-uploads/dee6891c-3b27-4d2d-9f51-2188e70c2919.png" 
                alt="KoinKeepers Logo" 
                className="h-40 object-contain transition-all duration-300 hover:brightness-[1.75] active:brightness-[1.75] -my-2 brightness-0 invert"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.label} to={item.path} className="nav-link text-white hover:text-primary active:text-primary">
                  {item.label}
                </Link>
              ))}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to="/calculator" className="nav-link text-white hover:text-primary active:text-primary">
                      <Calculator className="w-5 h-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">Crypto Tax Calculator</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button 
                asChild
                className="bg-primary text-black hover:bg-primary/90"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center h-11 w-11 rounded-md text-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div id="mobile-menu" className="md:hidden bg-black">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block px-4 py-3.5 rounded-md text-lg font-medium text-white hover:text-primary active:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/calculator"
                  className="flex items-center px-4 py-3.5 rounded-md text-lg font-medium text-white hover:text-primary active:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  onClick={() => setIsOpen(false)}
                >
                  <Calculator className="w-7 h-7 mr-3" />
                  Calculator
                </Link>
                <Button 
                  asChild 
                  className="w-full mt-4 h-12 text-base bg-primary text-black hover:bg-primary/90"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};