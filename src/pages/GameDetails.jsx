import { games } from "../data/games";
import { Cover } from "../components/Cover";
import { GameCard } from "../components/GameCard";
import { Shelf } from "../components/Shelf";
import { formatRating, stars } from "../utils";
import styles from "./GameDetails.module.css";

export function GameDetails({
  gameId,
  inLibrary,
  inWishlist,
  onAddToLibrary,
  onToggleWishlist,
  onOpenGame,
  onOpenCatalog,
}) {
  // .find() devolve o primeiro jogo com esse id
  const game = games.find((item) => item.id === gameId);
  const mainGenre = game.genres[0];
  // "Na mesma prateleira": outros jogos do mesmo gênero principal
  const related = games
    .filter((item) => item.id !== game.id && item.genres.includes(mainGenre))
    .slice(0, 6);

  return (
    <div>
      <button
        className={`link-button ${styles.back}`}
        onClick={() => onOpenCatalog()}
      >
        ‹ Voltar ao catálogo
      </button>

      <section className={styles.hero}>
        <div className={styles.shelfCover}>
          <Cover name={game.name} className={styles.cover} />
        </div>

        <div className={styles.info}>
          <h1>{game.name}</h1>
          <p className={styles.sub}>
            {game.developer}, {game.year}
          </p>

          <ul className={styles.tags}>
            {game.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>

          <div className={styles.score}>
            <p className={styles.circle}>
              <strong>{formatRating(game.rating)}</strong>
              <small>de 5</small>
            </p>
            <div>
              <p
                className={styles.stars}
                aria-label={`Nota ${formatRating(game.rating)} de 5`}
              >
                {stars(game.rating)}
              </p>
              <p className={styles.muted}>
                {game.reviews.toLocaleString("pt-BR")} avaliações
              </p>
              <p className={styles.platformLabel}>Plataformas</p>
              <p className={styles.platforms}>{game.platforms.join(", ")}</p>
            </div>
          </div>

          <p className={styles.description}>{game.description}</p>

          <div className={styles.actions}>
            <button
              className="btn btn-primary"
              onClick={() => onAddToLibrary(game.id)}
              disabled={inLibrary}
            >
              {inLibrary ? "Já está na biblioteca" : "Adicionar à biblioteca"}
            </button>
            {!inLibrary && (
              <button
                className="btn btn-outline"
                onClick={() => onToggleWishlist(game.id)}
              >
                {inWishlist ? "Remover dos desejos" : "Salvar nos desejos"}
              </button>
            )}
          </div>
        </div>
      </section>

      <section className={styles.screens}>
        <h2>Capturas de tela</h2>
        <div className={styles.screenRow}>
          {[1, 2, 3].map((number) => (
            <Cover
              key={number}
              name={`Captura de tela ${number}`}
              className={styles.screen}
            />
          ))}
        </div>
      </section>

      <Shelf
        title="Na mesma prateleira"
        action={
          <button
            className="link-button"
            onClick={() => onOpenCatalog(mainGenre)}
          >
            Ver mais deste gênero
          </button>
        }
      >
        {related.map((item) => (
          <GameCard key={item.id} game={item} onOpen={onOpenGame} />
        ))}
      </Shelf>
    </div>
  );
}
