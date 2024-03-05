import PropTypes from 'prop-types'

import styles from './Projects.module.scss'
import Card from '../../../components/shared/card/Card'

function Projects({ projectName, projectLink }) {
    return (
        <Card className={styles.projects}>
            <a href={projectLink} target="_blank" rel="noreferrer">
                {projectName}
            </a>
        </Card>
    )
}

Projects.propTypes = {
    projectName: PropTypes.string,
    projectLink: PropTypes.string,
}

export default Projects
