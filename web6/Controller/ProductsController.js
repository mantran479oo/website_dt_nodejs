var express = require('express');
var modelProduct = require('../model/model_product');
var modelUser = require('../Model/model_user');
class productController{
     Carts = async function (req,res) {
         var id = req.params.id;
         var lists = await modelProduct.detail(id);
        var list = await modelProduct.list();
        var listSmall= await modelProduct.listsmall();
        res.render('site/chi-tiet-san-pham',{listP:lists,list:list,user: req.session.User,listSmall:listSmall});  
    }
    checkout = async function (req,res) {
        if( req.session.User ){
        var email = req.flash('em');
        var list = await modelUser.checkUsername(req.session.User.username);
        res.render('site/checkout',{user: req.session.User,cart:req.session.cart,list:[list],email:email});
    }else{
        res.redirect('/user');
    }
    }
    
}

module.exports = new productController;
