"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Hero() {
  return (
    <section className="w-full h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-[80vh]">
            <Image
              src="/hero/woodwork1.jpg"
              alt="Wood crafting"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center">
              <div>
                <h1 className="text-5xl font-heading">
                  Handcrafted Wooden Furniture
                </h1>
                <p className="mt-4 text-lg">
                  Authentic craftsmanship from Rajasthan
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[80vh]">
            <Image
              src="/hero/woodwork2.jpg"
              alt="Carpenter working"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center">
              <h1 className="text-5xl font-heading">Built With Passion</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[80vh]">
            <Image
              src="/hero/woodwork3.jpg"
              alt="Furniture polishing"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center">
              <h1 className="text-5xl font-heading">Crafted For Generations</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
