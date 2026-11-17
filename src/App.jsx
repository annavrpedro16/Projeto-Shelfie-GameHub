import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { SearchBar } from './components/SearchBar'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { GameDetails } from './pages/GameDetails'
import { Library } from './pages/Library'
import { Wishlist } from './pages/Wishlist'
import styles from './App.module.css'

export function App() {
  // Estados
  const [page, setPage] = useState('inicio')   // página aberta
  const [gameId, setGameId] = useState(null)   // jogo aberto na página do jogo
  const [genre, setGenre] = useState('Todos')  // filtro do catálogo
  const [search, setSearch] = useState('')     // texto da busca
  const [library, setLibrary] = useState([])   
  const [wishlist, setWishlist] = useState([]) 

  // Só os ids da biblioteca, para checar com .includes()
  const libraryIds = library.map(item => item.id)

  // Navegação
  function navigate(newPage) {
    setPage(newPage)
    window.scrollTo(0, 0) // a página nova começa do topo
  }

  function openGame(id) {
    setGameId(id)
    navigate('jogo')
  }

  function openCatalog(newGenre = 'Todos') {
    setGenre(newGenre)
    navigate('catalogo')
  }

  // Biblioteca e desejos
  function addToLibrary(id) {
    setLibrary(state => (state.some(item => item.id === id) ? state : [...state, { id, status: 'quero' }]))
    setWishlist(state => state.filter(wishId => wishId !== id))
  }

  // Coloca o jogo no status escolhido
  function moveToStatus(id, newStatus) {
    setLibrary(state => state.map(item => (item.id === id ? { ...item, status: newStatus } : item)))
  }

  function toggleWishlist(id) {
    setWishlist(state => (state.includes(id) ? state.filter(wishId => wishId !== id) : [...state, id]))
  }

  return (
    <div className={styles.layout}>
      <Sidebar
        page={page === 'jogo' ? 'catalogo' : page} // na página do jogo, "Catálogo" fica marcado
        onNavigate={navigate}
        libraryCount={library.length}
        wishlistCount={wishlist.length}
      />

      <div className={styles.content}>
        {page !== 'catalogo' && <SearchBar value={search} onChange={setSearch} onSubmit={() => openCatalog()} />}

        {/* Só a página escolhida aparece */}
        {page === 'inicio' && (
          <Home libraryIds={libraryIds} onAddToLibrary={addToLibrary} onOpenGame={openGame} onOpenCatalog={openCatalog} />
        )}
        {page === 'catalogo' && (
          <Catalog
            search={search}
            onSearch={setSearch}
            genre={genre}
            onGenre={setGenre}
            libraryIds={libraryIds}
            onAddToLibrary={addToLibrary}
            onOpenGame={openGame}
          />
        )}
        {page === 'jogo' && (
          <GameDetails
            gameId={gameId}
            inLibrary={libraryIds.includes(gameId)}
            inWishlist={wishlist.includes(gameId)}
            onAddToLibrary={addToLibrary}
            onToggleWishlist={toggleWishlist}
            onOpenGame={openGame}
            onOpenCatalog={openCatalog}
          />
        )}
        {page === 'biblioteca' && (
          <Library
            library={library}
            wishlist={wishlist}
            onMoveToStatus={moveToStatus}
            onAddToLibrary={addToLibrary}
            onOpenGame={openGame}
            onNavigate={navigate}
          />
        )}
        {page === 'desejos' && (
          <Wishlist
            wishlist={wishlist}
            onAddToLibrary={addToLibrary}
            onRemove={toggleWishlist}
            onOpenGame={openGame}
            onNavigate={navigate}
          />
        )}

        <footer className={styles.footer}>Shelfie, um GameHub feito para a capacitação CP2eJr 2026.2</footer>
      </div>
    </div>
  )
}
