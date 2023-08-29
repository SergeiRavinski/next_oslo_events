import EventItem from './event_item';

import classes from './event_list.module.css';

	return (
		<ul className={classes.list}>
			{items.map((event) => (
				<EventItem
					key={event.id}
					id={event.id}
					title={event.titile}
					location={event.location}
					date={event.date}
					image={event.image}
				/>
			))}
		</ul>
	);
