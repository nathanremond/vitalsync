export default [
  {
    files: ["**/*.js"],
    env: {
      node: true,
      es2023: true,
      jest: true
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        jest: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off"
    }
  }
];
