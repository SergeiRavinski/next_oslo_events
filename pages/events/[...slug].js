import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy_data';
import EventList from '../../components/events/event_list';
import ResultsTitle from '../../components/events/results_title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error_alert';

function FilteredEventsPage() {
	return (
		<div>
			<h1>Filtered Events</h1>
		</div>
	);
}

export default FilteredEventsPage;
