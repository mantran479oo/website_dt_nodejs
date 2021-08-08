var db = require('./database');
var dataList =[];
exports.list = async () => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM users";
        db.query(sql, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.login = async (row) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM admin WHERE username = ? OR  password =?";
        db.query(sql,row, (err, d) => {
            console.log('List success');
            data = d[0];
            hamOK(data);
        })
        }
    )
}
exports.checkuser = async (id) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM users WHERE id = ? ";
        db.query(sql,id, (err, d) => {
            console.log('List success');
            dataList = d[0];
            hamOK(dataList);
        })
        }
    )
}