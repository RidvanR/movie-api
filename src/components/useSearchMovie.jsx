import { useEffect } from 'react';
import axios from 'axios';

function useSearchMovie({ query, callBack }) {
	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://api.themoviedb.org/3/search/movie',
			params: {
				api_key: '7e8e9b1b8517251cd6b7aa61e0d98b61',
				query,
			},
		}).then((response) => {
			callBack(response.data);
		});
		console.log(query);
	}, []);
}

export default useSearchMovie;
