import { FilterSidebarR } from "@/app/Components/sidebarResponsive"
import { CarDetails } from "../../Components/CarDetails"
import { FilterSidebar } from "../../Components/filter-sidebar"


export default function CarDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FilterSidebar/>
        <FilterSidebarR/>
        <div className="md:col-span-3">
          <CarDetails/>
        </div>
      </div>
    </div>
  )
}
