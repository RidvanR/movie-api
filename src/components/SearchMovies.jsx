import React, { useState } from 'react';
import {
	Grommet, Card, CardBody, Image, Box,
} from 'grommet';
import './movie.css';
import styled from 'styled-components';
import useSearchMovies from './useSearchMovie';

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280';

function SearchMovies({ query }) {
	const [movies, setMovies] = useState();
	const Container = styled(Box)`
		@media (max-width: 1800px) {
			justify-content: center;
		}
	`;

	useSearchMovies({
		method: 'get',
		params: {
			// eslint-disable-next-line object-shorthand
			query: query,
		},
	}, setMovies);

	if (movies) {
		return (
			<Grommet>
				<Container margin={{ top: '20px' }} direction="row" wrap="true" gap="1rem" justify="center">
					{movies?.results.map((movie) => (
						<Card height="500px" width="320px" margin={{ top: '20px' }}>
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

	return <span>loading</span>;
}

export default SearchMovies;
