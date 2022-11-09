const {
  getAllProductsModule,
  productsByCategoryModule,
} = require("../modules/product.module");

const getAllProductsController = async (req, res) => {
  try {
    const { name } = req.query;
    const products = await getAllProductsModule(name);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const selectCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const selectCategory = await productsByCategoryModule(id);
    res.status(200).send(selectCategory);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllProductsController,
  selectCategoryController,
};
