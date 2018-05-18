const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['babel-plugin-transform-object-rest-spread'],
          presets: [require.resolve('babel-preset-react'), [
            'env',
            {
              targets: {
                browsers: [
                  'last 2 versions',
                ],
              },
            },
          ]],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
