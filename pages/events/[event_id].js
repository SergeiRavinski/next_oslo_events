import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById, getAllEvents } from '../../helpers/api_util';
import EventSummary from '../../components/event_detail/event_summary';
import EventLogistics from '../../components/event_detail/event_logistics';
import EventContent from '../../components/event_detail/event_content';
import ErrorAlert from '../../components/ui/error_alert';

function EventDetailPage() {
	const router = useRouter();
	const eventId = router.query.event_id;
	const event = getEventById(eventId);

	if (!event) {
		return (
			<ErrorAlert>
				<p>No Event Found!</p>
			</ErrorAlert>
		);
	}

	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
}

export default EventDetailPage;
