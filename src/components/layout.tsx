import { Outlet } from 'react-router-dom'
import NavBar from './navigation/navbar'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
        <NavBar/>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 Your App Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout