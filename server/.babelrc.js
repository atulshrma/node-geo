const presets = [
    [
        '@babel/preset-env',
        {
            targets: {
                node: 'current',
            },
        },
    ],
    ['@babel/preset-react'],
];

const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/transform-runtime',
];

if (process.env.COMPILER_ENV === 'server') {
    plugins.push([
        'file-loader',
        {
            name: '[hash].[ext]',
            extensions: ['css', 'sass', 'scss'],
            publicPath: '/public/css',
            outputPath: null,
        },
        'css-file-loader-plugin',
    ]);
}

const addConfigs = { ignore: ['./src/static/'] };

module.exports = { plugins, presets, ...addConfigs };
