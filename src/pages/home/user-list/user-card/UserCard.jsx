import PropTypes from 'prop-types'

import Card from '../../../../components/shared/card/Card'
import { Link } from 'react-router-dom'
import Button from '../../../../components/shared/button/Button'
import Image from '../../../../components/shared/image/Image'
import styles from './UserCard.module.scss'

function UserCard({ user }) {
    return (
        <Card className={styles.userCard}>
            <Image src={user.avatar_url} alt={user.login} />
            <h3>{user.login}</h3>
            <Button className={styles.moreButton}>
                <Link to={`/details/${user.login}`}>More</Link>
            </Button>
        </Card>
    )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserCard
