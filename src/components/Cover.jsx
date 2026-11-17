import styles from './Cover.module.css'

// Capa do jogo. Ainda não temos imagens, então mostra o espaço reservado com um "X" e o nome.
export function Cover({ name, className = '' }) {
  return (
    <div className={`${styles.cover} ${className}`} role="img" aria-label={`Capa de ${name}`}>
      {/* O "X": duas linhas, uma de cada canto até o canto oposto */}
      <svg className={styles.x} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
      </svg>
      <span>{name}</span>
    </div>
  )
}
