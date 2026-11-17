// Lista de jogos do site. Por enquanto os dados ficam aqui, fixos.
// A nota (rating) e o número de avaliações (reviews) são fictícios.
export const games = [
  { id: 1, name: 'Hollow Knight', developer: 'Team Cherry', year: 2017, genres: ['Aventura', 'Plataforma'], platforms: ['PC', 'Switch'], rating: 4.8, reviews: 2410,
    description: 'Explore um reino de insetos em ruínas, enfrente chefes difíceis e descubra os segredos de Hallownest.' },
  { id: 2, name: 'Stardew Valley', developer: 'ConcernedApe', year: 2016, genres: ['Simulação', 'RPG'], platforms: ['PC', 'Switch', 'Celular'], rating: 4.9, reviews: 3980,
    description: 'Herde a fazenda do seu avô, plante, crie animais e faça amizade com os moradores da cidade.' },
  { id: 3, name: 'Celeste', developer: 'Maddy Makes Games', year: 2018, genres: ['Plataforma', 'Indie'], platforms: ['PC', 'Switch', 'PlayStation'], rating: 4.7, reviews: 1530,
    description: 'Ajude Madeline a escalar a montanha Celeste em fases de plataforma precisas e uma história sobre ansiedade.' },
  { id: 4, name: 'Hades', developer: 'Supergiant Games', year: 2020, genres: ['Ação', 'RPG'], platforms: ['PC', 'Switch', 'PlayStation'], rating: 4.8, reviews: 2870,
    description: 'Fuja do submundo grego lutando contra deuses e monstros. A cada tentativa você fica mais forte.' },
  { id: 5, name: 'Minecraft', developer: 'Mojang', year: 2011, genres: ['Simulação', 'Aventura'], platforms: ['PC', 'Celular', 'Xbox'], rating: 4.6, reviews: 5120,
    description: 'Construa qualquer coisa num mundo feito de blocos, sozinho ou com amigos.' },
  { id: 6, name: 'Elden Ring', developer: 'FromSoftware', year: 2022, genres: ['RPG', 'Ação'], platforms: ['PC', 'PlayStation', 'Xbox'], rating: 4.7, reviews: 3340,
    description: 'Um mundo aberto enorme e perigoso, cheio de chefes, segredos e liberdade para explorar.' },
  { id: 7, name: 'Portal 2', developer: 'Valve', year: 2011, genres: ['Quebra-cabeça', 'Ação'], platforms: ['PC', 'PlayStation'], rating: 4.9, reviews: 2260,
    description: 'Resolva quebra-cabeças com uma arma que cria portais, sozinho ou em dupla.' },
  { id: 8, name: 'Baldur’s Gate 3', developer: 'Larian Studios', year: 2023, genres: ['RPG', 'Estratégia'], platforms: ['PC', 'PlayStation'], rating: 4.8, reviews: 1890,
    description: 'Monte seu grupo e viva uma aventura de fantasia em que cada escolha muda a história.' },
  { id: 9, name: 'Undertale', developer: 'Toby Fox', year: 2015, genres: ['RPG', 'Indie'], platforms: ['PC', 'Switch'], rating: 4.6, reviews: 1710,
    description: 'Um RPG em que você pode vencer sem machucar ninguém. Seus atos têm consequências.' },
  { id: 10, name: 'Animal Crossing', developer: 'Nintendo', year: 2020, genres: ['Simulação', 'Aventura'], platforms: ['Switch'], rating: 4.5, reviews: 1240,
    description: 'Mude-se para uma ilha deserta e transforme-a no seu lugar ideal, no seu ritmo.' },
  { id: 11, name: 'Tetris Effect', developer: 'Enhance', year: 2018, genres: ['Quebra-cabeça', 'Indie'], platforms: ['PC', 'PlayStation'], rating: 4.4, reviews: 640,
    description: 'O Tetris clássico com música e efeitos visuais que reagem a cada peça.' },
  { id: 12, name: 'Civilization VI', developer: 'Firaxis', year: 2016, genres: ['Estratégia', 'Simulação'], platforms: ['PC', 'Switch'], rating: 4.3, reviews: 980,
    description: 'Construa um império que atravesse a história, da idade da pedra à era da informação.' },
]

// Lista com todos os gêneros, sem repetir
export const genres = []
games.forEach(game => {
  game.genres.forEach(genre => {
    // Só adiciona se o gênero ainda não estiver na lista
    if (!genres.includes(genre)) {
      genres.push(genre)
    }
  })
})

// As três prateleiras da biblioteca
export const statuses = [
  { id: 'jogando', title: 'Jogando agora' },
  { id: 'quero', title: 'Quero jogar' },
  { id: 'zerado', title: 'Zerados' },
]
