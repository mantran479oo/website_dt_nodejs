var express = require('express');
var router = express.Router();
var app = express();
var homeController = require('../../Controller/HomesController');
var productController = require('../../Controller/ProductsController')
router.post('/address',homeController.address);

router.get('/user',homeController.user);
router.get('/product',productController.Carts); 
router.get('/shop',homeController.shop);
router.get('/cart',homeController.cart);
router.get('/',homeController.index);
router.post('/tai-khoan',homeController.checkouts);

module.exports = router;