import './SearchCountry.css'

function SearchCountry({setWoeid}) {
    return (    
        <div className="search-country mx-auto mb-3">            
            <select className="form-control mx-auto" onChange={e => setWoeid(e.target.value)}>
                <option value='1'>Mundo</option>
                <option value='23424768'>Brasil</option>
                <option value='23424977'>EUA</option>
                <option value='23424747'>Argentina</option>
                <option value='23424775'>Canada</option>
                <option value='23424782'>Chile</option>
                <option value='23424936'>Russia</option>
                <option value='23424856'>Japão</option>
                <option value='23424848'>India</option>
                <option value='23424919'>Peru</option>
                <option value='23424748'>Austrália</option>              
            </select>      
        </div>
    );
}

export default SearchCountry;