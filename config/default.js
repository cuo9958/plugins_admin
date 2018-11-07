/**
 * 默认配置
 */
module.exports = {
    name: "plugins_admin",
    /**
     * response的属性设置，参考kao-body
     */
    body: {},
    /**
     * 设置端口
     */
    port: 18095,
    /**
     * 调试模式
     */
    debug: true,
    /**
     * 数据库设置，参考sequelize
     */
    dbconfig: {
        database: "test",
        usr: "root",
        pwd: "123456",
        cfg: {
            dialect: "mysql",
            host: "127.0.0.1",
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        }
    },
    /**
     * redis的配置，参考redis
     */
    redis: {
        port: 6379,
        host: "127.0.0.1",
        pwd: "123456"
    },
    /**
     * 需要加载的插件
     */
    plugins: ["user", "acl"],
    /**
     * 路由的公共头
     */
    prefix: "/api",
}