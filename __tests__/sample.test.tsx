import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Exemplo de teste com Jest + Testing Library', () => {
  it('verifica se o texto aparece corretamente', () => {
    render(<h1>Olá, TDW!</h1>);
    expect(screen.getByText('Olá, TDW!')).toBeInTheDocument();
  });
});
