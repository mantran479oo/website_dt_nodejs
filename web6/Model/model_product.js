const db = require("./database")
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

exports.names = (nameProduct) => {
    let sql = `SELECT * FROM product WHERE nameProduct=${nameProduct}`;
        db.query(sql, (err, d) => {
            console.log('List success');
            data = d[0];
            hamOK(data);
        })
}
exports.detail = (id) => {
    return new Promise( (hamOK, hamLoi) => {
        let sql = `SELECT * FROM product where idProduct= ?`;
        db.query(sql,id, (err, d) => {
            console.log('List success');
            data = d[0];
            hamOK(data);
        }) 
    })
}

exports.delete = (idProduct)=> {
    let sql = `DELETE FROM product WHERE idProduct=${idProduct}`;
    let query = db.query(sql, (err, result) => {
        console.log('Delete success');
    })
}
exports.listsmall = async () => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = `SELECT * FROM product
        ORDER BY RAND() LIMIT 3`;
        db.query(sql, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
            })
        })
}
exports.listsmal = async () => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = `SELECT * FROM product
        ORDER BY RAND() LIMIT 3`;
        db.query(sql, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
            })
        })
}
exports.seach = (name) => {
    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM product where nameProduct Like '" + name+ "%'";
        db.query(sql, (err, d) => {
            console.log('List success');
            dataList = d[0];
            hamOK(dataList);
        })
    })
}
exports.order = (idO) => {
    return new Promise( (hamOK, hamLoi) => {
            let sql = ("SELECT * FROM users INNER JOIN orders ON users.id = orders.id where users.id = "+ idO + "");
             db.query(sql,(err,result) => {
             hamOK(result);
          });
        })
}
