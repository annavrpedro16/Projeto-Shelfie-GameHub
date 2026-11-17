import { games } from "../data/games";
import { EmptySlot } from "../components/EmptySlot";
import { GameCard } from "../components/GameCard";
import { Shelf } from "../components/Shelf";
import styles from "./Library.module.css";

export function Wishlist({
  wishlist,
  onAddToLibrary,
  onRemove,
  onOpenGame,
  onNavigate,
}) {
  const wished = wishlist.map((id) => games.find((game) => game.id === id));

  return (
    <div>
      <header className={styles.header}>
        <h1>Lista de desejos</h1>
        <p>
          {wished.length}{" "}
          {wished.length === 1 ? "jogo guardado" : "jogos guardados"} para
          depois
        </p>
      </header>

      <Shelf>
        {wished.map((game) => (
          <GameCard key={game.id} game={game} onOpen={onOpenGame}>
            <button onClick={() => onAddToLibrary(game.id)}>
              + Biblioteca
            </button>
            <button onClick={() => onRemove(game.id)}>Remover</button>
          </GameCard>
        ))}
        <EmptySlot wide>
          <h3>
            {wished.length === 0
              ? "Nenhum jogo por aqui ainda"
              : "Sua lista ainda tem espaço"}
          </h3>
          <p>
            Use “Salvar nos desejos” na página de um jogo para guardar aqui.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => onNavigate("catalogo")}
          >
            Explorar o catálogo
          </button>
        </EmptySlot>
      </Shelf>
    </div>
  );
}
