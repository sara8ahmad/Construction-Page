'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
  const slides = [
    {
      url: 'assets/c-1.jpg',
    },
    {
      url: 'assets/c-2.jpg',
    },
    
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Autoplay functionality
    const autoplayTimer = setInterval(nextSlide, 3000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(autoplayTimer);
    };
  });

  return (
    <div className='h-screen w-full m-auto text-start md:text-center relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <IoChevronBackOutline onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <IoChevronForwardOutline onClick={nextSlide} size={30} />
      </div>

      <div className="text-white flex flex-col items-start justify-center absolute left-[10%] top-[40%] ">
        <div className="mb-3">Fast and Reliable Service For Your Project </div>
        <p className=" text-3xl font-[700] md:text-4xl tracking-wider">Construction Manger Since 2015 </p>
        <div className="mt-8">
          <Link href='/contact' className=" text-[15px] font-semibold border-solid border-slate-300 border-2 p-4 tracking-wide" >Get Contact</Link>
        </div>
       </div>

      
      <div className='flex absolute bottom-0 left-[45%] items-center m-auto justify-center py-2'>

        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-[3rem] cursor-pointer  ${slideIndex === currentIndex ?'text-gray-700' : 'text-white' }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;