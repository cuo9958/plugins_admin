const {
    injectBabelPlugin
} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
        }], // change importing css to less
        config,
    );

    /**
     * 定制主题：https://ant.design/docs/react/customize-theme-cn
     */
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            // "@primary-color": "#1DA57A"
        },
        javascriptEnabled: true,
    })(config, env);
    return config;
};