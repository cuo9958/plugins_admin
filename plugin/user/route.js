const Router = require("koa-router");
const route = new Router({
    prefix: "/user"
});
route.get('/', (ctx, next) => {
    ctx.body = {
        code: 1,
        msg: "ok"
    }
});
module.exports = route;