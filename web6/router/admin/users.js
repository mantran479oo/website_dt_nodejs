var express = require('express');
var router = express.Router();
var db = require('../../Model/database');

 router.post('/adduser',function(req,res){
     var fname = req.body.firstname;
     var name = req.body.lastname;
     var gmail = req.body.email;
     var password = req.body.pass;
     var repss = req.body.repeatpass;
     if(password = repss){
         var sql = "INSERT INTO users SET ? ";
         var values  = {ho:fname,ten:name,email:gmail};
          db.query(sql, values, function(err,row){
            if (err) throw err;
            req.flash("Success","Success!");
            res.redirect('/register');
         });
     }else{
        req.flash("err","Danger!");
        res.redirect('/register');
     }
 });

module.exports = router;