import { render, screen } from '@testing-library/react';
// Funções para renderizar componentes e consultar elementos
import '@testing-library/jest-dom';
// Extensões de matchers do Jest para DOM (ex.: toBeInTheDocument)

describe('Exemplo de teste com Jest + Testing Library', () => {
  //Grupo de testes para exemplo simples
  it('verifica se o texto aparece corretamente', () => {
    // Caso de teste específico
    render(<h1>Olá, TDW!</h1>);
    // Renderiza um elemento simples
    expect(screen.getByText('Olá, TDW!')).toBeInTheDocument();
    // Verifica se o texto está presente no DOM
  });
});
