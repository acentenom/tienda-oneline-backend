const { Router } = require("express");
const {
  getAllCategoriesController,
} = require("../controllers/category.controller");
const {
  getAllProductsController,
  selectCategoryController,
} = require("../controllers/product.controller");

const router = Router();

router.get("/category", getAllCategoriesController);
router.get("/product", getAllProductsController);
router.get("/product/category/:id", selectCategoryController);

module.exports = router;
