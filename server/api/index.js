
const router = require("../common/router")("");

router.get('/', async (ctx, next) => {
    ctx.body = "测试接口"
});

module.exports = router;