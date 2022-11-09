import './Trends.css';
import Loading from '../../Loading/Loading';

function Trends({fetchedData,search,setSearch}) {        
    var display;
    if (fetchedData) {
      display = fetchedData.map((informations) => {
        if(informations.name.toLowerCase().startsWith(search.toLowerCase()) === true) {                           
            return (
                <li key={informations.name} className="mx-auto">
                    <a href={informations.url} target="_blank" rel="noreferrer noopener" className="trend btn my-3 shadow">
                    {informations.name} <span className="badge rounded-pill text-white">{informations.tweet_volume}</span>
                    </a>
                </li>          
              );
        
          }
      });
    } else {
      display = Loading(); //Dados não carregados
    }
    return <>{display}</>;
};

export default Trends;