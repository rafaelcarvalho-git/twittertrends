import './Trends.css';
import SearchTrends from '../../../components/SearchTrends/SearchTrends';
import Trends from './Trends';
import React, {useState, useEffect} from 'react'

function ListTrends({fetchedData,setSearch,setWoeid}) {
    
    var [search, setSearch] = useState('');
    return (
        <section className="trends">
            <div className="title-section mx-auto text-center my-5 rounded border border-dark">
                <i class="bi bi-chat-left-text"></i>            
                <h2 className="">TRENDS MAIS COMENTADAS DO MOMENTO</h2>
            </div>
                <SearchTrends setSearch={setSearch} setWoeid={setWoeid} />       
            <ul class="d-flex flex-wrap">
                <Trends fetchedData={fetchedData} search={search} />                    
            </ul>
        </section>
      );
};

export default ListTrends;