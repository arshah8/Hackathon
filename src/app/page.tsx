

import FeaturedSection from "./Components/FreaturedSection";
import PopularCars from "./Components/Cars";
import RentalForm from "./Components/RentalForm";
import RecommandCars from "./Components/RecommandCars";
import CarsResponsive from "./Components/CarsResponsiv";



export default function Home() {
  return (
  <div className="bg-gray-100">
  
   <div className="mx-6 lg:mx-10 my-4 lg:my-5">
   <FeaturedSection/>
   <RentalForm/>
   <PopularCars/>
   <CarsResponsive/>
   <RecommandCars/>
   
   </div>
   </div>
  )

}
