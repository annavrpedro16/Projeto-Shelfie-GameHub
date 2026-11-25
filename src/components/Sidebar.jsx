import logo from '../assets/logo.svg'
import styles from './Sidebar.module.css'

// Ícones simples desenhados em SVG (assim não precisamos de biblioteca)
const icons = {
  inicio: <path d="M4 11 12 4l8 7v9h-5v-6H9v6H4z" />,
  catalogo: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
  biblioteca: <path d="M4 4h4v16H4zM10 4h4v16h-4zM15.5 5l3.8-1 3 15.5-3.8 1z" />,
  desejos: <path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z" />,
}

export function Sidebar({ page, onNavigate, libraryCount, wishlistCount, user }) {
  // Lista dos itens do menu: o .map() abaixo cria um botão para cada um
  const items = [
    { id: 'inicio', label: 'Início' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'biblioteca', label: 'Biblioteca', count: libraryCount },
    { id: 'desejos', label: 'Desejos', count: wishlistCount },
  ]

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <strong>Shelfie</strong>
      </div>

      <nav className={styles.nav}>
        {items.map(item => (
          <button
            key={item.id}
            className={page === item.id ? styles.active : styles.item}
            onClick={() => onNavigate(item.id)}
            aria-current={page === item.id ? 'page' : undefined}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">{icons[item.id]}</svg>
            {item.label}
            {/* O número só aparece se for maior que zero */}
            {item.count > 0 && <span className={styles.badge}>{item.count}</span>}
          </button>
        ))}
      </nav>

      {/* Círculo da conta: mostra a inicial do nome depois de entrar */}
      <button
        className={page === 'conta' ? styles.avatarActive : styles.avatar}
        onClick={() => onNavigate('conta')}
        aria-label={user ? `Conta de ${user.name}` : 'Entrar na conta'}
      >
        {user && user.name[0].toUpperCase()}
      </button>
    </aside>
  )
}
