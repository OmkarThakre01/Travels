import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'airport',
    title: 'Airport Transfers',
    description: 'Reliable airport pickup and drop-off service with flight tracking and waiting time included.',
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Popular'
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    description: 'Professional transportation solutions for business meetings, conferences, and corporate events.',
    image: 'https://images.pexels.com/photos/5325056/pexels-photo-5325056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Business'
  },
  {
    id: 'events',
    title: 'Event Transportation',
    description: 'Luxury vehicles for weddings, parties, and special occasions with professional chauffeurs.',
    image: 'https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'hourly',
    title: 'Hourly Hire',
    description: 'Flexible hourly booking options for multiple stops or extended waiting times.',
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export function Services() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a range of premium transportation services to meet your needs, with professional drivers and comfortable vehicles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {service.badge && (
                  <Badge className="absolute top-3 right-3 bg-amber-600">
                    {service.badge}
                  </Badge>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}