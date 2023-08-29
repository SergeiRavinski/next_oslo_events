const DUMMY_EVENTS = [
	{
		id: 'e1',
		title: 'Yogatur til Montenegro',
		description:
			'Hjertelig VELKOMMEN med på yogareise 22 - 29 august i Montenegro, Budvas Riviera! 8 dager med yoga og mindfullness, læring, utvikling, mestring, hvile, naturopplevelser og minner for livet!',
		location: 'Somestreet 25, 12345 Budva',
		date: '2023-11-12',
		image: 'images/yoga.jpg',
		isFeatured: false,
	},
	{
		id: 'e2',
		title: 'Kjelsås alpin sportsmesse 2023',
		description:
			'Kjelsås Alpin holder sportsmesse 19-22 oktober i Stadionhallen på Grefsen stadion. Kjøp og salg av nytt og brukt vintersportsutstyr - Topp rådgivning - stort utvalg!',
		location: 'Neptunveien 8-12, 0493 Oslo',
		date: '2023-10-19',
		image: 'images/ski_messe.jpg',
		isFeatured: true,
	},
	{
		id: 'e3',
		title: 'Cars & Coffee 2023',
		description:
			'Come join us for another season of fun mornings of great cars and amazing coffee at Ekeberg park',
		location: 'Ekebergveien 65, 1181 Oslo',
		date: '2023-11-10',
		image: 'images/cars_and_coffee.jpg',
		isFeatured: true,
	},
];

export function getFeaturedEvents() {
	return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
	return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;

	let filteredEvents = DUMMY_EVENTS.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year &&
			eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export function getEventById(id) {
	return DUMMY_EVENTS.find((event) => event.id === id);
}
