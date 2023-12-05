import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Pelajari from './pages/pelajari'
import NotFound from './pages/notFound'
import PreviewBacaan from './pages/previewBacaan'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from './pages/dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/daftar' element={<Register />} />
        <Route path='/pelajari' element={<Pelajari />} />
        <Route path='/pelajari/:title' element={<PreviewBacaan />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
