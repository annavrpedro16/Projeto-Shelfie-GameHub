import { useState } from "react";
import { games, statuses } from "../data/games";
import { EmptySlot } from "../components/EmptySlot";
import { GameCard } from "../components/GameCard";
import { Shelf } from "../components/Shelf";
import styles from "./Library.module.css";

// Recebe uma lista de ids e devolve os jogos completos
const findGames = (ids) =>
  ids.map((id) => games.find((game) => game.id === id));

export function Library({
  library,
  wishlist,
  onMoveToStatus,
  onAddToLibrary,
  onOpenGame,
  onNavigate,
}) {
  const [dropTarget, setDropTarget] = useState(null);

  // Arrastar e soltar
  function handleDragStart(event, gameId) {
    event.dataTransfer.setData("text/plain", gameId);
  }

  function handleDragOver(event, statusId) {
    event.preventDefault();
    setDropTarget(statusId);
  }

  function handleDragLeave(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropTarget(null);
    }
  }

  function handleDrop(event, statusId) {
    event.preventDefault();
    const gameId = Number(event.dataTransfer.getData("text/plain"));
    onMoveToStatus(gameId, statusId);
    setDropTarget(null);
  }

  return (
    <div>
      <header className={styles.header}>
        <h1>Minha biblioteca</h1>
        <p>
          {library.length} {library.length === 1 ? "jogo" : "jogos"} na sua
          estante
        </p>
      </header>

      {library.length > 0 && (
        <p className={styles.tip}>
          Dica: para mudar o status, escolha na lista da etiqueta ou arraste o
          jogo para outra prateleira.
        </p>
      )}

      {/* Uma prateleira para cada status: Jogando agora, Quero jogar, Zerados */}
      {statuses.map((status) => {
        const ids = library
          .filter((item) => item.status === status.id)
          .map((item) => item.id);
        return (
          <div
            key={status.id}
            className={
              dropTarget === status.id ? styles.dropActive : styles.dropZone
            }
            onDragOver={(event) => handleDragOver(event, status.id)}
            onDragLeave={handleDragLeave}
            onDrop={(event) => handleDrop(event, status.id)}
          >
            <Shelf
              title={
                <>
                  {status.title}
                  <small>{ids.length}</small>
                </>
              }
            >
              {findGames(ids).map((game) => (
                <div
                  key={game.id}
                  className={styles.draggable}
                  draggable
                  onDragStart={(event) => handleDragStart(event, game.id)}
                  onDragEnd={() => setDropTarget(null)}
                >
                  <GameCard game={game} onOpen={onOpenGame}>
                    <select
                      className={styles.statusSelect}
                      value={status.id}
                      onChange={(event) =>
                        onMoveToStatus(game.id, event.target.value)
                      }
                      aria-label={`Status de ${game.name}`}
                    >
                      {statuses.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.title}
                        </option>
                      ))}
                    </select>
                  </GameCard>
                </div>
              ))}
              <EmptySlot>
                <button onClick={() => onNavigate("catalogo")}>
                  <span aria-hidden="true">+</span> Adicionar jogo
                </button>
              </EmptySlot>
            </Shelf>
          </div>
        );
      })}

      <Shelf
        title="Lista de desejos"
        action={
          <button className="link-button" onClick={() => onNavigate("desejos")}>
            Ver lista completa
          </button>
        }
      >
        {findGames(wishlist.slice(0, 2)).map((game) => (
          <GameCard key={game.id} game={game} onOpen={onOpenGame}>
            <button onClick={() => onAddToLibrary(game.id)}>
              + Adicionar à biblioteca
            </button>
          </GameCard>
        ))}
        <EmptySlot wide>
          <h3>Sua lista ainda tem espaço</h3>
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
