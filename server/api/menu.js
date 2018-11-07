
const router = require("../common/router")("/menu");

//返回所有菜单
router.get('/', async (ctx, next) => {

    ctx.body = global.menus;
});

module.exports = router;