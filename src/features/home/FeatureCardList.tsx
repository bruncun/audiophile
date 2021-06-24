import zx9Speaker from "assets/home/mobile/image-speaker-zx9.png";
import ovals from "assets/home/mobile/image-ovals.svg";
import "./FeatureCardList.scss";

function FeatureCardList() {
  return (
    <div className="container py-5">
      <div className="card bg-primary text-white text-center mb-4">
        <div className="card-body position-relative pb-5">
          <img
            className="position-absolute top-33 start-50 translate-middle"
            src={ovals}
            alt="Ovals"
          />
          <img className="w-50 mb-4 mt-5" src={zx9Speaker} alt="Zx9 Speaker" />
          <h1 className="fw-bold display-2 my-4">Zx9 Speaker</h1>
          <p className="lh-lg mb-4 text-white-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="btn btn-dark">See Product</button>
        </div>
      </div>
      <div className="card bg-speaker-zx-7 mb-4">
        <div className="card-body py-6">
          <h2 className="fw-bold mb-4">Zx7 Speaker</h2>
          <button className="btn btn-outline-dark">See Product</button>
        </div>
      </div>
      <div className="card bg-earphones-yx-1 mb-4" />
      <div className="card mb-4 bg-light">
        <div className="card-body py-5">
          <h2 className="fw-bold mb-4">Yx1 Earphones</h2>
          <button className="btn btn-outline-dark">See Product</button>
        </div>
      </div>
    </div>
  );
}

export default FeatureCardList;
