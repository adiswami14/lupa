import './App.css';
import SearchBar from './components/SearchBar';
import StockGraph from './components/StockGraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<SearchBar /> */}
        <StockGraph />
      </header>
    </div>
  );
}

export default App;
