"use client"
// import productData from "@/data/products.json"; // Example: static product data
import { useRouter } from "next/navigation";

export default function ProductDetail({params}) {
    // const {slug} = params;
//   const { slug } = router?.query;
  console.log("slug", params)

//   const product = productData?.find((item) => item?.slug === slug);

//   if (!product) {
//     return <p>Product not found!</p>;
//   }

  return (
    <div>
      {/* <h1>{product.name}</h1> */}
      {/* <img src={product.image} alt={product.name} /> */}
      {/* <p>{product.description}</p>
      <p>Price: BDT {product.price}</p>
      <p>Discount: {product.discount}%</p> */}
      {/* Add more product details here */}
    </div>
  );
}
