import { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import Header from './UI/header/Header'



function Layout() {
    return (
        <>
            <Header />
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default Layout
