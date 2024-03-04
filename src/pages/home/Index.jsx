import { useRef, useState } from 'react'

import { getUser } from '../../services/apis'
import Button from '../../components/shared/button/Button'
import Loading from '../../components/shared/loading/Loading'
import UserList from './user-list/UserList'
import styles from './Index.module.scss'

function Home() {
    const [searchResult, setSearchResult] = useState([])
    const searchRef = useRef()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        const res = await getUser(searchRef.current.value)
        setSearchResult(res.data.items)
        setLoading(false)
    }
    return (
        <div className={styles.home}>
            <div className={styles.searchBar}>
                <input type="text" ref={searchRef} placeholder="Search Users..." />
                <Button className={styles.searchButton} onClick={handleSubmit}>
                    Submit
                </Button>
                <Button className={styles.clearButton} onClick={handleSubmit}>
                    Clear
                </Button>
            </div>
            {loading && <Loading />}
            {!loading && <UserList searchResult={searchResult} />}
        </div>
    )
}

export default Home
