import { Fragment } from 'react';
import Head from 'next/head';

import { getEventById, getFeaturedEvents } from '../../helpers/api_util';
import EventSummary from '../../components/event_detail/event_summary';
import EventLogistics from '../../components/event_detail/event_logistics';
import EventContent from '../../components/event_detail/event_content';
import ErrorAlert from '../../components/ui/error_alert';

function EventDetailPage(props) {
	const event = props.selectedEvent;

	if (!event) {
		return (
			<div className='center'>
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<Fragment>
			<Head>
				<title>{event.title}</title>
				<meta name='description' content={event.description} />
			</Head>
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
	const events = await getFeaturedEvents();
	const paths = events.map((event) => ({ params: { event_id: event.id } }));

	return {
		paths: paths,
		fallback: 'blocking',
	};
}

export default EventDetailPage;
