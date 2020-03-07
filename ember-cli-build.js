const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      sourceMaps: process.env.EMBER_ENV !== 'production' && 'inline',
    },
  });

  if (process.env.USE_EMBROIDER) {
    return require('@embroider/compat').compatBuild(
      app,
      require('@embroider/webpack').Webpack,
      {
        extraPublicTrees: [],
        packagerOptions: {
          webpackConfig: {
            devtool: 'eval-source-map',
          },
        },
        splitAtRoutes: ['index', 'users', 'user'],
        staticAddonTestSupportTrees: true,
        staticAddonTrees: true,
        staticComponents: true,
        staticHelpers: true,
      }
    );
  }

  return app.toTree();
};
