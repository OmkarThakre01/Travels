
import Image from 'next/image';
import Link from 'next/link';
import { BookingWidget } from '@/components/booking/BookingWidget';
import { Button } from '@/components/ui/button';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="https://images.pexels.com/photos/2224/road-people-street-smartphone.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Taxi background" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Taxi Service For Your Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Professional drivers, comfortable vehicles, and competitive rates. Book your ride in minutes and enjoy a hassle-free experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Download App
              </Button>
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full max-w-md lg:w-2/5 lg:max-w-none">
            <BookingWidget className="shadow-2xl" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Our Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Better Taxi Experience?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for their transportation needs.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            Book Your Ride Now
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
