// Lista de jogos do site. Por enquanto os dados ficam aqui, fixos.
// A nota (rating) e o número de avaliações (reviews) são fictícios.
// Capas verticais da loja Steam (o número é o id do jogo lá)
const steam = id => `https://cdn.akamai.steamstatic.com/steam/apps/${id}/library_600x900.jpg`
// Galeria: 3 imagens de divulgação da Steam (arte do topo da loja, banner e vitrine)
const steamGallery = id => ['library_hero.jpg', 'header.jpg', 'capsule_616x353.jpg'].map(file => `https://cdn.akamai.steamstatic.com/steam/apps/${id}/${file}`)

export const games = [
  { id: 1, name: 'Hollow Knight', developer: 'Team Cherry', year: 2017, genres: ['Aventura', 'Plataforma'], platforms: ['PC', 'Switch'], rating: 4.8, reviews: 2410, image: steam(367520),
    gallery: steamGallery(367520),
    description: 'Explore um reino de insetos em ruínas, enfrente chefes difíceis e descubra os segredos de Hallownest.' },
  { id: 2, name: 'Stardew Valley', developer: 'ConcernedApe', year: 2016, genres: ['Simulação', 'RPG'], platforms: ['PC', 'Switch', 'Celular'], rating: 4.9, reviews: 3980, image: steam(413150),
    gallery: steamGallery(413150),
    description: 'Herde a fazenda do seu avô, plante, crie animais e faça amizade com os moradores da cidade.' },
  { id: 3, name: 'Celeste', developer: 'Maddy Makes Games', year: 2018, genres: ['Plataforma', 'Indie'], platforms: ['PC', 'Switch', 'PlayStation'], rating: 4.7, reviews: 1530, image: steam(504230),
    gallery: steamGallery(504230),
    description: 'Ajude Madeline a escalar a montanha Celeste em fases de plataforma precisas e uma história sobre ansiedade.' },
  { id: 4, name: 'Hades', developer: 'Supergiant Games', year: 2020, genres: ['Ação', 'RPG'], platforms: ['PC', 'Switch', 'PlayStation'], rating: 4.8, reviews: 2870, image: steam(1145360),
    gallery: steamGallery(1145360),
    description: 'Fuja do submundo grego lutando contra deuses e monstros. A cada tentativa você fica mais forte.' },
  { id: 5, name: 'Minecraft', developer: 'Mojang', year: 2011, genres: ['Simulação', 'Aventura'], platforms: ['PC', 'Celular', 'Xbox'], rating: 4.6, reviews: 5120, image: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Minecraft_-_Block_breaking_%28Full_frame%29.png/960px-Minecraft_-_Block_breaking_%28Full_frame%29.png',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Minecraft_Beta_1.8.1_Gameplay_Screenshot.png/960px-Minecraft_Beta_1.8.1_Gameplay_Screenshot.png',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Minecraft_Beta_1.8.1_%E2%80%93_Crafting_a_Wooden_Sword.png/960px-Minecraft_Beta_1.8.1_%E2%80%93_Crafting_a_Wooden_Sword.png',
    ],
    description: 'Construa qualquer coisa num mundo feito de blocos, sozinho ou com amigos.' },
  { id: 6, name: 'Elden Ring', developer: 'FromSoftware', year: 2022, genres: ['RPG', 'Ação'], platforms: ['PC', 'PlayStation', 'Xbox'], rating: 4.7, reviews: 3340, image: steam(1245620),
    gallery: steamGallery(1245620),
    description: 'Um mundo aberto enorme e perigoso, cheio de chefes, segredos e liberdade para explorar.' },
  { id: 7, name: 'Portal 2', developer: 'Valve', year: 2011, genres: ['Quebra-cabeça', 'Ação'], platforms: ['PC', 'PlayStation'], rating: 4.9, reviews: 2260, image: steam(620),
    gallery: steamGallery(620),
    description: 'Resolva quebra-cabeças com uma arma que cria portais, sozinho ou em dupla.' },
  { id: 8, name: 'Baldur’s Gate 3', developer: 'Larian Studios', year: 2023, genres: ['RPG', 'Estratégia'], platforms: ['PC', 'PlayStation'], rating: 4.8, reviews: 1890, image: steam(1086940),
    gallery: steamGallery(1086940),
    description: 'Monte seu grupo e viva uma aventura de fantasia em que cada escolha muda a história.' },
  { id: 9, name: 'Undertale', developer: 'Toby Fox', year: 2015, genres: ['RPG', 'Indie'], platforms: ['PC', 'Switch'], rating: 4.6, reviews: 1710, image: steam(391540),
    gallery: steamGallery(391540),
    description: 'Um RPG em que você pode vencer sem machucar ninguém. Seus atos têm consequências.' },
  { id: 10, name: 'Animal Crossing', developer: 'Nintendo', year: 2020, genres: ['Simulação', 'Aventura'], platforms: ['Switch'], rating: 4.5, reviews: 1240, image: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/en/6/6c/Animal_Crossing_New_Horizons_Gameplay.jpg',
      'https://upload.wikimedia.org/wikipedia/en/5/5d/Retro_Electric_Fan_Concept_Art.jpeg',
      'https://thumb.wikimedia.org/wikipedia/it/thumb/1/17/Animal_Crossing_New_Horizons_su_Nintendo_Switch.png/960px-Animal_Crossing_New_Horizons_su_Nintendo_Switch.png',
    ],
    description: 'Mude-se para uma ilha deserta e transforme-a no seu lugar ideal, no seu ritmo.' },
  { id: 11, name: 'Tetris Effect', developer: 'Enhance', year: 2018, genres: ['Quebra-cabeça', 'Indie'], platforms: ['PC', 'PlayStation'], rating: 4.4, reviews: 640, image: steam(1003590),
    gallery: steamGallery(1003590),
    description: 'O Tetris clássico com música e efeitos visuais que reagem a cada peça.' },
  { id: 12, name: 'Civilization VI', developer: 'Firaxis', year: 2016, genres: ['Estratégia', 'Simulação'], platforms: ['PC', 'Switch'], rating: 4.3, reviews: 980, image: steam(289070),
    gallery: steamGallery(289070),
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
