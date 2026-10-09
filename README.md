# Construtora Boa Vista: proposta de novo site

Protótipo de novo site para a Construtora Boa Vista (Teresina/PI), com a página inicial e a página do BV Tower.

- React + Vite, JavaScript, CSS puro com variáveis (`src/estilos.css`)
- Tema escuro (padrão) e claro, derivados da paleta do cliente: azul `#042940`, verde `#467326` e o prata da logo
- Sem vídeos: todo o movimento vem de imagens estáticas e CSS

## Rodar

```
npm install
npm run dev
npm run build
```

## Onde mexer

- `src/dados/boavista.js`: todos os dados do cliente (contatos, empreendimentos, textos e números do BV Tower)
- `public/img/`: imagens
- `src/paginas/`: página inicial (`Inicio.jsx`) e BV Tower (`BvTower.jsx`)

## Origem do conteúdo

Textos, números e imagens vêm do site atual da construtora (construtoraboavista.com.br): páginas de projeto, home e notícias. Nenhuma imagem de banco e nenhuma imagem gerada por IA.

Imagens do BV Tower (todas do servidor da própria construtora):

| Arquivo | Origem |
| --- | --- |
| `bvtower-fachada.jpg` | `/wp/wp-content/uploads/2025/03/Design-sem-nome-5.png` (banner da home) |
| `bvtower-lojas.jpg` | `/wp/wp-content/uploads/2026/02/Design-sem-nome-4.png` (imagem de compartilhamento da página do projeto) |
| `bvtower-perspectiva.jpg` | `/wp/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-11.37.35.jpeg` (notícia sobre a obra) |
| `bvtower-obra.jpg` | `/wp/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-11.25.11.jpeg` (notícia sobre a obra) |

## Pendências

- Renders em alta resolução do BV Tower (os do site têm no máximo 1280 px de largura), lobby, sala modelo e vista aérea
- Plantas das salas e implantação das lojas
- Previsão de entrega e número de pavimentos (não constam no site)
