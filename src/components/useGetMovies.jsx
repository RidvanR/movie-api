import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetMovies() {
	const [movies, setMovies] = useState();
	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021',
			params: {
				api_key: '7e8e9b1b8517251cd6b7aa61e0d98b61',
			},
		}).then((response) => {
			setMovies(response.data);
		});
	}, []);
	return { movies };
}
export default useGetMovies;
