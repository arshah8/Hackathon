import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedSections() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:p-6 ">

      <div className="bg-blue-400 rounded-lg p-6 lg:p-6 flex flex-col justify-between relative overflow-hidden h-[350px]">
        <div className="z-10 text-white max-w-md">
          <h2 className="text-2xl text-blue-50 mb-4">
            The Best Platform <br /> for Car Rental
          </h2>
          <p className="text-sm mb-6">
            Ease of doing a car rental safely and <br /> reliably. Of course at
            a low price.
          </p>
          
          <Link href="/car/details">
  <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Rental Car
  </Button>
</Link>
        </div>
        <div className="absolute right-0 bottom-14 z-0">
          <Image
            src="/Vector.png"
            alt="spiral"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="flex justify-items-end lg:pl-24 ">
          <Image
            src="/car1.png"
            alt="car"
            width={400}
            height={220}
            className="object-contain"
          />
        </div>
      </div>

      <div className="bg-blue-600 hidden lg:block rounded-lg p-6  flex-col justify-between relative overflow-hidden h-[350px]">
        <div className="z-10 text-white w-full">
          <h2 className="text-2xl text-blue-50 mb-4">
            Easy way to rent a<br/> car at a low price
          </h2>
          <p className="text-sm mb-6">
            Providing cheap car rental services<br/> and safe and comfortable
            facilities.
          </p>
         
          <Link href="/car/details">
  <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Rental Car
  </Button>
  </Link>
        </div>
        <div className="absolute right-0 bottom-0 z-0">
          <Image
            src="/Vector2.png"
            alt="spiral"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="absolute right-5 bottom-0 z-10 pb-4">
          <Image
            src="/car2.png"
            alt="car"
            width={350}
            height={220}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
