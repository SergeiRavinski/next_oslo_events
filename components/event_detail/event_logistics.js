import AddressIcon from '../icons/address_icon';
import DateIcon from '../icons/date_icon';
import LogisticsItem from './logistics_item';
import classes from './event_logistics.module.css';

	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const addressText = address.replace(', ', '\n');
