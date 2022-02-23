import React, { useState } from 'react';
import {
	Box, Header, Heading, TextInput,
} from 'grommet';
import getMovies from './getMovies';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7e8e9b1b8517251cd6b7aa61e0d98b61&query=';

function header() {
	const [searchTerm, setSearchTerm] = useState('');
	const handleonSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			getMovies(SEARCH_API + searchTerm);
			setSearchTerm('');
		}
	};

	// SearchTerm + searchAPI nach Movie bringen und da die Abfrage stellen

	const handleonChange = (e) => {
		setSearchTerm(e.target.value);
	};
	return (
		<Header background="dark-1" justify="around" height="xsmall">
			<Heading color="status-critical" size="4rem">Rinox.to</Heading>
			<Box direction="row" width="medium" pad="medium" gap="small">
				<form onSubmit={handleonSubmit}>
					<TextInput
						placeholder="Search"
						responsive="true"
						type="text"
						value={searchTerm}
						onChange={handleonChange}
					/>
				</form>
			</Box>
		</Header>
	);
}

export default header;
