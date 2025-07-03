"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, PhoneCall } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-r from-black to-slate-800  shadow-md py-6 text-white"
          : "py-4 text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Omkar</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled
                  ? "text-white hover:text-primary"
                  : "text-white hover:text-white/80"
              )}
            >
              Work
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled
                  ? "text-white hover:text-primary"
                  : "text-white hover:text-white/80"
              )}
            >
              About
            </Link>
            <Link
              href="/rates"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled
                  ? "text-white hover:text-primary"
                  : "text-white hover:text-white/80"
              )}
            >
              Contact
            </Link>
           
          </nav>

          {/* Phone and login button */}
       {/* <div className="hidden md:flex items-center space-x-4">
            {/* <a
              href="tel:+8279317136"
              className={cn(
                "flex items-center space-x-2 text-sm font-medium",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              <PhoneCall size={18} />
              <span>+91 (827) 931-7136</span>
            </a> */}
            {/* <Button
              className={cn(
                "bg-amber-600 hover:bg-amber-700 text-white",
                !isScrolled && "border border-white"
              )}
            >
             Contact
            </Button>  */}
          {/* </div> */} 

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={isScrolled ? "text-gray-900" : "text-white"}
                size={24}
              />
            ) : (
              <Menu
                className={isScrolled ? "text-gray-900" : "text-white"}
                size={24}
              />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t  px-4  bg-white border-gray-200 mt-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary">
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-primary"
              >
                Services
              </Link>
              <Link href="/rates" className="text-gray-700 hover:text-primary">
                Rates
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary">
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary"
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-200">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <PhoneCall size={18} />
                 <span>+91 (827) 931-7136</span>
                </a>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
