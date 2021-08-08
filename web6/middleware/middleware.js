var modelProduct = require('../Model/model_product');
class middleware {
    mid = async function(req,res,next) {
        if(!req.session.user){
            var er =  req.flash('err');
       return res.render('admin/login',{er:er});
        }
        next();
    }
    checksl = async function (req,res,next) {
        var cart =req.session.cart;
        cart.forEach ( async function(p){
          await modelProduct.detail(p.idProduct);
            //if(cart.ipProduct )
        });
    }
    cat = async function(req,res,next) {
        if(!req.session.cart){
       return res.redirect('/shop');
        }
        next();
    }

} 
module.exports  = new middleware;