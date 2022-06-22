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
		<Header background="neutral-2" justify="around" height="xsmall" wrap="true">
			<Box height="xxsmall" width="small" alignContent="center">
				<Image
					fit="contain"
					src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
				/>
			</Box>
			<Box direction="row" width="large" pad="medium" gap="small">
				<Menu
					label="Discover"
					items={[
						{ label: 'Popular', onClick: () => { handleonClick('popularity.desc'); } },
						{ label: 'Release Date', onClick: () => { handleonClick('primary_release_date.desc'); } },
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
				<Button href="https://github.com/RidvanR"><Github size="20%" color="accent-3" /></Button>
				<Button href="https://www.instagram.com/ridvan.rul/"><Instagram size="20%" color="accent-3" /></Button>
			</Box>
			{/* <Movie sort={sort} /> */}
		</Header>
	);
}

export default HeaderSearch;
