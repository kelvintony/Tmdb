import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { api_key } from '../../api/api';

const base_URL = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [ movies, setMovies ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(`${api_key.react_api_Url}${fetchUrl}`);
				setMovies(response.data.results);

				setLoading(false);
				// return response;
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	// console.log(movies);

	return (
		<div className='movie-container'>
			{loading && <h1>loading...</h1>}

			{!loading &&
				movies.map((movie) => (
					<div key={movie.id} className='box-1'>
						<img
							src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
							alt='movie.name'
						/>
						<h5>movie Id: {movie.id}</h5>
						<h5>movie title: {movie.title}</h5>
						<p>moview overview: {movie.overview}</p>
					</div>
				))}
		</div>
	);
};

export default Row;
