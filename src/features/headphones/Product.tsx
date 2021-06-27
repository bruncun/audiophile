type Product = {
  name: string;
  isNew: boolean;
  description: string;
  image: {
    mobile: string;
  };
};

type ProductProps = {
  product: Product;
  swapColOrder?: boolean;
};

function Product({
  product: {
    isNew,
    name,
    description,
    image: { mobile },
  },
  swapColOrder,
}: ProductProps) {
  return (
    <div className="mb-6 row">
      <div
        className={`col-12 col-lg-5 ${
          swapColOrder ? "order-lg-2 offset-lg-1" : ""
        }`}
      >
        <img className="rounded img-fluid mb-4 mb-lg-0 w-100" srcSet={mobile} />
      </div>
      <div
        className={`text-center col-12 col-lg-5 d-lg-flex align-items-center text-lg-start ${
          swapColOrder ? "" : "offset-lg-1"
        }`}
      >
        <div>
          {isNew && (
            <h6 className="ls-5 text-primary fw-light mb-4">New Product</h6>
          )}
          <h2 className="fw-bold me-lg-6 mb-4">{name}</h2>
          <p className="text-black-50 mb-4 lh-base me-lg-4">{description}</p>
          <button type="button" className="btn btn-primary">
            See Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
