import React, { useState } from 'react';
import './App.css';
import {
	Box,
} from 'grommet';
import Movie from './components/Movie';
import SearchMovies from './components/SearchMovies';
import HeaderSearch from './components/HeaderSearch';

function App() {
	const [query, setQuery] = useState();
	const handleSubmit = (searchTerm) => {
		setQuery(searchTerm);
	};
	return (
		<div className="App">
			<HeaderSearch onSubmit={handleSubmit} />
			<Box width="100%" responsive="true" wrap="true" direction="column" justify="center">
				{!query ? <Movie /> : <SearchMovies query={query} />}
			</Box>

		</div>
	);
}

export default App;
