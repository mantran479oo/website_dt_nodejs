var express = require('express');
var router = express.Router();
var db = require('../../Model/database');

router.post('/adduser',function(req,res){
     var fname = req.body.fistname;
     var name = req.body.lastname;
     var gmail = req.body.gmail;
     var password = req.body.pass;
     var repss = req.body.repeatpass;
     if(password = repss){
         var sql = "INSERT INTO user SET ? ";
         var values  = {ho:fname,ten:name,email:gmail};
         db.query(sql, values, function(err,row){
                console.log('ok');
         });
     }else{
     }
    res.render('site/register',{mess:message});
});

module.exports = router;