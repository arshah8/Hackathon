"use client";
import Link from "next/link";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Recom from "./Recom";

export function CarDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    "/car2.png", 
    "/View 2.png", 
    "/View 3.png", 
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
       
        <div className="space-y-4 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-bold text-blue-700">
            Sports car with the best design and acceleration
          </h2>
          <p className="text-sm text-blue-500">
            Safety and comfort while driving a futuristic and elegant sports car
          </p>
          <div>
            <Image
              src={images[selectedImage]}
              width={500}
              height={300}
              alt="Nissan GT-R"
              className="rounded-lg"
            />
          </div>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`rounded-lg border-2 ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image}
                  width={100}
                  height={60}
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Nissan GT-R</h2>
            <button className="text-gray-400">
              <Heart className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              <Star className="w-4 h-4 text-gray-300" />
            </div>
            <span className="text-sm text-gray-500">440+ Reviews</span>
          </div>

          <p className="text-gray-600">
            NISMO has become the embodiment of Nissan&apos;s outstanding performance,
            inspired by the most unforgiving proving ground, the &quot;race track&quot;.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm text-gray-500">Type Car</h3>
              <p className="font-medium">Sport</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Capacity</h3>
              <p className="font-medium">2 Person</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Steering</h3>
              <p className="font-medium">Manual</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Gasoline</h3>
              <p className="font-medium">70L</p>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <p className="text-2xl font-bold">
              $80.00/<span className="text-sm font-normal text-gray-500">days</span>
            </p>
            <p className="text-sm text-gray-500 line-through">$100.00</p>
            <Link href = "/payment/details">
            <Button className="text-sm px-4 py-2 bg-blue-500 ml-4">
              Rent Now
            </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-bold">Reviews</h3>
        <div className="space-y-6">
          {[
            {
              name: "Alex Stanton",
              role: "CEO at Bukalapak",
              date: "21 July 2022",
              comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
              avatar: "/avatar.png"
            },
            {
              name: "Skylar Dias",
              role: "CEO at Amazon",
              date: "20 July 2022",
              comment: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
              avatar: "/profill.png"
            }
          ].map((review, index) => (
            <div key={index} className="p-6">
              <div className="flex items-start gap-4">
                <Image
                  src={review.avatar}
                  width={48}
                  height={48}
                  alt={review.name}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        {Array(4)
                          .fill(null)
                          .map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
          <Recom/>
    </div>
    </div>

  );
}
