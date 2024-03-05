import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { getUserDetail } from '../../services/apis'
import Loading from '../../components/shared/loading/Loading'
import BackButton from './back-button/BackButton'
import styles from './Index.module.scss'

function Detail() {
    const [userDetailData, setUserDetailData] = useState({})
    const [loading, setLoading] = useState(false)
    const { owner } = useParams()

    useEffect(() => {
        const getUserDetailFunc = async () => {
            setLoading(true)
            const res = await getUserDetail(owner)
            setUserDetailData(res.data)
            setLoading(false)
        }
        getUserDetailFunc()
    }, [owner])

    return (
        <>
            {loading && <Loading />}
            <div className={styles.detail}>
                <BackButton hireable={userDetailData.hireable} />
            </div>
        </>
    )
}

export default Detail
