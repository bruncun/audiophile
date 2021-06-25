import zx9SpeakerMobile from "assets/home/mobile/image-speaker-zx9.png";
import zx9SpeakerTablet from "assets/home/tablet/image-speaker-zx9.png";
import zx9SpeakerDesktop from "assets/home/desktop/image-speaker-zx9.png";
import ovalsMobile from "assets/home/mobile/image-ovals.svg";
import ovalsTablet from "assets/home/tablet/image-ovals.svg";
import ovalsDesktop from "assets/home/desktop/image-ovals.svg";
import "./FeatureCardList.scss";

function FeatureCardList() {
  return (
    <div className="container-md py-5">
      <div className="card bg-primary text-white text-center text-lg-start mb-4 overflow-hidden pt-lg-1">
        <div className="card-body position-relative pb-5 mt-md-2">
          <img
            className="position-absolute start-50 translate-middle d-md-none ovals-mobile w-100"
            src={ovalsMobile}
            alt="Ovals"
          />
          <img
            className="position-absolute top-50 start-50 translate-middle d-none d-md-block d-lg-none w-100"
            src={ovalsTablet}
            alt="Ovals"
          />
          <img
            className="position-absolute top-50 translate-middle d-none d-lg-block ovals-desktop w-100"
            src={ovalsDesktop}
            alt="Ovals"
          />
          <div className="row">
            <div className="col-12 col-lg-7 text-lg-center z-1">
              <img
                className="w-50 mb-4 mt-5 d-md-none"
                src={zx9SpeakerMobile}
                alt="Zx9 Speaker"
              />
              <img
                className="w-25 mb-4 mt-5 d-none d-md-inline-block d-lg-none"
                src={zx9SpeakerTablet}
                alt="Zx9 Speaker"
              />
              <img
                className="d-none d-lg-inline-block position-relative zx-9-speaker-desktop"
                src={zx9SpeakerDesktop}
                alt="Zx9 Speaker"
              />
            </div>
            <div className="col-12 col-lg-5 z-1">
              <h1 className="fw-bold display-2 my-4 mx-md-6 px-md-5 ms-lg-0 ps-lg-0 mt-lg-5 pt-lg-4">
                Zx9 Speaker
              </h1>
              <p className="lh-lg mb-4 text-white-75 mx-md-6 px-md-5 ms-lg-0 ps-lg-0 pe-lg-6">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="btn btn-dark">See Product</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-speaker-zx-7 mb-4">
        <div className="card-body py-6 px-md-5 px-lg-6">
          <h2 className="fw-bold mb-4">Zx7 Speaker</h2>
          <button className="btn btn-outline-dark">See Product</button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card bg-earphones-yx-1 mb-4" />
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-4 bg-light yx-1-earphones">
            <div className="card-body py-5 px-lg-6 d-flex align-items-center">
              <div>
                <h2 className="fw-bold mb-4">Yx1 Earphones</h2>
                <button className="btn btn-outline-dark">See Product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCardList;
