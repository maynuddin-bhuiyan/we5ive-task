"use client";
import DetailHero from "@/components/detail-hero";
import DetailTabs from "@/components/detail-tabs";
import RelatedProducts from "@/components/related-products";
import productData from "@/data/products.json"; // Example: static product data
// import { useRouter } from "next/navigation";

export default function ProductDetail({ params }) {
  const { slug } = params;
  // console.log("product:", productData)

  const product = productData?.find((item) => item?.slug === slug);
  // if (!product) {
  //   return <p>Product not found!</p>;
  // }

  // console.log("product:", product)

  return (
    <div>
      {/* <h1>{product.name}</h1> */}
      {/* <img src={product.image} alt={product.name} /> */}
      {/* <p>{product.description}</p>
      <p>Price: BDT {product.price}</p>
      <p>Discount: {product.discount}%</p> */}
      {/* Add more product details here */}
      <div className="container">
      <h2 className="text-[#1D1D1D] font-semibold">Feature Product {"/"} <span className="text-[#7E53D4]">{product.name}</span> </h2>
      </div>
      <DetailHero product={product} />
      <DetailTabs />
      <RelatedProducts />
    </div>
  );
}
