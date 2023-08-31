import Link from 'next/link';

import classes from './main_header.module.css';

function MainHeader() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href='/'>Oslo Events</Link>
			</div>
			<nav className={classes.navigation}>
				<ul>
					<li>
						<Link href='/events'>All Events</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainHeader;
