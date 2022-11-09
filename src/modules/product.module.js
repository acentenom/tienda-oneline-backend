const {
  allProducts,
  getProductsByCategory,
  productByName,
} = require("../handlers/product.handler");

const getAllProductsModule = async (name) => {
  try {
    if (name) {
      const productName = await productByName(name);
      return productName;
    }
    const products = await allProducts();
    return products;
  } catch (error) {
    throw error;
  }
};

const productsByCategoryModule = async (id) => {
  try {
    const productsByCategory = await getProductsByCategory(id);
    return productsByCategory;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProductsModule,
  productsByCategoryModule,
};
