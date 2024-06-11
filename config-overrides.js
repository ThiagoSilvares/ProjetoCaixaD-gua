// config-overrides.js
module.exports = function override(config, env) {
    // Adicione a configuração para ignorar os avisos de source map
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
      exclude: [
        /node_modules\/@antv\/util\/esm\/path\/util\//,
      ],
    });
  
    return config;
  };
  