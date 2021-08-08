var express = require('express');
var modelProduct = require('../../Model/product');
var modelUsers = require('../../Model/user');
var router = express.Router();
var mid = require('../../middleware/middleware');
const bcrypt = require("bcrypt");
router.get('/admin',mid.mid, async function(req,res){
    var list = await modelProduct.order();
  res.render('admin/index',{user:req.session.user,list:list});
}); 
router.post('/logins',async function(req,res){
    var name = req.body.name;
    var pass = req.body.pass;
    var row = [name,pass];
    await modelUsers.login(row);
     if(!data){
        req.session.loggedin = true;
        req.session.username = name;
        req.flash("err","Đăng nhập không thành công");
        res.redirect("/admin");
        return;
   }
   var ma_pass = data.password;
     var k = bcrypt.compareSync(pass, ma_pass);
   if (k) {
       req.session.user = {
           username: data.username,
           logIn: true
      };
       if (req.session.back) {
           res.redirect(req.session.back);
       } else {
           res.redirect("/admin");
       }
   }else {
       req.flash("err","Đăng nhập không thành công");
       res.redirect("/admin");
   }
});
router.get('/addproduct',async function(req,res){
    var Success = req.flash('Success');
    var err = req.flash('err');
    var mess = req.flash('mess');
    var messs = req.flash('messs');
    var ses = req.flash('ses'); 
    var listCat = await modelProduct.listcat();
    res.render('admin/addproduct',{Success:Success,error:err,mess:mess,messs:messs,ses:ses,listCat:listCat});
});
router.get('/products',mid.mid, async function(req,res){
    var cat = await modelProduct.listcat();
    var id = req.query.id;
    var seach = req.query.search;
    if(id){ 
        var list = await modelProduct.deltal(id);
        
    }else if(seach){
           var list = await modelProduct.seach(seach);
           
    }else{
         var list = await modelProduct.list();
         
    }
    res.render('admin/product',{list:list,cat:cat});
});
router.get('/chat',mid.mid, async function(req,res){
      res.render('admin/charts');
});
router.get('/logout',function(req,res){
    req.session.destroy();
     res.redirect('/admin');
});
router.get('/register',mid.mid,function(req,res){
    var Success = req.flash('Success');
    var err = req.flash('err');
    res.render('admin/register',{Success:Success,error:err});
});
router.get('/users',mid.mid, async function(req,res){
    var listP = await modelUsers.list();
    res.render('admin/user',{listP:listP,user:req.session.user});
});
router.get('/updates',async function(req,res){
    var  id = req.query.id;
    var value = req.query.value;
    var suru = {status:value}
    var row = [suru,id];
    if(value && id){
    await modelProduct.orderupdate(row);
    }
    res.redirect('/admin');
});
module.exports = router;