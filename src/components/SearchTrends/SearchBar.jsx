import './SearchBar.css'

function SearchBar({setSearch, setPageNumber}) {
    return (
        <div className="search-bar mx-auto d-flex my-4">            
            <input className="form-control" type="text" placeholder="Nome da trend" onChange={e=>{
                setPageNumber(1);
                setSearch(e.target.value);
            }}/>   
        </div>        
    );
}
export default SearchBar;