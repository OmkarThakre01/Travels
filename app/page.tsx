import Image from 'next/image';
import Link from 'next/link';
import { BookingWidget } from '@/components/booking/BookingWidget';
import { Button } from '@/components/ui/button';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import HeroImg from '@/assets/Images/HeroImg.png';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
     <section className="relative bg-gradient-to-r from-black to-slate-800 text-white overflow-hidden">
  {/* Background Image */}
  {/* <div className="absolute inset-0 opacity-30">
    <Image 
      src="https://images.pexels.com/photos/2224/road-people-street-smartphone.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      alt="Taxi service background" 
      fill
      className="object-cover"
      priority
    />
  </div> */}

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Text Content */}
   <div className="flex-1 space-y-6 text-center lg:text-left">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
    Hi, I'm <span className="text-yellow-400">Omkar</span> 
  </h1>
  <h2>UI/UX Designer & Frontend Developer</h2>
  <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
    I design and build user-centric digital experiences that blend aesthetics with functionality. Let’s create seamless interfaces that users love.
  </p>
  <div>
    <button className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl shadow-md transition hover:shadow-lg">
      View My Work
    </button>
  </div>
</div>



    {/* Hero Image */}
    <div className="flex-1 w-full max-w-md lg:max-w-lg relative aspect-square">
      <Image 
        src={HeroImg}
        alt="Taxi vehicle illustration"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
</section>


      {/* How It Works */}
      <HowItWorks />

      {/* Our Services */}
      {/* <Services /> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}
      
      {/* CTA Section */}
      {/* <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Better Taxi Experience?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for their transportation needs.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            Book Your Ride Now
          </Button>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}