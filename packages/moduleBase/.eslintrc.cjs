module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended",
        "eslint-config-prettier",
        "standard",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["vue"],
    rules: {
        indent: ["error", 4],
        quotes: ["error", "single"],
    },
};