import Navbar from './components/Navbar/Navbar'
import ListTrends from './components/pages/Trends/ListTrends'
import React, {useState, useEffect} from 'react'
import Informations from './components/pages/Informations/Informations'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactLoading from 'react-loading'
import './App.css'

function App() {
  var [fetchedData, updateFetchedData] = useState([]);
  var [woeid, setWoeid] = useState('1');
  const [loading, setLoading] = useState(false);
  var api = 'https://esportes-and-trends.herokuapp.com/trends/' + woeid; 

  useEffect(()=>{ //espera o carregamento e carrega os dados da api
    setTimeout(() => {
      (async function(){
        var data = await fetch(api).then(response=>response.json())
        updateFetchedData(data.trends);    
        setLoading(true);
    })()
    }, 1250);
  },[api])

  if (loading === false) {
    return <ReactLoading className="loader mx-auto my-auto" type={"spin"} color={"#1da1f2"} height={120} width={120} />                
  } else {
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
}

export default App;