
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
function App() {

  return (
    <>
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
