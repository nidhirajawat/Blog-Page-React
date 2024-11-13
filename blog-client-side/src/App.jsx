
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Banner from './components/Banner'
// import Blog from './pages/Blog'

function App() {
  
  return (
    <>
     <Navbar />
     <Outlet />
     <Footer />
     {/* <Banner /> */}
     {/* <Blog /> */}
    </>
  )
}

export default App

