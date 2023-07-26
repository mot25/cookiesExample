const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    webpack: (config, { isServer }) => {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: 'static/chunks/pages/MatveyPogodaevFE__[contenthash].css',
                chunkFilename: 'static/chunks/pages/MatveyPogodaevFE__[contenthash].css',
            }),
        );
        config.module.rules.push({
            test: /\.(sa|sc|c)ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: 'MatveyPogodaevFE__[local]__[hash:base64:5]'
                        }
                    }
                },
                'sass-loader'
            ],
        });
        // в настройки sass мне помогла эта статья
        // https://dev.to/justgeek/using-nextjs-with-sass-the-angular-way-3f7l
        return config;
    },
};
