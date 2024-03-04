import PropTypes from 'prop-types'

import styles from './UserCard.module.scss'
import Card from '../../../../components/shared/card/Card'
import { Link } from 'react-router-dom'
import Button from '../../../../components/shared/button/Button'

function UserCard({ user }) {
    return (
        <Card className={styles.userCard}>
            <img src={user.avatar_url} alt={user.login} />
            <h3>{user.login}</h3>
            <Button className={styles.moreButton}>
                <Link to={user.html_url}>More</Link>
            </Button>
        </Card>
    )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserCard
