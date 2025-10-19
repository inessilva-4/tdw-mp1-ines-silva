// Importa a função auxiliar do Next.js para configurar Jest
const nextJest = require('next/jest');

// Cria a função de configuração do Jest, informando o diretório base do projeto (onde está o package.json e next.config.js)
const createJestConfig = nextJest({
  dir: './',  // Diretório raiz do projeto
});

// Configuração customizada do Jest
const customJestConfig = {
  // Arquivos a serem executados após o ambiente de teste ser inicializado
  // Aqui podem ser configuradas coisas como jest-dom, mock de APIs
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // Define o ambiente de teste 'jest-environment-jsdom' simula um browser
  // Necessário para testar componentes React/Next.js
  testEnvironment: 'jest-environment-jsdom',
};

// Exporta a configuração final, combinando a configuração do Next.js com a customizada
module.exports = createJestConfig(customJestConfig);
