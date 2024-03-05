import PropTypes from 'prop-types'

import Button from '../../../components/shared/button/Button'
import Image from '../../../components/shared/image/Image'
import styles from './ProfileAndBio.module.scss'
import Card from '../../../components/shared/card/Card'
import { Link } from 'react-router-dom'

function ProfileAndBio({ DetailData }) {
    return (
        <Card className={styles.profileAndBio}>
            <div className={styles.profile}>
                <Image src={DetailData.avatar_url} alt={DetailData.id} className={styles.image} />
                <h3>{DetailData.login}</h3>
            </div>
            <div className={styles.bio}>
                {DetailData.bio && <p>Bio: {DetailData.bio}</p>}
                <Button className={styles.githubPage}>
                    <Link to={DetailData.html_url}>Visit Github Page</Link>
                </Button>
                <p>Login: {DetailData.login}</p>
                <p>Company: {DetailData.company}</p>
                <p>Website: {DetailData.blog}</p>
            </div>
        </Card>
    )
}

ProfileAndBio.propTypes = {
    DetailData: PropTypes.object,
}

export default ProfileAndBio
