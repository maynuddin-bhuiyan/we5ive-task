import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="bg-white rounded-2xl p-2 w-[300px]">
      <div className="bg-[#F6F5FD] rounded-lg relative w-[280px] h-[280px] overflow-hidden">
        <Image
          src={"/imgs/pro-1.png"}
          alt=""
          width={0}
          height={0}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[#1D1D1D]">Indian Sharee</p>
        <h3 className="text-xl text-[#1D1D1D] font-semibold">BDT 2,300</h3>
      </div>
      <button className="outline-button font-semibold text-center w-full py-2 mt-3">
        Add to Cart
      </button>
    </div>
  );
}
