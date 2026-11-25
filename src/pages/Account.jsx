import { useState } from 'react'
import styles from './Account.module.css'

// Login de mentira: não tem servidor, então só guarda o nome e o e-mail no estado do App
export function Account({ user, onLogin, onLogout }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isEmpty = name.trim() === '' || email === '' || password === ''

  function handleSubmit(event) {
    event.preventDefault()
    onLogin({ name: name.trim(), email })
    setPassword('') // a senha não é guardada em lugar nenhum
  }

  // Já entrou: mostra a conta
  if (user) {
    return (
      <section className={styles.box}>
        <div className={styles.avatar}>{user.name[0].toUpperCase()}</div>
        <h1>Olá, {user.name}!</h1>
        <p className={styles.muted}>{user.email}</p>
        <button className="btn btn-outline" onClick={onLogout}>
          Sair
        </button>
      </section>
    )
  }

  return (
    <section className={styles.box}>
      <h1>Entrar</h1>
      <p className={styles.muted}>Acesse sua conta do Shelfie.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nome
          <input value={name} onChange={event => setName(event.target.value)} required />
        </label>
        <label>
          E-mail
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} required />
        </label>
        <label>
          Senha
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            minLength={4}
            required
          />
        </label>
        <button className="btn btn-primary" type="submit" disabled={isEmpty}>
          Entrar
        </button>
      </form>
    </section>
  )
}
