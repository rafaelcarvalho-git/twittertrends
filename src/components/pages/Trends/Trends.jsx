import './Trends.css';
import React, {useState, useEffect} from 'react';
import NotFound from '../../NotFound/NotFound';

function Trends({fetchedData,search,setSearch}) {        
    var display;
    if (fetchedData) {
      display = fetchedData.map((informations) => {
        if(informations.name.toLowerCase().startsWith(search.toLowerCase()) === true) {                           
            return (
                <li key={informations.name} className='mx-auto'>
                    <a href={informations.url} target="_blank" className="trend btn my-3 shadow">
                    {informations.name} <span className="badge rounded-pill text-white">{informations.tweet_volume}</span>
                    </a>
                </li>          
              );
        
        }else if (search === '') {
            return (
                <li key={informations.name} className='mx-auto'>
                    <a href={informations.url} target="_blank" className="trend btn my-3 shadow">
                    {informations.name} <span className="badge rounded-pill text-white">{informations.tweet_volume}</span>
                    </a>
                </li>          
              );
        } 
    });
  } else {
    display = NotFound(); //Dados não carregados
  }
  return <>{display}</>;
};

export default Trends;