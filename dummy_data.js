const DUMMY_EVENTS = [
	{
		id: 'event1',
		title: 'Yogatur til Montenegro',
		description:
			'Hjertelig velkommen med på yogareise 22 - 29 august i Montenegro, Budvas Riviera! 8 dager med yoga og mindfullness, læring, utvikling, mestring, hvile, naturopplevelser og minner for livet!',
		location: 'Somestreet 25, 12345 Budva, Montenegro',
		date: '2023-11-12',
		image: 'images/yoga.jpg',
		isFeatured: false,
	},
	{
		id: 'event2',
		title: 'Kjelsås alpin sportsmesse 2024',
		description:
			'Kjelsås Alpin holder sportsmesse 19-22 oktober i Stadionhallen på Grefsen stadion. Kjøp og salg av nytt og brukt vintersportsutstyr - Topp rådgivning - stort utvalg!',
		location: 'Neptunveien 8-12, 0493 Oslo, Norway',
		date: '2024-10-19',
		image: 'images/ski.jpg',
		isFeatured: false,
	},
	{
		id: 'event3',
		title: 'Cars & Coffee 2023',
		description:
			'Come join us for another season of fun mornings of great cars and amazing coffee at Ekeberg park',
		location: 'Ekebergveien 65, 1181 Oslo, Norway',
		date: '2023-11-10',
		image: 'images/cars_and_coffee.jpg',
		isFeatured: true,
	},
	{
		id: 'event4',
		title: 'Båter i Sjøen 2023',
		description:
			'Med er stort utvalg av båter, båttyper og utstyr er vi sikre på at du finner det du er på jakt etter hos oss! Vi kan også tilby spennende og lærerike aktiviteter for barn og ungdom hos vår samarbeidspartner Sjøakademiet.',
		location: 'Stranden 32, 0250 Oslo, Norway',
		date: '2024-07-05',
		image: 'images/boat_meetup.jpg',
		isFeatured: true,
	},
	{
		id: 'event5',
		title: 'Rudskogen Race Festival',
		description:
			'It is fast approaching the years last action-packed Race Festival at Rudskogen Motorsenter! As always, this weekend will be packed with fierce driving, exciting competitions and action from morning to night. You will have the opportunity to see some of Scandinavias best drivers in racing and drifting give it their all on the track.',
		location: 'Motorsportveien 180, 0234 Rakkestad, Norway',
		date: '2024-03-05',
		image: 'images/gatebil.jpg',
		isFeatured: false,
	},
	{
		id: 'event6',
		title: 'Oslo Short Film Festival 2023',
		description:
			'The Oslo Short Film Festival 2023 is coming on August 31 and September 1 with a multifaceted two-day screening programme of the freshest indie cinema releases. Once again, we set our big screen to the artsy halls of the Sentralen bringing independent cinema to the heart of the Kvadraturen neighbourhood.',
		location: 'Øvre Slottsgate 3, Oslo, Norway',
		date: '2023-11-25',
		image: 'images/kino.jpg',
		isFeatured: true,
	},
	{
		id: 'event7',
		title: 'Loppemarked Ekeberg skole',
		description:
			'Vi tar imot lopper HVER ONSDAG fra klokka 19-20 i kjelleren på Kiwi - parkeringsplassen bak Bogerud senter. Vi begynner allerede onsdag 16.8. og frem til onsdagen før loppemarkedet.',
		location: 'Stamhusveien 79, 1181 Oslo, Norway',
		date: '2023-12-25',
		image: 'images/loppemarked.jpg',
		isFeatured: false,
	},
	{
		id: 'event8',
		title: 'Out of Office',
		description:
			'OUT OF OFFICE - MIXING BUSINESS WITH PLEASURE. Planlegg din neste fartsfylte afterwork med dine kollegaer. Du skanner deg selv inn ved inngangen med OOOAW-appen. Strikt 23-års grense, og alltid gratis inngang.',
		location: 'Nedre Slotsgate 8, Oslo, Norway',
		date: '2024-01-15',
		image: 'images/out_of_office.jpg',
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
