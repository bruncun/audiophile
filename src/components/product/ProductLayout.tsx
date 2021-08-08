interface ProductLayoutProps {
  slug: string;
  hero: React.ReactNode;
  details: React.ReactNode;
  categoryList: React.ReactNode;
  gallery: React.ReactNode;
  suggestionList: React.ReactNode;
  about: React.ReactNode;
}

function ProductLayout({
  slug,
  hero,
  details,
  gallery,
  suggestionList,
  categoryList,
  about,
}: ProductLayoutProps) {
  return (
    <div data-cy={slug}>
      <div className="container-md mt-3 mt-md-4 pt-md-2 mt-xxl-5 pt-xxl-4 pb-xxl-3">
        <main>
          <div className="pb-5 mb-md-3 pb-xxl-6 mb-xxl-2">{hero}</div>
          <div className="py-5 mt-md-2">{details}</div>
          <div className="py-5 mt-4 mt-md-3 mt-xxl-3 pt-xxl-6">{gallery}</div>
          <div className="py-5">
            <div className="mt-4 pt-2 mt-md-2 mt-xxl-4">{suggestionList}</div>
          </div>
          <div className="py-5 mt-xxl-3">
            <nav className="mt-1 mb-4 mt-md-0 my-xxl-5 pt-xxl-4 pb-xxl-3">
              {categoryList}
            </nav>
          </div>
        </main>
        <div className="pt-5 pb-4 mb-6 pb-xxl-5">{about}</div>
      </div>
    </div>
  );
}

export default ProductLayout;
