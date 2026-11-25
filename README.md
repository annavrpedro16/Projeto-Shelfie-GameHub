# Shelfie

Um Game Hub feito em React para o projeto final da capacitação CP2eJr 2026.2: uma plataforma para descobrir jogos e organizá-los numa estante.

## Páginas

- **Início**: jogo em destaque (com setas para trocar), lançamentos, mais populares e categorias.
- **Catálogo**: cards com capa, 2 gêneros e nota; busca pelo nome, filtro por gênero, ordenação e "Carregar mais".
- **Página do jogo**: capa, nome, descrição, gêneros, plataformas, avaliação, galeria com 3 imagens e o botão "Adicionar à biblioteca".
- **Biblioteca**: os jogos separados em prateleiras (Jogando agora, Quero jogar, Zerados). Para mudar o status, escolha direto na lista da etiqueta do jogo ou arraste o jogo para outra prateleira.
- **Lista de desejos**: jogos salvos para depois.
- **Conta**: login simples pelo círculo do menu (nome, e-mail e senha). É só visual: não há servidor, e nada fica salvo depois de recarregar a página.

Os dados são de jogos existentes, guardados em `src/data/games.js`. As notas e o número de avaliações são fictícios. As capas e as imagens da galeria (3 por jogo) são carregadas da loja Steam e da Wikipédia (por isso precisa de internet para vê-las; sem internet aparece o espaço reservado com o nome do jogo).

## Como rodar

Precisa do [Node.js](https://nodejs.org/pt-br/download/) instalado. Na pasta do projeto:

```bash
npm install
npm run dev
```

Depois abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Organização do código

```
src/
├── data/games.js     → lista de jogos, gêneros e status da biblioteca
├── utils.js          → formatar a nota (4,5) e as estrelas (★★★★☆)
├── App.jsx           → guarda os estados e escolhe qual página mostrar
├── components/       → peças reutilizáveis (Sidebar, SearchBar, GameCard, Shelf, Cover, EmptySlot)
└── pages/            → uma pasta por página (Home, Catalog, GameDetails, Library, Wishlist)
```

As cores, fontes e telas seguem o design feito antes do código (Bricolage Grotesque nos títulos, Atkinson Hyperlegible nos textos).
