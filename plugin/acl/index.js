/**
 * 权限管理
 */
const Sequelize = require('sequelize');
const route = require("./route");

function middleware(ctx, next) {
    console.log("用户")
    next();
}
const model = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    }
}
module.exports = function (app, configs) {
    //中间件
    app.use(middleware);
    //数据对象
    // app.addModel("t_acl", model, {
    //     freezeTableName: true,
    //     timestamps: false,
    // });
    //菜单
    app.addMenu([{
        icon: "acl",
        txt: "权限控制",
        child: [{
            name: "acl/page",
            path: "acl/page",
            txt: "权限列表",
        }]
    }]);
    //路由
    app.use(route.routes()).use(route.allowedMethods());
}