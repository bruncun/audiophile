import { Product } from "types";
import ResponsiveImage from "features/shared/ResponsiveImage";

type HeroProps = {
  product: Product;
};

function Gallery({
  product: {
    gallery: { first, second, third },
  },
}: HeroProps) {
  return (
    <div className="container-md py-5">
      <div className="row">
        <div className="col-12 col-md-5 d-md-flex">
          <div className="d-flex align-items-start flex-column w-100">
            <div className="w-100 mb-lg-auto">
              <ResponsiveImage
                image={first}
                imgClassName="rounded img-fluid w-100 mb-4 mb-md-none mb-lg-auto"
                alt="Xx99 Mark Two Headphones"
              />
            </div>
            <div className="w-100">
              <ResponsiveImage
                image={second}
                imgClassName="rounded img-fluid mb-4 mb-md-0 w-100"
                alt="Xx99 Mark Two Headphones"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <ResponsiveImage
            image={third}
            imgClassName="rounded img-fluid mb-4 mb-md-0 w-100"
            alt="Xx99 Mark Two Headphones"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
