import React, { useState } from 'react';
import {
	Box, Header, Heading, TextInput, Button,
} from 'grommet';
import {
	Github, Instagram,
} from 'grommet-icons';
import sendMovies from './getMovies';
import Movie from 

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7e8e9b1b8517251cd6b7aa61e0d98b61&query=';

function header() {
	const [searchTerm, setSearchTerm] = useState();
	const handleonSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			sendMovies(SEARCH_API + searchTerm);
		}
	};
	sendMovies(SEARCH_API + searchTerm, (res) => {
		
	});

	const handleonChange = (e) => {
		setSearchTerm(e.target.value);
	};
	return (
		<Header background="dark-1" justify="around" height="xsmall" wrap="true">
			<Heading color="light-6">Rinox.to</Heading>
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
				<Button href="https://github.com/RidvanR"><Github size="20%" color="light-6" /></Button>
				<Button href="https://www.instagram.com/ridvan.rul/"><Instagram size="20%" color="light-6" /></Button>
			</Box>
		</Header>
	);
}

export default header;
