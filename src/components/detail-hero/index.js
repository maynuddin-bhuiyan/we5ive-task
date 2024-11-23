import { useState } from "react";

export default function DetailHero({ product }) {
  console.log("product id hero:", product);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Off White");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Off White", "Black"];
  return (
    <div className="relative my-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div></div>
          <div>
            <button className="bg-[#2F1C59] font-semibold text-white px-5 lg:px-10 py-2 rounded-lg">
              New Arrival
            </button>
            <h3 className="text-4xl text-[#1D1D1D] font-semibold my-2 lg:my-3">
              {product?.name}
            </h3>

            <div className="flex lg:w-[300px] justify-between items-center">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                    fill="#FFCF11"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                    fill="#FFCF11"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                    fill="#FFCF11"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                    fill="#FFCF11"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                    fill="#DFDFDF"
                  />
                </svg>
                <span className="font-semibold text-[#1D1D1D]">{"(4.0)"}</span>
              </div>
              <span className="text-[#7E53D4]">121 reviews</span>
            </div>
            <h4 className="text-[#1D1D1D] text-3xl font-bold mt-5 border-b border-[#CECECE] border-dotted pb-3">
              BDT {product?.price}
            </h4>

            <div className="mt-5">
              {/* Available Sizes */}
              <div className="mb-4 text-[#1D1D1D]">
                <div className="flex flex-wrap lg:gap-20 items-center">
                  <div>
                    <h2 className="text-xl font-semibold">Available Size</h2>
                    <div className="flex gap-4 mt-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-4 border rounded-md ${
                            selectedSize === size
                              ? "border-[#7E53D4] border-[1.5px] bg-[#F6F5FD]"
                              : "border-[#F6F5FD] bg-[#F6F5FD]"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Available Color</h2>
                    <div className="flex gap-6 mt-2">
                      {colors.map((color) => (
                        <label key={color} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => setSelectedColor(color)}
                            className="hidden"
                          />
                          <span
                            className={`w-5 h-5 rounded-full border ${
                              color === "Off White"
                                ? "bg-[#F1F0F5] border-[#7E53D4] border-[1.5px]"
                                : "bg-black"
                            }`}
                          ></span>
                          <span className="text-sm">{color}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-4 text-[#1D1D1D] mt-5 lg:mt-8 border-t border-[#CECECE] border-dotted pt-3">
                <h2 className="font-semibold">Quantity</h2>
                <div className="flex items-center mt-3 bg-[#ECE9FE] w-max px-3 py-3 rounded-3xl">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    className="px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13.3332 8H2.6665"
                        stroke="#1D1D1D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <span className="px-4 text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8 2.66669V13.3334"
                        stroke="#1D1D1D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.6665 8H13.3332"
                        stroke="#1D1D1D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center gap-3">
              <button className="main-btn w-1/2 px-5 py-[10px] text-sm font-semibold rounded-lg">
                Buy Now
              </button>
              <button className="outline-button w-1/2 font-semibold text-center py-2">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[160px] right-0 bg-[#581FC1] text-center py-1 rounded-l-2xl px-3">
        <svg
        className="m-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M5.16402 22.6925L3.55927 13.1197C3.31663 11.6724 3.19532 10.9487 3.5838 10.4743C3.9723 10 4.68631 10 6.11435 10H25.886C27.314 10 28.028 10 28.4166 10.4743C28.805 10.9487 28.6836 11.6724 28.4411 13.1197L26.8363 22.6925C26.3044 25.8655 26.0384 27.4519 24.9526 28.3927C23.8668 29.3333 22.3015 29.3333 19.1711 29.3333H12.8293C9.69878 29.3333 8.13354 29.3333 7.0477 28.3927C5.96186 27.4519 5.69591 25.8655 5.16402 22.6925Z"
            stroke="#F6F5FD"
            stroke-width="2.5"
          />
          <path
            d="M23.3332 10C23.3332 5.94993 20.05 2.66669 15.9998 2.66669C11.9497 2.66669 8.6665 5.94993 8.6665 10"
            stroke="#F6F5FD"
            strokeWidth="2.5"
          />
        </svg>
       <p className="text-[13px] leading-4  text-white w-[40px]">
       Your bag 0
       </p>
      </div>
    </div>
  );
}
