"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Personal() {
  return (
    <div className="flex flex-col items-center justify-center my-20 gap-10 w-full">
      {/* Header Section */}
      <div className="flex flex-col text-white">
        <Image src="/1.svg" height={50} width={50} alt="Companion Logo" />
      </div>
      <h2 className="text-balance text-center max-w-4xl lg:text-5xl text-3xl text-white">
        Your Personal Companion for Real Conversations – Anytime, Anywhere
      </h2>

      {/* Google Play Store Link */}
      <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&pcampaignid=web_share">
        <Image
          src="/16.svg"
          width={500}
          height={500}
          alt="Google Play Store"
          className="lg:w-[230px] w-[150px]"
        />
      </Link>

      {/* Swiper Carousel for Images */}
      <div className="lg:px-20 px-4 max-w-6xl w-full relative max-lg:pt-20 my-20">
        <div className="lg:flex hidden">
          <Image
            src="/17.svg"
            width={1200}
            height={1200}
            alt="Slide 1"
            className="lg:w-[30%] mx-auto max-h-[90vh]"
          />

          <Image
            src="/18.svg"
            width={1200}
            height={1200}
            alt="Slide 2"
            className="lg:w-[30%] mx-auto max-h-[90vh]"
          />

          <Image
            src="/19.svg"
            width={1200}
            height={1200}
            alt="Slide 3"
            className="lg:w-[30%] mx-auto max-h-[90vh]"
          />
        </div>
        <Swiper
          loop={true} // Infinite loop
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll every 3 seconds
          pagination={{ clickable: true }} // Dots below the slides
          modules={[Autoplay]}
          className="w-full h-full block lg:hidden"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <Image
              src="/17.svg"
              width={1200}
              height={1200}
              alt="Slide 1"
              className="lg:w-[30%] mx-auto lg:hidden max-h-[90vh]"
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <Image
              src="/18.svg"
              width={1200}
              height={1200}
              alt="Slide 2"
              className="lg:w-[30%] lg:hidden mx-auto max-h-[90vh]"
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <Image
              src="/19.svg"
              width={1200}
              height={1200}
              alt="Slide 3"
              className="lg:w-[30%] lg:hidden mx-auto max-h-[90vh]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
