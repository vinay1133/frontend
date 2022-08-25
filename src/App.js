//import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ForgotPass from './Components/ForgotPass';
import Accreditation from './Components/Accreditation';
import AboutUs from './Components/AboutUs';
//import Videobg from './Components/Videobg';
import HomePg from './Components/HomePg';
import UploadFileHEI from './Components/UploadFileHEI';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePg/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/ForgotPass' element={<ForgotPass/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/accreditation' element={<Accreditation/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/UploadFileHEI' element={<UploadFileHEI/>} /> 
        </Routes>
      </Router>
  );
}

export default App;//
