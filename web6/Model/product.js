var db = require('./database');
var dataList =[];

exports.list = async () => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM product";
        db.query(sql, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.listcat = async () => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM catalog";
        db.query(sql, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.deltal = async (id) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM product WHERE idCat = ?";
        db.query(sql,id, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.deltals = async (id) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM product WHERE idProduct = ?";
        db.query(sql,id, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.seach = async (seach) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM product WHERE nameProduct LIKE '" + seach + "%'" ;
        db.query(sql, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.delete = async (id) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = `DELETE FROM product WHERE idProduct = '${id}'` ;
        db.query(sql, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.update = async (a) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = `UPDATE product SET ? WHERE idProduct = ?` ;
        db.query(sql,a, (err, d) => {
            if(err){err}
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.order = async () => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = `SELECT * FROM orders INNER JOIN users ON users.id = orders.id` ;
        db.query(sql,(err, d) => {
            if(err){err}
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.orderupdate = async (row) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = `UPDATE  orders SET ? WHERE idOrder = ?` ;
        db.query(sql,row,(err, d) => {
            if(err){err}
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.listdeta = async (text) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = `SELECT * FROM catalog Where nameCat = ?`;
        db.query(sql,text, (err, d) => {
            d =d;
            hamOK(d);
        })
        }
    )
}
exports.addcat = async (row) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = `INSERT INTO catalog  SET ? ` ;
        console.log(row);
        db.query(sql,row,(err, d) => {
            if(err) throw err;
            
        })
        }
    )
}


