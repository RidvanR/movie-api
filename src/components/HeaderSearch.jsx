import React, { useState } from 'react';
import {
	Box, Header, TextInput, Button, Menu, Image,
} from 'grommet';
import {
	Github, Instagram,
} from 'grommet-icons';
// import Movie from './Movie';

// eslint-disable-next-line padded-blocks
function HeaderSearch({ searchTerm, onSubmit, onClick }) {
	const [value, setValue] = useState('');

	const handleonChange = (e) => {
		setValue(e.target.value);
	};

	const handleonSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
	};

	const handleonClick = (e) => {
		onClick(e);
	};

	return (
		<Header background="neutral-3" justify="between" height="xsmall">
			<Box height="xsmall" width="small" alignContent="center" margin={{ left: 'small' }}>
				<Image
					fit="contain"
					src="https://react-movie-database-18.netlify.app/static/media/logo.27b65cb4.svg"
				/>
			</Box>
			<Box direction="row" width="large" pad="small" gap="small" justify="center">
				<Menu
					label="Discover"
					items={[
						{ label: 'Popular', onClick: () => { handleonClick('popularity.desc'); } },
						{ label: 'Release Date', onClick: () => { handleonClick('primary_release_date.desc'); } },
						{ label: 'Highest R rated', onClick: () => { handleonClick('certification_country=US&certification=R&sort_by=vote_average.desc'); } },
					]}
				/>
				<form onSubmit={handleonSubmit}>
					<TextInput
						placeholder="Search"
						responsive="true"
						type="text"
						value={searchTerm}
						onChange={handleonChange}
					/>
				</form>
				<Button href="https://github.com/RidvanR"><Github size="20%" color="#FFAA15" /></Button>
				<Button href="https://www.instagram.com/ridvan.rul/"><Instagram size="20%" color="#FFAA15" /></Button>
			</Box>
			{/* <Movie sort={sort} /> */}
		</Header>
	);
}

export default HeaderSearch;
