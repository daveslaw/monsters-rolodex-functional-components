import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
	console.log("render");
	const [searchInput, setSearchInput] = useState("");
	const [monsters, setMonsters] = useState([]);
	console.log(searchInput);

	const handleSearch = (event) => {
		setSearchInput(event.target.value.toLocaleLowerCase());
	};

	// console.log('render');

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	const filteredMonsters = monsters.filter((monster) => {
		return monster.name.toLocaleLowerCase().includes(searchInput);
	});

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
