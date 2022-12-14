import './Trends.css'
import SearchTrends from '../../../components/SearchTrends/SearchTrends'
import Trends from './Trends'
import React, {useState} from 'react'

function ListTrends({fetchedData,search,setSearch,setWoeid}) {
    
    var [search, setSearch] = useState('');
    return (
        <section className="trends">
            <div className="title-section mx-auto my-5 text-center">
                <i className="bi bi-chat-left-text"></i>            
                <h2 className="bg-t-white shadow py-2 px-3">TRENDS MAIS COMENTADAS DO MOMENTO</h2>
            </div>
                <SearchTrends setSearch={setSearch} setWoeid={setWoeid} />       
            <ul className="d-flex flex-wrap">
                <Trends fetchedData={fetchedData} search={search} />                    
            </ul>
        </section>
      );
};

export default ListTrends;