import React from "react";
import './search-box.styles.css';

export default function SearchBox({ handleSearch, placeholder, className }) {
	return (
		<div className={`search-box ${className}`}>
			<input type="search" onChange={handleSearch} placeholder={placeholder} />
		</div>
	);
}
