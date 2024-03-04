import { Suspense, lazy } from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import PathConstants from './routes/pathConstants'
const Home = lazy(() => import('./pages/home/Index'))
const Detail = lazy(() => import('./pages/detail/Index'))

function App() {
    const router = createBrowserRouter([
        {
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
        <Suspense>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default App
