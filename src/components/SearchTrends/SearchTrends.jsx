import './SearchTrends.css'
import SearchBar from './SearchBar';
import SearchCountry from './SearchCountry';

function SearchTrends() {
    return (
        <section className="search mx-auto bg-info">   
            <h5 className="text-center text-white py-0 my-0">Pesquisar trends</h5>
            <div className="search-trends d-flex align-items-center">
                <SearchBar />
                <SearchCountry />
            </div>
        </section>
    );
}

export default SearchTrends;