import PropTypes from 'prop-types'

import styles from './Image.module.scss'

function Image({ src, alt, className }) {
    return (
        <div className={`${styles.imageContainer} ${className}`}>
            <img className={styles.image} src={src} alt={alt} />
        </div>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Image
