import { getFeaturedEvents } from '../dummy_data';
import EventList from '../components/events/event_list';

function HomePage() {
	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}

export default HomePage;
