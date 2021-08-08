var express = require('express');
var router = express.Router();
var catalogController = require('../../Controller/CatalogContrller');

router.get('/:id',catalogController.carts)
router.post('/update',catalogController.sl);
router.post('/delete',catalogController.delete);

module.exports = router;