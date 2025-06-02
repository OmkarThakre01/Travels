'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { BookingWidget } from '@/components/booking/BookingWidget';
import { VehicleSelector } from '@/components/booking/VehicleSelector';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChevronRight, Clock, MapPin, Check, CreditCard } from 'lucide-react';

const steps = ['Location', 'Vehicle', 'Details', 'Payment'];

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Booking Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index + 1 <= currentStep 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {index + 1 < currentStep ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className={`ml-2 text-sm hidden sm:block ${
                    index + 1 <= currentStep ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                  
                  {index < steps.length - 1 && (
                    <ChevronRight className="mx-2 text-gray-400 hidden sm:block" size={16} />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <Tabs defaultValue="tab1" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="tab1">One Way</TabsTrigger>
                      <TabsTrigger value="tab2">Round Trip</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="tab1" className="space-y-6 pt-6">
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <h2 className="text-xl font-semibold">Enter Your Route Details</h2>
                          
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Pickup Location</label>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input 
                                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  placeholder="Enter pickup address"
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Dropoff Location</label>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input 
                                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  placeholder="Enter destination address"
                                />
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Date</label>
                                <input 
                                  type="date"
                                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Time</label>
                                <div className="relative">
                                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                  <input 
                                    type="time"
                                    className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                            onClick={() => setCurrentStep(2)}
                          >
                            Continue to Vehicle Selection
                          </Button>
                        </div>
                      )}
                      
                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <h2 className="text-xl font-semibold">Select Your Vehicle</h2>
                          
                          <VehicleSelector />
                          
                          <div className="flex space-x-4 pt-2">
                            <Button 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => setCurrentStep(1)}
                            >
                              Back
                            </Button>
                            <Button 
                              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                              onClick={() => setCurrentStep(3)}
                            >
                              Continue
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <h2 className="text-xl font-semibold">Passenger Details</h2>
                          
                          <div className="grid gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input 
                                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  placeholder="Enter first name"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input 
                                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  placeholder="Enter last name"
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Email Address</label>
                              <input 
                                type="email"
                                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="your@email.com"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Phone Number</label>
                              <input 
                                type="tel"
                                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Enter phone number"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Special Requests (Optional)</label>
                              <textarea 
                                rows={3}
                                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Any special requirements or information for the driver"
                              />
                            </div>
                          </div>
                          
                          <div className="flex space-x-4 pt-2">
                            <Button 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => setCurrentStep(2)}
                            >
                              Back
                            </Button>
                            <Button 
                              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                              onClick={() => setCurrentStep(4)}
                            >
                              Continue to Payment
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {currentStep === 4 && (
                        <div className="space-y-6">
                          <h2 className="text-xl font-semibold">Payment Details</h2>
                          
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Card Number</label>
                              <div className="relative">
                                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input 
                                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  placeholder="1234 5678 9012 3456"
                                />
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Expiry Date</label>
                                <input 
                                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  placeholder="MM/YY"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium">CVV</label>
                                <input 
                                  type="password"
                                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  placeholder="123"
                                  maxLength={3}
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Cardholder Name</label>
                              <input 
                                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Name on card"
                              />
                            </div>
                          </div>
                          
                          <div className="flex space-x-4 pt-2">
                            <Button 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => setCurrentStep(3)}
                            >
                              Back
                            </Button>
                            <Button 
                              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                            >
                              Complete Booking
                            </Button>
                          </div>
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="tab2">
                      <div className="py-6">
                        <p>Round trip booking options will be shown here.</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Journey Type:</span>
                        <span className="font-medium">One Way</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Pickup:</span>
                        <span className="font-medium">123 Main St, City</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Destination:</span>
                        <span className="font-medium">Airport Terminal 2</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Date & Time:</span>
                        <span className="font-medium">Jun 15, 2025, 9:00 AM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Vehicle:</span>
                        <span className="font-medium">Business Class</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Base Fare:</span>
                        <span>$35.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Distance (12 mi):</span>
                        <span>$15.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Service Fee:</span>
                        <span>$5.00</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>$55.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}