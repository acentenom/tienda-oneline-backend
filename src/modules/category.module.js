const { allCategories } = require("../handlers/category.handler");

const getAllCategoriesModule = async () => {
  try {
    const categories = await allCategories();
    return categories;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategoriesModule,
};
