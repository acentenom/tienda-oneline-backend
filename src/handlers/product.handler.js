const { conn } = require("../db");

const allProducts = async () => {
  try {
    const products = await conn.query(
      "SELECT * FROM product ORDER BY category ASC"
    );
    return products[0];
  } catch (error) {
    throw error;
  }
};

const getProductsByCategory = async (id) => {
  try {
    const byCategory = await conn.query(
      `SELECT * FROM product WHERE category=${id};`
    );
    return byCategory[0];
  } catch (error) {
    throw error;
  }
};

const productByName = async (name) => {
  try {
    const byName = await conn.query(
      `SELECT * FROM product WHERE name LIKE '%${name}%'`
    );
    return byName[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  allProducts,
  getProductsByCategory,
  productByName,
};
