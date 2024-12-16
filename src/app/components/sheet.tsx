"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button className="p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <GiHamburgerMenu className="text-2xl md:text-lg" />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
            </SheetHeader>
            {/* Navbar */}
            <ul className="space-y-4 mt-4">
              <li>
                <Link href={""}>
                  <span className="text-base md:text-lg">
                    <NavigationMenuDemo />
                  </span>
                </Link>
              </li>
              <li>
                <Link className="ml-3" href={""}>
                  On Sale
                </Link>
              </li>
              <li>
                <Link className="ml-3" href={""}>
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link className="ml-3" href={""}>
                  Brands
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
