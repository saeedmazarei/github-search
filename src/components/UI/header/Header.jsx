import { FaGithub } from 'react-icons/fa'
import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.header}>
            <h2>
                <FaGithub /> GitHub Search
            </h2>
            <div className={styles.navBar}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
