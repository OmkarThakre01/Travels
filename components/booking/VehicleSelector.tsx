'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const vehicles = [
  {
    id: 'standard',
    name: 'Standard Sedan',
    description: 'Comfortable sedan for up to 3 passengers',
    capacity: 3,
    luggage: 2,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 25
  },
  {
    id: 'business',
    name: 'Business Class',
    description: 'Premium sedan with extra amenities',
    capacity: 3,
    luggage: 2,
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 40
  },
  {
    id: 'suv',
    name: 'SUV',
    description: 'Spacious SUV for up to 5 passengers',
    capacity: 5,
    luggage: 4,
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 45
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Premium luxury vehicle with top amenities',
    capacity: 3,
    luggage: 2,
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 70
  }
];

interface VehicleSelectorProps {
  onSelect?: (vehicleId: string) => void;
  className?: string;
}

export function VehicleSelector({ onSelect, className }: VehicleSelectorProps) {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].id);
  
  const handleSelect = (vehicleId: string) => {
    setSelectedVehicle(vehicleId);
    if (onSelect) {
      onSelect(vehicleId);
    }
  };
  
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg font-semibold">Select Vehicle</h3>
      
      <div className="space-y-3">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className={cn(
              "border rounded-lg p-3 cursor-pointer transition-all",
              selectedVehicle === vehicle.id
                ? "border-primary bg-primary/5"
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => handleSelect(vehicle.id)}
          >
            <div className="flex items-center">
              <div className="relative h-20 w-24 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{vehicle.name}</h4>
                    <p className="text-sm text-gray-500">{vehicle.description}</p>
                    <div className="flex space-x-4 mt-1 text-xs text-gray-600">
                      <span>{vehicle.capacity} passengers</span>
                      <span>{vehicle.luggage} luggage</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="font-semibold text-lg">${vehicle.price}</span>
                    
                    {selectedVehicle === vehicle.id && (
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}