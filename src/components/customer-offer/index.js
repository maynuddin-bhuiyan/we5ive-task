import Image from "next/image";

export default function CustomerOffer() {
  return (
    <div className="container">
      <div className="bg-white grid grid-cols-1 lg:grid-cols-3 min-h-[450px] items-center xl:pl-16 xl:pr-20">
        <div className="col-span-2">
          <p className="text-[#6F42C1] text-2xl pacifico-cursive mb-2">Big Deal</p>
          <h2 className="text-5xl font-semibold">
            {" "}
            <span className="text-[#6F42C1]">30%</span> Off for New Customers
          </h2>
          <div className="flex items-center mt-4">
            <button className="main-btn w-[150px] rounded-[28px] py-2 text-xl">
              Shop Now
            </button>
            <button className="main-btn rounded-3xl px-3 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 7L6 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11 6.13153C11 6.13153 16.6335 5.65664 17.4885 6.51155C18.3434 7.36647 17.8684 13 17.8684 13"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[400px] overflow-hidden">
            <Image
              src={"/imgs/image.png"}
              alt="image"
              width={0}
              height={0}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
