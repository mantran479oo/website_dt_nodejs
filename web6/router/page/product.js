var express = require('express');
var router = express.Router();
var mil = require('../../middleware/middleware')
var ProductController = require('../../Controller/ProductsController');
router.get('/checkout',mil.cat,ProductController.checkout);
router.get('/:id',ProductController.Carts);
module.exports = router;
