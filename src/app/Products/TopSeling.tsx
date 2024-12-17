import { Archivo_Black, Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { IoStarSharp } from "react-icons/io5";


const Archivo = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
});
const Inte = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});


interface TopProducts {
  title: string;
  price: string;
  old_price?: string;
  discount?: string;
  id: number;
  rating: string;
  img_url: string;
}

const product: TopProducts[] = [
  {
    title: "Vertical Striped Shirt",
    id: 1,
    price: "$212",
    old_price: "$232",
    discount: "-20%",
    rating: "5.0",
    img_url: '/images/pic5.png',
  },
  {
    title: "Courage Graphic T-Shirt",
    id: 2,
    price: "$145",
    rating: "4.0",
    img_url: '/images/pic6.png',
  },
  {
    title: "Loose Fit Bermuda Shorts",
    id: 3,
    price: "$80",
    rating: "3.0",
    img_url: '/images/pic7.png',
  },
  {
    title: "Faded Skinny Jeans",
    id: 4,
    price: "$210",
    rating: "4.5",
    img_url: '/images/pic8.png',
  },
];


const star = [
  <IoStarSharp key="1" />,
  <IoStarSharp key="2" />,
  <IoStarSharp key="3" />,
  <IoStarSharp key="4" />,
  <IoStarSharp key="5" />,
];

const getFilledStars = (rating: string) => {
  const ratingValue = parseFloat(rating);
  const fullStars = Math.floor(ratingValue);
  const halfStar = ratingValue % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  
  return [
    ...new Array(fullStars).fill(<IoStarSharp key={`full-${Math.random()}`} className="text-yellow-400" />),
    halfStar ? <IoStarSharp key={`half-${Math.random()}`} className="text-yellow-400" /> : null,
    ...new Array(emptyStars).fill(<IoStarSharp key={`empty-${Math.random()}`} className="text-gray-300" />),
  ];
};

export default function TopProducts() {
  return (
    <div className="w-full py-10">
      <h1 className={`${Archivo.className} text-3xl md:text-4xl font-bold text-center mb-8`}>
        TOP SELLING
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

              <div className="flex justify-center items-center text-yellow-400 text-sm">
                <div className="flex gap-1">
                  {getFilledStars(data.rating)}
                </div>
                <p className="ml-2 text-gray-500 text-xs">{data.rating}/5</p>
              </div>

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
