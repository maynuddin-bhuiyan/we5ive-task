"use client"
import { useState } from "react";
import ReviewCard from "../reuseable/review-card";


export default function DetailTabs() {

  const [activeTab, setActiveTab] = useState("Review & Rating");
  const sortOptions = ["Newest", "Latest", "Oldest"];
  const tabs = ["Details", "Review & Rating", "Discussion"];
  const [sortOption, setSortOption] = useState("Newest");

  const product = {
    name: "Classic Fit Cotton T-Shirt",
    tagline: "Comfortable. Stylish. Built for Everyday Wear.",
    description:
      "Our Classic Fit T-Shirt is made from 100% premium cotton, offering unmatched comfort and durability. Available in a variety of colors and sizes, it's perfect for casual outings or lounging at home.",
    features: [
      "100% premium cotton for breathability and comfort.",
      "Double-stitched seams for enhanced durability.",
      "Classic crew neck design.",
      "Available in multiple colors and sizes.",
      "Lightweight and soft fabric for all-day wear.",
    ],
    specs: {
      material: "100% Cotton",
      fit: "Regular Fit",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Navy Blue", "Gray", "Red"],
      careInstructions:
        "Machine wash cold with similar colors. Tumble dry low.",
    },
    price: "BDT 2500",
    rating: 4.7,
    reviews: 215,
  };

  const ratings = [
    { star: 5, value: 50 },
    { star: 4, value: 5 },
    { star: 3, value: 10 },
    { star: 2, value: 30 },
    { star: 1, value: 2 },
  ];

  // total reviews
  const totalReviews = ratings.reduce((sum, rating) => sum + rating.value, 0);

  return (
 <div className="bg-white py-5 mt-5 lg:mt-0">
     <div className="container">
      {/* Tabs Navigation */}
      <div className="flex justify-start gap-5 lg:gap-16">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`lg:text-xl font-semibold py-2 text-center ${
              activeTab === tab
                ? " text-[#7E53D4] font-bold"
                : " text-[#747474]"
            } hover:text-[#7E53D4]`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Details" && (
          <div>
            <div className="py-3 lg:py-7 text-[#1D1D1D]">
              <h1 className="text-lg lg:text-2xl font-bold">{product.name}</h1>
              <p className="mt-2">{product.tagline}</p>

              <h2 className="mt-2 lg:mt-4 lg:text-xl font-semibold">
                Key Features:
              </h2>
              <ul className="list-disc list-inside mt-2">
                {product.features.map((feature, idx) => (
                  <li key={`feature-${idx}`}>{feature}</li>
                ))}
              </ul>

              <h2 className="mt-2 lg:mt-4 lg:text-xl font-semibold">
                Specifications:
              </h2>
              <ul className="mt-2">
                {Object.keys(product.specs).map((key, idx) => (
                  <li key={`spec-${idx}`}>
                    <span className="font-medium capitalize">{key}: </span>
                    {Array.isArray(product.specs[key])
                      ? product.specs[key].join(", ")
                      : product.specs[key]}
                  </li>
                ))}
              </ul>

              {product.benefits && product.benefits.length > 0 && (
                <>
                  <h2 className="mt-2 lg:mt-4 lg:text-xl font-semibold">
                    Benefits:
                  </h2>
                  <ul className="list-disc list-inside mt-2">
                    {product.benefits.map((benefit, idx) => (
                      <li key={`benefit-${idx}`}>{benefit}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-4">
                <p className="lg:text-lg font-bold">Price: {product.price}</p>
                <div className="text-sm flex items-center gap-3">
                  Rating: {product.rating}{" "}
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
                  </svg>{" "}
                  ({product.reviews} reviews)
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Review & Rating" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5 mt-7 ">
            <div className="col-span-2  lg:order-1 order-2 mt-4 lg:mt-0">
              <div className="mb-5 lg:mb-5">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border font-semibold text-[#1D1D1D] border-[#7E53D4] rounded-md p-2 outline-none"
                >
                  {sortOptions.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="font-semibold text-[#1D1D1D]"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <ReviewCard />
              <div className="mt-5 border-t border-[#CECECE] border-dotted pt-5">
                <ReviewCard />
              </div>
            </div>
            <div className="lg:order-2 order-1">
              <h2 className="font-semibold text-black">
                Product Review{" "}
                <span className="text-[#7E53D4]">121 reviews</span>
              </h2>
              <div className="flex justify-between items-center border-b pb-3 border-[#CECECE]">
                <div className="flex gap-1 mt-2">
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
                </div>
                <p className="text-xl font-semibold text-[#1D1D1D]">
                  {"(4.0)"}
                </p>
              </div>
              <div className="mt-4">
                {ratings.map((rating) => (
                  <div key={rating.star} className="flex items-center mt-1">
                    <span className="text-lg text-[#1D1D1D] font-medium">
                      {rating.star}
                    </span>
                    <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-[#FFCF11]"
                        style={{
                          width: `${(rating.value / totalReviews) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="w-8 text-sm text-[#1D1D1D]">
                      {rating.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === "Discussion" && (
          <div className="mt-5">There is no content for discussion.</div>
        )}
      </div>
    </div>
 </div>
  );
}
