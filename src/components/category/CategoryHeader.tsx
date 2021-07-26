interface CategoryHeaderProps {
  category: string;
}

function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <>
      <h1 className="fw-bold text-white mb-0 d-md-none h3 text-center">
        {category}
      </h1>
      <h1 className="fw-bold text-white mb-0 d-none d-md-block text-center">
        {category}
      </h1>
    </>
  );
}

export default CategoryHeader;
