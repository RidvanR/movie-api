import React from 'react';
import './App.css';
import {
	Box,
} from 'grommet';
import Movie from './components/Movie';
import Header from './components/header';

function App() {
	return (
		<div className="App">
			<Header />
			<Box width="100%" responsive="true" wrap="true" direction="column">
				<Movie />
			</Box>

		</div>
	);
}

export default App;
