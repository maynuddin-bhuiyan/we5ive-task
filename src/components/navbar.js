"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [cartData, setCartData] = useState([]);
  // console.log("card item", cartData?.length)
  useEffect(() => {
    // Ensure this runs only on the client side
    const storedCartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartData(storedCartData);
  }, []);

  const navMenuList = [
    { id: 1, menuItem: "Home", href: "/" },
    { id: 2, menuItem: "Shop", href: "/" },
    { id: 3, menuItem: "Deals", href: "/" },
    { id: 4, menuItem: "What’s New", href: "/" },
  ];

  const handleScroll = () => {
    setIsScroll(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`text-white transition-all duration-300      
          ${
            isScroll || isMenuOpen
              ? "fixed top-0 left-0 w-full h-16 z-50 shadow-gray-700 bg-[#ffffffeb] shadow-md transform translate-y-0"
              : "relative transform translate-y-0"
          }`}
      >
        <div className="container">
          <div className="flex justify-between items-center py-4 w-full">
            <div className="lg:block hidden">
              <Link href="/" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="29"
                  viewBox="0 0 51 29"
                  fill="none"
                >
                  <g clipPath="url(#clip0_134_17)">
                    <path
                      d="M31.2449 28.7856C24.7479 19.2641 18.3025 9.81965 11.7865 0.27124H38.2976C37.7901 1.05464 37.336 1.77429 36.863 2.4822C36.2867 3.34445 35.8773 4.52374 35.0568 4.96157C34.2346 5.40108 32.9961 5.11087 31.9399 5.11255C28.3035 5.11926 24.6671 5.1159 20.8363 5.1159C21.4159 5.99324 21.8856 6.77664 22.4446 7.49629C22.5839 7.67411 23.014 7.68921 23.3098 7.69089C26.2049 7.70431 29.0982 7.69927 31.9932 7.69927H33.2042C32.4835 8.82992 31.7489 9.7341 31.2914 10.7557C30.4416 12.6479 29.1033 13.4582 27.0099 13.0422C26.7914 12.9985 26.5558 13.0371 26.1533 13.0371C26.3683 13.3844 26.5111 13.6343 26.6728 13.8709C28.9692 17.2427 31.2604 20.6178 33.574 23.9779C33.8699 24.4056 33.8923 24.7126 33.5895 25.1538C32.7965 26.313 32.0637 27.5107 31.2449 28.789V28.7856Z"
                      fill="#7436F1"
                    />
                    <path
                      d="M18.8856 28.784C12.5778 19.2474 6.33191 9.80463 0 0.231059C1.75972 0.231059 3.37839 0.207574 4.99534 0.2579C5.21896 0.26461 5.47871 0.598435 5.63868 0.834965C9.9322 7.13571 14.2154 13.4415 18.502 19.7473C18.6431 19.9536 18.7927 20.1549 19.0181 20.4703C19.8558 19.2675 20.6436 18.1335 21.502 16.9039C22.4257 18.1855 23.303 19.3799 24.1407 20.6011C24.2422 20.7487 24.2026 21.096 24.0908 21.2621C22.393 23.7448 20.6729 26.2107 18.8873 28.7857L18.8856 28.784Z"
                      fill="#1D1D1D"
                    />
                    <path
                      d="M34.6148 23.5786C33.7478 22.2601 32.9359 21.0825 32.2048 19.8579C32.0775 19.6449 32.1979 19.1785 32.3631 18.9303C35.2873 14.5335 38.2374 10.1518 41.1823 5.76847C42.2953 4.11276 43.4271 2.47048 44.5125 0.797996C44.7947 0.361842 45.1043 0.207511 45.6221 0.215898C47.2407 0.246094 48.8611 0.225964 50.6122 0.225964C45.2522 8.05157 39.9731 15.7581 34.6148 23.5786Z"
                      fill="#1D1D1D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_134_17">
                      <rect
                        width="50.6122"
                        height="28.5714"
                        fill="white"
                        transform="translate(0 0.214233)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#1D1D1D] text-3xl font-bold">
                  We<span className="text-[#7436F1]">5</span>ive
                </span>
              </Link>
            </div>
            <div className="block lg:hidden">         
             {!isMenuOpen && (
                <div className="flex justify-center">
                  <div className="flex items-center gap-2">
                  <CgMenuLeft
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    color="#000"
                    size={30}
                  />
                   <Link href="/" className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="18"
                    viewBox="0 0 51 29"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_134_17)">
                      <path
                        d="M31.2449 28.7856C24.7479 19.2641 18.3025 9.81965 11.7865 0.27124H38.2976C37.7901 1.05464 37.336 1.77429 36.863 2.4822C36.2867 3.34445 35.8773 4.52374 35.0568 4.96157C34.2346 5.40108 32.9961 5.11087 31.9399 5.11255C28.3035 5.11926 24.6671 5.1159 20.8363 5.1159C21.4159 5.99324 21.8856 6.77664 22.4446 7.49629C22.5839 7.67411 23.014 7.68921 23.3098 7.69089C26.2049 7.70431 29.0982 7.69927 31.9932 7.69927H33.2042C32.4835 8.82992 31.7489 9.7341 31.2914 10.7557C30.4416 12.6479 29.1033 13.4582 27.0099 13.0422C26.7914 12.9985 26.5558 13.0371 26.1533 13.0371C26.3683 13.3844 26.5111 13.6343 26.6728 13.8709C28.9692 17.2427 31.2604 20.6178 33.574 23.9779C33.8699 24.4056 33.8923 24.7126 33.5895 25.1538C32.7965 26.313 32.0637 27.5107 31.2449 28.789V28.7856Z"
                        fill="#7436F1"
                      />
                      <path
                        d="M18.8856 28.784C12.5778 19.2474 6.33191 9.80463 0 0.231059C1.75972 0.231059 3.37839 0.207574 4.99534 0.2579C5.21896 0.26461 5.47871 0.598435 5.63868 0.834965C9.9322 7.13571 14.2154 13.4415 18.502 19.7473C18.6431 19.9536 18.7927 20.1549 19.0181 20.4703C19.8558 19.2675 20.6436 18.1335 21.502 16.9039C22.4257 18.1855 23.303 19.3799 24.1407 20.6011C24.2422 20.7487 24.2026 21.096 24.0908 21.2621C22.393 23.7448 20.6729 26.2107 18.8873 28.7857L18.8856 28.784Z"
                        fill="#1D1D1D"
                      />
                      <path
                        d="M34.6148 23.5786C33.7478 22.2601 32.9359 21.0825 32.2048 19.8579C32.0775 19.6449 32.1979 19.1785 32.3631 18.9303C35.2873 14.5335 38.2374 10.1518 41.1823 5.76847C42.2953 4.11276 43.4271 2.47048 44.5125 0.797996C44.7947 0.361842 45.1043 0.207511 45.6221 0.215898C47.2407 0.246094 48.8611 0.225964 50.6122 0.225964C45.2522 8.05157 39.9731 15.7581 34.6148 23.5786Z"
                        fill="#1D1D1D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_134_17">
                        <rect
                          width="50.6122"
                          height="28.5714"
                          fill="white"
                          transform="translate(0 0.214233)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#1D1D1D] text-lg font-bold">
                    We<span className="text-[#7436F1]">5</span>ive
                  </span>
                </Link>
                  </div>
                  <div>

                  </div>
                </div>
              )}
            </div>

            <nav className="lg:block hidden">
              <ul className="flex lg:items-center lg:gap-8">
                {navMenuList.map((item) => (
                  <li
                    key={item.id}
                    className="capitalize text-[#646464] font-semibold flex items-center gap-1"
                  >
                    <Link href={item.href}>{item.menuItem}</Link>
                    {item.hasDropdown && <FiChevronDown size={16} />}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-1">
              <ul className="flex items-center gap-2">
                <li className="hidden lg:flex items-center gap-3 bg-[#FFF] rounded-[28px] px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M11.6667 12.1666L14.6667 15.1666"
                      stroke="#1D1D1D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3333 7.83337C13.3333 4.51967 10.647 1.83337 7.33325 1.83337C4.01955 1.83337 1.33325 4.51967 1.33325 7.83337C1.33325 11.1471 4.01955 13.8334 7.33325 13.8334C10.647 13.8334 13.3333 11.1471 13.3333 7.83337Z"
                      stroke="#1D1D1D"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="search"
                    placeholder="Search"
                    className="bg-transparent text-sm outline-none text-[#1D1D1D]"
                  />
                </li>
                <li className="block lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M11.6667 12.1666L14.6667 15.1666"
                      stroke="#1D1D1D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3333 7.83337C13.3333 4.51967 10.647 1.83337 7.33325 1.83337C4.01955 1.83337 1.33325 4.51967 1.33325 7.83337C1.33325 11.1471 4.01955 13.8334 7.33325 13.8334C10.647 13.8334 13.3333 11.1471 13.3333 7.83337Z"
                      stroke="#1D1D1D"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M6.57757 15.9816C5.1628 16.824 1.45336 18.5441 3.71266 20.6966C4.81631 21.748 6.04549 22.5 7.59087 22.5H16.4091C17.9545 22.5 19.1837 21.748 20.2873 20.6966C22.5466 18.5441 18.8372 16.824 17.4224 15.9816C14.1048 14.0061 9.89519 14.0061 6.57757 15.9816Z"
                      stroke="#1D1D1D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5 7C16.5 9.48528 14.4853 11.5 12 11.5C9.51472 11.5 7.5 9.48528 7.5 7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7Z"
                      stroke="#1D1D1D"
                      strokeWidth="1.5"
                    />
                  </svg>
                </li>
                <li className="relative">
                  <IoBagOutline color="#000" size={25} />
                  <p className="absolute text-[12px] -right-2 -top-[2px] bg-black w-[18px] h-[18px] text-center text-wrap rounded-full">
                    {cartData?.length}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {isMenuOpen && (
            <div className="fixed left-0 top-0 bg-[#000A14] bg-opacity-90 z-50 w-full h-screen">
              <div className="relative flex flex-col items-center justify-center lg:hidden h-full">
                <MdClose
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-5 text-[#fff]"
                  size={30}
                />
                <ul className="flex flex-col items-center gap-1">
                  {navMenuList.map((item) => (
                    <li
                      key={item.id}
                      className="textLg capitalize text-[#ffffff] font-medium"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.menuItem}
                      </Link>
                    </li>
                  ))}
                </ul>              
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
