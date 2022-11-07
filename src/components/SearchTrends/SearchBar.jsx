import './SearchBar.css'
import { BsSearch } from 'react-icons/bs';

function SearchBar({setSearch, setPageNumber}) {
    return (
        <div className="search-bar mx-auto d-flex my-4">
            <input className="form-control" type="text" placeholder="Search for characters" onChange={e=>{
                setPageNumber(1);
                setSearch(e.target.value);
            }}/>   
            <span className="rounded ms-2"><BsSearch className="align-self-item mt-2"/></span>
        </div>        
    );
}
export default SearchBar;