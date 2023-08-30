import Button from '../ui/button';
import classes from './event_item.module.css';
import DateIcon from '../icons/date_icon';
import AddressIcon from '../icons/address_icon';

function EventItem(props) {
	const { title, image, date, location, id } = props;
	const readeableDate = new Date(date).toLocaleDateString('en-US', {
		date: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location.replace(',', '\n');
	const exploreLink = `/events/${id}`;

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
