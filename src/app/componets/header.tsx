import Link from "next/link";
import React from "react";

const Header = () => {
  return (
         <div>
            
            <header className="text-gray-600  bg-amber-500  body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl">SameetBLOGS</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="https://www.linkedin.com/in/muhammad-sameet-shahid/" target="_blank" rel="noopener noreferrer"className="mr-5 hover:text-gray-900">HOME</Link>
      <Link href="/" target="_blank" rel="noopener noreferrer"className="mr-5 hover:text-gray-900">BLOGS </Link>
      <Link href="https://www.linkedin.com/in/muhammad-sameet-shahid/" target="_blank" rel="noopener noreferrer"className="mr-5 hover:text-gray-900">About </Link>
      <Link href="https://www.linkedin.com/in/muhammad-sameet-shahid/" target="_blank" rel="noopener noreferrer"className="mr-5 hover:text-gray-900">About </Link>
      
    </nav>
   
  </div>
</header>


         </div>
  );
}


export default Header
