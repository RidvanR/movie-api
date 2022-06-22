import React from 'react';
import {
	Grommet, Card, CardBody, Image, Box,
} from 'grommet';
import './movie.css';
import styled from 'styled-components';
import useSearchMovie from './useSearchMovie';

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280';

function SearchMovies({ query }) {
	const Container = styled(Box)`
		@media (max-width: 1800px) {
			justify-content: center;
		}
	`;

	const { movies } = useSearchMovie({
		method: 'get',
		params: {
			query,
		},
	});

	const setVoteClass = (vote) => {
		if (vote >= 8) {
			return 'green';
		} if (vote >= 6) {
			return 'orange';
		}
		return 'red';
	};

	if (movies) {
		return (
			<Grommet>
				<Container margin={{ top: '20px' }} direction="row" wrap="true" gap="1rem" justify="center">
					{movies?.results.map((movie) => (
						<Card height="500px" width="320px" margin={{ top: '20px' }}>
							<CardBody className="card">
								<Image
									className="img"
									fit="cover"
									src={IMAGE_API + movie.poster_path}
								/>
								<div className="overlay">
									<div className="text">{movie.title}</div>
									<div className={`vote-avg ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</div>
									<div className="release">{movie.release_date}</div>
								</div>
							</CardBody>
						</Card>
					))}
				</Container>

			</Grommet>

		);
	}

	return <span>{query}</span>;
}

export default SearchMovies;
