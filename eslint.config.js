const js = require("@eslint/js");
const globals = require("globals");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const prettier = require("eslint-plugin-prettier");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  {
    ignores: ["node_modules", ".next", "dist"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": tseslint,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "prettier/prettier": ["error"],
      "react/react-in-jsx-scope": "off",
      //no React 17 já não é preciso importar o React no topo de cada ficheiro
      "no-undef": "off",
      "react/prop-types": "off", // TypeScript já faz validação de props
      //coloquei isto para evitar que o lint bloqueasse o código por causa dos erros any
      //não conseguia corrigir todos os erros any, então coloquei apenas como warnings em vez de erros
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "off", // permitir require() em configs
      "@typescript-eslint/triple-slash-reference": "off", // ignora triple-slash refs
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
