import { Button } from "@/components/ui/button";
import { Archivo_Black } from "next/font/google"; 
import Image from "next/image";
import React from "react";

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
});

const NewsLetterSection = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-black rounded-[20px]">
      <p
        className={`${archivoBlack.className} font-bold text-[32px] md:text-[40px] text-white mb-9 md:mb-0`}
      >
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </p>
      <div className="flex items-center">
        <div className="flex flex-col max-w-[349px] mx-auto">
          <div className="flex bg-white mb-[14px] rounded-full overflow-hidden">
            <div className="flex items-center justify-center px-4 py-2">
              <Image
                priority
                src="/icons/envelope.svg"
                height={20}
                width={20}
                alt="email"
                className="min-w-5 min-h-5"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="bg-transparent placeholder:text-black/40 placeholder:text-sm sm:placeholder:text-base flex-1 px-4 py-2"
            />
          </div>
          <Button
            className="text-sm sm:text-base font-medium bg-white h-12 rounded-full px-4 py-3 hover:bg-gray-200"
            aria-label="Subscribe to Newsletter"
            type="button"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
