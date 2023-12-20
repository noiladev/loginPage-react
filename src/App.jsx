import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate()
  const location = useLocation().pathname
  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [location])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
        
    </div>
  );
}

export default App;
