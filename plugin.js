const PnpWebapckPlugin = require('pnp-webpack-plugin');

module.exports = (api) => {
  console.log('plugin running....');
  api.chainWebpack((config, { webpack, env, createCSSRule }) => {
    // pnp resolve for loader
    config.merge({
      resolve: {
        plugins: { pnp: { plugin: [PnpWebapckPlugin] } }
      },
      resolveLoader: {
        plugins: { pnp: { plugin: [PnpWebapckPlugin.moduleLoader(module)] } }
      }
    })
  });


}