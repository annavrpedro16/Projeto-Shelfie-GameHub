import { Cover } from './Cover'
import { formatRating } from '../utils'
import styles from './GameCard.module.css'

// Um jogo na prateleira: capa em cima, etiqueta embaixo.
// rank (opcional): número grande do ranking. children (opcional): a ação da etiqueta, ex: "+ Adicionar à biblioteca".
export function GameCard({ game, rank, onOpen, children }) {
  return (
    // Com ranking, o card usa capas menores para sobrar espaço para o número
    <article className={rank ? styles.cardRanked : styles.card}>
      {/* Clicar na capa abre a página do jogo */}
      <button className={styles.top} onClick={() => onOpen(game.id)} aria-label={`Ver detalhes de ${game.name}`}>
        {rank && <span className={styles.rank} aria-hidden="true">{rank}</span>}
        <Cover name={game.name} className={styles.cover} />
      </button>

      <div className={rank ? styles.labelRanked : styles.label}>
        <h3>{game.name}</h3>
        <p className={styles.genres}>{game.genres.join(', ')}</p>
        <p className={styles.rating}>
          <span aria-hidden="true">★</span> {formatRating(game.rating)}
        </p>
        {children && <div className={styles.action}>{children}</div>}
      </div>
    </article>
  )
}
