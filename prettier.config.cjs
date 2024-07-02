/** @type {import('prettier').Config} */
const config = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 150,
    tabWidth: 4,
    jsxSingleQuote: false,
    endOfLine: 'lf',
    plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
};

module.exports = config;
