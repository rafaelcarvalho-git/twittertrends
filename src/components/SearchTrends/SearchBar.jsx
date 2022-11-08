import './SearchBar.css'

function SearchBar({setSearch}) {
    return (
        <div className="search-bar mx-auto d-flex my-4">            
            <input className="form-control" type="text" placeholder="Nome da trend" onChange={e=>{
                setSearch(e.target.value);
            }}/>   
        </div>        
    );
}
export default SearchBar;