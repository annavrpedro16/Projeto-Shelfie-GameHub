import { useState } from 'react'
import { games, genres } from '../data/games'
import { Cover } from '../components/Cover'
import { GameCard } from '../components/GameCard'
import { Shelf } from '../components/Shelf'
import { formatRating, stars } from '../utils'
import styles from './Home.module.css'

// Listas calculadas uma vez, a partir dos dados.
const featured = games.slice(0, 4) // os 4 primeiros viram destaques
const releases = [...games].sort((a, b) => b.year - a.year).slice(0, 6) // mais novos primeiro
const popular = [...games].sort((a, b) => b.rating - a.rating).slice(0, 5) // maiores notas

export function Home({ libraryIds, onAddToLibrary, onOpenGame, onOpenCatalog }) {
  const [index, setIndex] = useState(0)
  const game = featured[index]
  const inLibrary = libraryIds.includes(game.id)

  function showNext() {
    // O % faz voltar ao primeiro depois do último: 3 → 0
    setIndex(state => (state + 1) % featured.length)
  }

  function showPrevious() {
    setIndex(state => (state - 1 + featured.length) % featured.length)
  }

  return (
    <div>
      {/* Destaque da semana */}
      <section className={styles.hero}>
        <Cover name={game.name} image={game.image} className={styles.heroCover} />

        <div className={styles.heroInfo}>
          <p className={styles.eyebrow}>Em destaque esta semana</p>
          <h1>{game.name}</h1>
          <p className={styles.description}>{game.description}</p>

          <ul className={styles.tags}>
            {game.genres.map(genre => <li key={genre}>{genre}</li>)}
          </ul>

          <p className={styles.meta}>
            <span className={styles.stars} aria-hidden="true">{stars(game.rating)}</span>
            <strong>{formatRating(game.rating)} de 5</strong>
            <span>{game.platforms.join(', ')}</span>
          </p>

          <div className={styles.actions}>
            <button className="btn btn-primary" onClick={() => onAddToLibrary(game.id)} disabled={inLibrary}>
              {inLibrary ? 'Já está na biblioteca' : 'Adicionar à biblioteca'}
            </button>
            <button className="btn btn-outline" onClick={() => onOpenGame(game.id)}>
              Ver detalhes
            </button>
          </div>

          <div className={styles.carousel}>
            <span>{index + 1} de {featured.length} destaques</span>
            <button onClick={showPrevious} aria-label="Destaque anterior">‹</button>
            <button onClick={showNext} aria-label="Próximo destaque">›</button>
          </div>
        </div>
      </section>

      {/* Lançamentos */}
      <Shelf
        title="Lançamentos"
        action={<button className="link-button" onClick={() => onOpenCatalog()}>Ver todos os lançamentos</button>}
      >
        {releases.map(game => <GameCard key={game.id} game={game} onOpen={onOpenGame} />)}
      </Shelf>

      {/* Mais populares */}
      <Shelf title="Mais populares agora" columns={5}>
        {popular.map((game, position) => (
          <GameCard key={game.id} game={game} rank={position + 1} onOpen={onOpenGame} />
        ))}
      </Shelf>

      {/* Categorias */}
      <section className={styles.categories}>
        <h2>Navegue por categoria</h2>
        <div className={styles.books}>
          {genres.map((genre, i) => {
            const total = games.filter(game => game.genres.includes(genre)).length
            return (
              <button
                key={genre}
                className={i % 2 === 0 ? styles.book : styles.bookGreen}
                style={{ height: `${11 + (i % 3)}rem` }} // alturas diferentes
                onClick={() => onOpenCatalog(genre)} // abre o catálogo já filtrado
              >
                <small>{total} {total === 1 ? 'jogo' : 'jogos'}</small>
                <strong>{genre}</strong>
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}
