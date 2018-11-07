/**
 * 自动加载模块
 * 1.权限管理：资源表，权限角色表，角色表，用户角色表，用户表？
 */
const Koa = require("koa");
const server = require("koa-static");
const KoaBody = require("koa-body");
const Logger = require("./common/Logger");
const configs = require("./common/configs");
const utils = require("./common/utils");
const db = require("./common/db");

const app = new Koa();
const port = configs.port || 3000;

/**
 * 静态资源
 */
app.use(server(configs.root + "/build"));
/**
 * 处理返回对象
 */
app.use(KoaBody(configs.body));

/**
 * 添加自定义对象
 */
app.plugins = [];
global.models = {};

//添加model
app.addModel = function (name, model, opt = {}) {
    const result = db.define(name, model, opt);
    global.models[name] = result;
}
//添加菜单
app.addMenu = function () {

}

/**
 * 加载插件
 */
utils.loadModel(configs.root + "/plugin", item => item(app, configs));
/**
 * 添加路由
 */
utils.loadModel(configs.root + "/server/api", api_item => app.use(api_item.routes()).use(api_item.allowedMethods()));
/**
 * 错误处理页
 */
app.use(function (ctx) {
    ctx.body = {
        code: 0,
        msg: "404"
    }
});
/**
 * koa错误
 */
app.on('error', (err, ctx) => {
    Logger.warm('server error', err, ctx)
});
/**
 * 监听
 */
app.listen(port, function () {
    Logger.info(configs.name + "已启动:" + port);
    require("./app");
});
/**
 * 快捷键停止
 */
process.on('SIGINT', function () {
    process.exit();
});
/**
 * 其他退出
 */
process.on('exit', (code) => {
    Logger.info("app已停止:" + code)
});
/**
 * 其他错误
 */
process.on('uncaughtException', (code) => {
    Logger.info("app已停止:" + code)
});