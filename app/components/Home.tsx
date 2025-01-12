'use client';
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Features from "./Features/Features";
import PopularBurger from "./PopularBurger/PopularBurger";
import Delivery from "./Delivery/Delivery";
import Reservation from './Reservation/Reservation';
import AOS from "aos";
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(()=>{
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration:1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-center',
      });
    };
    initAOS();
  },[]);

  return (
    <div className='overflow-hidden'>
        <Hero />
        <Features />
        <PopularBurger />
        <Delivery />
        <Reservation />
    </div>
  )
}

export default Home