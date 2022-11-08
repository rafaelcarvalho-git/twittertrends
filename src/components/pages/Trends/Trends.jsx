import './Trends.css';
import React, {useState, useEffect} from 'react'

function Trends({fetchedData,search}) {
       
 

    var display;
    
    var pesquisa = search;
    console.log(pesquisa);
    if (fetchedData) {
      display = fetchedData.map((informations) => {
        //if (informations.name == pesquisa) {}

    for(var i=0; i<fetchedData.length; i++) {
        if(fetchedData[i].name === pesquisa) {
            console.log(fetchedData[i].name);
            if(informations.name === pesquisa) {

           
            return (
                <li key={informations.name} className='mx-3'>
                    <a href={informations.url} target="_blank" className="trend btn my-3 shadow">
                    {informations.name} <span className="badge rounded-pill text-white">{informations.tweet_volume}</span>
                    </a>
                </li>          
              );
            }
        }else if (pesquisa === '') {
            return (
                <li key={informations.name} className='mx-3'>
                    <a href={informations.url} target="_blank" className="trend btn my-3 shadow">
                    {informations.name} <span className="badge rounded-pill text-white">{informations.tweet_volume}</span>
                    </a>
                </li>          
              );
        }
    }

    });
  } else {
    display = 'nao';
  }
  return <>{display}</>;
};

export default Trends;