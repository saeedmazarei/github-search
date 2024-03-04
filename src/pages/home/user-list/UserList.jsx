import PropTypes from 'prop-types'
import styles from './UserList.module.scss'

function UserList({ searchResult }) {
    return <div className={styles.userList}>
        {/* {searchResult.map((user) => <UserCard key={user.id} user={user} />)} */}
    </div>
}

UserList.PropTypes = {
    searchResult: PropTypes.array
}

export default UserList
