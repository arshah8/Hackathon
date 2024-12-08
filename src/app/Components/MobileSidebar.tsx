import Link from "next/link"

import { Avatar,AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'


export function MobileSidebar() {
  return (
  
      <header className="bg-white shadow-sm block lg:hidden">

      <div className=" py-3 flex items-center">
        <Link href = "/" className="w-6/12">
        <h1 className="flex text-2xl ml-5 font-bold text-blue-600 justify-start  w-6/12">MORENT</h1>
        </Link>
       <div className="w-6/12 flex justify-end mr-6 items-center ">
        <Avatar className="h-8 w-8">
            <AvatarImage src="/avatar.png" alt="User"  />
         
          </Avatar>
          </div>
          </div>
        
        <div className='w-full flex gap-4'>
        <div className="flex items-center w-9/12 ml-5 px-4 py-2 bg-white border  border-gray-300 rounded-lg p-3 shadow-sm ">
  
  <Image 
    src="/search-normal.png" 
    alt="Search Icon" 
    height={20}
    width={20}
    className=" text-gray-400"
  />

  <input
    type="text"
    placeholder="Search something here"
    className="flex-1 px-2 text-gray-700 text-sm bg-transparent outline-none"
  />

 
  
  </div>

  <div className='p-3 border rounded-lg border-gray-300 mr-6'>
<Image 
    src="/filter.png" 
    alt="Filter Icon"
    height={20}
    width={20}
    className=" text-gray-400" 
   
  />
</div>
          </div>
    
    
    </header>
  )
}

