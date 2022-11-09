const { conn } = require("../db");

const allCategories = async () => {
  try {
    const categories = await conn.query('SELECT * FROM category');
  return categories[0];
  } catch (error) {
    throw error;
  }
};


 module.exports = {
  allCategories,
};
