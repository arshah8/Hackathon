
import { Avatar,AvatarImage } from "@/components/ui/avatar";

import Image from 'next/image';
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="bg-white  hidden lg:block">

      <div className="container   py-4 flex items-center w-full">
        <Link href = "/" className="w-2/12">
        <h1 className="flex text-2xl justify-center font-bold text-blue-600 ">MORENT</h1>
        </Link>
        <div className='w-8/12'>
        <div className="flex items-center w-[350px] px-4 py-2 bg-white border  border-gray-300 rounded-full shadow-sm ">
  
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

 
  <Image 
    src="/filter.png" 
    alt="Filter Icon"
    height={20}
    width={20}
    className=" text-gray-400" 
   
  />
</div>
</div>


        <div className="flex items-center gap-3 w-2/12 justify-end">

        <div className=' p-2 border rounded-full border-gray-100'>
          <Image
          src="/heart.png"
          alt='icon'
          height={20}
          width={20} />
          </div>
       
        <div className=' p-2 border rounded-full border-gray-100'>
          <Image
          src="/notification.png"
          alt='icon'
          height={20}
          width={20} />
          </div>

          <div className=' p-2 border rounded-full border-gray-100'>
          <Image
          src="/setting-2.png"
          alt='icon'
          height={20}
          width={20} />
          </div>
          
            <DropdownMenu>
              <DropdownMenuTrigger className="">
              <Avatar>
              <AvatarImage src="/avatar.png" alt="User" />
              </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href = "/Admin/Pannel">
                <DropdownMenuLabel>Admin Pannel</DropdownMenuLabel>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          
        </div>
      </div>
    </header>
  )
}

