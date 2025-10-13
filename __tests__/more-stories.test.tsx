import { render, screen } from '@testing-library/react';
import MoreStories from '../app/more-stories';

describe('MoreStories component', () => {
  it('renderiza o título e os posts corretamente', () => {
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

    // Garante que o componente recebe o props correto
    render(<MoreStories morePosts={posts} />);

    // Verifica se o título "Mais Artigos" aparece
    expect(screen.getByText(/more stories/i)).toBeInTheDocument();

    // Verifica se o segundo post aparece
    expect(
      screen.getAllByRole('link', { name: /segundo post/i }).length,
    ).toBeGreaterThan(0);
  });
});
