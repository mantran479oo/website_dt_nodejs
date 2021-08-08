var express = require('express');
var multer =require('multer');
var router = express.Router();
var db = require('../../Model/database');
var modelProduct = require('../../Model/product');
var files;
 
var storage = multer.diskStorage({
    destination:function(req, res,cb){
        cb(null,'./public/img');
    },
    filename:function(req, file,cb){
        files = Date.now()+'.jpg';
        cb(null, files);
    }
});
var upload =multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        console.log(file);
        if(file.mimetype == "image/png" || file.mimetype == "image/jpeg"|| file.mimetype == "image/gif"){
            cb(null,true);
        }else{
            return cb(new Error("err"));
        }
    }
}).single('img');

router.post('/add',function(req,res,next){
    upload(req,res,function(err){
        if(err instanceof multer.MulterError){
              res.json({"kq:":0,"errr":"lỗi khi multer"});
        }else if(err){
            req.flash("err","Danger!");
            res.redirect('/addproduct');
        }else{
            var listCat = req.body.list;
            var name = req.body.name;
            var price = req.body.price;
            var sl = req.body.sl;
            var file = files;
            var sql = 'INSERT INTO product SET ?'
            var row = {nameProduct:name,priceProduct:price,amountProduct:sl,imgProduct:file,idCat:listCat};
            db.query(sql,row,function(err,row){
                   if(err) throw err;
            });
            req.flash("Success","Success!");
            res.redirect('/addproduct');
        }
    });


});
router.get('/remove/:id', async function(req,res,next){
    var id =req.params.id;
    var li=await modelProduct.delete(id);
    if(li){
    res.redirect('/products');
}
});
router.post('/addcat',async function(req,res,next){
 var s = req.body.text;
  var cats =await modelProduct.listdeta(s);
 if(!s){
    req.flash("mess","Nhập đầy đủ thương hiệu");
    
 }else if(cats.length > 0){
    console.log(cats);
    req.flash("messs","Thương hiệu đã có");
    console.log("ádas");
 }else{
     var sus = {nameCat:s}
    await modelProduct.addcat(sus);
     req.flash("ses","Thêm thành công");
 }
//    res.redirect('/addproduct');
  res.status(204).send();
});
router.get('/edit/:id',async function(req,res,next){
    var id =req.params.id;
   var listP = await modelProduct.deltals(id);
   res.render('admin/editproduct',{listP:listP});
});
router.get('/edit/products/update', async function(req,res,next){ 
            var name = req.query.name;
            var price = req.query.price;
            console.log(name);
            var sl = req.query.sl;
            var id =req.query.id;
            var file = files;
            console.log(file);
            if(file){
                upload(req,res,async function(err){
                    if(err instanceof multer.MulterError){
                          res.json({"kq:":0,"errr":"lỗi khi multer"});
                    }else if(err){
                        req.flash("err","Danger!");
                        res.redirect('/products');
                    }else{
                var row = {nameProduct:name,priceProduct:price,amountProduct:sl,imgProduct:file};
                var su =[row,id];
                await modelProduct.update(su);
                res.redirect('/products');
                    }
                })
            }else{
                var row = {nameProduct:name,priceProduct:price,amountProduct:sl};
                var su =[row,id];
                await modelProduct.update(su);
                res.redirect('/products');
            }
});

module.exports = router;