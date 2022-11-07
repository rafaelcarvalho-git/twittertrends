import './SearchTrends.css'
import SearchBar from './SearchBar';
import SearchCountry from './SearchCountry';

function SearchTrends() {
    return (
        <section className="search mx-auto mb-4">   
            <div className="search-trends d-flex align-items-center">
                <SearchBar />
                <SearchCountry />
            </div>
        </section>
    );
}

export default SearchTrends;