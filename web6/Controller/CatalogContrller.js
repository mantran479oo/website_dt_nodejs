const { assign } = require('nodemailer/lib/shared');
var modelProduct = require('../Model/model_product');
var modelUser = require('../Model/model_user');
var quantity=1;
class catalogController{
    carts = async function(req,res){
        var id = req.params.id;
        var row=[id];
        var listPro = await modelProduct.detail(row);
        if(typeof req.session.cart == "undefined"){
            req.session.cart =[];
            req.session.cart.push({
                idProduct: listPro.idProduct,
                nameProduct: listPro.nameProduct,
                imgProduct: listPro.imgProduct,
                quantity : quantity,
                priceProduct: listPro.priceProduct
            });
        }else{
            var cart = req.session.cart;
            var newItem =true;
            for (var i=0;i<cart.length;i++){
                if(cart[i].idProduct == id){
                    cart[i].quantity++;
                    cart[i].priceProduct =cart[i].quantity*cart[i].priceProduct;
                    newItem = false;
                    console.log('đã có');
                    break;
                }
            }
            if(newItem){
                cart.push({
                    idProduct: listPro.idProduct,
                    nameProduct: listPro.nameProduct,
                    imgProduct: listPro.imgProduct,
                    quantity: quantity,
                    priceProduct: listPro.priceProduct
                });
            }
        }
        res.status(204).send();
    }
    sl = async function (req,res) {
        let idp=req.body.id;
        let qty=req.body.quantity;
        var cart=req.session.cart;
        var cat = await modelProduct.detail(idp);
                for (var i=0;i<cart.length;i++){
                   if(cart[i].idProduct == idp){
                       if(qty > cat.amountProduct ){
                        cart[i].quantity = qty;
                        req.session.cart = cart;
                        req.flash("disabled","disabled");
                           console.log('lỗi');
                           res.status(204).send();
                       }else{
                   cart[i].quantity = qty;
                   req.session.cart = cart;
                   res.redirect('/cart');
                       }  
                      
                  }
            
       }
       
    }
  
    delete= async function (req,res){
        let id = req.body.a;
        var cart = req.session.cart;
        var carts =cart.splice(id,1);
        cart = carts;
         res.redirect('/cart');
    }

}
module.exports = new catalogController;