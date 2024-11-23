"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import productData from "@/data/products.json";
import { useRef } from "react";
import ProductCard from "../reuseable/product-card";

export default function RelatedProducts() {
  // console.log("Product data:", productData);

  const swiperRef = useRef(null);
  const productsWithSlugs = productData?.map((product) => ({
    ...product,
    slug: product.name.toLowerCase().replace(/\s+/g, "-")
  }));
   

  return (
    <div className="my-5 lg:my-10">
      <div className="container">
        <div className="flex justify-between items-center mb-3 lg:mb-5">
          <div>         
            <h3 className="text-2xl lg:text-3xl text-[#1D1D1D] font-bold">Related Products</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-[#7E53D4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M4.00002 12.5002H20"
                  stroke="#7E53D4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99966 7.5C8.99966 7.5 3.99976 11.1824 3.99976 12.5C3.99976 13.8176 8.99976 17.5 8.99976 17.5"
                  stroke="#7E53D4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-[#7E53D4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M20 12.4998H4"
                  stroke="#7E53D4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0003 17.5C15.0003 17.5 20.0002 13.8176 20.0002 12.5C20.0002 11.1824 15.0002 7.5 15.0002 7.5"
                  stroke="#7E53D4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Assign Swiper instance to ref
            // console.log(swiper);
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1, // Show 1 slide for small screens
              spaceBetween: 10, // Less space between slides
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1, // Show 2 slides for small tablets
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2, // Show 3 slides for medium-sized tablets
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3, // Show 4 slides for desktop
              spaceBetween: 50,
            },
          }}
        >
          {productsWithSlugs?.slice(0, 6)?.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard data={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center mt-5">
          <button className="main-btn px-5 py-2 text-sm font-semibold rounded-lg">See more</button>
        </div>
      </div>
    </div>
  );
}
