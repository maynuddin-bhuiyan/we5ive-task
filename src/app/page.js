import BigDeal from "@/components/big-deal";
import CustomerOffer from "@/components/customer-offer";
import FeaturedProduct from "@/components/featured-product";
import FeaturedSlider from "@/components/featured-slider";
import HeroSec from "@/components/herosec";
import MobileResponsive from "@/components/mobile-responsive";

export default function Home() {
  return (
    <>
      <HeroSec />
      <FeaturedProduct />
      <div className="hidden lg:block">
        <CustomerOffer />
        <FeaturedSlider />
      </div>
      <div className="block lg:hidden">
        <MobileResponsive />
      </div>
      <BigDeal />
    </>
  );
}
