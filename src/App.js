import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
	console.log("render");
	
	const [searchInput, setSearchInput] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	const handleSearch = (event) => {
		setSearchInput(event.target.value.toLocaleLowerCase());
	};


	useEffect(() => {
		console.log('effect is firing');
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		console.log('effect is firing');

		setFilteredMonsters(monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchInput);
		}))
	}, [monsters, searchInput]);

	

	return (
		<div className="App">
			<h2 className="app-title">Monsters Rolodex</h2>
			<SearchBox
				className="monsters-search-box"
				placeholder="search monsters"
				handleSearch={handleSearch}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
}

export default App;
