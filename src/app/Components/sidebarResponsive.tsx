"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function FilterSidebarR() {
  const [price, setPrice] = useState([100]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-4">TYPE</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="sport" checked />
            <Label htmlFor="sport">Sport (10)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="suv" checked />
            <Label htmlFor="suv">SUV (12)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mpv" />
            <Label htmlFor="mpv">MPV (16)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sedan" />
            <Label htmlFor="sedan">Sedan (20)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="coupe" />
            <Label htmlFor="coupe">Coupe (14)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="hatchback" />
            <Label htmlFor="hatchback">Hatchback (14)</Label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-4">CAPACITY</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="2person" checked />
            <Label htmlFor="2person">2 Person (10)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="4person" />
            <Label htmlFor="4person">4 Person (14)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="6person" />
            <Label htmlFor="6person">6 Person (12)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="8ormore" checked />
            <Label htmlFor="8ormore">8 or More (16)</Label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-4">PRICE</h3>
        <div className="space-y-4">
          <Slider
            value={price}
            onValueChange={setPrice}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="text-sm text-gray-500">
            Max. ${price[0].toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
    
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <FilterContent />
        </SheetContent>
      </Sheet>
    </div>
  );
}
