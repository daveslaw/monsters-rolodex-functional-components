import React from "react";
import "./search-box.styles.css";

export default function SearchBox({ handleSearch, placeholder, className }) {
	return (
		<div>
			<input
				className={`search-box ${className}`}
				type="search"
				onChange={handleSearch}
				placeholder={placeholder}
			/>
		</div>
	);
}
