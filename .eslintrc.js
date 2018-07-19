const path = require("path");

// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    "airbnb", // Includes React
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react",
  ],

  plugins: ["prettier"],

  env: {
    jest: true,
  },

  rules: {
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: true, packageDir: path.join(__dirname, "./") },
    ],

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],

    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    "react/sort-comp": [
      1,
      {
        order: ["static-methods", "lifecycle", "everything-else", "render"],
      },
    ],

    "jsx-a11y/anchor-is-valid": [false],
  },
};
