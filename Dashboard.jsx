import React from 'react';
import Row from '../components/Row/Row';
import { api } from '../api/api';

const Dashboard = () => {
	return (
		<div>
			<Row title='NETFLIX ORIGINALS' fetchUrl={api.fetchNetflixOriginals} isLargeRow />
			<Row title='Trending Now' fetchUrl={api.fetchTrending} />
			<Row title='Action Movies' fetchUrl={api.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={api.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={api.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={api.fetchRomanceMovies} />
			<Row title='Documentries' fetchUrl={api.fetchDocumentries} />
		</div>
	);
};

export default Dashboard;
