import './SearchTrends.css'
import SearchBar from './SearchBar';
import SearchCountry from './SearchCountry';

function SearchTrends({setSearch,setWoeid}) {
    return (
        <section className="search mx-auto mb-4">   
            <div className="search-trends d-flex align-items-center">
                <SearchBar setSearch={setSearch} />
                <SearchCountry setWoeid={setWoeid} />
            </div>
        </section>
    );
}

export default SearchTrends;