import CategoryList from "components/shared/CategoryList";

function OffcanvasNav() {
  return (
    <div className="bg-white rounded-bottom d-xxl-none pt-2 py-md-5 overflow-auto position-absolute w-100 z-9999 offcanvas-nav">
      <div className="container-md pt-5 pt-md-2">
        <div className="pt-1 pb-2 mb-4 mb-md-2 pb-md-2 pt-md-4 mt-md-1">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}

export default OffcanvasNav;
