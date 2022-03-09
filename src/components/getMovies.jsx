import { useState, useEffect } from 'react';
import axios from 'axios';
// umbauen mit axios
function getMovies(link) {
	const [movies, setMovies] = useState();
	// Callback
	useEffect(() => {
		axios({
			method: 'get',
			url: link,
			params: {
				api_key: '7e8e9b1b8517251cd6b7aa61e0d98b61',
			},
		}).then((response) => {
			setMovies(response.data);
		});
	}, [link]);
	// return fällt weg
	// return [movies];
}

export default getMovies;
