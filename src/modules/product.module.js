const {
  allProducts,
  getProductsByCategory,
  productByName,
} = require("../handlers/product.handler");

const getFormatResponse = (data) => {
  return data.map(f => {
    if(f.url_image === null || f.url_image === undefined || f.url_image === '') {
      f.url_image = '../imagenes/producto-sin-imagen.png'
      return f;
    }
    return f;
  })
}

const getAllProductsModule = async (name) => {
  try {
    if (name) {
      const productName = await productByName(name);
      const res = getFormatResponse(productName)
      return res;
    }
    const products = await allProducts();
    const res = getFormatResponse(products)
    return res;
  } catch (error) {
    throw error;
  }
};

const productsByCategoryModule = async (id) => {
  try {
    const productsByCategory = await getProductsByCategory(id);
    const res = getFormatResponse(productsByCategory)
    return res;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProductsModule,
  productsByCategoryModule,
};
