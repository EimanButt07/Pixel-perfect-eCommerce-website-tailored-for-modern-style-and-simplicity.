import { Archivo_Black, Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { IoStarSharp } from "react-icons/io5";

const Archivo = Archivo_Black ({
  subsets: ['latin'],
  weight:['400']
})
const Inte = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface Iproducts {
  title: string;
  price: string;
  old_price?: string;
  discount?: string;
  id: number;
  rating: string;
  img_url: string;
}

const product: Iproducts[] = [
  {
    title: "T-shirt with Tape Details",
    id: 1,
    price: "$120",
    rating: "4.5/5",
    img_url: '/images/pic1.png',
  },
  {
    title: "Skinny Fit Jeans",
    id: 2,
    price: "$240",
    old_price: "$260",
    discount: "-20%",
    rating: "3.5/5",
    img_url: '/images/pic2.png',
  },
  {
    title: "Checkered Shirt",
    id: 3,
    price: "$180",
    rating: "4.5/5",
    img_url: '/images/pic3.png',
  },
  {
    title: "Sleeve Striped T-shirt",
    id: 4,
    price: "$130",
    old_price: "$160",
    discount: "-30%",
    rating: "4.5/5",
    img_url: '/images/pic4.png',
  },
];

const star = [
  <IoStarSharp key="1" />,
  <IoStarSharp key="2" />,
  <IoStarSharp key="3" />,
  <IoStarSharp key="4" />,
  <IoStarSharp key="5" />,
];

export default function Products() {
  return (
    <div className="w-full py-10">
      <h1
        className={`${Archivo.className} text-3xl md:text-4xl font-bold text-center mb-8`}
      >
        NEW ARRIVALS
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16">
        {product.map((data) => (
          <div
            key={data.id}
            className="w-[295px] mx-auto"
          >
          
            <div className="w-full h-[298px] bg-[#F0EEED] rounded-[20px] overflow-hidden hover:shadow-md transition-transform duration-300 transform hover:scale-105">
              <Image
                src={data.img_url}
                alt={data.title}
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="text-center mt-3">
              <p className={`${Inte.className} text-lg font-large font-bold text-gray-800`}>
                {data.title}
              </p>

              <div className="flex justify-center text-yellow-400 text-sm">
                {star}
              </div>
              <p className="text-gray-500 text-xs mt-1">{data.rating}</p>

              <div className="flex justify-center items-center gap-2 mt-1">
                <p className="text-lg font-semibold">{data.price}</p>
                {data.old_price && (
                  <p className="text-gray-400 line-through text-sm">
                    {data.old_price}
                  </p>
                )}
                {data.discount && (
                  <div className="text-red-500 bg-red-100 rounded-full px-2 text-xs font-medium">
                    {data.discount}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <div className="flex justify-center mt-6">
        <button className="text-black border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-300">
          View All
        </button>
      </div>
    </div>
  );
}
