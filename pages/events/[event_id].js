import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy_data';
function EventDetailPage() {
	const router = useRouter();
	if (!event) {
		return <p>No Event Found!</p>;
	}

	return (
		<div>
			<h1>Event Detail</h1>
		</div>
	);
}

export default EventDetailPage;
