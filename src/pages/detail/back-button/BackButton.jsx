import { Link } from 'react-router-dom'
import Card from '../../../components/shared/card/Card'
import styles from './BackButton.module.scss'

function BackButton() {
    return <div className={styles.backButtonContainer}>
        <Card className={styles.backButton}>
            <Link to={"/"}>Back To Search</Link>
        </Card>
        <span>hierable: {}</span>
    </div>
}

export default BackButton
