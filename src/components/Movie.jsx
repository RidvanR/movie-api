import React, { useState } from 'react';
import {
	Grommet, Card, CardBody, Image, Box, Button, CardHeader,
} from 'grommet';
import './movie.css';
import styled from 'styled-components';
import {
	Favorite, Close,
} from 'grommet-icons';
import useGetMovies from './useGetMovies';

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280';

function Movie({ sort }) {
	const Container = styled(Box)`
		@media (max-width: 1800px) {
			justify-content: center;
		}
	`;

	const { movies } = useGetMovies({
		method: 'get',
		params: {
			sort_by: sort,
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

	const [open, setIsOpen] = useState(false);

	const handleClick = (event) => {
		setIsOpen(!open);
		console.log(event.currentTarget.id);
	};

	const handleonClick = () => {
		setIsOpen(false);
	};

	return (
		<Grommet>
			<Container margin={{ top: '20px' }} direction="row" wrap="true" gap="1rem" justify="center">
				{movies?.results.map((movie) => (
					// eslint-disable-next-line react/jsx-no-duplicate-props
					<Card height="500px" width="320px" margin={{ top: '20px' }}>
						<CardBody className="card" onClick={handleClick} id={movie.id}>
							<Image
								className="img"
								fit="cover"
								src={IMAGE_API + movie.poster_path}
								alt={movie.title}
							/>
							<div className="overlay">
								<div className="text">{movie.title}</div>
								<div className={`vote-avg ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</div>
								<div className="release">{movie.release_date}</div>
								<Button><Favorite /></Button>
							</div>
						</CardBody>
					</Card>
				))}
				{open && (
					<div className="info">
						<Card>
							<CardHeader justify="end">
								<Button><Favorite /></Button>
								<Button onClick={handleonClick} width="small"><Close color="white" /></Button>
							</CardHeader>
						</Card>
					</div>
				)}
			</Container>

		</Grommet>

	);
}

export default Movie;
