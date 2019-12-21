const path = require('path');

module.exports = async ({ config, mode }) => {
	
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loaders: [
			{
			  loader: require.resolve('babel-loader'),
			},
			{
			  loader: require.resolve('react-docgen-typescript-loader'),
			}
		],
		enforce: 'pre'
	});

	config.module.rules.push({
		test: /\.stories\.tsx?$/,
		loaders: [
			{
			  loader: require.resolve('@storybook/source-loader'),
			  options: { parser: 'typescript' }
			}
		],
		enforce: 'pre'
	});

	config.resolve.extensions.push('js', 'jsx', '.ts', '.tsx');

	config.resolve.modules = [
		...(config.resolve.modules || []),
		path.resolve('./'),
		path.resolve('./src/'),
	];
	
	return config;
}
