import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { getRepo, getUserDetail } from '../../services/apis'
import Loading from '../../components/shared/loading/Loading'
import BackButton from './back-button/BackButton'
import styles from './Index.module.scss'
import ProfileAndBio from './profile-bio/ProfileAndBio'
import FollowerFolowing from './follower-following/FollowerFolowing'
import Projects from './projects/Projects'

function Detail() {
    const [userDetailData, setUserDetailData] = useState({})
    const [repoDetails, setRepoDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const { owner } = useParams()

    useEffect(() => {
        const getUserDetailFunc = async () => {
            setLoading(true)
            const res = await getUserDetail(owner)
            const response = await getRepo(owner)
            setRepoDetails(response.data)
            console.log(response.data)
            setUserDetailData(res.data)
            setLoading(false)
        }
        getUserDetailFunc()
    }, [owner])

    return (
        <>
            {loading && <Loading />}
            {!loading && (
                <div className={styles.detail}>
                    <BackButton hireable={userDetailData.hireable} />
                    <ProfileAndBio DetailData={userDetailData} />
                    <FollowerFolowing userDetails={userDetailData} />
                    {repoDetails.map((repo) => (
                        <Projects
                            key={repo.id}
                            projectName={repo.name}
                            projectLink={repo.html_url}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default Detail
