var db = require('./database');
var dataList=[];

exports.list = async () => {

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

exports.listorder = async () => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM order";
        db.query(sql, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}
exports.add = async (row) => {

    return new Promise( (hamOK, hamLoi) => {
        let sql = "INSERT INTO orders SET ?" ;
        db.query(sql,row, (err, d) => {
            if(err) throw err;
            console.log(row);
        })
        }
    )
}


