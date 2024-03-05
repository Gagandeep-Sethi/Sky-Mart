const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductById } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAllProducts);

router.post('/',createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.get('/:id',getProductById)

module.exports = router;
