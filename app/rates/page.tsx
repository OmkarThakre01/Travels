import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const rates = [
  {
    category: 'Standard Sedan',
    baseRate: 25,
    perMile: 2.5,
    waitingTime: 0.5,
    features: [
      'Up to 3 passengers',
      'Air conditioning',
      'Professional driver',
      '2 pieces of luggage'
    ]
  },
  {
    category: 'Business Class',
    baseRate: 40,
    perMile: 3.5,
    waitingTime: 0.75,
    features: [
      'Up to 3 passengers',
      'Premium vehicle',
      'Complimentary water',
      'Extra legroom',
      'Professional driver',
      '2 pieces of luggage'
    ]
  },
  {
    category: 'SUV',
    baseRate: 45,
    perMile: 4,
    waitingTime: 0.75,
    features: [
      'Up to 5 passengers',
      'Spacious interior',
      'Air conditioning',
      'Professional driver',
      '4 pieces of luggage'
    ]
  },
  {
    category: 'Luxury',
    baseRate: 70,
    perMile: 5,
    waitingTime: 1,
    features: [
      'Up to 3 passengers',
      'Premium luxury vehicle',
      'Complimentary refreshments',
      'Wi-Fi available',
      'Professional driver',
      'VIP service'
    ]
  }
];

export default function RatesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Rates</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Transparent pricing for all our services. Choose the vehicle class that best suits your needs.
          </p>
        </div>
      </section>

      {/* Rates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rates.map((rate) => (
              <Card key={rate.category} className="relative">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{rate.category}</h3>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-amber-600">
                      ${rate.baseRate}
                      <span className="text-base font-normal text-gray-600">/base</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      ${rate.perMile}/mile + ${rate.waitingTime}/min waiting
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {rate.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Additional Charges</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Airport pickup fee: $10</li>
                <li>Extra stops: $5 each</li>
                <li>Holiday surcharge: 20%</li>
                <li>Late night (10PM-6AM): 15%</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Payment Methods</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Credit/Debit Cards</li>
                <li>Corporate Accounts</li>
                <li>Digital Wallets</li>
                <li>Cash (selected routes)</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Cancellation Policy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Free cancellation up to 24h before</li>
                <li>50% charge within 24h</li>
                <li>Full charge for no-shows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}