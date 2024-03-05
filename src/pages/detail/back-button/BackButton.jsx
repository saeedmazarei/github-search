import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { FaCheck } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"

import Card from '../../../components/shared/card/Card'
import styles from './BackButton.module.scss'

function BackButton({ hireable }) {
    return <div className={styles.backButtonContainer}>
        <Card className={styles.backButton}>
            <Link to={"/"}>Back To Search</Link>
        </Card>
        <span>hierable: {hireable ? <FaCheck style={{ color: 'green' }} /> : <RxCross2 style={{ color: 'red' }} />}</span>
    </div>
}

BackButton.propTypes = {
    hireable: PropTypes.bool
}

export default BackButton
