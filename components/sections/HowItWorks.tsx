import { ArrowRight, MapPin, Calendar, Car, CreditCard } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Booking your ride with RideEase is simple and straightforward. Just follow these steps for a seamless experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 text-white">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enter Location</h3>
            <p className="text-gray-600">
              Input your pickup and drop-off locations to get started with your booking.
            </p>
            <div className="mt-4 text-primary hidden md:block">
              <ArrowRight className="ml-auto" />
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 text-white">
              <Calendar size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose Date & Time</h3>
            <p className="text-gray-600">
              Select when you need the ride and how many passengers will be traveling.
            </p>
            <div className="mt-4 text-primary hidden md:block">
              <ArrowRight className="ml-auto" />
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 text-white">
              <Car size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Select Vehicle</h3>
            <p className="text-gray-600">
              Choose from our range of vehicles based on your needs and preferences.
            </p>
            <div className="mt-4 text-primary hidden md:block">
              <ArrowRight className="ml-auto" />
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 text-white">
              <CreditCard size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Confirm & Pay</h3>
            <p className="text-gray-600">
              Review your booking details, confirm, and complete payment securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}