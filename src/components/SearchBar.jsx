import styles from './SearchBar.module.css'

// Campo de busca controlado: quem guarda o texto é o App (value + onChange)
export function SearchBar({ value, onChange, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault() // não recarrega a página
    onSubmit()
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit} role="search">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </svg>
      <input
        type="search"
        placeholder="Busque um jogo pelo nome"
        aria-label="Buscar jogo"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </form>
  )
}
