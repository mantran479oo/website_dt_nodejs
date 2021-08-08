const db = require("./database")
var data = [];

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
exports.listCart = async (user) => {

    return new Promise( (hamOK, hamLoi) => {
            let sql = `SELECT * FROM cart WHERE user='${user}'`;
            db.query(sql, (err, d) => {
                console.log('List success');
                    data = d;
                    hamOK(data);
            })
        }
    )
}
