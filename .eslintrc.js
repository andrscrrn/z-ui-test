const path = require("path");
// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  //   parser: "babel-eslint",

  extends: [
    "airbnb", // includes react
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

    // incompatible with Redux component testing pattern
    "import/no-named-as-default": "off",

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": "off",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    "react/sort-comp": [
      1,
      {
        order: ["static-methods", "lifecycle", "everything-else", "render"],
      },
    ],
  },
};
