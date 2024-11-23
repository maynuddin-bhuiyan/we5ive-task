"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonButton from "../reuseable/common-button";
import Image from "next/image";

export default function FeaturedSlider() {
  return (
    <div className="my-10 lg:my-20">
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            // console.log(swiper);
          }}
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
              <div className="bg-[#F6F5FD] rounded-lg w-full h-full overflow-hidden">
                <Image
                  src={"/imgs/man.png"}
                  alt="man image"
                  width={0}
                  height={0}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="flex items-center h-full">
                <CommonButton />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
              <div className="bg-[#F6F5FD] rounded-lg w-full h-[500px] overflow-hidden">
                <Image
                  src={"/imgs/woman.png"}
                  alt="woman img"
                  width={0}
                  height={0}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="flex items-center h-full">
                <CommonButton />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
