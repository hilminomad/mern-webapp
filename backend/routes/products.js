const express = require('express');
const router = express.Router();

// importing products controllers
const {
  createProducts,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/products');

// all products route
router.route('/').post(createProducts).get(getAllProducts);

// single product route
router.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct);

module.exports = router;
