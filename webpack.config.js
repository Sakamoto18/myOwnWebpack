    // 导入处理路径的模块
    var path = require('path');
    // 导入自动生成html文件的插件
    var htmlWebpackPlugin = require('html-webpack-plugin');
    // 引入webpack
    var webpack = require('webpack');


    // 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
    module.exports = {
        entry: path.resolve(__dirname, 'src/js/main.js'), // 项目入口文件
       
        output: { // 配置输出选项
            path: path.resolve(__dirname, 'dist'), // 配置输出的路径
            filename: 'bundle.js' // 配置输出的文件名
        },
        plugins:[ // 添加plugins节点配置插件
            /*此插件是为了改善index每次打包都要请求js文件的情况
            由于使用--contentBase指令的过程比较繁琐，需要指定启动的目录，同时还需要修改index.html中script标签的src属性，
            所以推荐大家使用html-webpack-plugin插件配置启动页面.*/
            new htmlWebpackPlugin({
                template:path.resolve(__dirname, 'src/index.html'),//模板路径
                filename:'index.html'//自动生成的HTML文件的名称
            }),
            new webpack.HotModuleReplacementPlugin() // 引入热更新插件，js表现不明显，css更新效果比较明显
        ],
        devServer: { // 浏览器默认端口号设置
            hot: true,  // 启用浏览器热更新，即修改完后自动重新加载修改后文件
            open: true,
            port: 9530
        },
        module: { // 用来配置第三方loader模块的  
            rules: [ // 文件的匹配规则 
                { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
                { test: /\.css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] }//处理css文件的规则,use中loader调用顺序从后往前
            ]
        },
        mode: 'development'
    }

