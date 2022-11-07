function SearchCountry() {
    return (
        <div className='menu d-flex'>
        <select className="form-control" name='trending-place' /*onChange={e => setWoeid(e.target.value)}*/>
          <option value='1'>Worldwide</option>
          <option value='23424848'>India</option>
          <option value='2459115'>New York,US</option>
          <option value='2442047'>Los Angeles,US</option>
          <option value='2295411'>Mumbai</option>
          <option value='1105779'>Sydney,AU</option>
        </select>
        <div className='location' /*onClick={handleLocation}*/>
          X
        </div>
        </div>
    );
}

export default SearchCountry;