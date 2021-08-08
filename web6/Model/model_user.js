var db = require('./database');
exports.create = (values) => {
    let sql = "INSERT INTO users SET ? ";
    db.query(sql,values);
}

exports.loggin = (result) => {
    return new Promise( (hamOK, hamLoi) => {
        let sql = 'SELECT * FROM users WHERE username = ? OR password = ?';
        db.query(sql,result,(err, d) => {
            console.log('List success');
            data = d[0];
            hamOK(data);
        })
        }
    )
}
exports.list = (result) => {
    return new Promise( (hamOK, hamLoi) => {
        let sql = 'SELECT * FROM users ';
        db.query(sql,result,(err, d) => {
            console.log('List success');
            data = d[0];
            hamOK(data);
        })
        }
    )
}
exports.checkUsername = (username) => {
    return new Promise( (hamOK, hamLoi) => {
        let sql = `SELECT * FROM users WHERE username = '${username}'`;
        db.query(sql, (err, d) => {
            console.log('List success');
            data = d[0];
            hamOK(data);
        })
        }
    )
}
exports.checkemail = (u) => {
    return new Promise( (hamOK, hamLoi) => {
        let sql = `SELECT * FROM users WHERE email = '${u}'`;
        db.query(sql, (err, d) => {
            console.log('List success');
            data = d[0];
            hamOK(data);
        })
        }
    )
}
exports.update = (sur) => {
    return new Promise( (hamOK, hamLoi) => {
        let sql = `UPDATE users SET ? WHERE username = ?;`;
        db.query(sql,sur,(err, d) => {
            if(err) throw err
            console.log('List success');
            dataList = d[0];
            hamOK(dataList);
        })
        }
    )
}
