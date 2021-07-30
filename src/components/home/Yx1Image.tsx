import ResponsiveImage from "components/shared/ResponsiveImage";
import { Link } from "react-router-dom";
import "./Yx1Image.scss";

function Yx1Image() {
  return (
    <Link to="/products/yx1-earphones">
      <ResponsiveImage
        image={{
          mobile: "/assets/home/mobile/image-earphones-yx1.jpg",
          tablet: "/assets/home/tablet/image-earphones-yx1.jpg",
          desktop: "/assets/home/desktop/image-earphones-yx1.jpg",
        }}
        imgClassName="earphones-yx1-image rounded w-100"
        alt="Yx1 Earphones"
      />
    </Link>
  );
}

export default Yx1Image;
