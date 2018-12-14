const connection = require('./connection.js');

const printQuestionMarks = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

const objToSql = (ob) => {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function (table, cb) {
        const queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function (table, col, val, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(val.length);
        queryString += ") ";

        connection.query(queryString, val, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function (table, colVal, condition, cb) {
        let queryString = "Update " + table;
        queryString += " SET ";
        queryString += objToSql(colVal);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });

    }
};

module.exports = orm;