import { Fragment } from 'react';

import { getEventById, getAllEvents } from '../../helpers/api_util';
import EventSummary from '../../components/event_detail/event_summary';
import EventLogistics from '../../components/event_detail/event_logistics';
import EventContent from '../../components/event_detail/event_content';
import ErrorAlert from '../../components/ui/error_alert';

function EventDetailPage(props) {
	const event = props.selectedEvent;

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

export async function getStaticProps(context) {
	const eventId = context.params.event_id;
	const event = await getEventById(eventId);

	return {
		props: {
			selectedEvent: event,
		},
		revalidate: 30,
	};
}

export async function getStaticPaths() {
	const events = await getAllEvents();
	const paths = events.map((event) => ({ params: { event_id: event.id } }));

	return {
		paths: paths,
		fallback: 'blocking',
	};
}

export default EventDetailPage;
