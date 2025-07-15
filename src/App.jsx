import NewsList from '../src/components/newsList/NewsList'
import styles from './App.module.css'
import FeatureNews from './components/featureNews/FeatureNews'

function App() {

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Daily Bulletin</h1>
        <p className={styles.subheading}>Your one-stop digest of today's top stories</p>
      </div>

      <FeatureNews />
      <NewsList />
    </div>
  )
}

export default App
