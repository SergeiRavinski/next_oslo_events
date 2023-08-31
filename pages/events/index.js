import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy_data';
import EventList from '../../components/events/event_list';
import EventsSearch from '../../components/events/event_search';

function AllEventsPage() {
	const router = useRouter();
	const events = getAllEvents();

	return (
		<Fragment>
			<EventsSearch />
			<EventList items={events} />
		</Fragment>
	);
}

export default AllEventsPage;
