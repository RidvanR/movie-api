import React, { useEffect, useState } from 'react';
import {
	Grommet, Card, CardBody, Image, Box,
} from 'grommet';
import './movie.css';
import styled from 'styled-components';
import getMovies from './getMovies';

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280';
const DEFAULT_API = 'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021';

function Movie() {
	const Container = styled(Box)`
		@media (max-width: 1800px) {
			justify-content: center;
		}
	`;

	const [currentLink, setCurrentLink] = useState();

	useEffect(() => {
		setCurrentLink(DEFAULT_API);
	}, []);
	const [movies] = getMovies(currentLink);
	return (
		<Grommet>
			<Container margin={{ top: '20px' }} direction="row" wrap="true" gap="1rem">
				{movies?.results.map((movie) => (
					<Card height="500px" width="300px" margin={{ top: '20px' }}>
						<CardBody>
							<Image
								className="img"
								fit="cover"
								src={IMAGE_API + movie.poster_path}
							/>
						</CardBody>
					</Card>
				))}
			</Container>

		</Grommet>

	);
}

export default Movie;
