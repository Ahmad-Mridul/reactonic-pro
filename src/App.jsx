import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Suspense } from 'react'

function App() {

  return (
    <>
      <NavBar />
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
