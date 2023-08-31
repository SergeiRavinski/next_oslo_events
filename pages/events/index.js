import { Fragment } from 'react';

import { getAllEvents } from '../../dummy_data';

import EventList from '../../components/events/event_list';

function AllEventsPage() {
	const events = getAllEvents();

	return (
		<Fragment>
			<EventList items={events} />
		</Fragment>
	);
}

export default AllEventsPage;
