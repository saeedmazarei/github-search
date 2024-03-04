import loadingImage from '/assets/images/loading.svg'
import styles from './Loading.module.scss'

function Loading() {
    return <div className={styles.loadingContainer}><img src={loadingImage} alt="Loading" /></div>
}

export default Loading
