import BigDeal from "@/components/big-deal";
import CustomerOffer from "@/components/customer-offer";
import FeaturedProduct from "@/components/featured-product";
import FeaturedSlider from "@/components/featured-slider";
import HeroSec from "@/components/herosec";

export default function Home() {
  return (
    <>
      <HeroSec />
      <FeaturedProduct />
      <CustomerOffer />
      <FeaturedSlider />
      <BigDeal />
    </>
  );
}
