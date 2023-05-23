import './App.css';
import Body from './components/body';
import Footer from './components/footer';
import { BrowserRouter ,  Route, Routes } from 'react-router-dom';
import Register from './components/register/register.jsx';
import Login from './components/login';
import Tables from './components/tables';

import Home from './components/home';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
     <Route path="/dashboard" element={<Body/>} />

     <Route path="/home" element={<Home/>} />
     <Route path="/login" element={<Login/>} />
          {/* Route pour la page de registration */}
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
=======
          {/* Route pour la page de registration */}
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />

      <Route path="/tables" element={<Tables />} />
        </Routes>
      
    </div>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
