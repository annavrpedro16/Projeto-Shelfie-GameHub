import { useState } from "react";
import { games, genres } from "../data/games";
import { GameCard } from "../components/GameCard";
import { SearchBar } from "../components/SearchBar";
import { Shelf } from "../components/Shelf";
import styles from "./Catalog.module.css";

const PAGE_SIZE = 10; // quantos jogos aparecem por vez

export function Catalog({
  search,
  onSearch,
  genre,
  onGenre,
  libraryIds,
  onAddToLibrary,
  onOpenGame,
}) {
  const [sort, setSort] = useState("nota");
  const [visible, setVisible] = useState(PAGE_SIZE);

  function compare(a, b) {
    if (sort === "nome") return a.name.localeCompare(b.name); // ordem alfabética
    if (sort === "ano") return b.year - a.year; // mais novos primeiro
    return b.rating - a.rating; // maior nota primeiro
  }

  // Listagem dinâmica
  const term = search.trim().toLowerCase();
  const found = games
    .filter((game) => genre === "Todos" || game.genres.includes(genre)) // filtro por gênero
    .filter((game) => game.name.toLowerCase().includes(term)) // busca pelo nome
    .sort(compare); // pode ordenar direto
  const shown = found.slice(0, visible);

  function chooseGenre(newGenre) {
    onGenre(newGenre);
    setVisible(PAGE_SIZE);
  }

  return (
    <div>
      <header className={styles.header}>
        <h1>Catálogo</h1>
        <p>{games.length} jogos para descobrir</p>
      </header>

      <div className={styles.controls}>
        <SearchBar value={search} onChange={onSearch} onSubmit={() => {}} />
        <select
          className={styles.sort}
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          aria-label="Ordenar jogos"
        >
          <option value="nota">Ordenar por nota</option>
          <option value="nome">Ordenar por nome</option>
          <option value="ano">Mais novos primeiro</option>
        </select>
      </div>

      {/* Abas de gênero */}
      <div className={styles.tabs} role="group" aria-label="Filtrar por gênero">
        {["Todos", ...genres].map((item) => (
          <button
            key={item}
            className={item === genre ? styles.tabActive : styles.tab}
            aria-pressed={item === genre}
            onClick={() => chooseGenre(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <p className={styles.count}>
        Mostrando {shown.length} de {found.length} jogos
      </p>

      {found.length === 0 ? (
        <p className={styles.empty}>
          Nenhum jogo encontrado{term && <> para “{search}”</>}. Tente outro
          nome ou escolha “Todos”.
        </p>
      ) : (
        <Shelf columns={5}>
          {shown.map((game) => (
            <GameCard key={game.id} game={game} onOpen={onOpenGame}>
              {libraryIds.includes(game.id) ? (
                <button onClick={() => onOpenGame(game.id)}>
                  Já está na biblioteca
                </button>
              ) : (
                <button onClick={() => onAddToLibrary(game.id)}>
                  + Adicionar à biblioteca
                </button>
              )}
            </GameCard>
          ))}
        </Shelf>
      )}

      {/* Só aparece se ainda houver jogos escondidos */}
      {visible < found.length && (
        <div className={styles.more}>
          <button
            className="btn btn-outline"
            onClick={() => setVisible((state) => state + PAGE_SIZE)}
          >
            Carregar mais jogos
          </button>
        </div>
      )}
    </div>
  );
}
