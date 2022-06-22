import { useEffect, useState } from 'react';
import axios from 'axios';

function useSearchMovie(query) {
	const [movies, setMovies] = useState();
	const result = query.params.query;
	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://api.themoviedb.org/3/search/movie',
			params: {
				api_key: '7e8e9b1b8517251cd6b7aa61e0d98b61',
				query: result,
			},
		}).then((response) => {
			setMovies(response.data);
		});
	}, [result]);
	return { movies };
}

export default useSearchMovie;
