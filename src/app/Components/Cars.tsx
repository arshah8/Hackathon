"use client"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Fuel, User, Settings } from "lucide-react";
import Link from "next/link";

const popularCars = [
  { name: "Koenigsegg", type: "Sport", price: 99.0, image: "/car1.png" },
  { name: "Nissan GT-R", type: "Sport", price: 80.0, image: "/car2.png" },
  { name: "Rolls-Royce", type: "Sedan", price: 96.0, image: "/car3.png" },
  { name: "Nissan GT-R", type: "Sport", price: 80.0, image: "/car2.png" },
];

export default function PopularCars() {
  const [liked, setLiked] = useState<boolean[]>(new Array(popularCars.length).fill(false));

  const toggleLike = (index: number) => {
    const updatedLiked = [...liked];
    updatedLiked[index] = !updatedLiked[index];
    setLiked(updatedLiked);
  };

  return (
    <div className="mb-8 lg:mx-5 hidden lg:block">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-400 text-lg font-semibold">Popular Cars</h2>
        <Button variant="link" className="text-blue-500">View All</Button>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {popularCars.map((car, index) => (
          <Card
            key={index}
            className="shadow-lg rounded-lg bg-blue-200 border border-blue-200 hover:shadow-xl transition duration-300 relative overflow-hidden"
          >
          
            <button
              onClick={() => toggleLike(index)}
              className="absolute top-4 right-4"
              aria-label="Toggle Like"
            >
              <Heart
                className={`h-6 w-6 transition ${
                  liked[index] ? "text-red-500 fill-red-500" : "text-gray-400 fill-none"
                }`}
                fill={liked[index] ? "currentColor" : "none"}
              />
            </button>

            
            <CardHeader className="space-y-0 pb-4">
              <CardTitle className="text-lg font-bold text-gray-800">{car.name}</CardTitle>
              <p className="text-sm text-gray-500">{car.type}</p>
            </CardHeader>

            
            <div className="relative h-32 pt-11">
              <Image
                src={car.image}
                height={120}
                width={200}
                alt={car.name}
                className="mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="flex justify-around items-center mt-4 text-xs text-gray-500">
              <div className="flex flex-col items-center">
                <Fuel className="h-4 w-4 text-gray-700" />
                <span>90L</span>
              </div>
              <div className="flex flex-col items-center">
                <Settings className="h-4 w-4 text-gray-700" />
                <span>Manual</span>
              </div>
              <div className="flex flex-col items-center">
                <User className="h-4 w-4 text-gray-700" />
                <span>2 People</span>
              </div>
            </div>

          
            <CardFooter className="flex justify-between items-center mt-4">
              <div>
                <p className="text-lg font-bold text-gray-900">
                  ${car.price.toFixed(2)}
                  <span className="text-sm font-normal text-gray-500">/day</span>
                </p>
              </div>
              <Link href="/car/details">
  <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Rent Now
  </Button>
</Link>

            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
