import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/css/app.css';

import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        
        {/* <Route path='/home' element={<Home />}/>  */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
