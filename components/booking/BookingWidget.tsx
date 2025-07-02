'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Clock, Users, Search } from 'lucide-react';

interface BookingWidgetProps {
  className?: string;
  standalone?: boolean;
}

export function BookingWidget({ className, standalone = false }: BookingWidgetProps) {
  const [date, setDate] = useState<Date>();
  const [passengers, setPassengers] = useState('1');
  
  return (
    <div 
      className={cn(
        'bg-white rounded-xl overflow-hidden',
        standalone ? 'border shadow-lg' : '',
        className
      )}
    >
      <div className="px-6 py-5 bg-primary text-primary-foreground">
        <h2 className="text-xl font-bold">Book Your Ride</h2>
        {standalone && (
          <p className="text-primary-foreground/80 text-sm mt-1">
            Fast, reliable service at competitive rates
          </p>
        )}
      </div>
      
      <div className="p-6">
        <Tabs defaultValue="oneWay">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="oneWay">One Way</TabsTrigger>
            <TabsTrigger value="roundTrip">Round Trip</TabsTrigger>
          </TabsList>
          
          <TabsContent value="oneWay" className="space-y-4">
            {/* Pickup Location */}
            <div className="space-y-2">
              <label htmlFor="pickup" className="text-sm font-medium">
                Pickup Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <Input 
                  id="pickup" 
                  placeholder="Enter pickup address" 
                  className="pl-10  text-gray-800"
                />
              </div>
            </div>
            
            {/* Dropoff Location */}
            <div className="space-y-2">
              <label htmlFor="dropoff" className="text-sm font-medium">
                Dropoff Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <Input 
                  id="dropoff" 
                  placeholder="Enter destination address" 
                  className="pl-10  text-gray-800"
                />
              </div>
            </div>
            
            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal text-amber-600"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP') : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="text-amber-600"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <Select>
                    <SelectTrigger className="pl-10 text-amber-600">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }).map((_, hour) => (
                        <SelectItem key={hour} value={`${hour}:00`} className="text-amber-600">
                          {hour === 0 ? '12:00 AM' : hour < 12 ? `${hour}:00 AM` : hour === 12 ? '12:00 PM' : `${hour - 12}:00 PM`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Passengers and Vehicle */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Passengers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <Select value={passengers} onValueChange={setPassengers}>
                    <SelectTrigger className="pl-10 text-amber-600">
                      <SelectValue placeholder="Passengers" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 16 }).map((_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()} className="text-amber-600">
                          {i + 1} {i === 0 ? 'Passenger' : 'Passengers'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Vehicle Type</label>
                <Select>
                  <SelectTrigger className="text-amber-600">
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard" className="text-amber-600">Standard Sedan</SelectItem>
                    <SelectItem value="business" className="text-amber-600">Business Class</SelectItem>
                    <SelectItem value="suv" className="text-amber-600">SUV</SelectItem>
                    <SelectItem value="van" className="text-amber-600">Minivan</SelectItem>
                    <SelectItem value="luxury" className="text-amber-600">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
                <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdBz8-lstUU-Kp8FYzdh3bLPmiv8gFrTwlIezEBABBpc2AAIg/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-2">
              <Search className="mr-2 h-4 w-4" />
              Get Quote
            </Button></a>
          </TabsContent>
          
          <TabsContent value="roundTrip" className="space-y-4">
            {/* Same form fields as one way, plus return date/time */}
            {/* This is a placeholder for the round trip form which would be similar to one way */}
            <p className="text-muted-foreground">Round trip booking includes return journey.</p>
            
            {/* Pickup Location */}
            <div className="space-y-2">
              <label htmlFor="pickup-round" className="text-sm font-medium">
                Pickup Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <Input 
                  id="pickup-round" 
                  placeholder="Enter pickup address" 
                  className="pl-10  text-gray-800"
                />
              </div>
            </div>
            
            {/* Dropoff Location */}
            <div className="space-y-2">
              <label htmlFor="dropoff-round" className="text-sm font-medium">
                Dropoff Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <Input 
                  id="dropoff-round" 
                  placeholder="Enter destination address" 
                  className="pl-10  text-gray-800"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Departure Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal text-amber-600"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Select date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      initialFocus
                      className="text-amber-600"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Return Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal text-amber-600"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Select date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      initialFocus
                      className="text-amber-600"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
                <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdBz8-lstUU-Kp8FYzdh3bLPmiv8gFrTwlIezEBABBpc2AAIg/viewform" 
      target="_blank"
      rel="noopener noreferrer"
    >
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-2">
              <Search className="mr-2 h-4 w-4" />
              Get Quote
            </Button></a>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}