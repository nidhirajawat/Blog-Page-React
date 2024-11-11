
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
//import Banner from './components/Banner'
//import Blog from './pages/Blog'

function App() {
  
  return (
    <>
     <Navbar />
     <Outlet />
     {/* <Banner /> */}
     {/* <Blog /> */}
    </>
  )
}

export default App
