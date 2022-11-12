const { allCategories } = require("../handlers/category.handler");

const getAllCategoriesModule = async () => {
  try {
    const categories = await allCategories();
    const response = categories.map(c => {
      c.name = c.name.charAt(0).toUpperCase() + c.name.slice(1);
      return c;
    })
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategoriesModule,
};
