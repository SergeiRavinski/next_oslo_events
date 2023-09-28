import { getFeaturedEvents } from '../dummy_data';
import EventList from '../components/events/event_list';

function HomePage(props) {
	return (
		<div>
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
	};
}

export default HomePage;
