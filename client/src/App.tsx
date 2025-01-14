import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/register' element={<Signup/>}/>
        
        <Route path='/home' element={<Home />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
