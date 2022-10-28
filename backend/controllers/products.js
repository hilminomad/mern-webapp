const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');
const jsonProducts = require('../shop.json');

const createProducts = async (req, res) => {
  const products = await Product.create({ jsonProducts });
  res.status(StatusCodes.OK).json({ products });
};
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};
const getProduct = async (req, res) => {
  const id = req.params;
  const product = await Product.findOne({ _id: id });
  if (!product) {
    throw new NotFoundError(`no product with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
  res.get('delete product');
};

const updateProduct = async (req, res) => {
  res.get('update product');
};

module.exports = {
  getAllProducts,
  createProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
