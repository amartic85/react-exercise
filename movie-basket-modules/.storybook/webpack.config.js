module.exports = {
    module: {
      rules: [
        {
          test: /^(?!.*?\.module).*\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
            test: /\.module\.css$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: "[name]__[local]___[hash:base64:5]"
                },
              },
            ],
          },
      ],
    },
  }