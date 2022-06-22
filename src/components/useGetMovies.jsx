import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetMovies(sort) {
	const [movies, setMovies] = useState();
	const result = sort.params.sort_by;
	console.log(result);
	useEffect(() => {
		axios({
			method: 'get',
			url: 'discover/movie',
			baseURL: 'https://api.themoviedb.org/3',
			params: {
				api_key: '7e8e9b1b8517251cd6b7aa61e0d98b61',
				sort_by: result,
			},
		}).then((response) => {
			setMovies(response.data);
		});
	}, [result]);
	return { movies };
}
export default useGetMovies;
