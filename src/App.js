import "./App.css";
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox'

function App() {
	return (
		<div className="App">
			<h2 className="app-title">Monsters Rolodex</h2>
			<SearchBox
				className="monsters-search-box"
				placeholder="search monsters"
				// handleSearch={handleSearch}
			/>
			<CardList 
      // monsters={filteredMonsters} 
      />
		</div>
	);
}

export default App;
