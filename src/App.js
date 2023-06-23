import MoviesGrid from './components/MoviesGrid';
import styles from './css/App.module.css'

function App() {
  return (
    <div>
      <header className={styles.appHeader}>
        <h1>Titulo</h1>
        <MoviesGrid/>
      </header>
    </div>
  );
}

export default App;
