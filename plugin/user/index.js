/**
 * 用户管理
 * 1.创建数据库
 * 2.添加对象
 * 3.用户接口
 * 4.页面
 * 5.菜单
 */
const Sequelize = require('sequelize');
const route = require("./route");

const model = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    }
}

module.exports = function (app) {
    //数据对象
    app.addModel("t_user", model, {
        freezeTableName: true,
        timestamps: false,
    });
    //菜单
    app.addMenu([{
        name: "user/page",
        path: "user/page",
        txt: "显示名称",
    }]);
    //路由
    app.use(route.routes()).use(route.allowedMethods());
}