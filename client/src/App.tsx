import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/css/app.css';

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/admin/*" element={<Dashboard />}/> 
          <Route path="*" element={<><h1>404 Not Found</h1></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
