import styles from './EmptySlot.module.css'

// Espaço vazio tracejado na prateleira.
// wide = ocupa uma fileira inteira (usado na lista de desejos).
export function EmptySlot({ wide = false, children }) {
  return <div className={wide ? styles.wide : styles.slot}>{children}</div>
}
