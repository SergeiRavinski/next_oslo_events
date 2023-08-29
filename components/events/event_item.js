import Link from 'next/link';

import classes from './event_item.module.css';

	const readeableDate = new Date(date).toLocaleDateString('en-US', {
		date: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	return (
		<li className={classes.item}>
			<img src={'/' + image} alt={id} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{readeableDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Link href={exploreLink}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
