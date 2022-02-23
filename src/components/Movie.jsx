import React from 'react';
import {
	Grommet, Card, CardBody, Image, Box,
} from 'grommet';
import './movie.css';
import getMovies from './getMovies';

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280';
const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=7e8e9b1b8517251cd6b7aa61e0d98b61';
// AXIOS ABFRAGE STELLEN hier handle ich die Suchanfragen von header und movie

function Movie() {
	const [movies] = getMovies(FEATURED_API);
	// console.log(movies);
	return (
		<Grommet>
			<Box margin={{ top: '20px' }} direction="row" wrap="true" gap="1rem" justify="center">
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
			</Box>

		</Grommet>

	);
}

export default Movie;
