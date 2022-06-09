import React from "react";

export default function CardItem({ name, email, source }) {
    

    return (
		<div className="card-container">
			<img alt={`monster ${name}`} src={source} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}
