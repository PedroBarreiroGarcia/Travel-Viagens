import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Caynon from './Components/Canyon';
import Escocia from './Components/Escocia';
import Muralha from './Components/Muralha';
import Aruba from './Components/Aruba';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Canyon' element={<Caynon/>}/>
          <Route path='/Escocia' element={<Escocia/>}/>
          <Route path='/Muralha' element={<Muralha/>}/>
          <Route path='/Aruba' element={<Aruba/>}/>

        </Routes>
      
        <Footer/>
      </Router>
    </div>
  );
}

export default App
