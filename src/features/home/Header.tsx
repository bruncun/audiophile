import "./Header.scss";

function Header() {
  return (
    <div className="bg-header d-flex align-items-center">
      <div className="text-center container">
        <h6 className="mb-3 ls-5 text-white-50 fw-light mt-6">New Product</h6>
        <h1 className="fw-bold display-2 mb-4 text-white d-sm-none">
          XX99 Mark II Headphones
        </h1>
        <h1 className="fw-bold display-1 mb-4 text-white d-none d-sm-block">
          XX99 Mark II Headphones
        </h1>
        <p className="lh-lg mb-4 text-white-75 px-sm-6 mx-sm-4">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button type="button" className="btn btn-primary">
          See Product
        </button>
      </div>
    </div>
  );
}

export default Header;
