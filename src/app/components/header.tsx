import { HiOutlineUserCircle } from "react-icons/hi2";
import { BiCart } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { SheetSide } from "./sheet";
import Link from 'next/link';
import React from 'react';
import { NavigationMenuDemo } from "./NavigationMenu";

const Header = () => {
  return (
    <header className="w-full h-[60px] bg-white flex justify-between items-center">
      {/* left */}
   <div className="flex justify-center items-center">
   <SheetSide/>
      <h1 className="text-xl sm:text-3xl font-bold pl-2">
        SHOP.CO
      </h1>
   </div>
      {/* Navbar */}
      <ul className="hidden md:block">
        <li className="space-x-5 flex items-center">
          <Link href={""}><NavigationMenuDemo/></Link>
          <Link href={""}>On Sale</Link>
          <Link href={""}>New Arrivals</Link>
          <Link href={""}>Brands </Link>
        </li>
      </ul>
      {/* Search Box */}
      <div className="hidden md:block">
      <div className="relative w-[350px] h-[40px] rounded-[62px] bg-[#F0F0F0] flex items-center">
        <CiSearch className="absolute left-3 text-xl text-gray-500" />
        <input
          placeholder="Search for products..."
          className="h-full w-full pl-10 pr-5 rounded-[62px] outline-none bg-[#F0F0F0]"
        />
      </div>
      </div>
      {/* Cart */}
      <div className="flex items-center mr-7 space-x-5">
      <IoSearch className=" text-xl ml-2 md:hidden" />
      <BiCart className="text-2xl" />
        <HiOutlineUserCircle className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;

