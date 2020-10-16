class DebugInsertPlugin{
  constructor (options) {
    this.options = options;
  }
  apply (compiler) {
    const paths = this.options.paths;
    // setup hooks for webpack4
    if (compiler.hooks) {
      compiler.hooks.compilation.tap('DebugInsertPluginHooks', (compilation) => {
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('DebugInsertPluginHooks',(htmlPluginData, cb) => {
          for (var i = paths.length - 1; i >= 0; i--) {
            htmlPluginData.assets.js.unshift(paths[i]);
          }
          cb(null, htmlPluginData);
        });
      })
    }else{
      compiler.plugin('compilation', function(compilation, options) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
          for (var i = paths.length - 1; i >= 0; i--) {
            htmlPluginData.assets.js.unshift(paths[i]);
          }
          callback(null, htmlPluginData);
        });
      });
    }
  }
}

module.exports = DebugInsertPlugin;
