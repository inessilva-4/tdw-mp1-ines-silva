/** @type {import('next').NextConfig} */
module.exports = {
  // Configura o Next.js para exportar o site como estático (Next Export)
  output: 'export',
  // Configurações de imagens
  images: {
    // Define loader customizado (não usa o loader interno do Next.js)
    loader: 'custom',
    // Não otimiza automaticamente as imagens
    unoptimized: true,
    // Formatos de imagem que serão suportados
    formats: ['image/avif', 'image/webp'],
  },
};
