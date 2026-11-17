import styles from './Shelf.module.css'

// Uma seção com título e uma fileira de jogos.
// title e action são opcionais; columns pode ser 6 (padrão) ou 5 jogos por fileira.
export function Shelf({ title, action, columns = 6, children }) {
  return (
    <section className={styles.shelf}>
      {title && (
        <header className={styles.header}>
          <h2>{title}</h2>
          {action}
        </header>
      )}
      {/* children = tudo que for escrito entre <Shelf> e </Shelf> */}
      <div className={columns === 5 ? styles.rowFive : styles.row}>{children}</div>
    </section>
  )
}
