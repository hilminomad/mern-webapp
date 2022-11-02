const express = require('express');
const router = express.Router();

// importing products controllers
const {
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/products');

// all products route
router.route('/').get(getAllProducts);

// single product route
router.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct);

module.exports = router;
