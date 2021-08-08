var express = require('express');
var router = express.Router();
var UserController = require('../../Controller/UsersController');
router.get('/pasold',UserController.forgot)
router.post('/doi-mat-khau',UserController.updates);
router.get('/tai-khoan',UserController.user); 
router.post('/dang-nhap',UserController.login);
router.post('/dang-ky',UserController.regis);
router.get('/dang-xuat',UserController.delete);

module.exports = router;
