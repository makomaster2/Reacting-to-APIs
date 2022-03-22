import React, { useEffect, useState } from 'react';

const People = () => {
	let [people, setPeople] = useState([]);

	useEffect(() => {
		fetch('https://ghibliapi.herokuapp.com/people')
			.then(people => people.json())
			.then(people => setPeople(people))
			.catch(err => console.log(err));
	});

	return (
		<>
			{people.map(person => (
				<div
					className='card w-25 d-flex justify-content-center align-items-center text-center'
					key={person.id}
				>
					<div className='card-body'>
						<h5 className='card-title'>{person.name}</h5>
						<h6 className='card-subtitle mb-2 text-muted'>
							{person.gender}
						</h6>
						<p className='card-text'>{person.age}</p>
						<a href={person.url} className='card-link'>
							Read More
						</a>
					</div>
				</div>
			))}
		</>
	);
};

export default People;
