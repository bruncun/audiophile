import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-header bg-dark d-flex align-items-center">
      <div className="text-center text-lg-start container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <h6 className="mb-3 ls-5 text-white-50 fw-light mt-6">
              New Product
            </h6>
            <h1 className="fw-bold display-2 mb-4 text-white d-md-none">
              XX99 Mark II Headphones
            </h1>
            <h1 className="fw-bold display-1 mb-4 text-white d-none d-md-block">
              XX99 Mark II Headphones
            </h1>
            <p className="lh-lg mb-4 text-white-75 px-md-6 mx-md-4 ps-lg-0 ms-lg-0 me-lg-6">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              className="btn btn-primary"
              to="/product/xx99-mark-two-headphones"
              data-cy="xx99-mark-two-headphones-link"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
