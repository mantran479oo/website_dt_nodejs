var modelUser = require('../Model/model_user');
var modelProduct = require('../Model/model_product');
const bcrypt = require("bcrypt");
 class userController {
     index = async function (req,res) {
         res.render('site/dang-nhap');
     }
     user= async function (req,res) {
        if (req.session.User) {
            var s = req.flash('sac');
            var e = req.flash('er');
            var listO =  await modelProduct.order(req.session.User.id);
            var listU = await modelUser.checkUsername(req.session.User.username);
            console.log(listO);
            res.render("site/my-account",{user: req.session.User,cart:req.session.cart,listO:listO,listU:[listU],e:e,s:s});
        } else {
            req.session.back = "/user/tai-khoan";
            res.redirect("/user");
        }
     }
     forgot = async function (req,res) {
         res.render('site/forpassword');
     }
    login = async function(req,res){
        let u = req.body.user;
        let p = req.body.pass;
        let result = [u,p];
        await modelUser.loggin(result);
        console.log(data);
        if(data.length <=0 ){
             req.session.loggedin = true;
             req.session.username = u;
             res.redirect("/user");
             return;
        }
        let pass_form = data.password;
        var kq = bcrypt.compareSync(p, pass_form);
        console.log(kq);
        if (kq) {
            req.session.User = {
                id:data.id,
                username: data.username,
                logIn: true
           };
            if (req.session.back) {
                res.redirect(req.session.back);
            } else {
                res.redirect("/");
            }
        }else {
            req.flash("err","Đăng nhập không thành công");
            res.redirect("/user");
        }
    }
    regis = async function(req,res){
        let u = req.body.username;
        let p = req.body.password;
        let rp = req.body.retypePassword;
        var check = await modelUser.checkUsername(u);
        if(check){
            req.flash("er","Tài khoản đã tồn tại");
            res.redirect("/user");
        }else{
            if (p === rp && p != "") {
            var salt = bcrypt.genSaltSync(10);
            var pass_mahoa = bcrypt.hashSync(p,salt); 
            let values = {username:u,password:pass_mahoa};
            await modelUser.create(values);
            req.flash("sa","Đăng ký thành công");
            res.redirect("/user");
            }else {
            res.redirect("/user");
            }
        }
    }
    updates = async function(req, res){
        let password = req.body.password;
        let newPassword = req.body.newPassword;
        let confirmPassword = req.body.confirmPassword;
        let u = req.session.User.username;
        await modelUser.checkUsername(u);
        console.log(data);
        if (data.length <= 0) { res.redirect("/user/tai-khoan"); return; }
        let pass_fromdb = data.password;
        var kq = bcrypt.compareSync(password, pass_fromdb);
        if (kq) {
            if (newPassword === confirmPassword) {
                var salt = bcrypt.genSaltSync(10);
                var pass_mahoa = bcrypt.hashSync(newPassword, salt);
                var row = {password:pass_mahoa}
                var r = [row,u];
                await modelUser.update(r);
                req.flash("sac","Passwword được thay đổi thành công");
                res.redirect("/user/tai-khoan");
            }else{
                       req.flash('er','Đổi mật khẩu không thành công');
                         res.redirect('/user/tai-khoan');
                }
        }
     }
    delete = async function(req, res){
        req.session.destroy();
        res.redirect("/user");
     }
 }
 module.exports= new userController;

