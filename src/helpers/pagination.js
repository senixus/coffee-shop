export const handlePagination = (products, currentPage = 1) => {
  let productsPerPage = 6;
  let indexOfLastProducts = currentPage * productsPerPage;
  let indexOfFirstProducts = indexOfLastProducts - productsPerPage;

  let currentProducts = products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  if (currentProducts.length === 0) {
    currentProducts = products;
  }

  return currentProducts;
};
