import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Trends from './components/Trends/Trends';
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import SearchTrends from './components/SearchTrends/SearchTrends';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="container">
        <BsFillChatSquareTextFill className='text-white'/>
        <h2 className="text-white text-center">Tópicos mais comentados do momento</h2>
        <SearchTrends />
        <Trends />
      </main>
    </div>
  );
}

export default App;