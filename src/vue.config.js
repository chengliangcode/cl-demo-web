// vue.config.js
module.exports = {
    // 选项...
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                    'font-size-base':'',
                },
                javascriptEnabled: true
            }
        }
    }
}