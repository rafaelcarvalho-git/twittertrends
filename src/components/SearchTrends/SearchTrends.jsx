import './SearchTrends.css'
import SearchBar from './SearchBar';
import SearchCountry from './SearchCountry';

function SearchTrends() {
    return (
<section className="search-trends d-flex align-items-center mx-auto bg-info">
    <SearchBar />
    <SearchCountry />
</section>
    );
}

export default SearchTrends;