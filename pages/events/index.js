import { getAllEvents } from '../../dummy_data';

import EventList from '../../components/events/event_list';

function AllEventsPage() {
	const events = getAllEvents();

	return (
		<div>
			<h1>All Events</h1>
		</div>
	);
}

export default AllEventsPage;
