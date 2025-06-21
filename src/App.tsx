import styles from 'styles/App.module.css'
import Column from 'components/Column'

// function addCard(): void {
//   console.log('Cartão adicionado!')
// }

// function toggleOptions(): void {
//   console.log('Ver opções...')
// }

export default function App() {
  return (
    <main className={styles.main}>
      <Column title='A fazer'>
        <div>Hällo mein froinds!</div>
      </Column>
      <Column title='Em andamento'>
        <div>Buenas noches!</div>
      </Column>
      <Column title='Concluído'>
        <div>Salve!</div>
      </Column>
    </main>
  )
}