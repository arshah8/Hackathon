"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function RentalForm() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative grid md:grid-cols-2 lg:m-5 gap-6 lg:gap-36  mt-5 mb-8">
    
      <div className="rounded-lg p-6 shadow-sm bg-white lg:bg-blue-100 relative">
        <div className="flex flex-row items-center gap-2 mb-4 ml-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isActive ? "bg-blue-300" : "bg-white border border-gray-300"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></div>
          </button>
          <h3 className="font-semibold">Pick-Up</h3>
        </div>

        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="lg:ml-5 font-bold">Locations</h3>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-xs w-[150px] lg:ml-5 flex justify-start">
                Select your City{" "}
                <ChevronDown className="inline-block lg:ml-5 size-4 text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Karachi</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Date</h3>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-xs w-[150px] flex justify-start">
                Select your Date{" "}
                <ChevronDown className="inline-block lg:ml-5 size-4 text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>11-1-24</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Time</h3>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-xs w-[150px] flex justify-start">
                Select your Time
                <ChevronDown className="inline-block lg:ml-5 size-4 text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>11:30</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="rounded-lg p-6 shadow-sm bg-white lg:bg-blue-100 relative">
        <div className="flex flex-row items-center gap-2 mb-4 ml-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isActive ? "bg-blue-300" : "bg-white border border-gray-300"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></div>
          </button>
          <h3 className="font-semibold">Drop-Dwon</h3>
        </div>

        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="lg:ml-5 font-bold">Locations</h3>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-xs w-[150px] lg:ml-5 flex justify-start">
                Select your City{" "}
                <ChevronDown className="inline-block lg:ml-5 size-4 text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Karachi</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Date</h3>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-xs w-[150px] flex justify-start">
                Select your Date{" "}
                <ChevronDown className="inline-block lg:ml-5 size-4 text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>11-1-24</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Time</h3>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-xs w-[150px] flex justify-start">
                Select your Time
                <ChevronDown className="inline-block lg:ml-5 size-4 text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>11:30</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

     
      <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-lg flex items-center shadow-md justify-center bg-blue-600">
        <Image src="/Swap.png" alt="swap" height={25} width={25} />
      </button>
    </div>
  );
}
