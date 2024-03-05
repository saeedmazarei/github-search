import PropTypes from 'prop-types'

import styles from './FollowerFollowing.module.scss'
import Card from '../../../components/shared/card/Card'

function FollowerFolowing({ userDetails }) {
    return (
        <Card className={styles.followerFollowingContainer}>
            <div className={styles.followerFollowing} style={{background: 'var(--primary-color)'}}>
                <p>Followers: {userDetails.followers}</p>
            </div>
            <div className={styles.followerFollowing} style={{background: 'var(--light-color)', color: 'var(--dark-color)'}}>
                <p>Following: {userDetails.following}</p>
            </div>
            <div className={styles.followerFollowing} style={{background: 'var(--success-color)'}}>
                <p>Public Repos: {userDetails.public_repos}</p>
            </div>
            <div className={styles.followerFollowing} style={{background: 'var(--dark-color)'}}>
                <p>Public Gists: {userDetails.public_gists}</p>
            </div>
        </Card>
    )
}

FollowerFolowing.propTypes = {
    userDetails: PropTypes.object
}

export default FollowerFolowing
