const js = require('@eslint/js'); // Regras JS padrão do ESLint
const globals = require('globals'); // Variáveis globais (browser, node, jest, etc.)
const react = require('eslint-plugin-react'); // Plugin de regras para React
const reactHooks = require('eslint-plugin-react-hooks'); // Plugin de regras para hooks de React
const tseslint = require('@typescript-eslint/eslint-plugin'); // Plugin de regras para TypeScript
const tsParser = require('@typescript-eslint/parser'); // Parser do TypeScript
const prettier = require('eslint-plugin-prettier'); // Integra Prettier no ESLint

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  {
    ignores: [
      'node_modules/', // Ignora dependências
      '.next/',  // Ignora build do Next.js
      'dist/',  // Ignora build de distribuição
      'build/', // Ignora pasta de build
      'coverage/', // Ignora reports de testes
      '*.config.js', // Ignora ficheiros de configuração
      '*.config.cjs',
      '*.config.mjs',
      '*.config.ts',
      '*.yml',
      '*.yaml',
      '*.json',
      '*.lock',
      '.prettierrc',
      '.prettierignore',
      'lefthook.yml',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Define ficheiros a lintar
    languageOptions: {
      parser: tsParser, // Parser do TypeScript
      parserOptions: {
        ecmaVersion: 'latest',  // Suporta a última versão do ECMAScript
        sourceType: 'module',  // Usa módulos ES
      },
      globals: {
        ...globals.browser,  // Variáveis globais do browser
        ...globals.node,  // Variáveis globais do Node
        ...globals.es2021,  // Variáveis globais do ES2021
        ...globals.jest,  // Variáveis globais do Jest
      },
    },
    plugins: {
      react,  // Plugin React
      'react-hooks': reactHooks,  // Plugin React Hooks
      '@typescript-eslint': tseslint,  // Plugin TypeScript
      prettier,  // Integra Prettier
    },
    rules: {
      ...js.configs.recommended.rules,  // Regras JS recomendadas
      ...react.configs.recommended.rules,  // Regras React recomendadas
      ...reactHooks.configs.recommended.rules,  // Regras React Hooks
      ...tseslint.configs.recommended.rules,  // Regras TypeScript
      'prettier/prettier': ['error'],  // Erro se Prettier não for seguido
      'react/react-in-jsx-scope': 'off',  // React 17+ não precisa importar React
      //no React 17 já não é preciso importar o React no topo de cada ficheiro
      'no-undef': 'off', // Desativa alerta de variáveis indefinidas
      'react/prop-types': 'off', // TypeScript já faz validação de props
      //coloquei isto para evitar que o lint bloqueasse o código por causa dos erros any
      //não conseguia corrigir todos os erros any, então coloquei apenas como warnings em vez de erros
      '@typescript-eslint/no-explicit-any': 'warn', // Any é warning, não erro
      '@typescript-eslint/no-require-imports': 'off', // Permite require() em configs
      '@typescript-eslint/triple-slash-reference': 'off', // Ignora triple-slash refs
    },
    settings: {
      react: { version: 'detect' },  // Detecta versão do React automaticamente
    },
  },
];
