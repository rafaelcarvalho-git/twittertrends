import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Trends from './components/pages/Trends/Trends';


import Informations from './components/pages/Informations/Informations';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <main className="container">        
        <Routes>
          <Route exact path='/' element={<Trends />} />       
          <Route path='/informations' element={<Informations />} /> 
        </Routes>               
      </main>
    </Router>
  );
}

export default App;