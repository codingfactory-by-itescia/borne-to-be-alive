const antdTheme = require("./theme.js");
const {
    override,
    fixBabelImports,
    addLessLoader,
    useEslintRc,
    addDecoratorsLegacy
} = require("customize-cra");

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
    })
);