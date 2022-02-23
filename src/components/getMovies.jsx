import { useState, useEffect } from 'react';
// umbauen mit axios
function getMovies(url) {
	const [movies, setMovies] = useState();

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMovies(data));
	}, []);

	return [movies];
}

export default getMovies;
