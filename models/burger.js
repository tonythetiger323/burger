const orm = require("../config/orm");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    insertOne: function (col, val, cb) {
        orm.insertOne("burgers", col, val, function (res) {
            cb(res);
        });
    },
    updateOne: function (colVal, condition, cb) {
        orm.updateOne("burgers", colVal, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
