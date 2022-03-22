import React, { useState } from 'react';
import Films from './Components/Films';
import People from './Components/People';

const App = () => {
	let [filmsLoaded, setFilmsLoaded] = useState(false);
	let [peopleLoaded, setPeopleLoaded] = useState(false);

	let showFilms = () => {
		setPeopleLoaded(false);
		setFilmsLoaded(true);
	};

	let showPeople = () => {
		setFilmsLoaded(false);
		setPeopleLoaded(true);
	};

	if (filmsLoaded == true) {
		return (
			<>
				<div className='d-flex justify-content-center align-items-center m-4 flex-column'>
					<h1>Welcome To Ghibli API Lab</h1>
					<div>
						<button
							className='btn btn-primary m-4'
							onClick={showFilms}
						>
							Films
						</button>
						<button
							className='btn btn-primary m-4'
							onClick={showPeople}
						>
							People
						</button>
					</div>
				</div>
				<div className='container d-flex flex-column justify-content-center align-items-center'>
					<Films />
				</div>
			</>
		);
	} else if (peopleLoaded == true) {
		return (
			<>
				<div className='d-flex justify-content-center align-items-center m-4 flex-column'>
					<h1>Welcome To Ghibli API Lab</h1>
					<div>
						<button
							className='btn btn-primary m-4'
							onClick={showFilms}
						>
							Films
						</button>
						<button
							className='btn btn-primary m-4'
							onClick={showPeople}
						>
							People
						</button>
					</div>
				</div>
				<div className='container d-flex flex-column justify-content-center align-items-center'>
					<People />
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className='d-flex justify-content-center align-items-center m-4 flex-column'>
					<h1>Welcome To Ghibli API Lab</h1>
					<div>
						<button
							className='btn btn-primary m-4'
							onClick={showFilms}
						>
							Films
						</button>
						<button
							className='btn btn-primary m-4'
							onClick={showPeople}
						>
							People
						</button>
					</div>
					<h1>This is the Home Page</h1>
				</div>
			</>
		);
	}
};

export default App;
