
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
    <Toaster
  position="top-right"
  toastOptions={{
    duration: 3000,
  }}
/>
     <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </Router> 
    </>
  )
}

export default App
