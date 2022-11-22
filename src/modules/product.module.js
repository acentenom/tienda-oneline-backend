const {
  allProducts,
  getProductsByCategory,
  productByName,
} = require("../handlers/product.handler");

const getFormatImage = (data) => {
  return data.map(f => {
    if(f.url_image === null || f.url_image === undefined || f.url_image === '') {
      f.url_image = '../imagenes/producto-sin-imagen.png'
      return f;
    }
    return f;
  })
}

const getFormatDiscount = (data) => {
  const formatDetail = data.map(d => {
    if(d.discount == 0) {
      return {
        id: d.id,
        name: d.name,
        url_image: d.url_image,
        price: d.price,
        discount: 0
      };
    }else {
      return {
        id: d.id,
        name: d.name,
        url_image: d.url_image,
        price: d.price,
        discount: d.discount,
        discountTotal: d.price - (d.discount * d.price) / 100
      }
    }
  })
  return formatDetail;
}

const getAllProductsModule = async (name) => {
  try {
    if (name) {
      const productsByName = await productByName(name);
      const responseData = getFormatImage(productsByName)
      let productsDetail = getFormatDiscount(responseData)
      return productsDetail;
    }
    const products = await allProducts();
    const responseData = getFormatImage(products)
    let productsDetail = getFormatDiscount(responseData)
    return productsDetail;
  } catch (error) {
    throw error;
  }
};

const productsByCategoryModule = async (id) => {
  try {
    const productsByCategory = await getProductsByCategory(id);
    const res = getFormatImage(productsByCategory)
    let productsDetail = getFormatDiscount(res)
    return productsDetail;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProductsModule,
  productsByCategoryModule,
};
