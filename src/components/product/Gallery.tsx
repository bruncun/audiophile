import ResponsiveImage from "components/shared/ResponsiveImage";

type HeroProps = {
  product: Product;
};

function Gallery({
  product: {
    name,
    gallery: { first, second, third },
  },
}: HeroProps) {
  return (
    <div className="row g-md-3 g-xxl-4">
      <div className="col-md-5 d-md-flex">
        <div className="d-flex align-items-start flex-column w-100">
          <div className="w-100 mb-xxl-auto">
            <div className="mb-3 pb-1 mb-xxl-auto">
              <div className="small-gallery-image-wrapper position-relative overflow-hidden">
                <ResponsiveImage
                  image={first}
                  imgClassName="rounded position-absolute top-0 start-0 w-100"
                  alt={name}
                />
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className="mb-3 pb-1 pb-md-0 mb-md-0">
              <div className="small-gallery-image-wrapper position-relative overflow-hidden">
                <ResponsiveImage
                  image={second}
                  imgClassName="rounded position-absolute top-0 start-0 w-100"
                  alt={name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <div className="large-gallery-image-wrapper position-relative overflow-hidden">
          <ResponsiveImage
            image={third}
            imgClassName="rounded position-absolute top-0 start-0 w-100"
            alt={name}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
