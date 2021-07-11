interface CategoryLayoutProps {
  category: string;
  header: React.ReactNode;
  productList: React.ReactNode;
  categoryList: React.ReactNode;
  about: React.ReactNode;
}

function CategoryLayout({
  category,
  header,
  productList,
  categoryList,
  about,
}: CategoryLayoutProps) {
  return (
    <div data-cy={category}>
      <div className="bg-dark py-4 py-md-6">
        <div className="my-2">{header}</div>
      </div>
      <div className="container-md">
        <div className="py-5 my-3 pt-md-6 mt-md-5">{productList}</div>
        <div className="py-5">
          <div className="mt-1 mb-4 mt-md-4 pt-1">{categoryList}</div>
        </div>
        <div className="pt-5 pb-6 mb-4">{about}</div>
      </div>
    </div>
  );
}

export default CategoryLayout;
