var modelProduct = require('../Model/model_product');
var modelUser = require('../Model/model_user');
var product = require('../Model/product')
var modelCatalog = require('../Model/model_catalog');
const paypal = require('paypal-rest-sdk');
class HomesController {

    index = async function(req,res){
        var listPro = await modelProduct.list();
        var listSmall= await modelProduct.listsmall();
         res.render('site/index',{list:listPro,listSmall:listSmall,user:req.session.User,cart:req.session.cart });
    }
    cart = async function(req,res){
        if(req.session.User){
        var listPro = await modelProduct.list();
        var listSmall= await modelProduct.listsmall();
        var di = req.flash("disabled");
        var listSmal= await modelProduct.listsmal();
        res.render('site/cart',{list:listPro,listsmall:listSmall,listsmal:listSmal,user: req.session.User,cart:req.session.cart,disabled:di});
        }else{
            res.redirect("/user");
        }
    }
    shop = async function(req,res){
        var page = parseInt(req.query.page) || 1;
        var perpage= 8;
        var start =(page-1)* perpage;
        var end = page * perpage;
        var name = req.query.seach;
        var id = req.query.id;
        var cat = await modelCatalog.list();
        if(name){
            var lists = await modelProduct.seach(name);
            if(lists){
            var list = [lists];
            }else{
                var list = await modelProduct.list();
            }  
              
        }
        else if(id){
                var list = await product.deltal(id);
                console.log(list)
        }else {
        var list = await modelProduct.list();
         }
         res.render('site/shop',{list:list.slice(start,end),user: req.session.User,cat:cat});
    }
    user = async function (req,res) {
        var Success = req.flash('Success');
        var err = req.flash('err');
        var er = req.flash('er');
        var sa = req.flash('sa');
        var pay = req.body.payment_method;
        res.render('site/dang-nhap',{Success:Success,error:err,user: req.session.User,er:er,sa:sa,cart:req.session.cart});
    }
    checkouts= async function(req, res) { 
        var s = req.flash('sac');
        var e = req.flash('er');
        var cart = req.session.cart;
        var listU = await modelUser.checkUsername(req.session.User.username);
      cart.forEach ( async function(p){
               var name = p.nameProduct;
               var img = p.imgProduct;
               var price = p.priceProduct;
               var quantity=p.quantity;
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(); 
        var su = {nameOrder:name,imgOrder:img,priceOrder:price,quantityOrder:quantity,status:1,id:req.session.User.id,date:date};
            await modelCatalog.add(su);
      });
        var listO = await modelProduct.order(req.session.User.id);
        var ar = cart.length;
        cart.splice(0, ar);
        res.render('site/my-account',{user:req.session.User,cart:req.session.cart,e:e,s:s,listO:listO,listU:[listU]});
    }
    address = async function (req,res) {
        var dc = req.body.address;
        var ten = req.body.firstname;
        var ho = req.body.lastname;
        var d = req.body.address1;
        var gmail = req.body.email;
        var stt= req.body.phone;
        var users = req.session.User.username;
        var row = {firstname:ho,lastname:ten,email:gmail,phone:stt,address:d,provinces:dc};
        var sur = [row,users];
        // var check=await modelUser.checkemail(gmail);
         await modelUser.update(sur);
         res.redirect('/shop/checkout');
        
    }
    pass = async function (req,res) {
        
    }
 
}
module.exports = new HomesController;