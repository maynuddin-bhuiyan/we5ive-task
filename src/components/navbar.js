"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaBasketShopping, FaUser } from "react-icons/fa6";
import { CiSearch, CiDeliveryTruck } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

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
     `}
      >
        <div className="container">
          <div className="flex justify-between items-center py-4 w-full">
            <div>
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
                <span className="text-black">
                  We<span>5</span>ive
                </span>
              </Link>
            </div>
            {!isMenuOpen && (
              <div className="block lg:hidden">
                <HiOutlineMenuAlt3
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  color="#000"
                  size={30}
                />
              </div>
            )}
            <nav className="lg:block hidden">
              <ul className="flex lg:items-center lg:gap-3">
                {navMenuList.map((item) => (
                  <li
                    key={item.id}
                    className="regular-text capitalize text-black flex items-center gap-1"
                  >
                    <Link href={item.href}>{item.menuItem}</Link>
                    {item.hasDropdown && <FiChevronDown size={16} />}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden lg:flex items-center gap-1">
              <ul className="flex lg:items-center lg:gap-2">
                <li className="flex items-center gap-1 bg-[#FFF] rounded-[28px] px-3 py-1">
                  <CiSearch color="#000" />
                  <input
                    type="search"
                    className="bg-transparent outline-none text-[#292929]"
                  />
                </li>
                {/* <li>
                  <CiDeliveryTruck color="#000" size={20} />
                </li> */}
                <li>
                  <FaUser color="#000" size={20} />
                </li>
                <li>
                  <FaBasketShopping color="#000" size={20} />
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
                      className="text-lg capitalize text-[#ffffff] font-medium"
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
                <ul className="mt-3 flex gap-3">
                  <li>
                    <CiDeliveryTruck color="#ffffff" size={20} />
                  </li>
                  <li>
                    <FaUser color="#ffffff" size={20} />
                  </li>
                  <li>
                    <FaBasketShopping color="#ffffff" size={20} />
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
