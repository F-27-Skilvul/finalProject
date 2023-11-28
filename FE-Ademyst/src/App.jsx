import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Pelajari from './pages/pelajari'
import NotFound from './pages/notFound'
import PreviewBacaan from './pages/previewBacaan'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pelajari' element={<Pelajari />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
