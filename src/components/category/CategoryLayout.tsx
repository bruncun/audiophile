interface CategoryLayoutProps {
  category: string;
  header: React.ReactNode;
  categoryProductList: React.ReactNode;
  categoryList: React.ReactNode;
  about: React.ReactNode;
}

function CategoryLayout({
  category,
  header,
  categoryProductList,
  categoryList,
  about,
}: CategoryLayoutProps) {
  return (
    <div data-cy={category}>
      <div className="bg-dark py-4 py-md-6">
        <div className="my-2 my-xxl-0">{header}</div>
      </div>
      <div className="container-md">
        <div className="py-5 mt-3 mb-4 pt-md-6 mt-md-4">
          {categoryProductList}
        </div>
        <div className="py-5">
          <div className="mt-4 mb-4 mt-md-4 pt-1">{categoryList}</div>
        </div>
        <div className="pt-5 pb-4 mb-6">{about}</div>
      </div>
    </div>
  );
}

export default CategoryLayout;
