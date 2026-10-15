
import { Header } from '@/shared/components/layout/Header/Header'
import { Outlet } from 'react-router-dom'

export function LayoutDefull() {
    return (
        <main>    
            <Header />
            <Outlet />
        </main>
    )
}