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
            <ResponsiveImage
              image={first}
              imgClassName="rounded img-fluid w-100 mb-3 pb-1 mb-xxl-auto"
              alt={name}
            />
          </div>
          <div className="w-100">
            <ResponsiveImage
              image={second}
              imgClassName="rounded img-fluid mb-3 pb-1 pb-md-0 mb-md-0 w-100"
              alt={name}
            />
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <ResponsiveImage
          image={third}
          imgClassName="rounded img-fluid w-100"
          alt={name}
        />
      </div>
    </div>
  );
}

export default Gallery;
