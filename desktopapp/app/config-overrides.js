const antdTheme = require("./theme.js");
const path = require('path');
const {
    override,
    fixBabelImports,
    addLessLoader,
    useEslintRc,
	addDecoratorsLegacy,
	addWebpackResolve
} = require("customize-cra");
const resolve =  {
	alias: {
	  components: path.resolve(__dirname, 'src/components/'),
	  views: path.resolve(__dirname, 'src/views/'),
	  assets: path.resolve(__dirname, 'src/assets/')
  },
  extensions: ['.js']
}
 module.exports = override(
    addDecoratorsLegacy(),
    useEslintRc(),
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: antdTheme,
	}),
	addWebpackResolve(resolve)
);




