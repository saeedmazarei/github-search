import { lazy } from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import PathConstants from './routes/pathConstants'
const Home = lazy(() => import('./pages/home/Index'))
const Detail = lazy(() => import('./pages/detail/Index'))

function App() {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: PathConstants.HOME,
                    element: <Home />,
                },
                {
                    path: PathConstants.REPODETAILS,
                    element: <Detail />,
                },
            ],
        },
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
