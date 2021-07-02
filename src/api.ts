export const getProductsByCategory = (category: String) => () =>
  fetch(`http://localhost:3004/products?category=${category}`).then((res) =>
    res.json()
  );
