import { Services } from '@/components/sections/Services';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Experience premium transportation solutions tailored to your needs. From airport transfers to special events, we have got you covered.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <Services />


      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Custom Solutions</h2>
              <p className="text-gray-600">
                Need a specialized transportation solution? We offer customized services to meet your specific requirements. Contact us to discuss your needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>Multi-city tours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>Corporate travel packages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>VIP services</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Service Guarantees</h2>
              <p className="text-gray-600">
                We stand behind our service quality with solid guarantees to ensure your complete satisfaction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>On-time guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>Professional chauffeurs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>Clean, maintained vehicles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}