import React from 'react';
import {
	Box, Header, Heading, TextInput, Button,
} from 'grommet';
import {
	Github, Instagram,
} from 'grommet-icons';

// eslint-disable-next-line padded-blocks
function HeaderSearch({ searchTerm, onSubmit }) {

	const handleonChange = (e) => {
		onSubmit(e.target.value);
	};

	const handleonSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Header background="neutral-2" justify="around" height="xsmall" wrap="true">
			<Heading color="light-1">Rinox.to</Heading>
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
				<Button href="https://github.com/RidvanR"><Github size="20%" color="accent-3" /></Button>
				<Button href="https://www.instagram.com/ridvan.rul/"><Instagram size="20%" color="accent-3" /></Button>
			</Box>
		</Header>
	);
}

export default HeaderSearch;
