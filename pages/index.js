import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api_util';
import EventList from '../components/events/event_list';

function HomePage(props) {
	return (
		<div>
			<Head>
				<title>Oslo Events</title>
				<meta
					name='description'
					content='Find a lot of great events in Oslo'
				/>
			</Head>
			<EventList items={props.events} />
		</div>
	);
}

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			events: featuredEvents,
		},
		revalidate: 1800,
	};
}

export default HomePage;
