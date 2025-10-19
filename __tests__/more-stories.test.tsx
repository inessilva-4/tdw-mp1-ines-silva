import { render, screen } from '@testing-library/react';
// Importa funções para renderizar componentes React e consultar elementos
import MoreStories from '../app/more-stories';
// Importa o componente que vou testar

describe('MoreStories component', () => {
  // Grupo de testes para o componente MoreStories
  it('renderiza o título e os posts corretamente', () => {
    // Caso de teste específico
    const posts = [
      {
        title: 'Post Principal',
        slug: 'post-principal',
        coverImage: { url: 'https://via.placeholder.com/150' },
        date: '2024-10-01',
        author: {
          name: 'Autor 1',
          picture: { url: 'https://via.placeholder.com/50' },
        },
        excerpt: 'Resumo do post principal.',
      },
      {
        title: 'Segundo Post',
        slug: 'segundo-post',
        coverImage: { url: 'https://via.placeholder.com/150' },
        date: '2024-10-02',
        author: {
          name: 'Autor 2',
          picture: { url: 'https://via.placeholder.com/50' },
        },
        excerpt: 'Resumo do segundo post.',
      },
    ];
    // Define props de exemplo que simulam posts reais

    // Garante que o componente recebe o props correto
    // Renderiza o componente com os posts
    render(<MoreStories morePosts={posts} />);

    // Verifica se o título "Mais Artigos" aparece
    expect(screen.getByText(/more stories/i)).toBeInTheDocument();

    // Verifica se o segundo post é renderizado corretamente
    expect(
      screen.getAllByRole('link', { name: /segundo post/i }).length,
    ).toBeGreaterThan(0);
  });
});
