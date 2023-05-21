import './App.css';
import NotFound from './components/NotFound/NotFound';
import Login from './components/loginpage/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserRegister from './components/userRegister/UserRegister';
import DoctorRegister from './components/doctorRegister/DoctorRegister';
import AdminProfile from './components/adminProfile/AdminProfile';
import UserProfile from './components/userProfile/UserProfile';
import DoctorProfile from './components/doctorProfile/DoctorProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login/>}></Route>.
        <Route path='reg-user' element={<UserRegister/>} />
        <Route path='reg-doctor' element={<DoctorRegister/>}/>
        <Route path='admin-profile' element={<AdminProfile/>} />
        <Route path='user-profile' element={<UserProfile/>} />
        <Route path='doctor-profile' element={<DoctorProfile/>} ></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
