import Navbar from './components/Navbar/Navbar';
import ListTrends from './components/pages/Trends/ListTrends';
import React, {useState, useEffect} from 'react'
import Informations from './components/pages/Informations/Informations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  var [fetchedData, updateFetchedData] = useState([]);
  var [woeid, setWoeid] = useState('1')
  var api = 'https://esportes-and-trends.herokuapp.com/trends/' + woeid; 

  useEffect(()=>{ //espera o carregamento e carrega os dados da api
    (async function(){
        var data = await fetch(api).then(response=>response.json())
        updateFetchedData(data.trends);        
    })()
  },[api])

  return (
    <Router className="App">
      <Navbar />
      <main className="container">        
        <Routes>
          <Route exact path='/' element={<ListTrends fetchedData={fetchedData} setWoeid={setWoeid} />} />       
          <Route path='/informations' element={<Informations />} /> 
        </Routes>               
      </main>
    </Router>
  );
}

export default App;