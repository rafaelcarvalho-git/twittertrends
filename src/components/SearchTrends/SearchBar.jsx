import './SearchBar.css'

function SearchBar({setSearch}) {
    return (
        <div className="search-bar mx-auto mb-3">            
            <input className="form-control mx-auto" type="text" placeholder="Nome da trend" onChange={e=>{
                setSearch(e.target.value);
            }}/>   
        </div>        
    );
}
export default SearchBar;