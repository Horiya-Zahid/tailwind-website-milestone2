'use client';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from './BurgerCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const PopularBurger = () => {
  return (
    <div className='pt-[3rem] pb-[3rem]'>
        <h1 className='heading text-black'>
            Our Popular <span className='text-red-600'>Burgers</span>
        </h1>
        <div className='w-[805] mt-[4rem] mx-auto'>
            <Carousel 
            additionalTransfrom={0} 
            arrows={true} 
            autoPlay={true} 
            autoPlaySpeed={4000} 
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass='item'
            showDots={false}
            >

            {/* Burger Card */}
            {/* 1 */}
            <BurgerCard title="Savory Stack" image="/images/b1.png" reviews="(6)" price="10.88$" />
            {/* 2 */}
            <BurgerCard title="Patty Pouch" image="/images/b2.png" reviews="6" price="10.88$" />
             {/* 3 */}
             <BurgerCard title="Beefy Bite" image="/images/b3.png" reviews="6" price="10.88$" /> 
             {/* 4 */}
             <BurgerCard title="Sizzle Burger" image="/images/b4.png" reviews="6" price="10.88$" /> 
             {/* 5 */}
             <BurgerCard title="Crunch Burger" image="/images/b5.png" reviews="6" price="10.88$" />
              {/* 6 */}
            <BurgerCard title="BBQ Burger" image="/images/b6.png" reviews="6" price="10.88$" />
             {/* 7 */}
             <BurgerCard title="Truffle Burger" image="/images/b7.png" reviews="6" price="10.88$" />
              {/* 8 */}
            <BurgerCard title="Grilled Burger" image="/images/b8.png" reviews="6" price="10.88$" />
             {/* 9 */}
             <BurgerCard title="Spicy Burger" image="/images/b9.png" reviews="6" price="10.88$" />

            </Carousel>
        </div>
        </div>
  );
};

export default PopularBurger