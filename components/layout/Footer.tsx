import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Sonu Tours and Travels</h3>
            <p className="text-gray-300 max-w-xs">
              Premium taxi service providing reliable and comfortable transportation for all your needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/rates" className="text-gray-300 hover:text-white transition-colors">Pricing & Rates</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/airport" className="text-gray-300 hover:text-white transition-colors">Airport Transfers</Link></li>
              <li><Link href="/services/corporate" className="text-gray-300 hover:text-white transition-colors">Corporate Travel</Link></li>
              <li><Link href="/services/events" className="text-gray-300 hover:text-white transition-colors">Event Transportation</Link></li>
              <li><Link href="/services/hourly" className="text-gray-300 hover:text-white transition-colors">Hourly Hire</Link></li>
              <li><Link href="/services/long-distance" className="text-gray-300 hover:text-white transition-colors">Long Distance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="shrink-0 mt-1 text-gray-400" />
                <span className="text-gray-300">Derhdun</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="shrink-0 text-gray-400" />
                <span className="text-gray-300">+91 (827) 931-7136</span>

              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="shrink-0 text-gray-400" />
                <span className="text-gray-300">Sonu@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} RideEase. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}