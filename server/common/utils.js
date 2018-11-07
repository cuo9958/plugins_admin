/**
 * 工具集
 */
const fs = require("fs");
const Logger = require("./Logger")

module.exports = {
    /**
     * 获取目录下的所有文件
     * @param {*} dir_path 
     */
    getFileList(dir_path) {
        let file_list = []
        if (fs.existsSync(dir_path)) {
            file_list = fs.readdirSync(dir_path);
        }
        return file_list;
    },
    /**
     * 加载指定路径的js
     */
    loadJs(dir_path, fn) {
        Logger.info("加载指定路径js文件：" + dir_path);
        let file_list = []
        if (fs.existsSync(dir_path)) {
            file_list = fs.readdirSync(dir_path);
        }
        try {
            file_list.forEach(item => fn(item));
        } catch (error) {
            Logger.info(error.message);
        }
    },
    /**
     * 加载指定的js文件并返回模块对象
     * @param {*} dir_path 
     * @param {*} fn 
     */
    loadModel(dir_path, fn) {
        Logger.info("加载指定路径js模块：" + dir_path);
        let file_list = []
        if (fs.existsSync(dir_path)) {
            file_list = fs.readdirSync(dir_path);
        }
        try {
            file_list.forEach(item => fn(require(dir_path + "/" + item)));
        } catch (error) {
            Logger.info(error.message);
        }
    }
}