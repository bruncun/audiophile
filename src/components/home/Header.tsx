import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="container h-100 d-flex align-items-center">
      <div className="row text-center text-xxl-start w-100">
        <div className="col-md-8 offset-md-2 col-xxl-7 offset-xxl-0">
          <small className="mt-6 mb-3 text-white-50 text-uppercase ls-5 d-block">
            New Product
          </small>
          <Link
            to="/products/xx99-mark-two-headphones"
            className="text-decoration-none"
          >
            <h1 className="mb-4 text-white d-md-none fw-bold">
              XX99 Mark II Headphones
            </h1>
            <h1 className="display-4 mb-4 text-white d-none d-md-block fw-bold">
              XX99 Mark II Headphones
            </h1>
          </Link>
          <p className="lh-lg mb-4 pb-1 pb-md-3 text-white-75 mx-3 ps-xxl-0 ms-xxl-0 me-xxl-6 pe-xxl-6">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            className="btn btn-primary"
            to="/products/xx99-mark-two-headphones"
            data-cy="xx99-mark-two-headphones-link"
          >
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
