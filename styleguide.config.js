const path = require('path');
const { theme, styles } = require('./styleguide/styles.js');
const webpackConfig = require('./webpack.config.js');
const pkg = require('./package.json');

module.exports = {
  title: '@vforge/componentz',
  theme,
  styles,
  components: 'src/components/**/[A-Z]*.js',
  styleguideDir: './docs/',
  getComponentPathLine(componentPath) {
    const name = path.basename(path.dirname(componentPath));
    const dir = path.dirname(componentPath);

    return `import {${name}} from '${pkg.name}';`;
  },
  webpackConfig,
  require: [
    path.join(__dirname, 'src/variables.css'),
  ],
};
