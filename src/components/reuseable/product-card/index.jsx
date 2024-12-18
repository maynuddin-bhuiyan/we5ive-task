import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ProductCard({ data }) {
  const router = useRouter();

  const handleAddToCart = () => {
    try {      
      const setLocalStorageCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const cartIndex = setLocalStorageCart.findIndex(
        (item) => item.slug === data.slug
      );
        if (cartIndex >= 0) {
        //Update the quantity 
        setLocalStorageCart[cartIndex].quantity += 1;
      } else if (cartIndex === -1) {
        //Add the product to the cart
        setLocalStorageCart.push({ ...data, quantity: 1 });
      } else {
        //handle it gracefully
        toast.error(error.message || "Failed to add product to cart.");
      }
  
      // Save the updated cart data to localStorage
      localStorage.setItem("cart", JSON.stringify(setLocalStorageCart));
  
      // Show a success toast
      toast.success("Product added to cart!");
    } catch (error) {
      // Show an error
      toast.error(error.message || "Failed to add product to cart.");
    }
  };

  return (
    <div
      onClick={() => router.push(`/product/${data?.slug}`)}
      className="bg-white rounded-2xl p-2 w-full lg:w-[295px] md:w-[300px] cursor-pointer"
    >
      <div className="bg-[#F6F5FD] rounded-lg relative md:w-[280px] h-[320px] md:h-[280px] overflow-hidden">
        <Image
          src={data?.image}
          alt="product-img"
          width={0}
          height={0}
          layout="fill"
          objectFit="cover"
        />
        {data?.discount && (
          <div className="w-11 bg-[#7E53D4] rounded-b-full absolute right-1 pt-1 pb-2 top-0 px-[6px]">
            <button className="text-[13px] leading-4 text-white font-bold">
              {"Up to"} {data?.discount} {"%"}
            </button>
          </div>
        )}
      </div>
      {data?.product_review && (
        <div className="flex items-center gap-1 mt-2 lg:mt-4">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.15177 2.29616L10.325 4.66196C10.485 4.99129 10.9116 5.30717 11.2716 5.36766L13.398 5.72387C14.7578 5.95239 15.0778 6.94711 14.0979 7.92837L12.4448 9.59517C12.1648 9.87744 12.0115 10.4218 12.0981 10.8117L12.5714 12.875C12.9447 14.5082 12.0848 15.14 10.6516 14.2864L8.65851 13.0968C8.29857 12.8818 7.70531 12.8818 7.33864 13.0968L5.34555 14.2864C3.91904 15.14 3.05247 14.5015 3.42577 12.875L3.89905 10.8117C3.9857 10.4218 3.83239 9.87744 3.55241 9.59517L1.89927 7.92837C0.92604 6.94711 1.23934 5.95239 2.59919 5.72387L4.72562 5.36766C5.07891 5.30717 5.50553 4.99129 5.66551 4.66196L6.83871 2.29616C7.47864 1.01245 8.51851 1.01245 9.15177 2.29616Z"
                fill="#FFC700"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.15177 2.29616L10.325 4.66196C10.485 4.99129 10.9116 5.30717 11.2716 5.36766L13.398 5.72387C14.7578 5.95239 15.0778 6.94711 14.0979 7.92837L12.4448 9.59517C12.1648 9.87744 12.0115 10.4218 12.0981 10.8117L12.5714 12.875C12.9447 14.5082 12.0848 15.14 10.6516 14.2864L8.65851 13.0968C8.29857 12.8818 7.70531 12.8818 7.33864 13.0968L5.34555 14.2864C3.91904 15.14 3.05247 14.5015 3.42577 12.875L3.89905 10.8117C3.9857 10.4218 3.83239 9.87744 3.55241 9.59517L1.89927 7.92837C0.92604 6.94711 1.23934 5.95239 2.59919 5.72387L4.72562 5.36766C5.07891 5.30717 5.50553 4.99129 5.66551 4.66196L6.83871 2.29616C7.47864 1.01245 8.51851 1.01245 9.15177 2.29616Z"
                fill="#FFC700"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.15177 2.29616L10.325 4.66196C10.485 4.99129 10.9116 5.30717 11.2716 5.36766L13.398 5.72387C14.7578 5.95239 15.0778 6.94711 14.0979 7.92837L12.4448 9.59517C12.1648 9.87744 12.0115 10.4218 12.0981 10.8117L12.5714 12.875C12.9447 14.5082 12.0848 15.14 10.6516 14.2864L8.65851 13.0968C8.29857 12.8818 7.70531 12.8818 7.33864 13.0968L5.34555 14.2864C3.91904 15.14 3.05247 14.5015 3.42577 12.875L3.89905 10.8117C3.9857 10.4218 3.83239 9.87744 3.55241 9.59517L1.89927 7.92837C0.92604 6.94711 1.23934 5.95239 2.59919 5.72387L4.72562 5.36766C5.07891 5.30717 5.50553 4.99129 5.66551 4.66196L6.83871 2.29616C7.47864 1.01245 8.51851 1.01245 9.15177 2.29616Z"
                fill="#FFC700"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.15177 2.29616L10.325 4.66196C10.485 4.99129 10.9116 5.30717 11.2716 5.36766L13.398 5.72387C14.7578 5.95239 15.0778 6.94711 14.0979 7.92837L12.4448 9.59517C12.1648 9.87744 12.0115 10.4218 12.0981 10.8117L12.5714 12.875C12.9447 14.5082 12.0848 15.14 10.6516 14.2864L8.65851 13.0968C8.29857 12.8818 7.70531 12.8818 7.33864 13.0968L5.34555 14.2864C3.91904 15.14 3.05247 14.5015 3.42577 12.875L3.89905 10.8117C3.9857 10.4218 3.83239 9.87744 3.55241 9.59517L1.89927 7.92837C0.92604 6.94711 1.23934 5.95239 2.59919 5.72387L4.72562 5.36766C5.07891 5.30717 5.50553 4.99129 5.66551 4.66196L6.83871 2.29616C7.47864 1.01245 8.51851 1.01245 9.15177 2.29616Z"
                stroke="#FFC700"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.15177 2.29616L10.325 4.66196C10.485 4.99129 10.9116 5.30717 11.2716 5.36766L13.398 5.72387C14.7578 5.95239 15.0778 6.94711 14.0979 7.92837L12.4448 9.59517C12.1648 9.87744 12.0115 10.4218 12.0981 10.8117L12.5714 12.875C12.9447 14.5082 12.0848 15.14 10.6516 14.2864L8.65851 13.0968C8.29857 12.8818 7.70531 12.8818 7.33864 13.0968L5.34555 14.2864C3.91904 15.14 3.05247 14.5015 3.42577 12.875L3.89905 10.8117C3.9857 10.4218 3.83239 9.87744 3.55241 9.59517L1.89927 7.92837C0.92604 6.94711 1.23934 5.95239 2.59919 5.72387L4.72562 5.36766C5.07891 5.30717 5.50553 4.99129 5.66551 4.66196L6.83871 2.29616C7.47864 1.01245 8.51851 1.01245 9.15177 2.29616Z"
                stroke="#FFC700"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm text-[#1D1D1D] font-semibold">{`(${data?.product_review})`}</p>
        </div>
      )}
      <div className="flex justify-between items-center mt-2">
        <p className="text-[#1D1D1D]">{data?.name}</p>
        <h3 className="text-xl text-[#1D1D1D] font-semibold">
          BDT {data?.price}
        </h3>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
        className="outline-button font-semibold text-center w-full py-2 mt-3"
      >
        Add to Cart
      </button>
    </div>
  );
}
