import Image from "next/image";
import CommonButton from "../reuseable/common-button";

export default function MobileResponsive() {
  return (
    <div>
      <div className="bg-[#EEECFB] text-center pt-10 my-10">
        <p className="text-[#6F42C1] text-2xl pacifico-cursive mb-2">Big Deal</p>
        <h2 className="text-3xl m-auto w-[300px] mt-1 font-semibold">
          <span className="text-[#6F42C1]">30%</span> Off for New Customers
        </h2>
        <div className="flex items-center justify-center">
          <CommonButton />
        </div>
        <div className="relative w-[310px] h-[350px] mt-5 m-auto overflow-hidden">
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

      <div className="container">
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
        <h2 className="text-2xl font-semibold mt-2 text-[#1D1D1D]">
          MEN COLLECTION
        </h2>
        <div className="flex items-center h-full">
          <CommonButton />
        </div>
      </div>

      <div className="container">
        <div className="bg-[#F6F5FD] rounded-lg w-full h-full overflow-hidden mt-10">
          <Image
            src={"/imgs/woman.png"}
            alt="woman image"
            width={0}
            height={0}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <h2 className="text-2xl font-semibold mt-2 text-[#1D1D1D]">
          WOMEN COLLECTION
        </h2>
        <div className="flex items-center h-full mb-10">
          <CommonButton />
        </div>
      </div>
    </div>
  );
}
