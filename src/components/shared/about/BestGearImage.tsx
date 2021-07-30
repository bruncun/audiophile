import "./BestGearImage.scss";
import ResponsiveImage from "components/shared/ResponsiveImage";

function BestGearImage() {
  return (
    <ResponsiveImage
      image={{
        mobile: "/assets/shared/mobile/image-best-gear.jpg",
        tablet: "/assets/shared/tablet/image-best-gear.jpg",
        desktop: "/assets/shared/desktop/image-best-gear.jpg",
      }}
      imgClassName="best-gear-image rounded w-100"
      alt="Man wearing headphones"
    />
  );
}

export default BestGearImage;
