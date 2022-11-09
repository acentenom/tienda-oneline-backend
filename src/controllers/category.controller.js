const { getAllCategoriesModule } = require("../modules/category.module");

const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await getAllCategoriesModule();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send({"error": error.message});
  }
};

module.exports = {
  getAllCategoriesController
};