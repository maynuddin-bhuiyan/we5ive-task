import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerLink = [
    {
      id: 1,
      title: "Contact Us",
      text: "support@we5ive.com",
      link: "support@we5ive.com",
    },
    {
      id: 2,
      title: "About Us",
      text: "Contact Us",
      link: "",
    },
    {
      id: 3,
      title: "",
      text: "",
      link: "",
    },
  ];
  return (
    <div>
      <div className="bg-[#1D1D1D] py-10 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <Link href="/" className="flex items-center gap-2 w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="62"
                  height="35"
                  viewBox="0 0 62 35"
                  fill="none"
                >
                  <g clipPath="url(#clip0_102_429)">
                    <path
                      d="M38.2751 35C30.3162 23.336 22.4205 11.7666 14.4385 0.0698242H46.9146C46.2929 1.02949 45.7366 1.91106 45.1572 2.77826C44.4513 3.8345 43.9497 5.27914 42.9446 5.81548C41.9374 6.35388 40.4202 5.99837 39.1264 6.00042C34.6718 6.00865 30.2172 6.00453 25.5244 6.00453C26.2346 7.07928 26.8098 8.03894 27.4947 8.92052C27.6653 9.13834 28.1921 9.15684 28.5546 9.15889C32.101 9.17533 35.6453 9.16917 39.1917 9.16917H40.6752C39.7922 10.5542 38.8925 11.6618 38.332 12.9133C37.291 15.2313 35.6516 16.2238 33.0872 15.7142C32.8195 15.6608 32.5309 15.708 32.0378 15.708C32.3012 16.1334 32.4761 16.4396 32.6741 16.7293C35.4872 20.8598 38.294 24.9944 41.1282 29.1105C41.4906 29.6345 41.518 30.0105 41.1472 30.551C40.1758 31.9709 39.2781 33.4382 38.2751 35.0041V35Z"
                      fill="#7E53D4"
                    />
                    <path
                      d="M23.1349 34.998C15.4078 23.3156 7.75659 11.7483 0 0.0206209C2.15566 0.0206209 4.13853 -0.00814849 6.11929 0.0535002C6.39323 0.06172 6.71142 0.470656 6.90738 0.760405C12.1669 8.47882 17.4139 16.2034 22.665 23.928C22.8378 24.1807 23.0211 24.4273 23.2971 24.8137C24.3234 23.3403 25.2884 21.9511 26.3399 20.4448C27.4715 22.0148 28.5462 23.4779 29.5724 24.9739C29.6967 25.1548 29.6482 25.5802 29.5113 25.7836C27.4315 28.8249 25.3243 31.8457 23.137 35.0001L23.1349 34.998Z"
                      fill="white"
                    />
                    <path
                      d="M42.4031 28.6215C41.3411 27.0063 40.3465 25.5637 39.4509 24.0636C39.295 23.8026 39.4425 23.2313 39.6448 22.9272C43.227 17.5411 46.8408 12.1736 50.4484 6.80401C51.8117 4.77576 53.1983 2.76396 54.5279 0.715173C54.8735 0.180885 55.2528 -0.00817103 55.887 0.00210374C57.8699 0.0390929 59.8549 0.0144335 62 0.0144335C55.434 9.6008 48.967 19.0413 42.4031 28.6215Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_102_429">
                      <rect width="62" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-white">
                  We<span>5</span>ive
                </span>
              </Link>
              <p className="text-white max-w-[410px] mt-5">
                Saepe quo suscipit vitae quia. Repudiandae nobis quis.
                Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo
                est consectetur maxime quos fugit velit assumenda est.
              </p>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-1">
                Sign Up For Our Newsletter!
              </h3>
              <p>
                Get notified about updates and be the first to get early access
                to new Podcast episodes.
              </p>
              <div className="mt-5 flex">
                <div className="bg-white rounded-s-lg w-3/4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="outline-none bg-transparent px-4 py-3 text-black"
                  />
                </div>
                <button className="bg-[#7E53D4] w-1/4">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 text-white mt-5 lg:pt-14">
            <div>
              <h3 className="font-bold">Contact Us</h3>
              <Link href={"#"} className="text-sm">
                support@we5ive.com
              </Link>
            </div>
            <div>
              <Link href={"#"} className="block">
                About Us
              </Link>
              <Link href={"#"} className="block">
                Terms & Condition
              </Link>
            </div>
            <div>
              <Link href={"#"} className="block">
                Privacy policy
              </Link>
              <Link href={"#"} className="block">
                Terms & Condition
              </Link>
            </div>
            <div>
              <h3 className="font-bold">Social Link</h3>
              <div className="flex items-center gap-3 mt-2">
                <Image width={24} height={24} src={"/imgs/fb.png"} alt="icon" />
                <Image width={24} height={24} src={"/imgs/tw.png"} alt="icon" />
                <Image
                  width={24}
                  height={24}
                  src={"/imgs/lin.png"}
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7E53D4] py-4 w-full text-center">
        <p className="text-white">© 2024 | We5ive</p>
      </div>
    </div>
  );
}