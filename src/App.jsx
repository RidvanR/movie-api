/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './App.css';
import {
	Box, Text, Image, Footer,
} from 'grommet';
import Movie from './components/Movie';
import SearchMovies from './components/SearchMovies';
import HeaderSearch from './components/HeaderSearch';

function App() {
	const [query, setQuery] = useState();
	const [sort, setSort] = useState();

	const handleSubmit = (searchTerm) => {
		setQuery(searchTerm);
	};

	const handleClick = (discover) => {
		setSort(discover);
	};

	return (
		<div className="App">
			<HeaderSearch onSubmit={handleSubmit} onClick={handleClick} />
			<Box width="100%" responsive="true" wrap="true" direction="column" justify="center" margin={{ bottom: '20px' }}>
				{!query ? <Movie sort={sort} /> : <SearchMovies query={query} />}
			</Box>

			<Footer background="dark-2" pad="small" align="center">
				<Text>Created by Ridvan</Text>
				<Box height="xxsmall" width="small" alignContent="center">
					<Image
						fit="contain"
						src="https://react-movie-database-18.netlify.app/static/media/logo.27b65cb4.svg"
					/>
				</Box>
			</Footer>

		</div>
	);
}

export default App;
