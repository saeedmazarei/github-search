import PropTypes from 'prop-types'

import styles from './Image.module.scss'

function Image({ src, alt }) {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.image} src={src} alt={alt} />
        </div>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Image
