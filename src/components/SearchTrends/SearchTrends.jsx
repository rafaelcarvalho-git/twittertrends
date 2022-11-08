import './SearchTrends.css'
import SearchBar from './SearchBar';
import SearchCountry from './SearchCountry';

function SearchTrends({setSearch,setWoeid}) {
    return (
        <section className="search-trends d-flex mx-auto my-4">             
            <SearchBar setSearch={setSearch} />
            <SearchCountry setWoeid={setWoeid} />          
        </section>
    );
}

export default SearchTrends;