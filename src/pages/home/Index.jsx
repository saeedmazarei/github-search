import Button from '../../components/shared/button/Button'
import styles from './Index.module.scss'

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search Users..." />
                <Button className={styles.searchButton}>Submit</Button>
            </div>
        </div>
    )
}

export default Home
