import CategoryList from "components/shared/CategoryList";
import { useEffect, useRef } from "react";

function OffcanvasNav() {
  const offcanvasNavEl = useRef<HTMLDivElement>(null);

  useEffect(function () {
    if (!offcanvasNavEl.current) throw Error("offcanvasNavEl is not assigned");
    offcanvasNavEl.current.focus();
  });

  return (
    <div
      ref={offcanvasNavEl}
      role="dialog"
      tabIndex={-1}
      aria-label="navbar"
      aria-describedby="OffcanvasHeader"
      className="fixed-top bg-white rounded-bottom d-xxl-none pt-2 py-md-5 mt-6 overflow-scroll z-9999 offcanvas-nav"
    >
      <div className="container-md pt-5 pt-md-2">
        <div className="pt-1 pb-6 mb-4 mb-md-2 pb-md-2 pt-md-4 mt-md-1">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}

export default OffcanvasNav;
