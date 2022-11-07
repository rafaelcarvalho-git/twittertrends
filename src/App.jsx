import React, {Component} from 'react';
import api from './api';

class App extends Component{

  state = {
    nomes: [],
  }

  async componentDidMount(){
    const response = await api.get('')

console.log(response.data);

    this.setState({nomes: response.data});
  }

  render(){

    const {nomes} = this.state;

    return(
      <div>
        <h1>teste</h1>
        {nomes.map(nomes=>(
          <li key={nomes.name}>
            <h2>{nomes.name}</h2>
          </li>
        ))}
      </div>
    );
  };
};

export default App;