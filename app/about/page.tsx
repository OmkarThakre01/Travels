import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Award, Users } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Professional Drivers', value: '200+' },
  { label: 'Cities Served', value: '25+' },
  { label: 'Happy Customers', value: '50K+' }
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Your safety is our top priority. All our drivers undergo rigorous background checks and training.'
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description: 'We understand the value of your time and ensure timely pickups and drop-offs.'
  },
  {
    icon: Award,
    title: 'Quality Service',
    description: 'Premium vehicles and professional chauffeurs for a comfortable journey.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: '24/7 customer support and personalized service to meet your needs.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About RideEase</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Your trusted partner in premium transportation services since 2014.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="RideEase office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2014, RideEase has grown from a small local operation to a leading transportation service provider. Our journey began with a simple mission: to provide reliable, comfortable, and professional transportation services to our community.
              </p>
              <p className="text-gray-600">
                Today, we operate in over 25 cities, serving both individual and corporate clients with a fleet of premium vehicles and a team of professional drivers. Our commitment to excellence and customer satisfaction remains at the heart of everything we do.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-amber-600" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <Card key={member}>
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                      alt="Team member"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">John Doe</h3>
                  <p className="text-gray-600">Chief Executive Officer</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}